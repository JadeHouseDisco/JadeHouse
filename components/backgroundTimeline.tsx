"use client"
import React, { useState, useEffect } from 'react';
import PhotoAlbumGrid from '@/components/ui/photoAlbumGrid';

interface Timestamp {
  title: string;
  location: string;
  date: string;
  description: string;
  photos: { src: string; width: number; height: number; }[];
  detailedDescription: string;
}

interface BackgroundTimelineProps {
  backgroundTimelineProps: {
    titleText: string;
    descriptionText: string;
    timeStamps: Timestamp[];
  }
}

const BackgroundTimeline: React.FC<BackgroundTimelineProps> = ({ backgroundTimelineProps }) => {
  const [activeTimestamp, setActiveTimestamp] = useState<Timestamp | null>(null);

  useEffect(() => {
    if (!activeTimestamp) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveTimestamp(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeTimestamp]);

  const handleTimestampClick = (timestamp: Timestamp) => {
    setActiveTimestamp(timestamp);
  };

  const handleClosePopup = () => {
    setActiveTimestamp(null);
  };

  return (
    <>
      <div className="mx-auto mt-8 mb-8 max-w-4xl space-y-4 px-4 text-center sm:px-6">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold text-gray-200">
          {backgroundTimelineProps.titleText}
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
          {backgroundTimelineProps.descriptionText}
        </p>
      </div>
      <div className="flex min-h-screen items-start justify-center px-4 py-6 sm:p-10">
        <div className="relative grid w-full max-w-4xl gap-8 pl-8 after:absolute after:inset-y-0 after:left-1.5 after:w-px after:bg-gray-400/30 sm:gap-10 md:pl-0 md:after:left-1/2">
          {backgroundTimelineProps.timeStamps.map((timeStamp, index) => (
            <button
              type="button"
              key={`${timeStamp.date}-${timeStamp.title}`}
              className="relative grid gap-4 text-left text-sm"
              onClick={() => handleTimestampClick(timeStamp)}
            >
              <div className="absolute left-[-1.625rem] top-0 z-10 aspect-square w-3 rounded-full bg-gray-50 md:left-1/2 md:-translate-x-1/2" />
              <div
                className={`grid w-full rounded-md border border-gray-800 bg-gray-900 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-[calc(50%_-_2rem)] ${
                  index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"
                }`}
              >
                <div className="text-lg font-bold mb-2">{timeStamp.title}</div>
                <div className="text-s font-medium">{timeStamp.date}</div>
                <div className="text-xs text-gray-400 mb-2">{timeStamp.location}</div>
                <div className="text-gray-400">{timeStamp.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeTimestamp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-3 sm:p-6"
          onClick={handleClosePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="timeline-dialog-title"
        >
          <div
            className="max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-lg bg-gray-900 text-white sm:max-h-[calc(100dvh-3rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 sm:px-8 sm:py-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 id="timeline-dialog-title" className="text-2xl font-bold">
                  {activeTimestamp.title}
                </h3>
                <button
                  type="button"
                  className="rounded px-2 py-1 text-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={handleClosePopup}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>
              <PhotoAlbumGrid photoAlbumGridProps={activeTimestamp.photos} />
              <p className="mt-4">{activeTimestamp.detailedDescription}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundTimeline;
