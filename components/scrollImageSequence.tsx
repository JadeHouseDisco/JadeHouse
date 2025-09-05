"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface SequenceImage {
  src: string;
  alt?: string;
}

interface ScrollImageSequenceProps {
  images: SequenceImage[];
  className?: string;
  endBufferScreens?: number;
  offsetTop?: number;
  offsetElementId?: string;
  /** Vertical anchor: 0 = top, 100 = bottom, e.g. 30 = 30% from top */
  verticalAnchorPercent?: number; 
}

const FADE_MS = 400;

const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({
  images,
  className,
  endBufferScreens = 1,
  offsetTop,
  offsetElementId = "main-header",
  verticalAnchorPercent = 30,  // default: 30% from top, 70% from bottom
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measured header height (or provided offsetTop)
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

  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { pendingIndexRef.current = pendingIndex; }, [pendingIndex]);
  useEffect(() => { loadedRef.current = loaded; }, [loaded]);

  // Measure header height unless offsetTop is explicitly provided
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

    // Track dynamic changes (mobile menu open, responsive)
    const ro = new ResizeObserver(update);
    ro.observe(el);

    // Also react to window resize and zoom
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [offsetTop, offsetElementId]);

  // Recompute the container’s pixel height based on visible viewport
  const recomputeHeights = useCallback(() => {
    const vh = window.innerHeight;
    const visibleH = Math.max(0, vh - headerOffset);
    visibleHRef.current = visibleH;

    const totalSections = Math.max(1, images.length + Math.max(0, endBufferScreens));
    const totalPx = visibleH * totalSections;

    const c = containerRef.current;
    if (c) {
      c.style.height = `${totalPx}px`;
    }
  }, [headerOffset, images.length, endBufferScreens]);

  useEffect(() => {
    recomputeHeights();
  }, [recomputeHeights]);

  useEffect(() => {
    const onResize = () => recomputeHeights();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [recomputeHeights]);

  // Warm up next frame
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
    }, FADE_MS);
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
  }, [images.length, endBufferScreens, headerOffset, startCrossfade]);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
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

  return (
    <div ref={containerRef} className={className}>
      <div
        className="sticky w-full relative"
        style={{
          top: headerOffset,
          height: `calc(100vh - ${headerOffset}px)`,
        }}
      >
        {displayed.map((idx) => (
          <Image
            key={idx}
            src={images[idx].src}
            alt={images[idx].alt || ""}
            fill
            className="absolute inset-0 object-cover transition-opacity duration-400 will-change-[opacity]"
            style={{
              opacity: opacities[idx] ?? 0,
              objectPosition,   // <- apply the flexible vertical anchor
            }}
            priority={idx === 0}
            onLoadingComplete={() => handleLoaded(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollImageSequence;
