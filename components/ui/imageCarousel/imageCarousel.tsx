"use client"

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ songs }) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // Reset to the first slide with no transition duration
    }
  }, [songs]);

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
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      rewind={true}
      mousewheel={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
      className="mySwiper"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {songs.map((song, index) => (
        <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
          <img src={song.src} alt={song.title} />
          <p className="text-lg md:text-xl font-bold">{song.title}</p>
          <p className="text-xs md:text-base">{song.artist}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
