import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import ProjectGrid from "@/components/projectGrid"
import Footer from "@/components/footer"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"

const Lab = () => {
    const headerProps ={ 
      imageProps: {
        src: '/jadehouse_lab.png',
        width: 418,
        height: 538,
      },
      titles: [
        { text: 'JadeHouse', href: '/' },
        { text: 'Lab', href: '/lab' }
      ],
      dropdownOptions: [
        { text: 'Home', href: '/lab', subOptions: [] },
        { text: 'About', href: '/lab/aboutme', subOptions: [] },
        {
          href:"/lab/experiences",
          text: 'Experiences',
          subOptions: [
            { text: 'Research', href: '/lab/experiences/research' },
            { text: 'Work', href: '/lab/experiences/work' },
            { text: 'Project', href: '/lab/experiences/project' },
          ],
        },
        { text: 'Ideas', href: '/lab/ideas', subOptions: [] },
        { text: 'Literature Reviews', href: '/lab/litrev', subOptions: [] },
      ],
    }
  
    const heroSectionProps = {
      originalBackgroundImage: {
        src: '/lab_main_background.jpg',
        alt: 'Hero Image',
        width: 1920,
        height: 1080,
      },
      content: {
        title: 'Welcome to JadeHouse Lab',
        description: 'Portfolio of my professional life',
      },
    }
  
    const experiences = {
      projectTitle: "Recent Experiences",
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
      viewAllLink: "/lab/experiences",
      buttonText:"View all Experiences"
    }

    const literatureReview = {
      projectTitle: "Recent Literature Reviews",
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
      viewAllLink: "/lab/litrev",
      buttonText:"View all Literature Reviews"
    }

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
          href: 'https://linkedin.com/in/hyunwoolee0329',
          icon: <LinkedinIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
        {
          href: 'https://github.com/JadeHouseDisco',
          icon: <GithubIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <GoogleScholarIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <ORCIDIcon className="h-6 w-6" />,
        },
      ],
      button: {
        text: "More About Me",
        href: "/lab/aboutme"
      },
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
          href: 'https://github.com/JadeHouseDisco',
          icon: <GithubIcon className="h-6 w-6" />,
        },
        {
          href: 'https://linkedin.com/in/hyunwoolee0329',
          icon: <LinkedinIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <GoogleScholarIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <ORCIDIcon className="h-6 w-6" />,
        },
      ],
    }
  
    return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
        <Header headerProps={headerProps}/>
        <HeroSection heroSectionProps={heroSectionProps}/>
        <ProjectGrid projectGridProps={experiences}/>
        <ProjectGrid projectGridProps={literatureReview}/>
        <MiniAbout miniAboutProps={miniAboutProps}/>
        <Footer footerProps={footerProps}/>
      </div>
    );
  };

  export default Lab;