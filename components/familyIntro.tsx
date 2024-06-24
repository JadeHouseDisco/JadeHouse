"use client"

import React, { useEffect, useState } from 'react';
import ImageMapper from 'react-img-mapper';
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

const FamilyIntro: React.FC<FamilyIntroProps> = ({ familyIntroProps }) => {
  //Variable for images and areas

  const [images, setImages] = useState(familyIntroProps.images)

  const transformArray = (arr: number[]): number[][] => {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push([arr[i], arr[i + 1]]);
    }
    return result;
  };

  //Image scaling
  useEffect(() => {
    
    const screenWidth = window.innerWidth;

    const updateMapCoords = () => {
      for (const image of images) {
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
        
        setImages(prevImages => 
          prevImages.map((img) => 
            img.src === image.src 
            ? { ...img, map: { ...img.map, areas: updatedAreas } }
            : img
          )
        );
      }
    };

    // Initial update
    updateMapCoords();

    // Update on resize
    window.addEventListener('resize', updateMapCoords);
    return () => {
      window.removeEventListener('resize', updateMapCoords);
    };
  }, []);

  //handle clicking on image area
  interface AreaData {
    center?: number[];
    coords: number[];
    fillColor?: string;
    name?: string;
    polygon?: string;
    preFillColor?: string;
    scaledCoords: number[];
    shape: string;
    strokeColor?: string;
    popup?: {
      titleText: string;
      nicknameText: string;
      descriptionText: string;
      photos: { 
        src: string; 
        width: number; 
        height: number;
      }[];
    }
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
    if (popUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popUp]);

  const handleClick = (area: AreaData, index: number, e: React.MouseEvent<HTMLAreaElement>) => {
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
      <div className="space-y-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {familyIntroProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {familyIntroProps.descriptionText}
        </p>
      </div>
      {images.map((image, index) => (
        <div key={index} className="relative w-full mb-4">
          <ImageMapper src={image.src} map={image.map} onClick={handleClick}/>
          <div className="z-10 absolute inset-0 bg-gradient-to-t from-transparent from-80% to-black to-100% pointer-events-none" />
          <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100% pointer-events-none" />
        </div>
      ))}
      {popUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-10 overflow-y-auto p-4" onClick={handleClosePopup}>
          <div className="bg-gray-900 text-white rounded-lg max-w-5xl mx-auto flex overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="w-3/4 py-6 pl-6 pr-2">
              <PhotoAlbumGrid photoAlbumGridProps={popUp.photos} />
            </div>
            <div className="w-1/4 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-bold ">{popUp.titleText}</h3>
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