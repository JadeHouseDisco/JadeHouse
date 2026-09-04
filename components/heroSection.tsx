"use client";

import React, { useState } from 'react';
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
  const [backgroundImage, setBackgroundImage] = useState(heroSectionProps.originalBackgroundImage);

  const showBackground = (image: BackgroundImage) => {
    if (image.src === backgroundImage.src) return;
    setLoaded(false);
    setBackgroundImage(image);
  };

  return (
    <>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Fading black overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0 z-3'}`}></div>
          <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100 z-3'}`}></div>
          {/* New image */}
          <Image
            key={backgroundImage.src}
            alt={backgroundImage.alt}
            className={`absolute w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 z-2`}
            height={backgroundImage.height}
            src={backgroundImage.src}
            width={backgroundImage.width}
            onLoad={() => setLoaded(true)}
            priority={backgroundImage.src === heroSectionProps.originalBackgroundImage.src}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-black to-100%"></div>
          {/* Content */}
          <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:gap-12 lg:px-8">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h1 className="mb-4 text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-[1.05]">{heroSectionProps.content.title}</h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed sm:text-xl">{heroSectionProps.content.description}</p>
            </div>
            {/* Card grid section */}
            <div>
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                {heroSectionProps.content.cards &&
                  heroSectionProps.content.cards.map((card, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-start rounded-xl border border-white/10 bg-gray-800/85 p-4 shadow-md backdrop-blur-sm sm:flex-row sm:items-center sm:p-6"
                    >
                      <div className="relative mb-4 h-20 w-20 shrink-0 sm:mb-0 sm:mr-6 sm:h-28 sm:w-24">
                        <Image
                          src={card.image.src}
                          fill
                          className="rounded-md object-contain p-1"
                          alt={card.image.alt}
                          sizes="(max-width: 639px) 80px, 96px"
                        />
                      </div>
                      <div>
                        <h2 className="mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl">
                          {card.title}
                        </h2>
                        <p className="mb-4 leading-relaxed sm:mb-6">
                          {card.description}
                        </p>
                        <Link
                          className="inline-flex items-center justify-center h-10 px-6 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
                          href={card.buttonHref}
                          onMouseEnter={() => showBackground(card.newBackgroundImage)}
                          onMouseLeave={() => showBackground(heroSectionProps.originalBackgroundImage)}
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
    </>
  );
};

export default HeroSection;
