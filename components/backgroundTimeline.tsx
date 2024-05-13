"use client"

import React, { useState } from 'react';

interface Timestamp {
  location: string;
  date: string;
  description: string;
  photos: string[];
  detailedDescription: string;
}

interface BackgroundTimelineProps {
  backgroundTimelineProps: {
    titleText: string;
    timeStamps: Timestamp[];
  }
}

const BackgroundTimeline: React.FC<BackgroundTimelineProps> = ({ backgroundTimelineProps }) => {
  const [activeTimestamp, setActiveTimestamp] = useState<Timestamp | null>(null);

  const handleTimestampClick = (timestamp: Timestamp) => {
    setActiveTimestamp(timestamp);
  };

  const handleClosePopup = () => {
    setActiveTimestamp(null);
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-200 text-center">{backgroundTimelineProps.titleText}</h2>
      </div>
      <div className="flex justify-center items-start min-h-screen p-6 sm:p-10">
        <div className="relative w-full max-w-2xl after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-gray-400/20 grid gap-10">
          {backgroundTimelineProps.timeStamps.map((timeStamp, index) => (
            <div
              key={index}
              className="grid gap-4 text-sm relative"
              onClick={() => handleTimestampClick(timeStamp)}
            >
              <div className="aspect-square w-3 rounded-full absolute left-1/2 -translate-x-1/2 z-10 top-0 bg-gray-50" />
              <div className={`bg-gray-900 p-4 rounded-md shadow-sm border border-gray-800 grid gap-2 ${index % 2 === 0 ? "justify-self-start" : "justify-self-end"} w-[calc(50%_-_2rem)] cursor-pointer hover:scale-105 transition-transform duration-300`}>
                <div className="text-lg font-medium">{timeStamp.location}</div>
                <div className="font-medium text-gray-400">{timeStamp.date}</div>
                <div className="text-gray-400">
                  {timeStamp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeTimestamp && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={handleClosePopup}
        >
          <div
            className="bg-gray-800 text-white p-8 rounded-lg max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{activeTimestamp.location}</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {activeTimestamp.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
            <p>{activeTimestamp.detailedDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundTimeline;