"use client"

import React, { useEffect, useState } from 'react';
import PhotoAlbumGrid from './ui/photoAlbumGrid';

interface FamilyIntroProps {
  familyIntroProps: {
    titleText: string;
    descriptionText: string;
    images: {
      src: string;
      map: {
        name: string;
        areas: {
          name: string;
          shape: string;
          fillColor: string;
          strokeColor: string;
          preFillColor: string;
          coords: number[];
          popup: {
            titleText: string;
            nicknameText: string;
            descriptionText: string;
            photos: { 
              src: string; 
              width: number; 
              height: number; 
            }[];
          }
        }[];
      };
      originalWidth: number;
      areaTranslateX: number;
      areaTranslateY: number;
    }[];
  }
}

const transformArray = (coordinates: number[]): number[][] => {
  const result: number[][] = [];
  for (let index = 0; index < coordinates.length; index += 2) {
    result.push([coordinates[index], coordinates[index + 1]]);
  }
  return result;
};

const FamilyIntro: React.FC<FamilyIntroProps> = ({ familyIntroProps }) => {
  //Variable for images and areas

  const [images, setImages] = useState(familyIntroProps.images)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  //Image scaling
  useEffect(() => {
    const updateMapCoords = () => {
      const screenWidth = document.documentElement.clientWidth;
      setImages(familyIntroProps.images.map((image) => {
        const scaleFactor = screenWidth / image.originalWidth;
        const updatedAreas = image.map.areas.map(area => {
          const scaledCoords = area.coords.map((coord: number, index) => 
            index % 2 === 0 
            ? coord * scaleFactor + image.areaTranslateX
            : coord * scaleFactor + image.areaTranslateY
          );
          const scaledPolygon = transformArray(scaledCoords)
          return { ...area, coords: scaledCoords, polygon: scaledPolygon };
        });

        return { ...image, map: { ...image.map, areas: updatedAreas } };
      }));
    };

    // Initial update
    updateMapCoords();

    // Update on resize
    window.addEventListener('resize', updateMapCoords, { passive: true });
    return () => {
      window.removeEventListener('resize', updateMapCoords);
    };
  }, [familyIntroProps.images]);

  //handle clicking on image area
  interface AreaData {
    name?: string;
  }

  interface PopUp {
    titleText: string;
    nicknameText: string;
    descriptionText: string;
    photos: { 
      src: string; 
      width: number; 
      height: number; 
    }[];
  }

  const [popUp, setPopUp] = useState<PopUp | null>(null);

  useEffect(() => {
    if (!popUp) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPopUp(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [popUp]);

  const handleClick = (area: AreaData) => {
    if (area.name) {
      for (const image of images) {
        for (const imageArea of image.map.areas) {
          if (imageArea.name === area.name) {
            setPopUp(imageArea.popup)
          }
        }
      }
    }
  }

  const handleClosePopup = () => {
    setPopUp(null);
  }

  return (
    <>
      <div className="mx-auto mb-8 max-w-4xl space-y-4 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {familyIntroProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {familyIntroProps.descriptionText}
        </p>
      </div>
      {images.map((image, index) => (
        <div key={image.src} className="relative w-full mb-4">
          <div className="relative">
            {/* Native image maps provide accessible polygon hit areas. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt="Family portrait"
              useMap={`#family-map-${index}`}
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
            <map name={`family-map-${index}`}>
              {image.map.areas.map((area) => (
                <area
                  key={area.name}
                  shape={area.shape}
                  coords={area.coords.join(',')}
                  href="#family-details"
                  alt={area.name}
                  aria-label={area.name}
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                  onFocus={() => setHoveredArea(area.name)}
                  onBlur={() => setHoveredArea(null)}
                  onClick={(event) => {
                    event.preventDefault();
                    handleClick(area);
                  }}
                />
              ))}
            </map>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
            >
              {image.map.areas.map((area) => (
                <polygon
                  key={`${area.name}-highlight`}
                  points={transformArray(area.coords).map(([x, y]) => `${x},${y}`).join(' ')}
                  fill={hoveredArea === area.name ? area.fillColor : area.preFillColor}
                  stroke={area.strokeColor}
                  strokeWidth="1"
                  className="transition-colors duration-200"
                />
              ))}
            </svg>
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-transparent from-80% to-black to-100%" />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 pt-3 sm:grid-cols-3 md:hidden">
            {image.map.areas.map((area) => (
              <button
                key={`${area.name}-mobile`}
                type="button"
                className="min-h-11 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 font-semibold capitalize hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a896]"
                onClick={() => handleClick(area)}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>
      ))}
      {popUp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-3 sm:p-6"
          onClick={handleClosePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="family-dialog-title"
        >
          <div id="family-details" className="mx-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-y-auto rounded-lg bg-gray-900 text-white md:flex-row sm:max-h-[calc(100dvh-3rem)]" onClick={(e) => e.stopPropagation()}>
            <div className="w-full px-4 pt-4 md:w-3/4 md:py-6 md:pl-6 md:pr-2">
              <PhotoAlbumGrid photoAlbumGridProps={popUp.photos} />
            </div>
            <div className="flex w-full flex-col justify-center p-4 md:w-1/4">
              <div className="flex items-start justify-between gap-2">
                <h3 id="family-dialog-title" className="text-2xl font-bold">{popUp.titleText}</h3>
                <button type="button" onClick={handleClosePopup} aria-label="Close details" className="rounded px-2 py-1 text-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">×</button>
              </div>
              <p className="text-sm text-gray-400 mb-4">{popUp.nicknameText}</p>
              <p className="">{popUp.descriptionText}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default FamilyIntro;
