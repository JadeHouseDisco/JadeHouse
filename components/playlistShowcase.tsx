"use client";
import React, { useState, useEffect, useRef } from "react";
import NextImage from "next/image"; // ← rename to avoid colliding with DOM Image
import ImageCarousel from "./ui/imageCarousel/imageCarousel";

interface PlaylistItem {
  label: string;
  value: string;
  src: string;
  songs: {
    src: string;
    title: string;
    artist: string;
  }[];
  link: string;
}

interface PlaylistShowcaseProps {
  playlistShowcaseProps: {
    titleText: string;
    descriptionText: string;
    playlists: PlaylistItem[];
  };
}

const PlaylistShowcase: React.FC<PlaylistShowcaseProps> = ({ playlistShowcaseProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PlaylistItem | null>(playlistShowcaseProps.playlists[0]);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((o) => !o);

  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>, item: PlaylistItem) => {
    event.preventDefault();
    setIsVisible(false);

    // Use the DOM Image constructor explicitly
    const bgImage = new globalThis.Image();
    bgImage.src = item.src;

    const songImages = item.songs.map((song) => {
      const img = new globalThis.Image();
      img.src = song.src;
      return img;
    });

    const allImagesLoaded = Promise.all([
      new Promise<void>((resolve) => {
        bgImage.onload = () => resolve();
        bgImage.onerror = () => resolve(); // don’t block on errors
      }),
      ...songImages.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      ),
    ]);

    allImagesLoaded.then(() => {
      setTimeout(() => {
        setSelectedItem(item);
        setIsVisible(true);
      }, 300);
    });

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="text-center my-4 pointer-events-none">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
          {playlistShowcaseProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {playlistShowcaseProps.descriptionText}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-4">
        <div className="relative mb-4" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center w-72 px-4 py-2 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {selectedItem ? selectedItem.label : "Select a Playlist"}
          </button>

          <div
            className={`z-10 absolute top-full mt-2 w-72 rounded-md font-bold shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? "" : "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div role="none">
              {playlistShowcaseProps.playlists.map((item, index) => (
                <a
                  href="#"
                  className={`block px-4 py-3 text-sm text-center focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out ${
                    index === 0
                      ? playlistShowcaseProps.playlists.length === 1
                        ? "rounded-md y-1"
                        : "rounded-t-md t-1"
                      : index === playlistShowcaseProps.playlists.length - 1
                      ? "rounded-b-md b-1"
                      : ""
                  }`}
                  role="menuitem"
                  tabIndex={-1}
                  key={item.value}
                  onClick={(event) => handleSelect(event, item)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {selectedItem && (
          <div className={`relative mt-8 transition-all duration-300 ${isVisible ? "scale-100" : "scale-95"}`}>
            <NextImage
              alt="Background"
              className="h-full w-full object-cover object-center"
              height={800}
              src={selectedItem.src}
              style={{ aspectRatio: "1600/800", objectFit: "cover" }}
              width={1600}
              priority
            />
            <div className="absolute inset-0 bg-gray-900/50" />
            <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20 z-4">
              <div className="text-center text-white max-w-2md">
                <ImageCarousel songs={selectedItem.songs} link={selectedItem.link} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlaylistShowcase;
