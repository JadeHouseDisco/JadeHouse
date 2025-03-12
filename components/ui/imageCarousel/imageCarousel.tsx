"use client"

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

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
  const swiperRef = useRef<any>(null);

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
      className="mySwiper h-[550px]"
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
      <Link 
        className="inline-flex items-center font-bold h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out" 
        href={link}
        target="_blank"
      >
        Go to Playlist
      </Link>
    </Swiper>
  );
}

export default ImageCarousel; 