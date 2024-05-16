import React from 'react';
import Header from "@/components/header";
import FamilyIntro from "@/components/familyIntro"
import BackgroundTimeline from "@/components/backgroundTimeline"
import AboutMeIntro from '@/components/aboutMeIntro';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Aboutme = () => {
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

    const aboutMeIntroProps = {
        headerText: "Nice to Meet you!",
        pText: "I am Hyunwoo, a curious and energetic soul always looking for new adventures. I love making new memories and selecting the perfect music to accompany them.",
        imgSrc: "/disco_profile_image.jpg"
      }

    const familyIntroProps = {
      test: ""
    }

    const backgroundTimelineProps = {
        titleText: "My Journey",
        timeStamps: [
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
        ],
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
            <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
            <FamilyIntro familyIntroProps={familyIntroProps}/>
            <BackgroundTimeline backgroundTimelineProps={backgroundTimelineProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Aboutme;