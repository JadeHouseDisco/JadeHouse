"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SongGridProps {
  songGridProps: {
    image: string;
    title: string;
    artist: string;
    album: string;
    description: string;
    link: string;
  }[];
}

const SongGrid: React.FC<SongGridProps> = ({ songGridProps }) => {
  const [currentSong, setCurrentSong] = useState(0);

  if (songGridProps.length === 0) return null;

  const handlePrevious = () => {
    setCurrentSong((current) => (current - 1 + songGridProps.length) % songGridProps.length);
  };

  const handleNext = () => {
    setCurrentSong((current) => (current + 1) % songGridProps.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSong(index);
  };

  return (
    <div className="container max-w-2xl px-4 md:px-6 mx-auto">
      <h2 className="mb-8 text-center text-[clamp(2rem,6vw,2.5rem)] font-bold">Favorite Songs</h2>
      <div className="rounded-lg bg-gray-800 p-4 text-white shadow-lg sm:p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <Image 
            src={songGridProps[currentSong].image} 
            alt={songGridProps[currentSong].title} 
            className="mx-auto h-40 w-40 shrink-0 rounded-md object-cover sm:mx-0 sm:h-32 sm:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
            width="544"
            height="544" 
            sizes="(max-width: 1024px) 128px, (max-width: 1280px) 192px, 256px"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{songGridProps[currentSong].title}</h2>
            <p className="text-gray-400 mb-2">{songGridProps[currentSong].artist}</p>
            <p className="text-gray-400">{songGridProps[currentSong].album}</p>
            <p className="mt-8 text-gray-300">{songGridProps[currentSong].description}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex">
            <button type="button" aria-label="Previous song" onClick={handlePrevious} className="bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button type="button" aria-label="Next song" onClick={handleNext} className="bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="order-3 flex w-full justify-center sm:order-none sm:w-auto">
            {songGridProps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show ${songGridProps[index].title}`}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentSong ? 'bg-teal-500' : 'bg-gray-600'}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <Link 
            className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out" 
            href={songGridProps[currentSong].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SongGrid;
