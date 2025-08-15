"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const ExpnArm = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708581/1_y3b4nl.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      ExpnArm
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Expandable Upper Limb Prosthesis
                    </p>
                </div>
            </section>

            {/*blogPostContents*/}
            <div className="relative flex">

              <nav className="hidden md:block sticky top-0 flex-none w-56 h-screen py-8 pl-8 bg-black overflow-y-auto">
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
                      17 September 2023
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I explore the concept of developing a prosthesis that extends the capabilities of the human arm beyond its natural limits. Inspired by the advanced mechanisms often seen in science fiction, my idea focuses on adding new degrees of freedom to the arm, such as extension and additional joints for greater rotational flexibility. These enhancements would allow users to perform movements currently impossible with biological limbs. While the concept holds great potential, it also presents challenges, including how to effectively control the new structures, ensure seamless integration with the body, and maintain user safety. By harnessing technology, we have the opportunity to push the boundaries of human evolution, not through natural selection, but through our own innovation.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The human body is an extraordinary mechanism, with remarkable balance, precision, and flexibility. One of the most fascinating parts of our anatomy is the arm, which assists us in countless activities through its multiple joints. While evolution has shaped this sophisticated structure, it has developed it so that it is just sufficient for survival. However, with the power of technology, we can evolve our bodies to become even more capable. My idea is to develop a prosthesis that provides actuation beyond human limits.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708581/1_y3b4nl.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Ideas for adding degree of freedom to our arm
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In sci-fi books and movies, we often see robots with highly advanced mechanisms that far exceed the capabilities of human limbs. My idea closely aligns with this vision, but with one key difference: it’s feasible in the real world through technology. The basic concept involves adding new degrees of freedom to the human body. One motion our arms currently cannot perform is extension. By developing a prosthesis that can extend in length, we could achieve greater freedom of movement. Additionally, introducing an extra joint for rotation, unbound by the restrictions of biological limbs, could allow our arms to bend four times, reaching beyond current limitations.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    One major consideration is how users would control these added degrees of freedom. Our brains are wired to control our natural limbs, and since we’ve never used arms with different structures, reading motor signals for the new joints would be challenging. Therefore, <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/intRecg">decoding the user’s intention</a> will be crucial for actuating the new arm structure and achieving the desired motion. This process may need to be guided by additional control feedback, such as a <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/visCtr">vision system</a>.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another challenge lies in how this new mechanism will be integrated with the body. I believe that a prosthesis should become an extension of the user, rather than just a tool attached to the body. To achieve this, the connection between the user’s body and the prosthesis must be designed with careful consideration to maximize comfort and ensure the user fully embraces the new structure as part of themselves.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Safety considerations are also paramount. The new arm structure must deliver the desired functionalities while keeping the user safe. Additionally, the added features should not interfere with the original functionality of the arm.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708581/2_udydpx.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of ExpnArm
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I believe we are at a point where we can harness technology to transform our lives. Prosthetics will not only assist and augment the biological capabilities of humans but also enhance our structure, pushing us beyond our natural limits. This new form of evolution won’t be driven by natural selection, but by our own ingenuity.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default ExpnArm;