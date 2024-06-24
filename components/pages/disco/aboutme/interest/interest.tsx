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
            alt: "Jogging",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Jogging",
            description: "Jogging with beautiful scenery and music relieves stress and creates lasting memories",
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
            description: "Adding new music to my collection to create new slots for audible memories",
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
      descriptionText: "Explore the dreams of my lifetime",
      bucketList: [
        {
          src:"/bucketlist/1.webp",
          title: "Record a vlog of my ordinary day",
        },
        {
          src:"/bucketlist/2.webp",
          title: "Make travel vlog with the perfect song choice",
        },
        {
          src:"/bucketlist/3.webp",
          title: "Share my favorite playlists on internet",
        },
        {
          src:"/bucketlist/4.webp",
          title: "Go backpacking alone",
        },
        {
          src:"/bucketlist/5.webp",
          title: "Live in a foreign environment (preferably snowy) for a month",
        },
        {
          src:"/bucketlist/6.webp",
          title: "Go snowboarding in a snowy mountain",
        },
        {
          src:"/bucketlist/7.webp",
          title: "Go for scuba diving",
        },
        {
          src:"/bucketlist/8.webp",
          title: "Lie down and see shooting star flying across a sky full of stars",
        },
        {
          src:"/bucketlist/9.webp",
          title: "Watch the aurora",
        },
        {
          src:"/bucketlist/10.webp",
          title: "Build a igloo and a big snowman",
        },
        {
          src:"/bucketlist/11.webp",
          title: "Take a family portrait",
        },
        {
          src:"/bucketlist/12.webp",
          title: "Go to a concert",
        },
        {
          src:"/bucketlist/13.webp",
          title: "Get on a train and stop at a random location to explore",
        },
        {
          src:"/bucketlist/14.webp",
          title: "Make a photo album out of photos I took with the people I helped",
        },
        {
          src:"/bucketlist/15.webp",
          title: "Revisit places of nostalgia after 20 years",
        },
        {
          src:"/bucketlist/16.webp",
          title: "Label the countries I visit with a song",
        },
        {
          src:"/bucketlist/17.webp",
          title: "Have a drink with my old friends in our 30s",
        },
        {
          src:"/bucketlist/18.webp",
          title: "Make a speech at Ted Talks",
        },
        {
          src:"/bucketlist/19.webp",
          title: "Make a photo album of my favorite sceneries",
        },
        {
          src:"/bucketlist/20.webp",
          title: "Travel the space and visit other planets",
        },
        {
          src:"/bucketlist/21.webp",
          title: "Make my personal study and fill it with books I read",
        },
        {
          src:"/bucketlist/22.webp",
          title: "Have a personal lab to tinker",
        },
        {
          src:"",
          title: "Build my personal gym to do all the exercise I want",
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