import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import ProjectGrid from "@/components/projectGrid"
import SongGrid from "@/components/songGrid"
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Disco = () => {
  const headerProps ={
    imageProps: {
      src: '/jadehouse_disco.png',
      width: 418,
      height: 538,
    },
    titles: [
      { text: 'JadeHouse', href: '/' },
      { text: 'Disco', href: '/disco' }
    ],
    dropdownOptions: [
      { text: 'Home', href: '/disco', subOptions: [] },
      { text: 'About', 
        href: '/disco/aboutme', 
        subOptions: [
          { text: 'Family', href: '/disco/aboutme/family' },
          { text: 'Bucket List', href: '/disco/aboutme/bucketlist' },
        ] 
      },
      { text: 'Memories', href: '/disco/memories', subOptions: [] },
      {
        href:"/disco/thoughts",
        text: 'Thoughts',
        subOptions: [
          { text: 'Perspective', href: '/disco/thoughts/perspective' },
          { text: 'Inspiration', href: '/disco/thoughts/journey' },
          { text: 'Quotes', href: '/disco/thoughts/quotes' },
        ],
      },
      { text: 'Music', href: '/disco/music', subOptions: [] },
    ],
  }
  
  const heroSectionProps = {
    backgroundImage: {
      src: '/disco_main_background.jpg',
      alt: 'Hero Image',
      width: 1920,
      height: 1080,
    },
    content: {
      title: 'Welcome to JadeHouse Disco',
      description: 'Record of my personal life',
    },
  }

    const projectGridProps = {
      projectTitle: "Cherished Memories",
      projects: [
        {
          image: {
            src: '/test.png',
            alt: 'Project 1',
            width: 400,
            height: 300,
          },
          title: 'Project 1',
          description: 'A web application that helps users manage their tasks and projects.',
          viewLink: '/lab',
        },
        {
          image: {
            src: '/test.png',
            alt: 'Project 2',
            width: 400,
            height: 300,
          },
          title: 'Project 2',
          description: 'A mobile app that allows users to track their fitness goals and progress. more description for testing purpose to see if longer text is properly hnadles iwth.',
          viewLink: '/lab',
        },
        {
          image: {
            src: '/test.png',
            alt: 'Project 3',
            width: 400,
            height: 300,
          },
          title: 'Project 3',
          description: 'A design system that helps teams create consistent and high-quality user interfaces.',
          viewLink: '/lab',
        },
      ],
      viewAllLink: "/disco/memories",
      buttonText:"View all Memories"
    }

    const songGridProps = [
      {
        image: '/music/blonde.jpeg',
        title: 'Pink + White',
        artist: 'Frank Ocean',
        album: 'Blonde',
        description: 'Anywhere you go and anything you do feels special with this song.',
      },
      {
        image: '/album2.jpg',
        title: 'Song Title 2',
        artist: 'Artist Name 2',
        album: 'Album Name 2',
        description: 'Memory description for Song 2',
      },
    ];

    const miniAboutProps = {
      profileImage: {  
        src: '/profile_photo_main.jpg',
        alt: 'Profile Photo',
        width: 256,
        height: 256,
      },
      name: 'Lee Hyunwoo',
      bio: "Hi, I'm John Doe, a passionate designer and developer. I've been creating beautiful and functional websites for over 5 years. I'm always eager to learn new technologies and techniques to improve my craft.",
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
          href: 'https://www.instagram.com/jadehousedisco/',
          icon: <InstagramIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
      ],
      button: {
        text: "More About Me",
        href: "/lab/aboutme"
      }
    }

    const footerProps = {
      logo: {
        src: '/jadehouse_lab.png',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Lab",
      description:"A short description of your website",
      navLinks: [
        { text: 'Home', href: '/lab' },
        { text: 'About', href: '/lab/aboutme' },
        { text: 'Experiences', href: '/lab/experiences' },
        { text: 'Ideas', href: '/lab/ideas' },
        { text: 'Literature Reviews', href: '/lab/litrev' },
      ],
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
          href: 'https://www.instagram.com/jadehousedisco/',
          icon: <InstagramIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
      ],
    }
  
    return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
        <Header headerProps={headerProps}/>
        <HeroSection heroSectionProps={heroSectionProps}/>
        <ProjectGrid projectGridProps={projectGridProps}/>
        <SongGrid songGridProps={songGridProps}/>
        <MiniAbout miniAboutProps={miniAboutProps}/>
        <Footer footerProps={footerProps}/>
      </div>
    );
  };

  export default Disco;