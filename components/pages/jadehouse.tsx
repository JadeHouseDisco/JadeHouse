import React from 'react';
import MainHeader from '../mainHeader';
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import MainFooter from '../mainFooter';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
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
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708697/jadehouse_lab_onig4i.png",
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
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708696/jadehouse_disco_b1js7e.png",
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
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <MainHeader/>
      <HeroSection heroSectionProps={heroSectionProps}/>
      <MiniAbout miniAboutProps={miniAboutProps}/>
      <MainFooter/>
    </div>
  );
};

export default JadeHouse;