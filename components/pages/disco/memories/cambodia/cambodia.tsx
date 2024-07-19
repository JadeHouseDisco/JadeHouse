"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

const Cambodia = () => {
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
                  src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/3.jpg?raw=true"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Cambodia
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Northbridge International School Cambodia (NISC)
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
                    30 May 2020
                </p>

                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Korean man in Cambodia
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  Turning 12 marked a significant change in my life when my parents decided to start a business in Cambodia, and I had to move with them. Leaving my friends behind and facing an unfamiliar environment was daunting. Many pivotal moments in Cambodia shaped who I am today. Sometimes, I wonder who I would have become if I had stayed in Korea, but one thing is certain: I wouldn't be writing my life story in English like I am now.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Settling down
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  When I first moved to Cambodia, I wasn't fluent in English, and I struggled with daily conversations. I enrolled in Northbridge International School Cambodia (NISC), where I had trouble communicating with friends and teachers, and I struggled to fit in. My academic performance dropped, partly due to my poor English and mostly because I lost the motivation to try. My life at school deteriorated to the point where my homeroom teacher suggested my parents send me back to Korea. This was a tough time for my family; my parents' business was failing, and I was at my lowest in terms of social and academic standing.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  It took about three years for everything to stabilize. After spending about 1.5 years stressing about not fitting in, I finally invested time in learning English. Reading English books was a game changer for me. (If you ever need to learn or teach a language, reading books in that language is the way to go.) Participating in Model United Nations from grade nine helped me upgrade my English proficiency from daily conversation level to academic fluency. Around the same time, my parents' business, though still challenging, was coming together. Our family was getting back on track.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Melding in with the culture
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/2.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/5.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/6.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Class photo during MIA
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    THIMUN group photo
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    MUN club photo
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  With my improved English, I was able to make friends. Free from language barriers, my humor emerged, and before long, I became the class clown. I also met great teachers who reignited my interest in math and sciences. As my academic and social circumstances recovered, I started to become the person I was meant to be.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Understanding that my passion lay in math and sciences, I invested more time in studying them. Effort brought results, and improved academic performance motivated me to strive for better grades in other classes. In just two years, I went from the bottom of my class to the top. I still remember my parents' disbelief when I was awarded a certificate of academic excellence.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Treasures and growth
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/1.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/7.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Cambodia/4.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Poolside shot with my friends
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Graduation
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Farewell with my friends
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Many great memories were made during my time in Cambodia. I seem to have one of the best luck when it comes to meeting the right people. I was surrounded by good people that made good memories. I learned to balance my life between studying and relaxing, and realized the importance of living in the moment that will one day become cherished memories.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Cambodia also offered insight into a part of the world unimaginable back in Korea. I saw the detriment and tragedy poverty can bring. I witnessed basic rights like healthcare, food and shelter crumbling too easily at the face of poverty. I saw a society hurt from its past, scarred by a brutal regime that reversed progress and tormented its people. I saw people in pain, both physically and mentally. However, despite all the sadness, I saw people smiling, not losing hope and happiness in their lives and making the best out of their lives. I wanted bring more smiles, so I participated in many service activities and volunteering. It is here I envisioned engineering a better world for everyone.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Good times
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  When I look back at my time in Cambodia, I smile in happiness thinking about all the good memories it made, and I close my eyes in sadness knowing that it is never coming back. But I open back my eyes, knowing that every moment is beautiful and meaningful because they are finite. So I turn my eyes to look forward into the future, knowing that my past will help lead me to the right direction.
                </p>
            </div>
          </div>
          <Footer footerProps={footerProps}/>
      </div>
    )
  }
  
export default Cambodia;