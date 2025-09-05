"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface SequenceImage {
  src: string;
  alt?: string;
}

type Shape = "rect" | "polygon" | "circle";

/** Percent-based hotspot (relative to sticky viewport) */
interface ClickArea {
  name: string;
  shape: Shape;
  /**
   * Percent coords (0..100):
   * - rect:   [left%, top%, width%, height%]
   * - circle: [cx%, cy%, r%]
   * - polygon:[x1%, y1%, x2%, y2%, ..., xn%, yn%]
   */
  coords: number[];
  debug?: boolean;
}

/** Intrinsic-pixel hotspot (image native coordinate system) */
interface ClickAreaPx {
  name: string;
  shape: Shape;
  /** Pixel coords in the source image space (e.g., HTML <area> coords) */
  coords: number[];
  debug?: boolean;

  /** Region effect configuration when this hotspot is clicked */
  effect?: RegionEffect;
}

interface IntrinsicSize {
  width: number;
  height: number;
}

/** Overlay + optional foreground background and content card */
interface RegionEffect {
  overlaySide: "left" | "right";
  overlayColor?: string;      // default: "rgb(31 41 55 / 0.80)"
  overlayOpacity?: number;    // default: 0.8 (ignored if overlayColor includes alpha)
  bgImage?: {
    src: string;
    alt?: string;
    fadeMs?: number;          // default: EFFECT_FADE_MS
  };
  autoClearMs?: number;       // optional auto-clear
  /** Content card rendered centered inside the overlay half */
  content?: {
    image?: { src: string; alt?: string; width?: number; height?: number };
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    /** Optional hover preview image to preload */
    newBackgroundImage?: string;
  };
}

type PreloadStrategy = "mount" | "near-last" | "both" | "none";

interface ScrollImageSequenceProps {
  images: SequenceImage[];
  className?: string;
  endBufferScreens?: number;
  offsetTop?: number;
  offsetElementId?: string;
  verticalAnchorPercent?: number;
  introFadeScreens?: number;

  lastImageAreas?: ClickArea[];      // legacy percent hotspots
  lastImageAreasPx?: ClickAreaPx[];  // preferred pixel hotspots
  intrinsicSize?: IntrinsicSize;

  defaultEffect?: RegionEffect | null;

  preloadStrategy?: PreloadStrategy; // default "both"
  nearLastThreshold?: number;        // default 2 frames from end
}

const FRAME_FADE_MS = 400;
const EFFECT_FADE_MS = 300;

const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({
  images,
  className,
  endBufferScreens = 1,
  offsetTop,
  offsetElementId = "main-header",
  verticalAnchorPercent = 30,
  introFadeScreens = 1,
  lastImageAreas = [],
  lastImageAreasPx = [],
  intrinsicSize,
  defaultEffect = null,
  preloadStrategy = "both",
  nearLastThreshold = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Header measurement
  const [headerOffset, setHeaderOffset] = useState<number>(offsetTop ?? 0);
  const visibleHRef = useRef<number>(0);

  // Frame crossfade
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const pendingIndexRef = useRef<number | null>(null);
  const [displayed, setDisplayed] = useState<number[]>([0]);
  const [opacities, setOpacities] = useState<Record<number, number>>({ 0: 1 });
  const [loaded, setLoaded] = useState<Record<number, boolean>>({ 0: true });
  const loadedRef = useRef<Record<number, boolean>>({ 0: true });
  const fadeTimeoutRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  // Intro black
  const [introBlackOpacity, setIntroBlackOpacity] = useState(1);

  // Hotspots computed (pixels -> percents)
  const [computedLastAreas, setComputedLastAreas] = useState<ClickArea[]>([]);

  // Effect state
  const [activeEffect, setActiveEffect] = useState<RegionEffect | null>(defaultEffect);
  const [activeEffectName, setActiveEffectName] = useState<string | null>(null);
  const [effectOpacity, setEffectOpacity] = useState(0);
  const autoClearTimerRef = useRef<number | null>(null);

  // Preload cache
  const preloadedSrcsRef = useRef<Set<string>>(new Set());
  const allEffectSrcsRef = useRef<string[]>([]);

  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { pendingIndexRef.current = pendingIndex; }, [pendingIndex]);
  useEffect(() => { loadedRef.current = loaded; }, [loaded]);

  // Measure header unless provided
  useLayoutEffect(() => {
    if (typeof offsetTop === "number") {
      setHeaderOffset(offsetTop);
      return;
    }
    const el = document.getElementById(offsetElementId);
    if (!el) {
      setHeaderOffset(0);
      return;
    }
    const update = () => setHeaderOffset(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    const onResize = () => update();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [offsetTop, offsetElementId]);

  // Compute scroll height
  const recomputeHeights = useCallback(() => {
    const vh = window.innerHeight;
    const visibleH = Math.max(0, vh - headerOffset);
    visibleHRef.current = visibleH;

    const totalSections = Math.max(1, images.length + Math.max(0, endBufferScreens));
    const totalPx = visibleH * totalSections;
    const c = containerRef.current;
    if (c) c.style.height = `${totalPx}px`;
  }, [headerOffset, images.length, endBufferScreens]);

  useEffect(() => { recomputeHeights(); }, [recomputeHeights]);

  useEffect(() => {
    const onResize = () => recomputeHeights();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [recomputeHeights]);

  // Preload next frame
  useEffect(() => {
    const next = Math.min(currentIndex + 1, images.length - 1);
    if (!loadedRef.current[next]) {
      const img = new window.Image();
      img.src = images[next].src;
      img.decoding = "async";
      img.onload = () => setLoaded((m) => ({ ...m, [next]: true }));
    }
  }, [currentIndex, images]);

  const startCrossfade = useCallback((toIndex: number) => {
    setDisplayed([currentIndexRef.current, toIndex]);
    setOpacities({ [currentIndexRef.current]: 1, [toIndex]: 0 });
    requestAnimationFrame(() => {
      setOpacities({ [currentIndexRef.current]: 0, [toIndex]: 1 });
    });
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(toIndex);
      setDisplayed([toIndex]);
      setOpacities({ [toIndex]: 1 });
      setPendingIndex(null);
    }, FRAME_FADE_MS);
  }, []);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const c = containerRef.current;
      if (!c) return;

      const sectionH = visibleHRef.current || (window.innerHeight - headerOffset);
      if (sectionH <= 0) return;

      const totalSections = Math.max(1, images.length + Math.max(0, endBufferScreens));
      const totalHeight = sectionH * totalSections;

      const scrollTop = window.scrollY - c.offsetTop;

      // intro fade
      const fadeRange = Math.max(1, sectionH * introFadeScreens);
      const introProgress = Math.min(Math.max(scrollTop / fadeRange, 0), 1);
      setIntroBlackOpacity(1 - introProgress);

      // frame targeting
      const progress = Math.min(Math.max(scrollTop / totalHeight, 0), 1);
      const targetSection = Math.floor(progress * totalSections);
      const targetIndex = Math.min(images.length - 1, Math.max(0, targetSection));

      const curr = currentIndexRef.current;
      const pend = pendingIndexRef.current;
      if (targetIndex === curr || targetIndex === pend) return;

      setPendingIndex(targetIndex);
      setDisplayed([curr, targetIndex]);
      setOpacities((o) => ({ ...o, [curr]: 1, [targetIndex]: 0 }));
      if (loadedRef.current[targetIndex]) startCrossfade(targetIndex);
    });
  }, [images.length, endBufferScreens, headerOffset, introFadeScreens, startCrossfade]);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      if (autoClearTimerRef.current) window.clearTimeout(autoClearTimerRef.current);
    };
  }, []);

  const handleLoaded = useCallback(
    (idx: number) => {
      setLoaded((m) => ({ ...m, [idx]: true }));
      if (idx === pendingIndexRef.current) startCrossfade(idx);
    },
    [startCrossfade]
  );

  const objectPosition = `50% ${verticalAnchorPercent}%`;
  const isLastActive = currentIndex === images.length - 1 && pendingIndex === null;

  // Helpers
  const rectStyleFrom = (coords: number[]) => {
    const [l, t, w, h] = coords;
    return { left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` } as React.CSSProperties;
  };

  const clipPathFrom = (shape: Shape, coords: number[]) => {
    if (shape === "polygon") {
      const pts: string[] = [];
      for (let i = 0; i < coords.length; i += 2) pts.push(`${coords[i]}% ${coords[i + 1]}%`);
      return `polygon(${pts.join(",")})`;
    }
    if (shape === "circle") {
      const [cx, cy, r] = coords;
      return `circle(${r}% at ${cx}% ${cy}%)`;
    }
    return undefined;
  };

  function mapIntrinsicToViewportPercent(
    shape: Shape,
    coordsPx: number[],
    containerW: number,
    containerH: number,
    intrinsicW: number,
    intrinsicH: number,
    objectPosX = 0.5,
    objectPosY = verticalAnchorPercent / 100
  ): number[] {
    const scale = Math.max(containerW / intrinsicW, containerH / intrinsicH);
    const renderedW = intrinsicW * scale;
    const renderedH = intrinsicH * scale;
    const offsetX = (containerW - renderedW) * objectPosX;
    const offsetY = (containerH - renderedH) * objectPosY;

    const out: number[] = [];
    if (shape === "circle") {
      const [cx, cy, r] = coordsPx;
      const cxC = cx * scale + offsetX;
      const cyC = cy * scale + offsetY;
      const rC = r * scale;
      out.push((cxC / containerW) * 100, (cyC / containerH) * 100, (rC / Math.max(containerW, containerH)) * 100);
      return out;
    }
    for (let i = 0; i < coordsPx.length; i += 2) {
      const x = coordsPx[i], y = coordsPx[i + 1];
      const xC = x * scale + offsetX;
      const yC = y * scale + offsetY;
      out.push((xC / containerW) * 100, (yC / containerH) * 100);
    }
    return out;
  }

  // Compute hotspots
  const recomputeAreas = useCallback(() => {
    const c = containerRef.current;
    if (!c) { setComputedLastAreas([]); return; }
    const hasPx = intrinsicSize && lastImageAreasPx && lastImageAreasPx.length > 0;
    if (!hasPx) { setComputedLastAreas([]); return; }

    const containerW = c.clientWidth;
    const containerH = Math.max(0, window.innerHeight - headerOffset);

    const mapped = lastImageAreasPx.map<ClickArea>((a) => ({
      name: a.name,
      shape: a.shape,
      coords: mapIntrinsicToViewportPercent(
        a.shape, a.coords, containerW, containerH, intrinsicSize!.width, intrinsicSize!.height
      ),
      debug: a.debug,
    }));

    setComputedLastAreas(mapped);
  }, [headerOffset, intrinsicSize, lastImageAreasPx, verticalAnchorPercent]);

  useEffect(() => { recomputeHeights(); recomputeAreas(); }, [recomputeHeights, recomputeAreas]);

  useEffect(() => {
    const onResize = () => { recomputeHeights(); recomputeAreas(); };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [recomputeHeights, recomputeAreas]);

  useEffect(() => { recomputeAreas(); }, [headerOffset, recomputeAreas]);

  const hotspots = computedLastAreas.length ? computedLastAreas : lastImageAreas;

  // Effect lookup
  const effectLookup = useRef<Record<string, RegionEffect>>({});
  useEffect(() => {
    const map: Record<string, RegionEffect> = {};
    for (const a of lastImageAreasPx) if (a.effect) map[a.name] = a.effect;
    effectLookup.current = map;
  }, [lastImageAreasPx]);

  // Collect effect bg srcs
  useEffect(() => {
    const srcs: string[] = [];
    for (const a of lastImageAreasPx) {
      const bg = a.effect?.bgImage?.src;
      if (bg) srcs.push(bg);
      const hover = a.effect?.content?.newBackgroundImage;
      if (hover) srcs.push(hover);
      const icon = a.effect?.content?.image?.src;
      if (icon) srcs.push(icon);
    }
    allEffectSrcsRef.current = Array.from(new Set(srcs));
  }, [lastImageAreasPx]);

  // Preload helper
  const preloadImage = useCallback((src?: string) => {
    if (!src || preloadedSrcsRef.current.has(src)) return;
    // rel=preload
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.onload = () => preloadedSrcsRef.current.add(src);
    link.onerror = () => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
      img.onload = () => preloadedSrcsRef.current.add(src);
    };
    document.head.appendChild(link);
    // fallback Image()
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => preloadedSrcsRef.current.add(src);
  }, []);

  // Preload strategy: mount
  useEffect(() => {
    if (preloadStrategy === "mount" || preloadStrategy === "both") {
      for (const src of allEffectSrcsRef.current) preloadImage(src);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preloadStrategy]);

  // Preload strategy: near last
  useEffect(() => {
    if (preloadStrategy === "near-last" || preloadStrategy === "both") {
      const nearStart = Math.max(0, images.length - Math.max(1, nearLastThreshold));
      if (currentIndex >= nearStart) {
        for (const src of allEffectSrcsRef.current) preloadImage(src);
      }
    }
  }, [currentIndex, images.length, nearLastThreshold, preloadStrategy, preloadImage]);

  // Click toggle
  const handleHotspotClick = (name: string) => {
    const effect = effectLookup.current[name];
    if (!effect) return;

    // toggle off
    if (activeEffectName === name) {
      if (autoClearTimerRef.current) {
        window.clearTimeout(autoClearTimerRef.current);
        autoClearTimerRef.current = null;
      }
      setEffectOpacity(0);
      window.setTimeout(() => {
        setActiveEffect(null);
        setActiveEffectName(null);
      }, EFFECT_FADE_MS);
      return;
    }

    // activate new
    setActiveEffect(effect);
    setActiveEffectName(name);
    setEffectOpacity(0);
    requestAnimationFrame(() => setEffectOpacity(1));

    if (autoClearTimerRef.current) {
      window.clearTimeout(autoClearTimerRef.current);
      autoClearTimerRef.current = null;
    }
    if (effect.autoClearMs && effect.autoClearMs > 0) {
      autoClearTimerRef.current = window.setTimeout(() => {
        setEffectOpacity(0);
        window.setTimeout(() => {
          setActiveEffect(null);
          setActiveEffectName(null);
        }, EFFECT_FADE_MS);
      }, effect.autoClearMs);
    }
  };

  // Leave last frame: fade out + clear
  useEffect(() => {
    if (!isLastActive && activeEffect) {
      setEffectOpacity(0);
      const t = window.setTimeout(() => {
        setActiveEffect(null);
        setActiveEffectName(null);
      }, EFFECT_FADE_MS);
      return () => window.clearTimeout(t);
    }
    if (isLastActive && activeEffect) setEffectOpacity(1);
  }, [isLastActive, activeEffect]);

  // Visual params
  const overlayColor = activeEffect?.overlayColor ?? "rgb(31 41 55 / 0.80)";
  const overlayAlpha = activeEffect?.overlayOpacity ?? (overlayColor.includes("/") ? 1 : 0.8);

  const fgBgSrc = activeEffect?.bgImage?.src;
  const fgBgAlt = activeEffect?.bgImage?.alt ?? "";
  const fgFadeMs = activeEffect?.bgImage?.fadeMs ?? EFFECT_FADE_MS;

  return (
    <div ref={containerRef} className={className}>
      <div
        className="sticky w-full"
        style={{ top: headerOffset, height: `calc(100vh - ${headerOffset}px)` }}
      >
        {/* Base frames */}
        {displayed.map((idx) => (
          <Image
            key={idx}
            src={images[idx].src}
            alt={images[idx].alt || ""}
            fill
            className="absolute inset-0 object-cover transition-opacity duration-400 will-change-[opacity]"
            style={{ opacity: opacities[idx] ?? 0, objectPosition }}
            priority={idx === 0}
            onLoadingComplete={() => handleLoaded(idx)}
          />
        ))}

        {/* Foreground bg swap */}
        {fgBgSrc && (
          <Image
            src={fgBgSrc}
            alt={fgBgAlt}
            fill
            sizes="100vw"
            fetchPriority="high"
            className="absolute inset-0 object-cover will-change-[opacity]"
            style={{
              opacity: effectOpacity,
              transition: `opacity ${fgFadeMs}ms ease`,
              objectPosition,
              zIndex: 9,
            }}
            priority
          />
        )}

        {/* Intro black */}
        <div
          className="pointer-events-none absolute inset-0 bg-black z-10"
          style={{ opacity: introBlackOpacity }}
        />

        {/* --- Half-width TINT ONLY (non-interactive) --- */}
        {activeEffect && (
          <div
            className="absolute top-0 h-full z-20"
            style={{
              left: activeEffect.overlaySide === "left" ? 0 : "50%",
              width: "50%",
              backgroundColor: overlayColor,
              opacity: effectOpacity * overlayAlpha,
              transition: `opacity ${EFFECT_FADE_MS}ms ease`,
              pointerEvents: "none", // never intercepts clicks
            }}
          />
        )}

        {/* --- Half-width CONTENT (interactive, above everything) --- */}
        {activeEffect?.content && (
          <div
            className="absolute top-0 h-full z-40 flex items-center justify-center text-center p-8"
            style={{
              left: activeEffect.overlaySide === "left" ? 0 : "50%",
              width: "50%",
              pointerEvents: "auto",             // receive clicks
              opacity: effectOpacity,
              transition: `opacity ${EFFECT_FADE_MS}ms ease`,
            }}
          >
            <div className="max-w-xl w-full flex flex-col items-center space-y-6">
              {activeEffect.content.image && (
                <Image
                  src={activeEffect.content.image.src}
                  alt={activeEffect.content.image.alt ?? ""}
                  width={activeEffect.content.image.width ?? 160}
                  height={activeEffect.content.image.height ?? 160}
                  className="object-contain"
                  fetchPriority="high"
                  priority
                />
              )}
              <h2 className="text-3xl font-bold mb-2">{activeEffect.content.title}</h2>
              <p className="mb-2">{activeEffect.content.description}</p>

              {/* Next.js Link is fine once it's on top and hotspots are disabled */}
              <Link
                className="inline-flex items-center justify-center h-10 px-6 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
                href={activeEffect.content.buttonHref}
                onMouseEnter={() => {
                  if (activeEffect.content?.newBackgroundImage) {
                    preloadImage(activeEffect.content.newBackgroundImage);
                  }
                }}
              >
                {activeEffect.content.buttonText}
              </Link>
            </div>
          </div>
        )}


        {/* Hotspots (only on last frame). While an effect is active, only that region remains clickable. */}
        {isLastActive && hotspots.length > 0 && (
          <div className="absolute inset-0 z-30">
            {hotspots.map((area, i) => {
              const isRect = area.shape === "rect";
              const clipPath = clipPathFrom(area.shape, area.coords);
              const rectPos = isRect ? rectStyleFrom(area.coords) : undefined;
              const isDisabled = activeEffectName !== null && area.name !== activeEffectName;

              const commonStyle: React.CSSProperties = {
                position: "absolute",
                inset: 0,
                ...(isRect ? rectPos : {}),
                ...(clipPath ? { clipPath } : {}),
                outline: "none",
                pointerEvents: isDisabled ? "none" : "auto",
              };

              const debugStyle: React.CSSProperties = area.debug
                ? { background: "rgba(255,255,255,0.08)", boxShadow: "0 0 0 1px rgba(255,255,255,0.35) inset" }
                : {};

              if (isDisabled) {
                return (
                  <div
                    key={i}
                    aria-hidden="true"
                    style={{ ...commonStyle, ...debugStyle, cursor: "default" }}
                  />
                );
              }

              return (
                <button
                  key={i}
                  aria-label={area.name}
                  className="block w-full h-full cursor-pointer focus:outline-none focus-visible:outline-none"
                  style={{ ...commonStyle, ...debugStyle }}
                  onClick={() => handleHotspotClick(area.name)}
                  onMouseEnter={() => {
                    const s = effectLookup.current[area.name]?.bgImage?.src;
                    if (s) preloadImage(s);
                    const h = effectLookup.current[area.name]?.content?.newBackgroundImage;
                    if (h) preloadImage(h);
                  }}
                  onTouchStart={() => {
                    const s = effectLookup.current[area.name]?.bgImage?.src;
                    if (s) preloadImage(s);
                    const h = effectLookup.current[area.name]?.content?.newBackgroundImage;
                    if (h) preloadImage(h);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollImageSequence;
