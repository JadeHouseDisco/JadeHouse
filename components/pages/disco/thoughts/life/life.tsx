"use client"

import { useEffect, useState } from 'react';
import DiscoHeader from '@/components/disccoHeader';
import Image from 'next/image';
import DiscoFooter from '@/components/discoFooter';

const Life = () => {
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
          <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
              <Image
                  alt="Background Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731256634/2_hkokge.webp"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Weight of Life
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    How do we live through all the hardship of life?
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
                    23 April 2024
                </p>

                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Progressive Overload
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  The term progressive overload comes from body building, where you increase the intensity of the exercise with your progress. This is to prevent your body from adapting to the stimulus so that continual growth can be achieved. It seems like the same concept is applicable to life. The burden, hardship, and challenges in life keeps on overloading. As for both settings, it is painful and exhausting.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Hefty Responsibilities
                </h1>
                <div className="relative">
                  <Image
                    alt="wheel"
                    className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731256632/1_fwbrsh.webp"
                    height="800"
                    width="1600"
                  />
                </div>
                <div className="mt-2 text-center text-gray-400 text-sm">
                  Heavy is our lives
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Life if difficult. So much so that many people actually give up on it. In South Korea, we have an ominous record of having the highest suicidal rates globally. It seems life is unkind to everyone. I always believe that life is fairly unfair to everyone.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  How do we hold ourselves in this tortuous journey? Ironically, the answer is in lifting the hefty, burdensome responsibilities of your life. This might sound absurd at first. Life is already challenging enough. It would be impossible to put more burdens on one's shoulders. But trust me; you can, and you must.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Responsibilities come from value. You become responsible for things that are meaningful to you. This small addition of value in your life will be the driving force that keeps you going. Life is still hard. It might be even harder because of all the responsibilities you are carrying. But things are different now. You have values that you can live for.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Lets go back to our workout examples. Seen from a caveman's perspective, weight lifting is simply a torture to yourself (It kind of is). Why do we do it than? It is because it is meaningful to us. It gives us healthy body. It gives us great looking aesthetics. It makes us feel proud. We all see values from it, so we endure through it. Same goes for life. Something to chase after gives you reason to endure.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Pink Dumbbell for Starters
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Everything is easier said then done, especially when you are talking about big topics like life. Everyone needs a place to start, because taking the first step out of the swamp of life is the hardest part. Don't be embarrassed to start with your pink dumbbells. Do little things at first. See that you can do things at your own will. Make a difference. Pick up that small, light responsibilities.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Remember progressive overload? This is just it. You start small and easy, and you work your way up. You will see in no time that you are lifting more than you could imagine.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Push!
                </h1>
                <div className="relative">
                  <Image
                    alt="wheel"
                    className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731256634/2_hkokge.webp"
                    height="800"
                    width="1600"
                  />
                </div>
                <div className="mt-2 text-center text-gray-400 text-sm">
                  To the top, together
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I learned the importance of responsibilities from a podcast hosted by Jordan Peterson. He is a great person that talks about a lot of things, but his speeches and lectures on navigating our perplexing life was especially inspirational to me. I hope my little blog post can share wisdom and inspiration just like how Jordan Peterson was able to confer them to me. As a last note, you don't have to do life alone. Life throws different things at you, and some things are simply beyond your willpower. Find someone to go along with, like your gym bro.  When you hit your limit, they will be there to assist you. You can do it. Push!
                </p>
            </div>
          </div>
          <DiscoFooter/>
      </div>
    )
  }
  
export default Life;