import React from 'react';
import Header from "@/components/header";
import BackgroundTimeline from "@/components/backgroundTimeline"
import AboutMeIntro from '@/components/aboutMeIntro';

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
        pText: "I am Hyunwoo, a curious and energetic soul always looking for new experiences. I love making new memories and selecting the perfect music to accompany them.",
        imgSrc: "/disco_profile_image.jpg"
      }

    const backgroundTimelineProps = {
        titleText: "My Journey",
        timeStamps: [
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: ["/test.png","/test.png","/test.png","/test.png"],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: ["/test.png","/test.png","/test.png","/test.png"],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: ["/test.png","/test.png","/test.png","/test.png"],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: ["/test.png","/test.png","/test.png","/test.png"],
                detailedDescription: "More testing required"
            },
        ],
    }
    
    

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <Header headerProps={headerProps}/>
            <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
            <BackgroundTimeline backgroundTimelineProps={backgroundTimelineProps}/>
        </div>
    )
}

export default Aboutme;