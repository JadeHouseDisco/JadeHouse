import React from 'react';
import MainHeader from '../mainHeader';
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import MainFooter from '../mainFooter';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const heroSectionProps = {
    originalBackgroundImage: {
      src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/main_background.jpeg?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true",
            alt: "jadehouse lab logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Lab",
          description: "Explore my professional life, including experiences, ideas, and reviews",
          buttonText: "Enter the Lab",
          buttonHref: "/lab",
          newBackgroundImage: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/lab_main_background.jpg?raw=true",
            alt: "lab background image",
            width: 1536,
            height: 1536,
          }
        },
        {
          image: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true",
            alt: "jadehouse disco logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Disco",
          description: "Explore my personal life, including memories, thoughts, and music",
          buttonText: "Enter the Disco",
          buttonHref: "/disco",
          newBackgroundImage: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/disco_main_background.jpg?raw=true",
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
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/miniAbout/profile_photo_main.jpg?raw=true',
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