"use client"

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import type { Swiper as SwiperInstance } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from 'swiper/modules';

interface ImageCarouselProps {
  songs: {
    src: string;
    title: string;
    artist: string;
  }[];
  link: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ songs, link }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // Reset to the first slide with no transition duration
    }
  }, [songs]);

  useEffect(() => {
    if (swiperRef.current) {
      // Ensure the Swiper instance is fully initialized before accessing its methods
      swiperRef.current.update();
    }
  }, []);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex min-w-0 max-w-full flex-col items-center overflow-hidden">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        rewind={true}
        mousewheel={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
        className="mySwiper h-[clamp(22rem,62vw,34rem)]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {songs.map((song, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <Image
              src={song.src}
              alt={song.title}
              width={300}
              height={300}
              className="object-cover"
            />
            <p className="text-lg md:text-xl font-bold mt-1">{song.title}</p>
            <p className="text-xs md:text-base">{song.artist}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="row-start-3 inline-flex items-center px-6 py-3 font-bold rounded-md bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-[#00a896] transition-colors"
>
  Go to Playlist
</a>


    </div>
  );
}

export default ImageCarousel;
