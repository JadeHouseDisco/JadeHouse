"use client";

import Image from "next/image";
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

  /** Optional: special effect configuration when this hotspot is clicked */
  effect?: RegionEffect;
}

interface IntrinsicSize {
  width: number;
  height: number;
}

/** Configures the overlay + background-change effect per region */
interface RegionEffect {
  /** Which half receives the semi-transparent overlay on click */
  overlaySide: "left" | "right";
  /** CSS color for overlay (any valid CSS color). Default: "rgb(31 41 55 / 0.80)" (~bg-gray-800/80) */
  overlayColor?: string;
  /** Opacity multiplier [0..1]. Default 0.8 (ignored if overlayColor already includes alpha). */
  overlayOpacity?: number;
  /** Optional foreground image (above the base image) shown while the effect is active */
  bgImage?: {
    src: string;
    alt?: string;
    /** Crossfade duration in ms. If omitted, uses EFFECT_FADE_MS. */
    fadeMs?: number;
  };
  /** Optional: automatically clear the effect after N ms. If omitted, remains until cleared by scroll/click. */
  autoClearMs?: number;
}

interface ScrollImageSequenceProps {
  images: SequenceImage[];
  className?: string;
  /** Extra buffer screens so the last frame lingers */
  endBufferScreens?: number;
  /** Known header height; if omitted, measured from `offsetElementId` */
  offsetTop?: number;
  /** Header element id to measure if `offsetTop` not provided */
  offsetElementId?: string;
  /** Vertical anchor for object-position: 0=top, 100=bottom */
  verticalAnchorPercent?: number;
  /** How many viewport-heights it takes to fade in the first frame */
  introFadeScreens?: number;

  /** Percent-based hotspots for last image (optional; legacy) */
  lastImageAreas?: ClickArea[];

  /** Intrinsic-pixel hotspots for last image (recommended) */
  lastImageAreasPx?: ClickAreaPx[];

  /** Native size of the image sequence (required when using lastImageAreasPx) */
  intrinsicSize?: IntrinsicSize;

  /** Optional: starting effect (e.g., preselect a state) */
  defaultEffect?: RegionEffect | null;
}

const FRAME_FADE_MS = 400;    // crossfade between frames
const EFFECT_FADE_MS = 300;   // fade for overlay + foreground bg image

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
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Header measurement
  const [headerOffset, setHeaderOffset] = useState<number>(offsetTop ?? 0);
  const visibleHRef = useRef<number>(0); // viewport height minus header

  // Crossfade state
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

  // Intro black overlay (fades out on initial scroll)
  const [introBlackOpacity, setIntroBlackOpacity] = useState(1);

  // Hotspots computed from intrinsic pixels -> viewport percents
  const [computedLastAreas, setComputedLastAreas] = useState<ClickArea[]>([]);

  // Special-effect state
  const [activeEffect, setActiveEffect] = useState<RegionEffect | null>(defaultEffect);
  const [activeEffectName, setActiveEffectName] = useState<string | null>(null);
  const [effectOpacity, setEffectOpacity] = useState(0); // drives fade for overlay + fg image
  const autoClearTimerRef = useRef<number | null>(null);

  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { pendingIndexRef.current = pendingIndex; }, [pendingIndex]);
  useEffect(() => { loadedRef.current = loaded; }, [loaded]);

  // Measure header height unless offsetTop explicitly provided
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

  // Compute container height
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

      // Intro black overlay fade-out during the first N screens
      const fadeRange = Math.max(1, sectionH * introFadeScreens);
      const introProgress = Math.min(Math.max(scrollTop / fadeRange, 0), 1);
      setIntroBlackOpacity(1 - introProgress);

      // Determine target frame
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

  // Helpers for hotspot rendering
  const rectStyleFrom = (coords: number[]) => {
    const [l, t, w, h] = coords;
    return {
      left: `${l}%`,
      top: `${t}%`,
      width: `${w}%`,
      height: `${h}%`,
    } as React.CSSProperties;
  };

  const clipPathFrom = (shape: Shape, coords: number[]) => {
    if (shape === "polygon") {
      const pts: string[] = [];
      for (let i = 0; i < coords.length; i += 2) {
        pts.push(`${coords[i]}% ${coords[i + 1]}%`);
      }
      return `polygon(${pts.join(",")})`;
    }
    if (shape === "circle") {
      const [cx, cy, r] = coords;
      return `circle(${r}% at ${cx}% ${cy}%)`;
    }
    return undefined; // rect uses absolute positioning
  };

  /** Map intrinsic (image pixel) coords -> viewport-percent coords with object-fit: cover */
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

    // Negative offsets mean the image overflows beyond the container
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
      const x = coordsPx[i];
      const y = coordsPx[i + 1];
      const xC = x * scale + offsetX;
      const yC = y * scale + offsetY;
      out.push((xC / containerW) * 100, (yC / containerH) * 100);
    }
    return out;
  }

  /** Recompute percent hotspots from intrinsic pixel hotspots on size/anchor changes */
  const recomputeAreas = useCallback(() => {
    const c = containerRef.current;
    if (!c) {
      setComputedLastAreas([]);
      return;
    }
    const hasPx = intrinsicSize && lastImageAreasPx && lastImageAreasPx.length > 0;
    if (!hasPx) {
      setComputedLastAreas([]);
      return;
    }

    const containerW = c.clientWidth;
    const containerH = Math.max(0, window.innerHeight - headerOffset);

    const mapped = lastImageAreasPx.map<ClickArea>((a) => ({
      name: a.name,
      shape: a.shape,
      coords: mapIntrinsicToViewportPercent(
        a.shape,
        a.coords,
        containerW,
        containerH,
        intrinsicSize!.width,
        intrinsicSize!.height
      ),
      debug: a.debug,
    }));

    setComputedLastAreas(mapped);
  }, [headerOffset, intrinsicSize, lastImageAreasPx, verticalAnchorPercent]);

  useEffect(() => {
    recomputeHeights();
    recomputeAreas();
  }, [recomputeHeights, recomputeAreas]);

  useEffect(() => {
    const onResize = () => {
      recomputeHeights();
      recomputeAreas();
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [recomputeHeights, recomputeAreas]);

  useEffect(() => { recomputeAreas(); }, [headerOffset, recomputeAreas]);

  // Prefer computed-from-pixels; fallback to percent-based prop
  const hotspots = computedLastAreas.length ? computedLastAreas : lastImageAreas;

  // Build effect lookup from pixel-defined hotspots (they carry .effect)
  const effectLookup = useRef<Record<string, RegionEffect>>({});
  useEffect(() => {
    const map: Record<string, RegionEffect> = {};
    for (const a of lastImageAreasPx) {
      if (a.effect) map[a.name] = a.effect;
    }
    effectLookup.current = map;
  }, [lastImageAreasPx]);

  // Click: toggle active effect for the clicked region
  const handleHotspotClick = (name: string) => {
    const effect = effectLookup.current[name];
    if (!effect) return;

    // If the region is already active, toggle it off (fade out + clear)
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

    // If another region is active, clicking this one is disabled (no-op)
    if (activeEffectName && activeEffectName !== name) {
      return;
    }

    // Activate a new region
    setActiveEffect(effect);
    setActiveEffectName(name);
    setEffectOpacity(0);
    requestAnimationFrame(() => setEffectOpacity(1));

    // manage auto-clear if configured
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

  // Auto fade-out and reset effect when leaving the last frame
  useEffect(() => {
    if (!isLastActive && activeEffect) {
      setEffectOpacity(0);
      const t = window.setTimeout(() => {
        setActiveEffect(null);
        setActiveEffectName(null);
      }, EFFECT_FADE_MS);
      return () => window.clearTimeout(t);
    }
    if (isLastActive && activeEffect) {
      setEffectOpacity(1);
    }
  }, [isLastActive, activeEffect]);

  // Visual parameters
  const overlayColor = activeEffect?.overlayColor ?? "rgb(31 41 55 / 0.80)";
  const overlayAlpha = activeEffect?.overlayOpacity ?? (overlayColor.includes("/") ? 1 : 0.8);

  const fgBgSrc = activeEffect?.bgImage?.src;
  const fgBgAlt = activeEffect?.bgImage?.alt ?? "";
  const fgFadeMs = activeEffect?.bgImage?.fadeMs ?? EFFECT_FADE_MS;

  return (
    <div ref={containerRef} className={className}>
      <div
        className="sticky w-full"
        style={{
          top: headerOffset,
          height: `calc(100vh - ${headerOffset}px)`,
        }}
      >
        {/* Base image frames (crossfading) */}
        {displayed.map((idx) => (
          <Image
            key={idx}
            src={images[idx].src}
            alt={images[idx].alt || ""}
            fill
            className="absolute inset-0 object-cover transition-opacity duration-400 will-change-[opacity]"
            style={{
              opacity: opacities[idx] ?? 0,
              objectPosition,
            }}
            priority={idx === 0}
            onLoadingComplete={() => handleLoaded(idx)}
          />
        ))}

        {/* Foreground background-swap image, fades with effectOpacity */}
        {fgBgSrc && (
          <Image
            src={fgBgSrc}
            alt={fgBgAlt}
            fill
            className="absolute inset-0 object-cover will-change-[opacity]"
            style={{
              opacity: effectOpacity,
              transition: `opacity ${fgFadeMs}ms ease`,
              objectPosition,
              zIndex: 9, // below overlay and hotspots, above base frames
            }}
            priority={false}
          />
        )}

        {/* Intro black overlay that fades out on initial scroll */}
        <div
          className="pointer-events-none absolute inset-0 bg-black z-10"
          style={{ opacity: introBlackOpacity }}
        />

        {/* Half overlay (left or right), fades with effectOpacity */}
        {activeEffect && (
          <div
            className="absolute top-0 h-full z-20"
            style={{
              left: activeEffect.overlaySide === "left" ? 0 : "50%",
              width: "50%",
              backgroundColor: overlayColor,
              opacity: effectOpacity * overlayAlpha,
              transition: `opacity ${EFFECT_FADE_MS}ms ease`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Hotspots for the last image only */}
        {isLastActive && hotspots.length > 0 && (
          <div className="absolute inset-0 z-30">
            {hotspots.map((area, i) => {
              const isRect = area.shape === "rect";
              const clipPath = clipPathFrom(area.shape, area.coords);
              const rectPos = isRect ? rectStyleFrom(area.coords) : undefined;

              const isDisabled =
                Boolean(activeEffectName) && activeEffectName !== area.name;

              const commonStyle: React.CSSProperties = {
                position: "absolute",
                inset: 0,
                ...(isRect ? rectPos : {}),
                ...(clipPath ? { clipPath } : {}),
                outline: "none",
                cursor: isDisabled ? "not-allowed" : "pointer",
              };

              const debugStyle: React.CSSProperties = area.debug
                ? { background: "rgba(255,255,255,0.08)", boxShadow: "0 0 0 1px rgba(255,255,255,0.35) inset" }
                : {};

              return (
                <button
                  key={i}
                  aria-label={area.name}
                  aria-disabled={isDisabled}
                  disabled={isDisabled}
                  tabIndex={isDisabled ? -1 : 0}
                  className="block w-full h-full focus:outline-none focus-visible:outline-none"
                  style={{ ...commonStyle, ...debugStyle }}
                  onClick={() => !isDisabled && handleHotspotClick(area.name)}
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
