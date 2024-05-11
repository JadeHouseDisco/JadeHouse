"use client"

import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import ProjectGrid from "@/components/projectGrid"
import Footer from "@/components/footer"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, YoutubeIcon } from "@/components/icons"

const Lab = () => {
    const headerImage = {
      src: '/jadehouse_lab.png',
      width: 418,
      height: 538,
    };
  
    const headerText = [
      { text: 'JadeHouse', href: '/' },
      { text: 'Lab', href: '/lab' }
    ];
  
    const headerNavBar = [
        { text: 'Home', href: '/lab', subOptions: [] },
        { text: 'About', href: '/lab/aboutme', subOptions: [] },
        {
          href:"/lab/experiences",
          text: 'Experiences',
          subOptions: [
            { text: 'Research', href: '/lab/experiences/research' },
            { text: 'Work', href: '/lab/experiences/work' },
            { text: 'Project', href: '/lab/experiences/work' },
          ],
        },
        { text: 'Ideas', href: '#', subOptions: [] },
        { text: 'Literature Reviews', href: '#', subOptions: [] },
    ];
  
    const heroSectionBackgroundImage = {
      src: '/lab_main_background.jpg',
      alt: 'Hero Image',
      width: 1920,
      height: 1080,
    }
  
    const heroSectionContent = {
      title: 'Welcome to JadeHouse Lab',
      description: 'Portfolio of my professional life',
    };
  
    const projects = [
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
        description: 'A mobile app that allows users to track their fitness goals and progress.',
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
    ];

    const literatureReview = [
      {
        image: {
          src: '/test.png',
          alt: 'Literature Review 1',
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
          alt: 'Literature Review 2',
          width: 400,
          height: 300,
        },
        title: 'Project 2',
        description: 'A mobile app that allows users to track their fitness goals and progress.',
        viewLink: '/lab',
      },
      {
        image: {
          src: '/test.png',
          alt: 'Literature Review 3',
          width: 400,
          height: 300,
        },
        title: 'Project 3',
        description: 'A design system that helps teams create consistent and high-quality user interfaces.',
        viewLink: '/lab',
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
        href: '#',
        icon: <MailIcon className="h-6 w-6" />,
      },
      {
        href: '#',
        icon: <GithubIcon className="h-6 w-6" />,
      },
      {
        href: '#',
        icon: <LinkedinIcon className="h-6 w-6" />,
      },
      {
        href: '#',
        icon: <YoutubeIcon className="h-6 w-6" />,
      },
      {
        href: '#',
        icon: <TwitterIcon className="h-6 w-6" />,
      },
    ];

    const miniAboutMeButton = {
      text: "More About Me",
      href: "/lab/aboutme"
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
          href: '#',
          icon: <MailIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <GithubIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <LinkedinIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <TwitterIcon className="h-6 w-6" />,
        },
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
        <ProjectGrid 
          projects={projects} 
          viewAllLink="/lab" 
        />
        <ProjectGrid 
          projects={literatureReview} 
          viewAllLink="/lab" 
        />
        <MiniAbout
          profileImage={miniAboutProfileImage}
          name={miniAboutName}
          bio={miniAboutBio}
          socialLinks={miniAboutSocialLinks}
          button={miniAboutMeButton}
        />
        <Footer footerProps={footerProps}/>
      </div>
    );
  };

  export default Lab;