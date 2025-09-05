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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      layerRefs.current.forEach((el, index) => {
        if (!el) return;
        const speed = layers[index].speed;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [layers]);

  return (
    <div className={`relative w-full h-[100vh]  ${className || ""}`}>
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
            priority={idx === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent from-[85%] to-black to-100%"></div>
    </div>
  );
};

export default ParallaxScroll;
