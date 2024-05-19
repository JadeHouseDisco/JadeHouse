import React from 'react';
import Header from "@/components/header";
import QuotesIntro from '@/components/quotesIntro';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Quotes = () => {
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
                { text: 'Interest', href: '/disco/aboutme/interest' },
            ] 
            },
            { text: 'Memories', href: '/disco/memories', subOptions: [] },
            {
            href:"/disco/thoughts",
            text: 'Thoughts',
            subOptions: [
                { text: 'Perspective', href: '/disco/thoughts/perspective' },
                { text: 'Inspiration', href: '/disco/thoughts/inspiration' },
                { text: 'Quotes', href: '/disco/thoughts/quotes' },
            ],
            },
            { text: 'Music', href: '/disco/music', subOptions: [] },
        ],
    }

    const quotesIntroProps = {
        titleText: "My Favorite Quotes",
        descriptionText: "These quotes have inspired and motivated me throughout my life.",
        quotes: [
            {
                text: "Bigger dreams have bigger shards",
                author: "me",
                description: "This quote fuels my courage in pursuing my ambitions. Even if my dreams are too big to achieve, I know that the shards of it will be bigger.",
            },
            {
                text: "Don't let small minds convince you that your dreams are too big",
                author: "asdd",
                description: "asdasdasd",
            },
            {
                text: "Shoot for the moon. Even if you miss, you will land among the stars",
                author: "",
                description: "",
            },
            {
                text: "The past has gone by, The future is yet to come. The only relevant reality is now",
                author: "",
                description: "",
            },
        ]
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
            <QuotesIntro quotesIntroProps={quotesIntroProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Quotes;