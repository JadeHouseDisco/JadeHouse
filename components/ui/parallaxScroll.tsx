"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface ParallaxLayer {
  src: string;
  speed: number;
  alt?: string;
}

interface ParallaxScrollProps {
  layers: ParallaxLayer[];
  className?: string;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({ layers, className }) => {
  const layerRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number | null = null;
    let isVisible = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateLayers = () => {
      animationFrame = null;
      if (!isVisible || reduceMotion) return;
      const scrollY = window.scrollY;
      layerRefs.current.forEach((el, index) => {
        if (!el) return;
        const speed = layers[index].speed;
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    const handleScroll = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateLayers);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) handleScroll();
    });
    if (containerRef.current) observer.observe(containerRef.current);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [layers]);

  return (
    <div ref={containerRef} className={`relative min-h-[32rem] h-[100svh] w-full ${className || ""}`}>
      {layers.map((layer, idx) => (
        <div
          key={idx}
          ref={(el) => {
            if (el) {
              layerRefs.current[idx] = el;
            }
          }}
          className="absolute left-0 w-full pointer-events-none"
          style={{
            willChange: "transform",
            top: `${-idx * 6}px`, // Move each layer up
            height: `calc(100% - ${-idx * 6}px)`, // Keep bottom aligned
          }}
        >
          <Image
            src={layer.src}
            alt={layer.alt || `parallax-layer-${idx}`}
            fill
            className="object-cover object-top" // or object-[50%_0%]
            priority={idx === 0 || idx === layers.length - 1}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent from-[85%] to-black to-100%"></div>
    </div>
  );
};

export default ParallaxScroll;
