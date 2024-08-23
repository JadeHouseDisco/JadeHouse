"use client"

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
  }[]
}

const SongGrid: React.FC<SongGridProps> = ({ songGridProps }) => {
  const [currentSong, setCurrentSong] = useState(0);

  const handlePrevious = () => {
    setCurrentSong((currentSong - 1 + songGridProps.length) % songGridProps.length);
  };

  const handleNext = () => {
    setCurrentSong((currentSong + 1) % songGridProps.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSong(index);
  };

  return (
    <div className="max-w-xl mx-20 mb-4">
      <h2 className="text-center text-4xl font-bold mb-8">Favorite Songs</h2>
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <div className="flex items-start">
          <Image 
            src={songGridProps[currentSong].image} 
            alt={songGridProps[currentSong].title} 
            className="w-64 h-64 object-cover mr-8"
            width= "544"
            height= "544" 
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{songGridProps[currentSong].title}</h2>
            <p className="text-gray-400 mb-2">{songGridProps[currentSong].artist}</p>
            <p className="text-gray-400">{songGridProps[currentSong].album}</p>
            <p className="mt-8 text-gray-300">{songGridProps[currentSong].description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <button onClick={handlePrevious} className="bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNext} className="bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out py-2 px-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex">
            {songGridProps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentSong ? 'bg-teal-500' : 'bg-gray-600'}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <Link 
            className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out" 
            href={songGridProps[currentSong].link}
            target="_blank"
          >
            Listen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SongGrid;