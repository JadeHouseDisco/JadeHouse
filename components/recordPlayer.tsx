"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { YoutubeIcon, YoutubeMusicIcon } from "@/components/icons"
import { StringToBoolean } from 'class-variance-authority/dist/types';

interface Song {
  title: string;
  artist: string;
  album: string;
  link: string;
  description: string;
  src: string;
}

interface RecordPlayerProps {
  recordPlayerProps: {
    titleText: string;
    descriptionText: string;
    songs: Song[];
  };
}

const RecordPlayer: React.FC<RecordPlayerProps> = ({ recordPlayerProps }) => {
  const [leftHeight, setLeftHeight] = useState<number | null>(null);
  const [songPlaying, setSongPlaying] = useState<string | null>(null);
  const [recordPlaying, setRecordPlaying] = useState<Song>();
  const [isDraggingAndHovering, setIsDraggingAndHovering] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const songDraggedRef = useRef<string>("");

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

  useEffect(() => {
    for (const song of recordPlayerProps.songs) {
      if (songPlaying === song.title) {
        setRecordPlaying(song)
      }
    }
  }, [songPlaying]);
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    songDraggedRef.current = e.currentTarget.id
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSongPlaying(songDraggedRef.current);
    setIsDraggingAndHovering(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingAndHovering(false);
  };

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setIsPlaying(true);
    setSongPlaying(songDraggedRef.current);
    setIsDraggingAndHovering(false);
  };

  const handleDragEnd = () => {
    setIsDraggingAndHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return (
    <>
      <div className="text-center my-8 pointer-events-none">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {recordPlayerProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {recordPlayerProps.descriptionText}
        </p>
      </div>
      <div className="flex mb-8">
        <div
          className="w-3/5 h-3/5 bg-black relative left-content" 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave}
          onDrop={handleDragDrop}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side content */}
          <div className="aspect-square">
            <Image 
              src="/record_player.jpeg" 
              alt="record_player" 
              fill 
              className="object-cover" 
            />
            {!isPlaying && 
              <Image 
                src="/tonearm_off.png" 
                alt="tonearm_off" 
                fill 
                className="object-cover" 
              />
            }
            {((isDraggingAndHovering || isPlaying) && recordPlaying) && 
              <div className="absolute inset-0 flex items-center justify-center -translate-x-[4.5%] translate-y-[2%]">
                <div className={`relative w-[88%] h-[88%] ${isPlaying ? "animate-spinRecord" : "opacity-50"}`}>
                  <Image 
                    src={recordPlaying.src}
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
          {(isHovering && (!isDraggingAndHovering && !isPlaying)) && 
            <>
              <div className="absolute inset-0 bg-gray-900/50"></div>
              <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20">
                <div className="text-center text-white max-w-lg mx-auto">
                  <h1 className="text-6xl font-bold mb-4">Drag songs into the record player!</h1> 
                </div>
              </div>
            </>
          }
        </div>
        <div className="w-2/5 bg-black px-4 relative" style={{ maxHeight: leftHeight || 0 }}>
          {/* Right side content */}
          <div className="grid grid-cols-2 gap-4 p-2 h-full overflow-auto">
            {recordPlayerProps.songs.map((song, index) => (
              <div
                id={song.title}
                key={index}
                className="bg-gray-800 rounded-lg flex items-center justify-center text-white aspect-square transition duration-300 hover:scale-105 hover:cursor-pointer"
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <Image 
                  src={song.src} 
                  alt={song.title}
                  width="544" 
                  height="544" 
                  className="object-cover rounded-lg pointer-events-none" 
                />
              </div>
            ))}
            {(isPlaying && recordPlaying) &&
              <>
                <div className="absolute inset-0 bg-black/90"></div>
                <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20">
                  <div className="text-white mx-auto max-w-lg">
                    <Image 
                      src={recordPlaying.src}
                      alt={recordPlaying.title}
                      width="544" 
                      height="544" 
                      className="object-cover rounded-lg pointer-events-none mb-8" 
                    />
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-4xl font-bold">{recordPlaying.title}</h1>
                      <a className="" href={recordPlaying.link} target="_blank">
                        <YoutubeMusicIcon className="h-8 w-8" />
                      </a>
                    </div>
                    <p className="text-xl font-bold">{recordPlaying.artist}</p>
                    <p className="text-lg mb-4">{recordPlaying.album}</p>
                    <p className="text-lg mb-4">{recordPlaying.description}</p>
                    <button
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      onClick={() => setIsPlaying(false)}
                    >
                      Remove Record
                    </button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;