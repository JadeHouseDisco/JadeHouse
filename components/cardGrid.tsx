import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface heroSectionBackgroundImageArray {
  src: string,
  alt: string,
  width: number,
  height: number,
}

interface CardProps {
  cards: {
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string; 
  }[];
  heroSectionBackgroundImage: heroSectionBackgroundImageArray;
  setHeroSectionBackgroundImage: Function;
}

const CardGrid: React.FC<CardProps> = ({ cards, heroSectionBackgroundImage, setHeroSectionBackgroundImage }) => {
  const [delayActive, setDelayActive] = useState(false);

  const handleMouseEnterDisco = () => {
    if (!delayActive) {
      setDelayActive(true);
      setTimeout(() => {
        if (heroSectionBackgroundImage.src !== '/test.jpg') {
          setHeroSectionBackgroundImage({
            src: '/disco_main_background_v1.jpg',
            alt: 'Hero Image',
            width: 1920,
            height: 1080,
          });
        }
        setDelayActive(false);
      }, 200); // 200 milliseconds = 0.2 second
    }
  };

  const handleMouseEnterLab = () => {
    if (!delayActive) {
      setDelayActive(true);
      setTimeout(() => {
        if (heroSectionBackgroundImage.src !== '/test.jpg') {
          setHeroSectionBackgroundImage({
            src: '/lab_main_background.jpg',
            alt: 'Hero Image',
            width: 1920,
            height: 1080,
          });
        }
        setDelayActive(false);
      }, 200); // 200 milliseconds = 0.2 second
    }
  };

  const handleMouseLeave = () => {
    if (!delayActive) {
      setDelayActive(true);
      setTimeout(() => {
        if (heroSectionBackgroundImage.src !== '/main_background.jpeg') {
          setHeroSectionBackgroundImage({
            src: '/main_background.jpeg',
            alt: 'Hero Image',
            width: 1920,
            height: 1080,
          });
        }
        setDelayActive(false);
      }, 200); // 200 milliseconds = 0.2 second
    }
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md p-6 flex items-center"
          >
            <div className="flex-shrink-0 mr-6">
              <Image
                src={card.image.src}
                height={card.image.height}
                width={card.image.width}
                className="h-full object-cover"
                alt={card.image.alt}
              />
            </div>
            <div> 
              <h2 className="text-2xl font-bold mb-4">
                <div className="flex items-center">{card.title}</div>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {card.description}
              </p>
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                href={card.buttonHref}
                onMouseEnter={card.title === 'JadeHouse Lab' ? handleMouseEnterLab : handleMouseEnterDisco}
                onMouseLeave={handleMouseLeave}
              >
                {card.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
