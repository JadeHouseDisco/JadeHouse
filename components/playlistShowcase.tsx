"use client"
import React, { useState, useEffect, useRef } from 'react';
import ImageCarousel from './ui/imageCarousel/imageCarousel';

interface PlaylistItem {
  label: string;
  value: string;
  src: string;
  songs: {
    src: string;
    title: string;
    artist: string;
  }[];
}

interface PlaylistShowcaseProps {
  playlistShowcaseProps: {
    titleText: string;
    descriptionText: string;
    playlists: PlaylistItem[];
  }
}

const PlaylistShowcase: React.FC<PlaylistShowcaseProps> = ({ playlistShowcaseProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PlaylistItem | null>(playlistShowcaseProps.playlists[0]);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>, item: PlaylistItem) => {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    setIsVisible(false);
    setTimeout(() => {
      setSelectedItem(item);
      setIsVisible(true);
    }, 300); // Delay to sync with the transition duration
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedItem) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 300); // Match the transition duration
    }
  }, [selectedItem]);

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
            className="inline-flex justify-center w-48 px-4 py-2 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {selectedItem ? selectedItem.label : 'Select a Playlist'}
          </button>
          <div
            className={`z-10 absolute top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? '' : 'hidden'
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="" role="none">
              {playlistShowcaseProps.playlists.map((item, index) => (
                <a
                  href="#"
                  className={`block px-4 py-3 text-sm text-center focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out ${index === 0 ? playlistShowcaseProps.playlists.length === 1 ? "rounded-md y-1": "rounded-t-md t-1" : index === playlistShowcaseProps.playlists.length - 1 ? "rounded-b-md b-1" : ""}`}
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
          <div
            className={`relative mt-8 transition-all duration-300 ${
              isVisible ? 'scale-100' : 'scale-95'
            }`}
          >
            <img
              alt="Background"
              className="h-full w-full object-cover object-center"
              height="800"
              src={selectedItem.src}
              style={{ aspectRatio: '1600/800', objectFit: 'cover' }}
              width="1600"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gray-900/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center h-full space-y-20 z-4">
              <div className="text-center text-white max-w-2md">
                <ImageCarousel songs={selectedItem.songs}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlaylistShowcase;
