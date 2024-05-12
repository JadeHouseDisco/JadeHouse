"use client"

import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import CardGrid from "@/components/cardGrid";
import MiniAbout from "@/components/miniAbout";
import Footer from "@/components/footer"
import { useState } from 'react';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const headerImage = {
    src: '/jadehouse.png',
    width: 406,
    height: 526,
  };

  const headerText = [
    { text: 'JadeHouse', href: '/' }
  ];

  const headerNavBar = [
    { text: 'Lab', href: '/lab', subOptions: [] },
    { text: 'Disco', href: '/disco', subOptions: [] },
  ];

  const [heroSectionBackgroundImage, setHeroSectionBackgroundImage] = useState({
    src: '/main_background.jpeg',
    alt: 'Hero Image',
    width: 1920,
    height: 1080,
  })

  const heroSectionContent = {
    title: 'Welcome to JadeHouse',
    description: 'House of memory for my professional and personal life',
  };

  const cards = [
    {
      image: {
        src: '/jadehouse_lab.png',
        alt: 'JadeHouse Lab logo',
        width: 120,
        height: 120,
      },
      title: 'JadeHouse Lab',
      description: 'Explore my professional life, including research, work, and project experiences',
      buttonText: 'Enter the Lab',
      buttonHref: '/lab',
    },
    {
      image: {
        src: '/jadehouse_disco.png',
        alt: 'JadeHouse Disco logo',
        width: 120,
        height: 120,
      },
      title: 'JadeHouse Disco',
      description: 'Explore my personal life, including music, memories, and thoughts',
      buttonText: 'Enter the Disco',
      buttonHref: '/disco',
    },
  ];

  const miniAboutProfileImage = {
    src: '/profile_photo_main.jpg',
    alt: 'Profile Photo',
    width: 256,
    height: 256,
  };

  const miniAboutName = 'Lee Hyunwoo';
  const miniAboutBio =
    "Hi, I'm John Doe, a passionate designer and developer. I've been creating beautiful and functional websites for over 5 years. I'm always eager to learn new technologies and techniques to improve my craft.";

  const miniAboutSocialLinks = [
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
  ];

  const footerProps = {
    logo: {
      src: '/jadehouse.png',
      alt: 'Website Logo',
      width: 64,
      height: 64,
    },
    title:"JadeHouse",
    description:"A short description of your website",
    navLinks: [
      { text: 'Lab', href: '/lab' },
      { text: 'Disco', href: '/disco' },
    ],
    socialLinks: [
      {
        href: "mailto:HYUNWOO001@e.ntu.edu.sg",
        icon: <MailIcon className="h-6 w-6" />,
      },
      {
        href: "https://twitter.com/JadeHouseDisco",
        icon: <TwitterIcon className="h-6 w-6" />,
      },
      {
        href: "https://linkedin.com/in/hyunwoolee0329",
        icon: <LinkedinIcon className="h-6 w-6" />,
      }
    ],
  }

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header
        imageProps={headerImage}
        titles={headerText}
        dropdownOptions={headerNavBar}
      />
      <HeroSection
        backgroundImage={heroSectionBackgroundImage}
        content={heroSectionContent}
      />
      <CardGrid 
        cards={cards} 
        heroSectionBackgroundImage={heroSectionBackgroundImage}
        setHeroSectionBackgroundImage={setHeroSectionBackgroundImage}
      />
      <MiniAbout
        profileImage={miniAboutProfileImage}
        name={miniAboutName}
        bio={miniAboutBio}
        socialLinks={miniAboutSocialLinks}
        button={{text:"", href:""}}
      />
      <Footer footerProps={footerProps}/>
    </div>
  );
};

export default JadeHouse;