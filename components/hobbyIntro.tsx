"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HobbyIntroProps {
  hobbyIntroProps: {
    titleText: string;
    descriptionText: string;
    hobbies: {
      backgroundImage: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      content: {
        title: string;
        description: string;
      }
    }[];
  };
}

const HobbyIntro: React.FC<HobbyIntroProps> = ({ hobbyIntroProps }) => {
  const [loaded, setLoaded] = useState(false);
  const [key, setKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgroundImage = hobbyIntroProps.hobbies[currentIndex].backgroundImage;


  useEffect(() => {
    setLoaded(false);
    setKey((prevKey) => prevKey + 1);
  }, [backgroundImage.src]);

  const handleNextHobby = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hobbyIntroProps.hobbies.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevHobby = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + hobbyIntroProps.hobbies.length) % hobbyIntroProps.hobbies.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <>
      <div className="mx-auto mt-16 mb-6 max-w-4xl space-y-4 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {hobbyIntroProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {hobbyIntroProps.descriptionText}
        </p>
      </div>
      <section className="relative min-h-[clamp(30rem,70svh,42rem)] overflow-hidden">
        <div className="absolute inset-0">
          {/* Fading black overlay */}
          <div className={`pointer-events-none absolute inset-0 z-[5] bg-black transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}></div>
          {/* New image */}
          <Image
            key={key}
            alt={backgroundImage.alt}
            className={`z-0 object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            fill
            src={backgroundImage.src}
            onLoad={() => setLoaded(true)}
            priority
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gray-900/50"></div>
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent from-85% to-black to-100%"></div>
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-transparent from-85% to-black to-100%"></div>
          {/* Content */}
          <div className="absolute inset-0 z-10 flex h-full flex-col justify-center px-16 py-12 sm:px-24">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center text-white">
              <h1 className={`mb-4 text-[clamp(2.25rem,7vw,4rem)] font-bold leading-tight transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {hobbyIntroProps.hobbies[currentIndex].content.title}
              </h1>
              <p className={`max-w-2xl text-base leading-relaxed transition-opacity duration-500 sm:text-xl ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {hobbyIntroProps.hobbies[currentIndex].content.description}
              </p>
            </div>
          </div>
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-50 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:ring-gray-300 sm:left-6"
            onClick={handlePrevHobby}
            aria-label="Previous hobby"
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-50 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:ring-gray-300 sm:right-6"
            onClick={handleNextHobby}
            aria-label="Next hobby"
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dot display */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {hobbyIntroProps.hobbies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Show hobby ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbyIntro;
