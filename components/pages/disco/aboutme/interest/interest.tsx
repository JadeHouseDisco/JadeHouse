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
      descriptionText: "Things I love doing in my free time",
      hobbies: [
        {
          backgroundImage: {
            src: "/interest/swimming.webp",
            alt: "Swimming",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Swimming",
            description: "Swimming helps me release stress and clear my mind",
          }
        },
        {
          backgroundImage: {
            src: "/interest/running.webp",
            alt: "Running",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Running",
            description: "Running with beautiful scenery and music relieves stress and creates lasting memories",
          }
        },
        {
          backgroundImage: {
            src: "/interest/cycling.webp",
            alt: "Cycling",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Cycling",
            description: "Cycling along the riverside with the fresh wind makes any day special",
          }
        },
        {
          backgroundImage: {
            src: "/interest/mountain_climbing.webp",
            alt: "Mountain Climbing",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Mountain Climbing",
            description: "The breathtaking scenery from the mountaintop is everlasting",
          }
        },
        {
          backgroundImage: {
            src: "/interest/snowboarding.webp",
            alt: "Snowboarding",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Snowboarding",
            description: "The thrill of speed makes me forget the cold of winter",
          }
        },
        {
          backgroundImage: {
            src: "/interest/traveling.webp",
            alt: "Traveling",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Traveling",
            description: "Exploring new places is full of surprises and wonders",
          }
        },
        {
          backgroundImage: {
            src: "/interest/music_digging.webp",
            alt: "Music Digging",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Music Digging",
            description: "Adding new music to my collection creates new slots for audible memories",
          }
        },
        {
          backgroundImage: {
            src: "/interest/stocks.webp",
            alt: "Stocks",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Stocks",
            description: "Predicting how the world will change is always exciting",
          }
        },
        {
          backgroundImage: {
            src: "/interest/reading.webp",
            alt: "Reading",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Reading",
            description: "The best way to learn new things and explore my imagination",
          }
        },
        {
          backgroundImage: {
            src: "/interest/tinker.webp",
            alt: "Tinkering",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Tinkering",
            description: "The joy of bringing my imagination to reality",
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