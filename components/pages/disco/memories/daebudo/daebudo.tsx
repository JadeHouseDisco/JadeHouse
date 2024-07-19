"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

const Daebudo = () => {
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

  interface Heading {
    id: string;
    text: string;
  }
  
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.blog-content h1'));
    const headingData = elements.map(el => {
      const id = el.id;
      const text = (el as HTMLElement).innerText;
      return { id, text };
    });
    setHeadings(headingData);
  }, []);

  return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
          <Header headerProps={headerProps}/>

          {/*blogPostIntro Section*/}
          <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
              <Image
                  alt="Background Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/1.jpg?raw=true"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Daebudo
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Trip with NTU friends
                  </p>
              </div>
          </section>

          {/*blogPostContents*/}
          <div className="relative flex">

            <nav className="sticky top-0 flex-none w-56 h-screen py-8 pl-8 bg-black overflow-y-auto">
              <h2 className="text-3xl font-bold mb-4">Contents</h2>
              <ul>
                {headings.map(heading => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="block py-2 text-white hover:underline"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="prose prose-lg mx-auto max-w-3xl mb-12 blog-content">
                <p className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                    20 April 2023
                </p>

                <div className="prose mx-auto">
                  <div className="my-8">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/LfmfJQRdKiQ`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 md:h-96"
                    ></iframe>
                  </div>
                </div>
                
                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Where are we going?
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  Me and my friends from NTU enlisted in the Korean Army at around the same time, so we had some time when we were all in the army. April 2023 was one such time, and we have been talking about matching our vacation to go for a trip while we are all in the army. Like all travel planning with the boys goes, we never really had a plan. We just scheduled our vacation together, and we chose Daebudo only 3 days before we departed our travel. We didn't really need careful consideration when choosing our destination, because all we needed was somewhere other than our military camp.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Can he drive?
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  We all had a driver license, but most of them were closer to a legal license to kill. In the end, with full suspicion, we chose who was going to drive. Fortunately, we didn't crash into anything. We were just driving for 3 hours, but with music blasting and friends talking, time flied away and we were in Daebudo in no time.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Boys trip
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/3.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/2.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/7.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    On the way to Daebudo
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Daebudo beach
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photospot cafe
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Unsurprisingly, we didn't reserve anything prior to the trip. (We barely knew where we were going). When we reached Daebudo, we first visited some famous photo spots and tourist attractions. It was awkward taking photos of each other, but we were in military for too long to remember what embarrassment feels like. Since we were near the sea, we decided our dinner must be seafood stew. I never tried seafood stew before, but it proved to be quite good. After dinner, we came back to our room and started drinking and talking about life updates we have been missing out.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  That doesn't look safe...
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/4.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/5.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Daebudo/6.jpeg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Departing for motorcycling
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Late night session
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with bear
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Next day, we were looking for something to do, and a quick search brough us to a motorcycling along the beach. First impression on the bikes weren't great; they didn't look exactly safe. However, we got on regardless, because we were looking for entertainment. After few minutes of riding, we realized that we made a great choice. We had loads of fun and were excited to try more of these in the future.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Coming back to reality
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Our plan was initially 3 days, but one of us had to leave early because there was an incident back in his camp and he was ordered to come back immediately. We sent him back together, and spent the last day in Daebudo, slightly sad that one of us had to go. The entire trip was initiated in a rush, but I am glad we went for it anyways. Looking back, it was a great memory to cherish upon. We are all out of military now, and we are busier than ever. We are unsure when we will have time to go travelling together like this, making this memory even more precious.
                </p>
            </div>
          </div>
          <Footer footerProps={footerProps}/>
      </div>
    )
  }
  
export default Daebudo;