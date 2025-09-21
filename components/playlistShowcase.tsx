"use client";
import React, { useState, useEffect, useRef } from "react";
import NextImage from "next/image";
import ImageCarousel from "./ui/imageCarousel/imageCarousel";

interface PlaylistItem {
  label: string;
  value: string;
  src: string; // background image
  songs: { src: string; title: string; artist: string }[];
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
  const [selectedItem, setSelectedItem] = useState<PlaylistItem | null>(
    playlistShowcaseProps.playlists[0] ?? null
  );
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(o => !o);

  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>, item: PlaylistItem) => {
    event.preventDefault();
    setIsVisible(false);

    // Preload images to avoid flicker
    const bg = new globalThis.Image();
    bg.src = item.src;
    const songImgs = item.songs.map(s => {
      const im = new globalThis.Image();
      im.src = s.src;
      return im;
    });

    Promise.all([
      new Promise<void>(r => { bg.onload = () => r(); bg.onerror = () => r(); }),
      ...songImgs.map(im => new Promise<void>(r => { im.onload = () => r(); im.onerror = () => r(); })),
    ]).then(() => {
      setTimeout(() => { setSelectedItem(item); setIsVisible(true); }, 300);
    });

    setIsOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
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
        {/* Dropdown */}
        <div className="relative mb-4" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center w-72 px-4 py-2 font-bold rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {selectedItem ? selectedItem.label : "Select a Playlist"}
          </button>

          <div
            className={`z-20 absolute top-full mt-2 w-72 rounded-md font-bold shadow-lg bg-white ring-1 ring-black/10 focus:outline-none ${isOpen ? "" : "hidden"}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div role="none">
              {playlistShowcaseProps.playlists.map((item, index) => (
                <a
                  href="#"
                  key={item.value}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={(e) => handleSelect(e, item)}
                  className={`block px-4 py-3 text-sm text-center focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors ${
                    index === 0
                      ? (playlistShowcaseProps.playlists.length === 1 ? "rounded-md" : "rounded-t-md")
                      : index === playlistShowcaseProps.playlists.length - 1
                      ? "rounded-b-md"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Banner with overlayed carousel + midpoint button */}
        {selectedItem && (
          <section
            className={`relative w-full transition-transform duration-300 ${isVisible ? "scale-100" : "scale-95"}`}
          >
            {/* Aspect ratio controls banner height */}
            <div className="relative w-full aspect-[2/1] md:aspect-[16/7] lg:aspect-[16/6]">
              <NextImage alt="Background" src={selectedItem.src} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-black/50 z-0" />

              {/* Grid: [carousel][spacer 1fr][button][spacer 1fr] */}
              <div className="absolute inset-0 z-10 grid grid-rows-[auto_1fr_auto_1fr] justify-items-center px-4">
                <div className="w-full max-w-6xl">
                  <ImageCarousel songs={selectedItem.songs} link={selectedItem.link} />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PlaylistShowcase;
