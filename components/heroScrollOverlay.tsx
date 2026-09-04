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

interface ClickArea {
  name: string;
  shape: Shape;
  coords: number[];
  debug?: boolean;
}

interface ClickAreaPx {
  name: string;
  shape: Shape;
  coords: number[];
  debug?: boolean;
  effect?: RegionEffect;
}

interface IntrinsicSize {
  width: number;
  height: number;
}

interface RegionEffect {
  overlaySide: "left" | "right";
  overlayColor?: string;
  overlayOpacity?: number;
  bgImage?: {
    src: string;
    alt?: string;
    fadeMs?: number;
  };
  autoClearMs?: number;
  content?: {
    image?: { src: string; alt?: string; width?: number; height?: number };
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    newBackgroundImage?: string;
  };
}

interface HeroScrollOverlayProps {
  image: SequenceImage;
  title: string;
  description: string;
  className?: string;
  introFadeScreens?: number;
  endBufferScreens?: number;
  offsetTop?: number;
  offsetElementId?: string;
  verticalAnchorPercent?: number;

  lastImageAreas?: ClickArea[];
  lastImageAreasPx?: ClickAreaPx[];
  intrinsicSize?: IntrinsicSize;

  defaultEffect?: RegionEffect | null;
}

const EFFECT_FADE_MS = 300;
const EMPTY_CLICK_AREAS: ClickArea[] = [];
const EMPTY_CLICK_AREAS_PX: ClickAreaPx[] = [];

const HeroScrollOverlay: React.FC<HeroScrollOverlayProps> = ({
  image,
  title,
  description,
  className,
  introFadeScreens = 1.0,
  endBufferScreens = 1.0,
  offsetTop,
  offsetElementId = "main-header",
  verticalAnchorPercent = 30,
  lastImageAreas = EMPTY_CLICK_AREAS,
  lastImageAreasPx = EMPTY_CLICK_AREAS_PX,
  intrinsicSize,
  defaultEffect = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Header measurement
  const [headerOffset, setHeaderOffset] = useState<number>(offsetTop ?? 0);
  const visibleHRef = useRef<number>(0);

  // Scroll Progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const tickingRef = useRef(false);

  // Hotspots computed
  const [computedLastAreas, setComputedLastAreas] = useState<ClickArea[]>([]);

  // Effect state
  const [activeEffect, setActiveEffect] = useState<RegionEffect | null>(defaultEffect);
  const [activeEffectName, setActiveEffectName] = useState<string | null>(null);
  const [effectOpacity, setEffectOpacity] = useState(0);
  const autoClearTimerRef = useRef<number | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

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

    const totalSections = Math.max(1, 1 + Math.max(0, introFadeScreens) + Math.max(0, endBufferScreens));
    const totalPx = visibleH * totalSections;
    const c = containerRef.current;
    if (c) c.style.height = `${totalPx}px`;
  }, [headerOffset, introFadeScreens, endBufferScreens]);

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

  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const c = containerRef.current;
      if (!c) return;

      const sectionH = visibleHRef.current || (window.innerHeight - headerOffset);
      if (sectionH <= 0) return;

      const scrollTop = window.scrollY - c.offsetTop;
      const fadeScroll = sectionH * introFadeScreens;
      
      const progress = fadeScroll > 0 ? Math.min(Math.max(scrollTop / fadeScroll, 0), 1) : 1;
      setScrollProgress(progress);
    });
  }, [headerOffset, introFadeScreens]);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const objectPosition = `50% ${verticalAnchorPercent}%`;

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
  // The mapping helper intentionally closes over verticalAnchorPercent.
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
  }, [headerOffset, intrinsicSize, lastImageAreasPx, verticalAnchorPercent]); // eslint-disable-line react-hooks/exhaustive-deps

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



  // Click toggle
  const handleHotspotClick = (name: string) => {
    setIsDismissed(true);
    const effect = effectLookup.current[name];
    if (!effect) return;

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

  const isInteractive = isDismissed || scrollProgress >= 1; // Content text is gone -> enable actions

  useEffect(() => {
    if (activeEffect && !isInteractive) {
      setEffectOpacity(0);
      const t = window.setTimeout(() => {
        setActiveEffect(null);
        setActiveEffectName(null);
      }, EFFECT_FADE_MS);
      return () => window.clearTimeout(t);
    }
    if (activeEffect && isInteractive) setEffectOpacity(1);
  }, [isInteractive, activeEffect]);

  const overlayColor = activeEffect?.overlayColor ?? "rgb(31 41 55 / 0.80)";
  const overlayAlpha = activeEffect?.overlayOpacity ?? (overlayColor.includes("/") ? 1 : 0.8);

  const fgBgSrc = activeEffect?.bgImage?.src;
  const fgBgAlt = activeEffect?.bgImage?.alt ?? "";
  const fgFadeMs = activeEffect?.bgImage?.fadeMs ?? EFFECT_FADE_MS;

  const textOverlayOpacity = isDismissed ? 0 : 1 - scrollProgress;

  return (
    <div ref={containerRef} className={className}>
      <div
        className="sticky w-full"
        style={{ top: headerOffset, height: `calc(100dvh - ${headerOffset}px)` }}
      >
        <div className="relative h-full w-full">
        <Image
          src={image.src}
          alt={image.alt || ""}
          fill
          className="absolute inset-0 object-cover"
          style={{ objectPosition }}
          priority
          sizes="100vw"
        />

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

        <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-15% z-[10] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-black to-100% z-[10] pointer-events-none"></div>

        {/* Text Overlay Layer overlay */}
        <div 
          className={`absolute inset-0 z-10 bg-black/40 flex items-center justify-center ${
            isDismissed ? 'transition-opacity duration-500 ease-in-out' : ''
          } ${
            !isDismissed && scrollProgress < 1 ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
          }`}
          style={{ opacity: textOverlayOpacity }}
          onClick={() => setIsDismissed(true)}
        >
          <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
            <h1 className="mb-4 text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-[1.05]">{title}</h1>
            <p className="text-base leading-relaxed sm:text-xl">{description}</p>
          </div>
        </div>

        {activeEffect && (
          <div
            className="interactive-overlay-panel absolute top-0 z-20 h-full"
            data-side={activeEffect.overlaySide}
            style={{
              backgroundColor: overlayColor,
              opacity: effectOpacity * overlayAlpha,
              transition: `opacity ${EFFECT_FADE_MS}ms ease`,
              pointerEvents: "none",
            }}
          />
        )}

        {activeEffect?.content && (
          <div
            className="interactive-overlay-panel absolute top-0 z-40 flex h-full items-center justify-center overflow-y-auto p-4 text-center sm:p-8"
            data-side={activeEffect.overlaySide}
            style={{
              pointerEvents: "auto",
              opacity: effectOpacity,
              transition: `opacity ${EFFECT_FADE_MS}ms ease`,
            }}
          >
            <div className="flex w-full max-w-xl flex-col items-center space-y-4 sm:space-y-6">
              {activeEffect.content.image && (
                <Image
                  src={activeEffect.content.image.src}
                  alt={activeEffect.content.image.alt ?? ""}
                  width={activeEffect.content.image.width ?? 160}
                  height={activeEffect.content.image.height ?? 160}
                  className="object-contain"
                  fetchPriority="high"
                  sizes={`${activeEffect.content.image.width ?? 160}px`}
                />
              )}
              <h2 className="mb-2 text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight">{activeEffect.content.title}</h2>
              <p className="mb-2">{activeEffect.content.description}</p>

              <Link
                className="inline-flex items-center justify-center h-10 px-6 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
                href={activeEffect.content.buttonHref}
                onMouseEnter={() => {}}
              >
                {activeEffect.content.buttonText}
              </Link>
            </div>
          </div>
        )}

        {hotspots.length > 0 && (
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
                  onMouseEnter={() => {}}
                  onTouchStart={() => {}}
                />
              );
            })}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default HeroScrollOverlay;
