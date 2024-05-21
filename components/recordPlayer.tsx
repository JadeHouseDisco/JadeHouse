"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const RecordPlayer: React.FC = () => {
  const [leftHeight, setLeftHeight] = useState<number | null>(null);
  const [isDraggingAndHovering, setIsDraggingAndHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const updateLeftHeight = () => {
      const leftContent = document.querySelector('.left-content') as HTMLElement | null;
      if (leftContent) {
        const leftContentHeight = leftContent.offsetHeight;
        setLeftHeight(leftContentHeight);
      }
    };
    // Initial update
    updateLeftHeight();
    // Update on resize
    window.addEventListener('resize', updateLeftHeight);
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateLeftHeight);
    };
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.id)
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingAndHovering(true);
    console.log("drag over")
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingAndHovering(false);
    console.log("drag leave")
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setIsPlaying(true);
    setIsDraggingAndHovering(false);
  };

  const handleDragEnd = () => {
    setIsDraggingAndHovering(false);
  };

  return (
    <>
      <div className="text-center my-8 pointer-events-none">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          All Time Favorites
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          Best songs in my collection
        </p>
      </div>
      <div className="flex mb-8">
        <div
          className="w-3/5 h-3/5 bg-black relative left-content" 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Left side content */}
          <div className="aspect-square">
            <Image src="/record_player.jpeg" alt="record_player" fill className="object-cover" />
            {!isPlaying && 
              <Image 
                src="/tonearm_off.png" 
                alt="tonearm_off" 
                fill 
                className="object-cover" 
              />
            }
            {(isDraggingAndHovering || isPlaying) && 
              <div className="absolute inset-0 flex items-center justify-center -translate-x-[4.5%] translate-y-[2%]">
                <div className={`relative w-[88%] h-[88%] ${isPlaying ? "animate-spinRecord" : "opacity-50"}`}>
                  <Image 
                    src="/music/blonde.jpeg" 
                    alt="Album Cover" 
                    fill 
                    style={{ borderRadius: '50%', objectFit: 'cover', maskImage: 'radial-gradient(circle at 50% 50%, transparent 20%, black 21%)' }} 
                  />
                  <div className="absolute inset-0 rounded-full border-[16px] border-white"></div>
                  <div className="absolute inset-0 rounded-full border-[10px] border-black"></div>
                  <div className="absolute w-[30%] h-[30%] bg-black rounded-full" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
            }
            {isPlaying && <Image src="/tonearm_on.png" alt="tonearm_on" fill className="object-cover" />}
          </div>
        </div>
        <div className="w-2/5 bg-black px-4 relative" style={{ maxHeight: leftHeight || 0 }}>
          {/* Right side content */}
          <div className="grid grid-cols-2 gap-4 p-4 h-full overflow-auto">
            <div
              id="song name"
              className="bg-gray-800 rounded-lg flex items-center justify-center text-white aspect-square transition duration-300 hover:scale-105 hover:cursor-pointer"
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <Image 
                src="/music/blonde.jpeg" 
                alt="song 1" 
                width="316" 
                height="316" 
                className="object-cover rounded-lg pointer-events-none" 
              />
            </div>
            <div className="bg-gray-800 rounded-lg flex items-center justify-center text-white aspect-square">
              Tile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;