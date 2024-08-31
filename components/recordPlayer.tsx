"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { YoutubeMusicIcon } from "@/components/icons"

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
  const [recordPlaying, setRecordPlaying] = useState<Song>(recordPlayerProps.songs[0]);
  const [isDraggingAndHovering, setIsDraggingAndHovering] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const songDraggedRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    setIsLoading(true);
  }, [songPlaying]);

  useEffect(() => {
    for (const song of recordPlayerProps.songs) {
      if (songPlaying === song.title) {
        setRecordPlaying(song)
      }
    }
  }, [songPlaying]);
  
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    songDraggedRef.current = e.currentTarget.id
    setIsLoading(true)
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSongPlaying(songDraggedRef.current);
    setIsDraggingAndHovering(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingAndHovering(false);
    setIsLoading(true)
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

  const removeRecord = () => {
    setIsLoading(true)
    setIsPlaying(false)
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
          className="w-3/5 h-3/5 bg-black relative left-content z-10" 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave}
          onDrop={handleDragDrop}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side content */}
          <div className="aspect-square">
            <Image 
              src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/record_player.jpeg?raw=true" 
              alt="record_player" 
              fill 
              className="object-cover"
              priority
            />
            {!isPlaying && 
              <Image 
                src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/tonearm_off.png?raw=true" 
                alt="tonearm_off" 
                fill 
                className="object-cover" 
                priority
              />
            }
            {((isDraggingAndHovering || isPlaying) && recordPlaying) && 
              <div className="absolute inset-0 flex items-center justify-center -translate-x-[4.5%] translate-y-[2%] pointer-events-none">
                <div className={`relative w-[88%] h-[88%] ${isPlaying ? "animate-spinRecord" : "opacity-50"}`}>
                  <Image
                    src={recordPlaying.src}
                    alt="Album Cover"
                    fill
                    placeholder="blur"
                    blurDataURL="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/blur.jpg?raw=true"
                    style={{ borderRadius: '50%', objectFit: 'cover', maskImage: 'radial-gradient(circle at 50% 50%, transparent 20%, black 21%)' }}
                    onLoadingComplete={() => setTimeout(() => setIsLoading(false), 50)}
                    className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                  />
                  {!isLoading && (
                      <>
                        <div className="absolute inset-0 rounded-full border-[16px] border-white"></div>
                        <div className="absolute inset-0 rounded-full border-[10px] border-black"></div>
                        <div className="absolute w-[30%] h-[30%] bg-black rounded-full" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                      </>
                    )}
                </div>
              </div>
            }
            {isPlaying && <Image src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/tonearm_on.png?raw=true" alt="tonearm_on" fill className="object-cover pointer-events-none" priority/>}
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
                <div className="absolute inset-0 flex flex-col items-center justify-center h-full px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 overflow-auto">
                  <div className="text-white max-w-lg md:max-w-xl lg:max-w-2xl pt-2 md:pt-6 lg:pt-10">
                    <Image
                      src={recordPlaying.src}
                      alt={recordPlaying.title}
                      width="544"
                      height="544"
                      className="object-cover rounded-lg pointer-events-none mb-4 md:mb-6 lg:mb-8 mx-auto"
                      priority
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between mb-2 md:mb-4">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-0">
                        {recordPlaying.title}
                      </h1>
                      <a
                        className="ml-auto"
                        href={recordPlaying.link}
                        target="\\\_blank"
                      >
                        <YoutubeMusicIcon className="h-6 md:h-8 w-6 md:w-8" />
                      </a>
                    </div>
                    <p className="text-lg md:text-xl font-bold mb-2">{recordPlaying.artist}</p>
                    <p className="text-base md:text-lg mb-2 md:mb-4">{recordPlaying.album}</p>
                    <p style={{ lineHeight: '1.4' }} className="text-base md:text-lg mb-4 md:mb-6 tracking-tight">{recordPlaying.description}</p>
                    <button
                      className="inline-flex items-center justify-center h-8 md:h-10 px-3 md:px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out mx-auto"
                      onClick={() => removeRecord()}
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