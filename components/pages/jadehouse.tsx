import React from 'react';
import MainHeader from '../mainHeader';
import ParallaxScroll from "@/components/ui/parallaxScroll";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import MainFooter from '../mainFooter';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const layers = [
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973409/13_nqxfed.png', speed: 0.7 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/12_bnf9m0.png', speed: 0.65 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/11_kjxtok.png', speed: 0.6 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973610/10_hoohd7.png', speed: 0.55 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/9_mvxdf0.png', speed: 0.5 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/8_bqdjpa.png', speed: 0.45 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/7_xenqxa.png', speed: 0.4 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973406/6_onrvnp.png', speed: 0.35 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/5_jabsyx.png', speed: 0.3 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/4_dohezt.png', speed: 0.25 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/3_qjtvoc.png', speed: 0.2 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/2_iremab.png', speed: 0.15 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/1_izhise.png', speed: 0.1 }
  ];


  const heroSectionProps = {
    originalBackgroundImage: {
      src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708693/main_background_w5apqk.jpg",
      alt: "main background image",
      width: 1536,
      height: 1536,
    },
    content: {
      title: 'Welcome to JadeHouse',
      description: 'House of memory for my professional and personal life',
      cards: [
        {
          image: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1756997961/lab_fijdn1.png",
            alt: "jadehouse lab logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Lab",
          description: "Explore my professional life, including experiences, ideas, and reviews",
          buttonText: "Enter the Lab",
          buttonHref: "/lab",
          newBackgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708692/lab_main_background_qzwemo.jpg",
            alt: "lab background image",
            width: 1536,
            height: 1536,
          }
        },
        {
          image: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1756999380/20250904_2130_Minimalistic_Disco_Symbols_remix_01k4aj3cwkfyytt91kkfprate2_qjc6zy.png",
            alt: "jadehouse disco logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Disco",
          description: "Explore my personal life, including memories, thoughts, and music",
          buttonText: "Enter the Disco",
          buttonHref: "/disco",
          newBackgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708692/disco_main_background_ugpjj3.jpg",
            alt: "disco background image",
            width: 1536,
            height: 1536,
          }
        }
      ]
    },
  }

  const miniAboutProps = {
    profileImage: {
      src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1730708698/profile_photo_main_lpmouz.jpg',
      alt: 'Profile Photo',
      width: 256,
      height: 256,
    },
    name: 'Lee Hyunwoo',
    bio:  "Hi, I'm Hyunwoo Lee, a passionate engineer and a curious soul with a love for music. Eager to learn new skills and chase my ambitions, I thrive on making new memories and trying new things. Join me as I blend creativity and technical expertise to shape a dynamic future.",
    socialLinks: [
      {
        href: 'mailto:HYUNWOO001@e.ntu.edu.sg',
        icon: <MailIcon className="h-6 w-6" />,
      },
      {
        href: 'https://twitter.com/JadeHouseDisco',
        icon: <TwitterIcon className="h-6 w-6" />,
      },
      {
        href: 'https://linkedin.com/in/hyunwoolee0329',
        icon: <LinkedinIcon className="h-6 w-6" />,
      },
    ],
    button: {text:"", href:""}
  }

  return (
    <div key="1" className="relative flex flex-col min-h-[100dvh]">
      <MainHeader />
      <ParallaxScroll layers={layers} className="absolute inset-0 -z-10" />
      <div className="bg-black h-72"></div>
      <HeroSection heroSectionProps={heroSectionProps} />
      <MiniAbout miniAboutProps={miniAboutProps} />
      <MainFooter />
    </div>
  );
};

export default JadeHouse;