import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import ProjectGrid from "@/components/projectGrid"
import Footer from "@/components/footer"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"

export default async function Lab() {
    const headerProps ={ 
      imageProps: {
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
        width: 418,
        height: 538,
      },
      titles: [
        { text: 'JadeHouse', href: '/' },
        { text: 'Lab', href: '/lab' }
      ],
      dropdownOptions: [
        { text: 'Home', href: '/lab' },
        { text: 'About', 
          href: '/lab/aboutme', 
        },
        {
          href:"/lab/experiences",
          text: 'Experiences',
        },
        { text: 'Ideas', href: '/lab/ideas' },
        { text: 'Literature Reviews', href: '/lab/litrev' },
      ],
    }
  
    const heroSectionProps = {
      originalBackgroundImage: {
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/lab_main_background.jpg?raw=true',
        alt: 'Hero Image',
        width: 1920,
        height: 1080,
      },
      content: {
        title: 'Welcome to JadeHouse Lab',
        description: 'Portfolio of my professional life',
        cards: [
          {
            image: {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse.png?raw=true",
              alt: "jadehouse logo",
              width: 120,
              height: 120,
            },
            title: "JadeHouse",
            description: "House of memory for my professional and personal life",
            buttonText: "Return to Jadehouse",
            buttonHref: "/",
            newBackgroundImage: {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/main_background.jpeg?raw=true",
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
    
    async function getAllBlogPosts(): Promise<BlogPost[]> {
      const experiencesPosts = await getBlogPosts('app/lab/experiences');
    
      const allBlogPosts = [...experiencesPosts];
      return allBlogPosts;
    }
    
    const blogPosts = await getAllBlogPosts();

    const featuredPosts = blogPosts
    .filter(post => post.featured === 'y')
    .map(post => ({
      image: {
        src: post.imageHref,
        alt: post.title,
        width: 400,
        height: 300,
      },
      title: post.title,
      description: post.content,
      viewLink: post.href,
    }));

    const experiences = {
      projectTitle: "Featured Experiences",
      projects: featuredPosts,
      viewAllLink: "/lab/experiences",
      buttonText:"View all Experiences"
    }

    const literatureReview = {
      projectTitle: "Featured Literature Reviews",
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
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/miniAbout/profile_photo_main.jpg?raw=true',
        alt: 'Profile Photo',
        width: 256,
        height: 256,
      },
      name: 'Lee Hyunwoo',
      bio: "I am a passionate engineer with a deep focus on biomechatronics and research. Driven by an eagerness to pursue a path in scientific inquiry, I aim to make significant contributions to mankind by leveraging my skills and capabilities.",
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
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Lab",
      description:"Portfolio of my professional life",
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