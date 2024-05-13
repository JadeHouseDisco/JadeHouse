"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  heroSectionProps: {
    backgroundImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    content: {
      title: string;
      description: string;
    };
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSectionProps }) => {
  const [loaded, setLoaded] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force a re-mount of the Image component when the source changes
    setLoaded(false);
    setKey((prevKey) => prevKey + 1);
  }, [heroSectionProps.backgroundImage.src]);

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        {/* Fading black overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100 z-3'}`}></div>
        {/* New image */}
        <Image
          key={key} // Ensure re-mounting of the Image component
          alt={heroSectionProps.backgroundImage.alt}
          className={`absolute w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 z-2`}
          height={heroSectionProps.backgroundImage.height}
          src={heroSectionProps.backgroundImage.src}
          style={{ aspectRatio: '1920/1080', objectFit: 'cover' }}
          width={heroSectionProps.backgroundImage.width}
          onLoad={() => setLoaded(true)}
        />
        {/* Content */}
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center z-4">
          <div className="text-center text-white max-w-2md">
            <h1 className="text-6xl font-bold mb-4">{heroSectionProps.content.title}</h1>
            <p className="text-xl">{heroSectionProps.content.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
