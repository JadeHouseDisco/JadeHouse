import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion";
import React from "react";
import Link from 'next/link';

interface PlaylistIntroProps {
  PlaylistIntroProps: {
    titleText: string;
    playlists: {
      name: string;
      href: string;
      songs: {
        title: string;
        artist: string;
      }[];
    }[]
  };
}

const PlaylistIntro: React.FC<PlaylistIntroProps> =({ PlaylistIntroProps }) => {
  return (
      <div className="container max-w-2xl px-4 md:px-6 mx-auto">
        <div className="max-w-5xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl mb-8 font-bold tracking-tight sm:text-4xl">
              {PlaylistIntroProps.titleText}
            </h2>
          </div>
          <Accordion className="space-y-2" collapsible type="single">
            {PlaylistIntroProps.playlists.map((playlist, index) => (
              <AccordionItem key={index} value={`playlist-${index}`}>
                <AccordionTrigger className="flex items-center justify-between rounded-md px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700">
                  <span>{playlist.name}</span>
                </AccordionTrigger>
                <AccordionContent className="rounded-md border p-4 bg-gray-900 border-gray-800">
                  <div className="space-y-3">
                    {playlist.songs.map((song, songIndex) => (
                      <div key={songIndex} className="flex items-center justify-between">
                        <div className="font-medium">{song.title}</div>
                        <div className="text-sm text-gray-400">{song.artist}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Link 
                      className="inline-flex items-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out" 
                      href={playlist.href}
                      target="_blank"
                    >
                      Go to Playlist
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
  );
}

export default PlaylistIntro;