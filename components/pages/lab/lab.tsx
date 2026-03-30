import React from 'react';
import LabHeader from "@/components/labHeader"
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import ProjectGrid from "@/components/projectGrid"
import LabFooter from '@/components/labFooter';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"

export default async function Lab() {
    const heroSectionProps = {
      originalBackgroundImage: {
        src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1774796763/new_lab_background_yx5vdw.png',
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
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1756997080/jadehouse_cg1705.png",
              alt: "jadehouse logo",
              width: 120,
              height: 120,
            },
            title: "JadeHouse",
            description: "House of memory for my professional and personal life",
            buttonText: "Return to Jadehouse",
            buttonHref: "/",
            newBackgroundImage: {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774796762/new_jadehouse_background_lwbv7g.png",
              alt: "jadehouse background image",
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
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774796764/new_disco_background_txk99k.png",
              alt: "disco background image",
              width: 1536,
              height: 1536,
            }
          }
        ]
      },
    }
    
    async function getAllExpereinces(): Promise<BlogPost[]> {
      const experiencesPosts = await getBlogPosts('app/lab/experiences');
    
      const allBlogPosts = [...experiencesPosts];
      return allBlogPosts;
    }
    
    const expereinces = await getAllExpereinces();

    const featuredExperiences = expereinces
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
      projects: featuredExperiences,
      viewAllLink: "/lab/experiences",
      buttonText:"View all Experiences"
    }

    async function getAllIdeas(): Promise<BlogPost[]> {
      const ideasPosts = await getBlogPosts('app/lab/ideas');
    
      const allBlogPosts = [...ideasPosts];
      return allBlogPosts;
    }
    
    const ideas = await getAllIdeas();

    const featuredIdeas = ideas
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

    const literatureReview = {
      projectTitle: "Featured Ideas",
      projects: featuredIdeas,
      viewAllLink: "/lab/ideas",
      buttonText:"View all Ideas"
    }

    const miniAboutProps = {
      profileImage: {
        src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1730708697/profile_photo_lab_pzclwi.jpg',
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
          href: 'https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ',
          icon: <GoogleScholarIcon className="h-6 w-6" />,
        },
        {
          href: 'https://orcid.org/0009-0004-2586-0493',
          icon: <ORCIDIcon className="h-6 w-6" />,
        },
      ],
      button: {
        text: "More About Me",
        href: "/lab/aboutme"
      },
    }
  
    return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
        <LabHeader/>
        <HeroSection heroSectionProps={heroSectionProps}/>
        <ProjectGrid projectGridProps={experiences}/>
        <ProjectGrid projectGridProps={literatureReview}/>
        <MiniAbout miniAboutProps={miniAboutProps}/>
        <LabFooter/>
      </div>
    );
  };