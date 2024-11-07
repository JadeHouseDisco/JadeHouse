"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const TapeCut = () => {
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
            <LabHeader/>

            {/*blogPostIntro Section*/}
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708661/1_zvdw2b.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      TapeCut
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      TapeCutter
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
                      6 July 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I introduce a simple yet practical idea to solve a common frustration: cutting tape without needing scissors or a knife. The concept involves creating an attachment that fits around a roll of tape and features a serrated edge for easy, clean cuts. While technically straightforward, the main challenge lies in determining market demand for such a product. This small innovation could offer convenience to many, and I believe that continually addressing everyday problems could eventually lead to more significant breakthroughs.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    When we need to use tape, we often find ourselves searching for a knife or scissors to cut it. But these tools aren’t always readily available, and even when they are, they can easily be misplaced. My idea is to create a simple attachment that can be easily connected to any roll of tape, allowing it to be cut effortlessly without the need for additional tools.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708661/1_zvdw2b.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Basic schematic for the idea 
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Most tapes come in a ring shape. My concept is to develop a device that can split in half and fit around the tape roll. This attachment would feature a serrated edge or sharp teeth that could be used to cut the tape cleanly and efficiently.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This idea is driven more by addressing personal inconvenience than by technological innovation. Developing the attachment itself should be straightforward, as it involves minimal technical complexity. The real challenge lies in assessing market demand for such a product. Before moving forward with development, it’s essential to evaluate whether this product would be embraced by users and have a viable place in the market.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This is a simple idea that came to me during a moment of frustration when I couldn’t find my scissors to cut tape. However, I believe that accumulating these small ideas could eventually lead to a game-changing innovation.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default TapeCut;