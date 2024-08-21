import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import ProjectGrid from "@/components/projectGrid"
import SongGrid from "@/components/songGrid"
import PlaylistIntro from '@/components/playlistIntro';
import DropdownButton from '@/components/ui/dropdownButton';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

export default async function Disco() {
  const headerProps ={
    imageProps: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true',
      width: 418,
      height: 538,
      
    },
    titles: [
      { text: 'JadeHouse', href: '/' },
      { text: 'Disco', href: '/disco' }
    ],
    dropdownOptions: [
      { text: 'Home', href: '/disco' },
      { text: 'About', 
        href: '/disco/aboutme', 
        subOptions: [
          { text: 'Interest', href: '/disco/aboutme/interest' },
          { text: 'Quotes', href: '/disco/aboutme/quotes' },
        ] 
      },
      { text: 'Memories', href: '/disco/memories' },
      {
        href:"/disco/thoughts",
        text: 'Thoughts',
        subOptions: [
          { text: 'Perspective', href: '/disco/thoughts/perspective' },
          { text: 'Inspiration', href: '/disco/thoughts/inspiration' },
        ],
      },
      { text: 'Music', href: '/disco/music' },
    ],
  }
  
  const heroSectionProps = {
    originalBackgroundImage: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/disco_main_background.jpg?raw=true',
      alt: 'Hero Image',
      width: 1920,
      height: 1080,
    },
    content: {
      title: 'Welcome to JadeHouse Disco',
      description: 'Archive of my personal life',
    },
  }

  async function getAllBlogPosts(): Promise<BlogPost[]> {
    const memories = await getBlogPosts('app/disco/memories');
  
    const allBlogPosts = [...memories];
    return allBlogPosts;
  }
  
  const memories = await getAllBlogPosts();

  const featuredMemories = memories
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
  
    const projectGridProps = {
      projectTitle: "Cherished Memories",
      projects: featuredMemories,
      viewAllLink: "/disco/memories",
      buttonText:"View all Memories"
    }

    const songGridProps = [
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/blonde.jpg?raw=true',
        title: 'Pink + White',
        artist: 'Frank Ocean',
        album: 'Blonde',
        description: 'Anywhere you go and anything you do feels special with this song.',
        link: "https://music.youtube.com/watch?v=9cHbvRUALrc&si=vh4bUS2Tk1u1aWri"
      },
      {
        image: '/test.png',
        title: 'Song Title 2',
        artist: 'Artist Name 2',
        album: 'Album Name 2',
        description: 'Memory description for Song 2',
        link: "https://music.youtube.com/watch?v=9cHbvRUALrc&si=vh4bUS2Tk1u1aWri"
      },
    ];

    const playlistIntroProps = {
      titleText: "Favorite Playlists",
      playlists: [
        {
          name: "Indie Chill",
          songs: [
            { title: "Sunflower", artist: "Post Malone, Swae Lee" },
            { title: "Falling", artist: "Harry Styles" },
            { title: "Circles", artist: "Post Malone" },
            { title: "Watermelon Sugar", artist: "Harry Styles" },
          ],
        },
        {
          name: "Pop Hits",
          songs: [
            { title: "Bad Guy", artist: "Billie Eilish" },
            { title: "Blinding Lights", artist: "The Weeknd" },
            { title: "Levitating", artist: "Dua Lipa" },
            { title: "Savage (Remix)", artist: "Megan Thee Stallion, Beyoncé" },
          ],
        },
        {
          name: "Rap Bangers",
          songs: [
            { title: "Rockstar", artist: "DaBaby, Roddy Ricch" },
            { title: "Sicko Mode", artist: "Travis Scott" },
            { title: "Highest in the Room", artist: "Travis Scott" },
            { title: "The Scotts", artist: "The Scotts" },
          ],
        },
      ],
    }

    const miniAboutProps = {
      profileImage: {  
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/miniAbout/profile_photo_main.jpg?raw=true',
        alt: 'Profile Photo',
        width: 256,
        height: 256,
      },
      name: 'Lee Hyunwoo',
      bio: "I am traveller with earphones, creating unforgettable memories throughout my journey. Driven by passion and curiosity, I seek out new adventures and unique experiences. My goal is to explore extraordinary places and engage in special activities, all to craft my own remarkable story.",
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
        href: "/disco/aboutme"
      }
    }

    const footerProps = {
      logo: {
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Disco",
      description:"Archive of my personal life",
      navLinks: [
        { text: 'Home', href: '/disco' },
        { text: 'About', href: '/disco/aboutme' },
        { text: 'Memories', href: '/disco/memories' },
        { text: 'Thoughts', href: '/disco/thoughts' },
        { text: 'Music', href: '/disco/music' },
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
        <div className="grid grid-cols-2 items-start mx-20">
          <SongGrid songGridProps={songGridProps}/>
          <PlaylistIntro PlaylistIntroProps={playlistIntroProps}/>
        </div>
        <div className="mx-auto my-4">
          <DropdownButton href={"/disco/music"} options={[]} buttonText={"Explore all Music"} />
        </div>
        <MiniAbout miniAboutProps={miniAboutProps}/>
        <Footer footerProps={footerProps}/>
      </div>
    );
  };