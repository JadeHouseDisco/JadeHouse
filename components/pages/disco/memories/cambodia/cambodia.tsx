"use client"

import { useEffect, useState } from 'react';
import DiscoHeader from '@/components/disccoHeader';
import Image from 'next/image';
import DiscoFooter from '@/components/discoFooter';

const Cambodia = () => {
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
          <DiscoHeader/>

          {/*blogPostIntro Section*/}
            <section className="relative min-h-[clamp(28rem,72svh,52rem)] w-full overflow-hidden">
              <Image
                  alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                    sizes="100vw"
                  src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708573/1_a3f6oe.jpg"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <h2 className="max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
                    Cambodia
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Northbridge International School Cambodia (NISC)
                  </p>
              </div>
          </section>

          {/*blogPostContents*/}
            <div className="relative flex min-w-0">

              <nav className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 flex-none overflow-y-auto bg-black py-8 pl-8 pr-4 xl:block">
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

              <div className="blog-content prose prose-lg mx-auto mb-12 flex-1">
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
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708574/2_qlpfkq.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708575/3_ta1vxx.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708575/4_bqiwjz.jpg"
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
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708573/1_a3f6oe.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708576/7_uiebbu.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708575/4_bqiwjz.jpg"
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
          <DiscoFooter/>
      </div>
    )
  }
  
export default Cambodia;
