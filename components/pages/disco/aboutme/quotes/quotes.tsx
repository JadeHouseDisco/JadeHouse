import React from 'react';
import Header from "@/components/header";
import QuotesIntro from '@/components/quotesIntro';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Quotes = () => {
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

    const quotesIntroProps = {
        titleText: "Favorite Quotes",
        descriptionText: "These quotes have inspired and motivated me throughout my life.",
        quotes: [
          {
            text: "Shoot for the moon. Even if you miss, you will land among the stars",
            author: "Norman Vincent Peale",
            description: "While not scientifically accurate, This quote inspires me to pursue my ambitions courageously, reminding me that even if I don't reach my exact goal, I will still achieve something valuable.",
          },
          {
            text: "Bigger dreams have bigger shards",
            author: "Me",
            description: "This quote reassures me that even if my dreams are too big to fully achieve, the fragments of my efforts will still be significant and rewarding.",
          },
          {
            text: "Don't let small minds convince you that your dreams are too big",
            author: "Tony Robbins",
            description: " This quote gives me the courage to pursue my ambitions despite what others may say.",
          },
          {
            text: "Small steps everyday can take you everywhere",
            author: "Me",
            description: "This quote reinforces my belief that consistent, small efforts each day can lead to achieving anything",
          },
          {
            text: "The path you walk is the shortest path to where you will go",
            author: "Me",
            description: "This quote clears my doubts and worries in pursuing the path I've chosen.",
          },
          {
            text: "Our path towards the inevitable end will shine the dark night like shooting stars",
            author: "Me",
            description: "This quote motivates me by reminding me that despite life's hardships and inevitable end, our efforts will shine and be cherished.",
          },
          {
            text: "Live a day you won't regret, live a life you dream",
            author: "Me",
            description: "This quote helps me endure difficult days by reminding me that today's efforts will lead to the life I dream of.",
          },
          {
            text: "Why be normal when you can be the best?",
            author: "Zlatan Ibrahimovic",
            description: "This quote motivates me by reminding me that I can be the best if I strive for it.",
          },
          {
            text: "Fortune favors the prepared mind",
            author: "Louis Pasteur",
            description: "This quote reminds me that while luck is important, success comes to those who are prepared to seize opportunities.",
          },
          {
            text: "The past has gone by, The future is yet to come. The only relevant reality is now",
            author: "Buddha",
            description: "This quote clears my doubts and worries, allowing me to focus on things that are important and within my control.",
          },
          {
            text: "Face up to your fears and leave no regrets",
            author: "Me",
            description: "This quote encourages me to face challenges bravely and give my best effort, so I won't have any regrets in the future.",
          },
          {
            text: "All my life, I've tried to shoot the decisive moment of life, only to realize every moment of life was the decisive moment",
            author: "Henri Cartier-Bresson",
            description: "This quote reminds me that every moment in life is important, encouraging me to give my best effort in each one.",
          },
          {
            text: "Clear and passionate purpose breed courage and perseverance for the right moment",
            author: "Me",
            description: "This quote makes me believe in my purpose and endure for my goals.",
          },
          {
            text: "You find passion by starting and not giving up on something you suck at.",
            author: "Alex Hormozi",
            description: "This quote helps me stay motivated whenever I start something new.",
          },
          {
            text: "The magic you are looking for is in the work you are avoiding.",
            author: "Dipen Parmar",
            description: "This quote helps me overcome my fear of new or challenging tasks, assuring me that the effort will be worth it.",
          },
          {
            text: "Why try realistically with unrealistic goals?",
            author: "Me",
            description: "This quote keeps me motivated to try relentlessly for my dreams.",
          },
          {
            text: "Learn the rules like a pro, so you can break them like an artist",
            author: "Pablo Picasso",
            description: "This quote helps me understand that true innovation comes from mastering the rules before breaking them creatively.",
          },
          {
            text: "Behind every fear lies a wish",
            author: "Lee Geun Dae",
            description: "This quote reassures me that my fears stem from my deep desire for my dreams, not from a lack of ability.",
          },
          {
            text: "I am the leader. I am the only one who needs to worry",
            author: "Me",
            description: "This quote reinforces my role as a leader, reminding me that it's my responsibility to handle worries and challenges so my team can follow confidently.",
          },
          {
            text: "All start-ups are a overnight success, but it happens on the 500th night",
            author: "Lee Seung Yoon",
            description: "This quote shall motivate me through my entrepreneurship journey, reminding me that success comes to those who persevere.",
          },
          {
            text: "Start-up should be your method, not your purpose",
            author: "",
            description: "This quote reminds me of my purpose and keeps me focused.",
          },
          {
            text: "There is not a single responsibility in our company that needs risking of your safety",
            author: "HD Hyundai Heavy Industries",
            description: "This quote teaches me the mindset required to effectively and safety lead people with united vision.",
          },
          {
            text: "Heros use pain. Villans are used by it.",
            author: "Alex Hormozi",
            description: "This quote reminds me that I can use the scars of my past to become stronger rather than letting it control me.",
          },
          {
            text: "Do it for others, not because of others",
            author: "Me",
            description: "This quote reminds me on how to foster healthy relationships.",
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
            <QuotesIntro quotesIntroProps={quotesIntroProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Quotes;