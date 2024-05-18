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
      <div className="space-y-4 text-center mt-16 mb-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {hobbyIntroProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {hobbyIntroProps.descriptionText}
        </p>
      </div>
      <section className="relative h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Fading black overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100 z-3'}`}></div>
          {/* New image */}
          <Image
            key={key}
            alt={backgroundImage.alt}
            className={`absolute w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 z-2`}
            height={backgroundImage.height}
            src={backgroundImage.src}
            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            width={backgroundImage.width}
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-black to-100%"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent from-85% to-black to-100%"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20 z-4">
            <div className="text-center text-white max-w-2md">
              <h1 className={`text-6xl font-bold mb-4 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {hobbyIntroProps.hobbies[currentIndex].content.title}
              </h1>
              <p className={`text-xl transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {hobbyIntroProps.hobbies[currentIndex].content.description}
              </p>
            </div>
          </div>
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out font-bold py-2 px-4 rounded-full z-10"
            onClick={handlePrevHobby}
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-full z-10"
            onClick={handleNextHobby}
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
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbyIntro;