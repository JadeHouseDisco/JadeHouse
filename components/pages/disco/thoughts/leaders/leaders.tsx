"use client"

import { useEffect, useState } from 'react';
import DiscoHeader from '@/components/disccoHeader';
import Image from 'next/image';
import DiscoFooter from '@/components/discoFooter';

const Leaders = () => {
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
                  src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731254448/2_ippsdr.webp"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <h2 className="max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
                    Leaders
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    What makes a good leader?
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
                    9 July 2024
                </p>

                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Only Person that Needs to Worry
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  A line from the book said "I am the leader. I am the only one that needs to worry". It sounds a bit cringy, but I think it really encapsulates the mindset leaders should have. As a leader, you call the shots, and you take responsibility for the collective actions of your team. You are the only person that needs to worry about the direction. Your team just trusts you.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Trust Me
                </h1>
                <div className="relative">
                  <Image
                    alt="wheel"
                    className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731254448/1_v5f00h.webp"
                    height="800"
                    width="1600"
                  />
                </div>
                <div className="mt-2 text-center text-gray-400 text-sm">
                  Leaders make you trust
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  There is a big difference between a boss and a leader. Boss asks to follow. Leaders asks for trust. With trust, support automatically follows. At times, having your team on a leash to drag them in your direction seems easier and convenient. Sooner or later, you will realize that either the leash gets loose or you get tired.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Earning trust is hard. You not only have to demonstrate your charisma and potential as a leader, but also showcase your technical expertise, organization skills, communication skills, networking abilities.... there are too many to list. Being a leader is easy; you just raise your hand when people ask for one. Being a good leader is hard. It takes talent, practice, and dedication to be one.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Leading the Way
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Why be leader if it is so difficult? Just like everything we desire, it is rewarding. When you see your team share the same passion and drive you have, when they work for it with you, and when you achieve it with them. Catalysis unlike any other. When you look back at the path your team took, you will realize that  you were the one that lead the way.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  When it comes to rational thinking, teamwork is simply more effective. One person can only do so much (maybe more now because ChatGPT). Different perspectives and capabilities are what really opens up possibilities. You never know what thoughts might pop up in other people's head. Toss in your idea. See it bounce back and forth. Before you know it, it will become bigger than you could ever imagine.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Imagine What We can Become
                </h1>
                <div className="relative">
                  <Image
                    alt="wheel"
                    className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731254448/2_ippsdr.webp"
                    height="800"
                    width="1600"
                  />
                </div>
                <div className="mt-2 text-center text-gray-400 text-sm">
                  Imagine what we can become
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  MIT media lab has the phrase "Imagine what we can become" on its main page. As a leader, you get to say this cool statement to your people. You become their inspirations. You make them trust. You show them possibilities. You show them what they could become.
                </p>
            </div>
          </div>
          <DiscoFooter/>
      </div>
    )
  }
  
export default Leaders;
