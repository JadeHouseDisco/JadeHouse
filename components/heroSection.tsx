"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BackgroundImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface Card {
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    newBackgroundImage: BackgroundImage;
}

interface HeroSectionProps {
  heroSectionProps: {
    originalBackgroundImage: BackgroundImage;
    content: {
      title: string;
      description: string;
      cards?: Card[];
    };
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSectionProps }) => {
  const [loaded, setLoaded] = useState(false);
  const [key, setKey] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(heroSectionProps.originalBackgroundImage);
  const loadedImages = useRef(new Set<string>()); // Store loaded images to avoid reloading

  const preloadImage = (image: BackgroundImage) => {
    // Only load if it hasn't been loaded before
    if (!loadedImages.current.has(image.src)) {
        const img = document.createElement('img'); // Create an image element
        img.src = image.src;
        img.onload = () => {
            loadedImages.current.add(image.src);
            // Set as background if still hovered over
            if (image.src === backgroundImage.src) {
                setBackgroundImage(image);
            }
        };
    }
};

  useEffect(() => {
    // Preload all images on mount
    const allImages = [heroSectionProps.originalBackgroundImage, ...heroSectionProps.content.cards?.map(card => card.newBackgroundImage) || []];
    allImages.forEach(preloadImage);
  }, [heroSectionProps]);

  useEffect(() => {
    // Force a re-mount of the Image component when the source changes
    setLoaded(false);
    setKey((prevKey) => prevKey + 1);
  }, [backgroundImage.src]);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Fading black overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0 z-3'}`}></div>
          <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100 z-3'}`}></div>
          {/* New image */}
          <Image
            key={key} // Ensure re-mounting of the Image component
            alt={backgroundImage.alt}
            className={`absolute w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 z-2`}
            height={backgroundImage.height}
            src={backgroundImage.src}
            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            width={backgroundImage.width}
            onLoad={() => setLoaded(true)}
            priority={true}
          />
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-black to-100%"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20 z-4">
            <div className="text-center text-white max-w-2md">
              <h1 className="text-6xl font-bold mb-4">{heroSectionProps.content.title}</h1>
              <p className="text-xl">{heroSectionProps.content.description}</p>
            </div>
            {/* Card grid section */}
            <div>
              <div className="container mx-auto px-4 grid grid-rows-1 md:grid-cols-2 gap-8">
                {heroSectionProps.content.cards &&
                  heroSectionProps.content.cards.map((card, index) => (
                    <div 
                      key={index}
                      className="bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-6 flex items-center"
                    >
                      <div className="flex-shrink-0 mr-6">
                        <Image
                          src={card.image.src}
                          height={card.image.height}
                          width={card.image.width}
                          className="h-full object-cover"
                          alt={card.image.alt}
                          priority={true}
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-4">
                          {card.title}
                        </h2>
                        <p className="mb-6">
                          {card.description}
                        </p>
                        <Link
                          className="inline-flex items-center justify-center h-10 px-6 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
                          href={card.buttonHref}
                          onMouseEnter={() => {
                            preloadImage(card.newBackgroundImage);
                            setBackgroundImage(card.newBackgroundImage);
                          }}
                          onMouseLeave={() => {
                            setBackgroundImage(heroSectionProps.originalBackgroundImage);
                          }}
                        >
                          {card.buttonText}
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black h-[5vh]"></div>
    </>
  );
};

export default HeroSection;
