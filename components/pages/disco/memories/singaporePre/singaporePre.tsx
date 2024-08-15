"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

const SingaporePre = () => {
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
                  src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/1.jpg?raw=true"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Singapore - Prelude
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    First two years in NTU
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
                    30 May 2022
                </p>
                
                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Everyone has a plan until they get punched in the mouth
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  Notification popped up in my phone in the middle of my game. With a glimpse, I saw that it was an email, and emails could wait. After my game, however, I realized that this particular email couldn't wait; it said I was accepted to Nanyang Technological University. More shockingly, it also said my school was starting in 3 weeks.
                </p>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  My initial plan was to go for undergraduate studies in the US. But, as Mike Tyson said, everyone has a plan until they get punched in the mouth. For me the punch was Covid. My 12 applications to US schools all failed but one, which was my backup choice. I really didn't want to go to my backup school. This might sound arrogant, but I was actually pretty confident with my high school grades. So the shocking application results to US schools left me devastated. Time didn't wait, and I eventually graduated and came back to Korea. I was going to apply for Korean universities, something I wasn't even considering back in high school. Amidst the chaotic application process,  a single email from NTU changed everything.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  YOU WILL BE SENT BACK TO YOUR COUNTRY
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  During the era of Covid, almost all countries started practicing quarantine, especially if you were entering the country from a foreign country. Singapore had 2 weeks of quarantine, meaning that I had to leave Korea within a week to attend school on time. I started working on all the documentations required before flying to Singapore. I was more worried than excited. I had no one I knew in Singapore, my family has never been to Singapore, and nobody in my social circle has tried applying for student visa in a foreign country. I still remember the big, capitalized, and red warning on the requirements page saying "YOU WILL BE SENT BACK TO YOUR COUNTRY WITHOUT THE NECESSARY DOCUMENTS".
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Fortunately, I was able to get everything ready within a week and book a flight to Singapore. I even had another person going to Singapore on the same flight as me, so we decided to meet in the airport. She was the first friend I made in NTU, and we relied on each other as we took our first step into a foreign land. We cross-checked all the required documentations and confirmed that we were good to go. To my surprise, the immigration check was very straightforward; we handed them the documents, they stamped our passport. The real trouble was when we were being escorted to our quarantine location. NTU told us that we would do our quarantine in school hostel. Instead, we were dropped at a random hotel. The hotel didn't know why we were there, we had no idea where we even were, and no one was going to answer their phone at 1 AM. So we just stayed the night in hotel, only to find out the we will be staying there for the next 2 weeks.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Diving in head-first
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/2.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/3.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/4.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    NTU for the first time
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Power of Merlion within me
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    My hall desk
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Life in university was clearly different from high school. I had so much freedom, up to the point it was overwhelming. Many people say that you have the best time of your life when you just reach adult. For me, the freedom felt like a burdensome responsibility I had to carry. This isn't to say that I was stressing over from it; just that living independently, at least for me, wasn't as enjoyable as others describe it to be.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Everything around me was new, starting from environment, studying, and even relationships. Back in high school I was an extremely introverted and shy person. However, I wanted to change now that I was in university. So I decided to go for it. On the first day after my quarantine ended, I had a chance to meet with freshman that just came to NTU like me. Instead of being my usual self, waiting for someone to talk to me, I decided to sit in the middle of everyone and talk to them. At first my heart felt like it was going to burst. But shortly after, it was all good and calm. I almost felt like a fool for fearing something so easy my whole life. I know this isn't anything special or amazing, but this small step was what propelled me to become the social and outgoing person I am today.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  New education system in university was puzzling. Unfortunately, I did not have many seniors to ask around, so I literally dived in head-first at almost anything. Course registration was like solving a puzzle that clearly has few pieces missing. Finding my lecture theaters and tutorial rooms in Asia's largest campus literally felt like running around the maze. Adding on to already overwhelming adaptation period was new systems introduced with Covid, which further complicated the process. I remember looking for a lecture theater, only to find passages blocked off due to Covid. In the end, I had to walk through a gigantic lecture theater with all of its lights off. I am probably one of the few people that felt the thrill of venturing through an undiscovered cave in the middle of a university campus.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  ACCMAE
                </h1>
                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/5.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    First lunch with ACCMAE
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/6.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    End of semester session
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I was close with most of my cohort, but I was especially close with 6 Korean friends in particular, whom formed a group to continue our friendship. We met in one of our senior's birthday party, and quickly became close to each other. Five of us were from Mechanical and Aerospace engineering, and two others were from accounting. So we decided to name our group ACCMAE (Not the most creative name I know, but we liked how it sounded) We made many unforgettable memories. First year in NTU was definitely challenging with new lifestyle and environment to adopt to. However, it was the memories I made with my friends that made the first year so beautiful and memorable. All of us were new to Singapore, so we travelled around together. When we finished our finals, we would gather in my room to celebrate the successful completion of yet another semester.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Life in university also offered many opportunities unforeseen back in high school. I was able to engage in different clubs, activities, and social events. I learned more, experienced new things, and made new connections. I especially liked project or research opportunities, because I could really see how the knowledge I learn from my classes can be escalated into applications. I also went through personal changes. Overcoming my shyness was one thing. Another significant change was losing weight. I used to be severely overweight, and my health and self-confidence was deteriorating because of it. I wanted to change, so I made a diet plan during the winter vacation and lost 20 kgs in a month. This was dangerously fast, but I was more than happy with the results. After losing weight and becoming fit, I gained both physical and mental health. I felt like a new person, and I was never going back to who I was before.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Till the day of reunion
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/8.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/9.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Singapore_Prelude/10.jpg?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Marina Bay tour
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Universal studio
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Closing our second year
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Before I knew it, I was in second year. Some of my friends decided to enlist for military after the first year. ACCMAE also lost 3 of its members. Although we were still close, it wasn't what it used to be with only part of its members. We were no longer freshman. We were now mentors, teaching freshman about NTU and other things we once struggled ourselves. We engaged in different opportunities, found each of our passion, and started preparing for our future. We would occasionally meet, but not as often as before. Time flied by, and with a blink of an eye, I was done with my second year, waiting to enlist for military. 
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Too many things happened in the first two years I spent in Singapore; too much to record all of it in this short blog post. However, with just a fraction of everything that I recorded here, I can confidently say that the 2 years changed me. I met great friends, experienced a bigger world, made precious memories, and found a hint of my passion and ambitions. I remember the last session with ACCMAE after finishing our first year. We reminisced our restless journey and laughed at the foolish mistakes we made. We laughed and laughed, as if we were trying to make up for the time until our next reunion. We raised a toast to the beautiful memories we made, and to the exciting future where we will reunite to make more memories together.
                </p>
            </div>
          </div>
          <Footer footerProps={footerProps}/>
      </div>
    )
  }
  
export default SingaporePre;