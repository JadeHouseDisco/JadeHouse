import React from 'react';
import Header from "@/components/header";
import HobbyIntro from '@/components/hobbyIntro';
import BucketList from '@/components/bucketList';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Interest = () => {
  const headerProps ={
    imageProps: {
      src: '/logo/jadehouse_disco.png',
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

    const hobbyIntroProps = {
      titleText: "Hobbies",
      descriptionText: "Explore my hobbies...",
      hobbies: [
        {
          backgroundImage: {
            src: "/test.png",
            alt: "hobby 1",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Hobby 1",
            description: "My hobby 1 is ...",
          }
        },
        {
          backgroundImage: {
            src: "/test2.png",
            alt: "hobby 2",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Hobby 2",
            description: "My hobby 2 is ...",
          }
        },
        {
          backgroundImage: {
            src: "/main_background.jpeg",
            alt: "hobby 2",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Hobby 2",
            description: "My hobby 2 is ...",
          }
        }
      ],
    }

    const bucketListProps = {
      titleText: "Bucket List",
      descriptionText: "Explore the adventures and experiences I hope to accomplish in my lifetime.",
      bucketList: [
        {
          title: "bucket list item 1",
          description: "bucket list item 1 description"
        },
        {
          title: "bucket list item 2",
          description: "bucket list item 2 description"
        },
        {
          title: "bucket list item 2",
          description: "bucket list item 2 description"
        },
        {
          title: "bucket list item 2",
          description: "bucket list item 2 description"
        },
        {
          title: "bucket list item 2",
          description: "bucket list item 2 description"
        },
        {
          title: "bucket list item 2",
          description: "bucket list item 2 description"
        },
      ]
    }
    
    const footerProps = {
      logo: {
        src: '/logo/jadehouse_disco.png',
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
            <HobbyIntro hobbyIntroProps={hobbyIntroProps}/>
            <BucketList bucketListProps={bucketListProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Interest;