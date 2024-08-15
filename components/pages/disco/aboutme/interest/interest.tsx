import React from 'react';
import Header from "@/components/header";
import HobbyIntro from '@/components/hobbyIntro';
import BucketList from '@/components/bucketList';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Interest = () => {
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

    const hobbyIntroProps = {
      titleText: "Hobbies",
      descriptionText: "Things I love doing in my free time",
      hobbies: [
        {
          backgroundImage: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/swimming.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/running.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/cycling.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/mountain_climbing.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/snowboarding.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/traveling.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/music_digging.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/stocks.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/reading.webp?raw=true",
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
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/interest/tinker.webp?raw=true",
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
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/1.webp?raw=true",
          title: "Record a vlog of my ordinary day",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/2.webp?raw=true",
          title: "Make travel vlog with the perfect song choice",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/3.webp?raw=true",
          title: "Share my favorite playlists on internet",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/4.webp?raw=true",
          title: "Go backpacking alone",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/5.webp?raw=true",
          title: "Live in a foreign environment (preferably snowy) for a month",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/6.webp?raw=true",
          title: "Go snowboarding in a snowy mountain",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/7.webp?raw=true",
          title: "Go for scuba diving",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/8.webp?raw=true",
          title: "Lie down and see shooting star flying across a sky full of stars",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/9.webp?raw=true",
          title: "Watch the aurora",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/10.webp?raw=true",
          title: "Build a igloo and a big snowman",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/11.webp?raw=true",
          title: "Take a family portrait",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/12.webp?raw=true",
          title: "Go to a concert",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/13.webp?raw=true",
          title: "Get on a train and stop at a random location to explore",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/14.webp?raw=true",
          title: "Make a photo album out of photos I took with the people I helped",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/15.webp?raw=true",
          title: "Revisit places of nostalgia after 20 years",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/16.webp?raw=true",
          title: "Label the countries I visit with a song",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/17.webp?raw=true",
          title: "Have a drink with my old friends in our 30s",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/18.webp?raw=true",
          title: "Make a speech at Ted Talks",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/19.webp?raw=true",
          title: "Make a photo album of my favorite sceneries",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/20.webp?raw=true",
          title: "Travel the space and visit other planets",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/21.webp?raw=true",
          title: "Make my personal study and fill it with books I read",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/22.webp?raw=true",
          title: "Have a personal lab to tinker",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/23.webp?raw=true",
          title: "Build my personal gym to do all the exercise I want",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/24.webp?raw=true",
          title: "Learn boxing",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/25.webp?raw=true",
          title: "Learn fencing",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/26.webp?raw=true",
          title: "Learn archery",
        },
        {
          src:"https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/bucketlist/27.webp?raw=true",
          title: "Learn shooting",
        },
      ]
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
            <HobbyIntro hobbyIntroProps={hobbyIntroProps}/>
            <BucketList bucketListProps={bucketListProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Interest;