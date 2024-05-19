import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import Footer from "@/components/footer"
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const headerProps ={
    imageProps: {
      src: '/jadehouse.png',
      width: 406,
      height: 526,
    },
    titles: [
      { text: 'JadeHouse', href: '/' }
    ],
    dropdownOptions: [
      { text: 'Lab', href: '/lab', subOptions: [] },
      { text: 'Disco', href: '/disco', subOptions: [] },
    ],
  }

  const heroSectionProps = {
    originalBackgroundImage: {
      src: "/main_background.jpeg",
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
            src: "/jadehouse_lab.png",
            alt: "jadehouse lab logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Lab",
          description: "Explore my professional life, including experiences, ideas, and reviews",
          buttonText: "Enter the Lab",
          buttonHref: "/lab",
          newBackgroundImage: {
            src: "/lab_main_background.jpg",
            alt: "lab background image",
            width: 1536,
            height: 1536,
          }
        },
        {
          image: {
            src: "/jadehouse_disco.png",
            alt: "jadehouse disco logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Disco",
          description: "Explore my personal life, including memories, thoughts, and music",
          buttonText: "Enter the Disco",
          buttonHref: "/disco",
          newBackgroundImage: {
            src: "/disco_main_background.jpg",
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
      src: '/profile_photo_main.jpg',
      alt: 'Profile Photo',
      width: 256,
      height: 256,
    },
    name: 'Lee Hyunwoo',
    bio:  "Hi, I'm John Doe, a passionate designer and developer. I've been creating beautiful and functional websites for over 5 years. I'm always eager to learn new technologies and techniques to improve my craft.",
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
      <Header headerProps={headerProps}/>
      <HeroSection heroSectionProps={heroSectionProps}/>
      <MiniAbout miniAboutProps={miniAboutProps}/>
      <Footer footerProps={footerProps}/>
    </div>
  );
};

export default JadeHouse;