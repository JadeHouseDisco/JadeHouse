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
    setSelectedItem(item);
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
      <div className="mx-auto my-4 max-w-4xl px-4 text-center pointer-events-none sm:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
          {playlistShowcaseProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {playlistShowcaseProps.descriptionText}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mb-4">
        {/* Dropdown */}
        <div className="relative mb-4 w-[calc(100%-2rem)] max-w-72" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-gray-50 px-4 py-2 font-bold text-gray-900 transition-colors hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-[#00a896]"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {selectedItem ? selectedItem.label : "Select a Playlist"}
          </button>

          <div
            className={`z-20 absolute top-full mt-2 w-full rounded-md font-bold shadow-lg bg-white ring-1 ring-black/10 focus:outline-none ${isOpen ? "" : "hidden"}`}
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
            className={`relative min-w-0 w-full overflow-hidden transition-transform duration-300 ${isVisible ? "scale-100" : "scale-95"}`}
          >
            {/* Aspect ratio controls banner height */}
            <div className="relative min-h-[30rem] w-full sm:min-h-[36rem] lg:aspect-[16/7] lg:min-h-0">
              <NextImage
                key={selectedItem.src}
                alt=""
                src={selectedItem.src}
                fill
                sizes="100vw"
                className="object-cover"
                onLoad={() => setIsVisible(true)}
                onError={() => setIsVisible(true)}
              />
              <div className="absolute inset-0 bg-black/50 z-0" />

              {/* Grid: [carousel][spacer 1fr][button][spacer 1fr] */}
              <div className="absolute inset-0 z-10 grid min-w-0 grid-rows-[auto_1fr_auto_1fr] justify-items-center overflow-hidden px-4">
                <div className="min-w-0 w-full max-w-6xl overflow-hidden">
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
