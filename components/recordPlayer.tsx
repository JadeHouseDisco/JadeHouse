"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { YoutubeMusicIcon } from "@/components/icons";

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
  const [songPlaying, setSongPlaying] = useState<string | null>(null);
  const [recordPlaying, setRecordPlaying] = useState<Song>(recordPlayerProps.songs[0]);
  const [isDraggingAndHovering, setIsDraggingAndHovering] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const songDraggedRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
  }, [songPlaying]);

  useEffect(() => {
    const song = recordPlayerProps.songs.find((s) => s.title === songPlaying);
    if (song) setRecordPlaying(song);
  }, [songPlaying, recordPlayerProps.songs]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    songDraggedRef.current = e.currentTarget.id;
    setIsLoading(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSongPlaying(songDraggedRef.current);
    setIsDraggingAndHovering(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingAndHovering(false);
    setIsLoading(true);
  };

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPlaying(true);
    setSongPlaying(songDraggedRef.current);
    setIsDraggingAndHovering(false);
  };

  const handleDragEnd = () => {
    setIsDraggingAndHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const removeRecord = () => {
    setIsLoading(true);
    setIsPlaying(false);
  };

  const playSong = (song: Song) => {
    setIsLoading(true);
    setRecordPlaying(song);
    setSongPlaying(song.title);
    setIsPlaying(true);
  };

  return (
    <>
      <div className="mx-auto my-8 max-w-4xl px-4 text-center pointer-events-none sm:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {recordPlayerProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {recordPlayerProps.descriptionText}
        </p>
      </div>
      <div className="relative mx-auto mb-8 flex w-full max-w-[1600px] flex-col lg:block lg:aspect-[5/3]">
        <div
          className="relative z-10 aspect-square w-full bg-black lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-3/5 lg:aspect-auto"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDragDrop}
        >
          <div className="relative aspect-square lg:h-full lg:aspect-auto">
            <Image
              src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/record_player.jpeg?raw=true"
              alt="record_player"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1023px) 100vw, 60vw"
            />
            {!isPlaying && (
              <Image
                src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/tonearm_off.png?raw=true"
                alt="tonearm_off"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
            )}
            {((isDraggingAndHovering || isPlaying) && recordPlaying) && (
              <div className="absolute inset-0 flex items-center justify-center -translate-x-[4.5%] translate-y-[2%] pointer-events-none">
                <div className={`relative w-[88%] h-[88%] ${isPlaying ? "animate-spinRecord" : "opacity-50"}`}>
                  <Image
                    src={recordPlaying.src}
                    alt="Album Cover"
                    fill
                    placeholder="blur"
                    blurDataURL="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/blur.png?raw=true"
                    loading="lazy"
                    sizes="(max-width: 1023px) 88vw, 53vw"
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover',
                      maskImage: 'radial-gradient(circle at 50% 50%, transparent 20%, black 21%)',
                    }}
                    onLoad={() => setTimeout(() => setIsLoading(false), 50)}
                    className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                  />
                  {!isLoading && (
                    <>
                      <div className="absolute inset-0 rounded-full border-[16px] border-white"></div>
                      <div className="absolute inset-0 rounded-full border-[10px] border-black"></div>
                      <div
                        className="absolute w-[30%] h-[30%] bg-black rounded-full"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                      ></div>
                    </>
                  )}
                </div>
              </div>
            )}
            {isPlaying && (
              <Image
                src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/recordPlayer/tonearm_on.png?raw=true"
                alt="tonearm_on"
                fill
                className="object-cover pointer-events-none"
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
            )}
          </div>
          {isHovering && !isDraggingAndHovering && !isPlaying && (
            <>
              <div className="absolute inset-0 bg-gray-900/50"></div>
              <div className="absolute inset-0 flex h-full flex-col justify-center px-8">
                <div className="text-center text-white max-w-lg mx-auto">
                  <h1 className="text-[clamp(2rem,6vw,3.75rem)] font-bold leading-tight">Drop songs into the record player!</h1>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="relative h-[70svh] min-h-0 w-full overflow-hidden bg-black px-2 py-4 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-2/5 lg:px-4">
          <div className="grid h-full min-h-0 grid-cols-2 gap-3 overflow-y-auto overscroll-contain p-2 sm:grid-cols-3 lg:grid-cols-2 lg:gap-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {recordPlayerProps.songs.map((song, index) => (
              <div
                id={song.title}
                key={index}
                className="bg-gray-800 rounded-lg flex items-center justify-center text-white aspect-square transition duration-300 hover:scale-105 hover:cursor-pointer"
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={() => playSong(song)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") playSong(song);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Play ${song.title} by ${song.artist}`}
              >
                <Image
                  src={song.src}
                  alt={song.title}
                  width="544"
                  height="544"
                  className="object-cover rounded-lg pointer-events-none"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/blur.png?raw=true"
                />
              </div>
            ))}
          </div>
          {isPlaying && recordPlaying && (
              <div className="absolute inset-0 z-20 overflow-y-auto bg-black/90">
                <div className="flex min-h-full items-center justify-center px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
                  <div className="w-full max-w-lg text-white md:max-w-xl lg:max-w-2xl">
                    <Image
                      src={recordPlaying.src}
                      alt={recordPlaying.title}
                      width="544"
                      height="544"
                      className="object-cover rounded-lg pointer-events-none mb-4 md:mb-6 lg:mb-8 mx-auto"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/blur.png?raw=true"
                    />
                    <div className="mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center md:mb-4">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-0">
                        {recordPlaying.title}
                      </h1>
                      <a className="sm:ml-auto" href={recordPlaying.link} target="_blank" rel="noreferrer" aria-label={`Listen to ${recordPlaying.title} on YouTube Music`}>
                        <YoutubeMusicIcon className="h-6 md:h-8 w-6 md:w-8" />
                      </a>
                    </div>
                    <p className="text-lg md:text-xl font-bold mb-2">{recordPlaying.artist}</p>
                    <p className="text-base md:text-lg mb-2 md:mb-4">{recordPlaying.album}</p>
                    <p
                      style={{ lineHeight: '1.4' }}
                      className="text-base md:text-lg mb-4 md:mb-6 tracking-tight"
                    >
                      {recordPlaying.description}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-8 md:h-10 px-3 md:px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out mx-auto"
                      onClick={removeRecord}
                    >
                      Remove Record
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default RecordPlayer;
