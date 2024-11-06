"use client";

import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
import Image from 'next/image';
import { YoutubeMusicIcon_black } from "@/components/icons";

type Song = {
    songSrc: string;
    songLink: string;
    songTitle: string;
    songArtist: string;
    description: string;
    memoryName: string;
    photos: {
        src: string;
        width: number;
        height: number;
    }[];
};

type AudibleMemoriesProps = {
    audibleMemoriesProps: {
        titleText: string;
        descriptionText: string;
        songs: Song[];
    }
};

const AudibleMemories: React.FC<AudibleMemoriesProps> = ({ audibleMemoriesProps }) => {
    const pageFlipRef = useRef<HTMLDivElement>(null);
    const loadedImages = useRef(new Set<string>()); // Track loaded images

    const preloadImage = (src: string) => {
        if (!loadedImages.current.has(src)) {
            const img = document.createElement('img'); // Create an image element
            img.src = src;
            img.onload = () => loadedImages.current.add(src);
        }
    };

    useEffect(() => {
        // Preload static images (front, back, left, and right pages)
        const staticImages = [
            "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/front.jpg?raw=true",
            "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/back.jpg?raw=true",
            "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/left.jpg?raw=true",
            "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/right.jpg?raw=true"
        ];
        
        // Preload song images and photo thumbnails
        const allImages = [
            ...staticImages,
            ...audibleMemoriesProps.songs.map(song => song.songSrc),
            ...audibleMemoriesProps.songs.flatMap(song => song.photos.map(photo => photo.src))
        ];

        allImages.forEach(preloadImage);
    }, [audibleMemoriesProps.songs]);

    return (
        <>
        <div className="text-center mt-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {audibleMemoriesProps.titleText}
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
                {audibleMemoriesProps.descriptionText}
            </p>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen px-20 mb-8">
            <HTMLFlipBook 
                width={600}
                height={600}
                size="stretch"
                minWidth={315}
                minHeight={420}
                maxWidth={1000}
                maxHeight={1350}
                drawShadow={true}
                flippingTime={700}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="page-flip-book"
                style={{}}
                startPage={0}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={10}
                showPageCorners={true}
                disableFlipByClick={false}
                ref={pageFlipRef}
            >
                <div> 
                    <Image 
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/front.jpg?raw=true" 
                        alt="front" 
                        fill 
                        className="object-cover border-white"
                        priority={true}
                    />
                </div>
                {audibleMemoriesProps.songs.map((song, index) => (
                    [
                    <div key={`${index}-left`} className="relative">
                        <Image 
                            src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/left.jpg?raw=true"
                            alt="left" 
                            fill 
                            className="object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-90% to-black/60 to-100%"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center h-full px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 z-10">
                            <div className="text-black max-w-lg md:max-w-xl lg:max-w-2xl pt-2 md:pt-6 lg:pt-10">
                                <Image
                                    src={song.songSrc}
                                    alt={song.songTitle}
                                    width="544"
                                    height="544"
                                    className="object-cover h-64 w-64 xl:h-96 xl:w-96 mx-auto mb-8"
                                    priority
                                />
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                                        {song.songTitle}
                                    </h1>
                                    <a
                                        className="ml-auto"
                                        href={song.songLink}
                                        target="\\\_blank"
                                    >
                                        <YoutubeMusicIcon_black className="h-6 md:h-8 w-6 md:w-8" />
                                    </a>
                                </div>
                                <p className="text-xs font-bold md:text-base mb-2">{song.songArtist}</p>
                                <p style={{ lineHeight: '1.4' }} className="text-xs md:text-base font-semibold mb-4 md:mb-6 tracking-tight">
                                    {song.description}
                                </p>
                            </div>
                        </div>
                    </div>,
                    <div key={`${index}-right`} className="relative">
                        <Image 
                            src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/right.jpg?raw=true"
                            alt="right" 
                            fill 
                            className="object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent from-90% to-black/60 to-100%"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="mb-4 text-black text-2xl font-bold">
                                {song.memoryName}
                            </div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                {song.photos.map((photo, index) => (
                                    <div key={index} className="relative w-48 h-48 xl:w-64 xl:h-64">
                                        <Image 
                                            src={photo.src}
                                            alt={`photo-${index}`}
                                            fill
                                            className="object-cover rounded-md"
                                            priority
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    ]
                ))}
                <div> 
                    <Image 
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/audibleMemories/back.jpg?raw=true" 
                        alt="back" 
                        fill 
                        className="object-cover" 
                    />
                </div>
            </HTMLFlipBook>
        </div>
        </>
    );
};

export default AudibleMemories;