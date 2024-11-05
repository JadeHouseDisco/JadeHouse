"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const TripleA = () => {
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/tripleA/1.png?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      TripleA
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Ability Assistance and Augmentation
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
                      4 March 2023
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I introduce the concept of prostheses that go beyond traditional support functions by accurately recognizing user intentions and triggering preprogrammed routines. This innovation has the potential to not only restore abilities for individuals with disabilities but also to augment human capabilities for anyone, enabling actions like lifting, jumping, and running with enhanced power. While this idea opens up exciting possibilities, it also presents significant challenges, particularly in ensuring the safe and effective use of these advanced prostheses in dynamic environments.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Many commercially available prostheses and exoskeletons function more like tools that users attach to provide support for their actions. However, if we can accurately <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/intrecog">recognize user intentions</a>, we can develop prostheses that not only assist but also augment user actions and abilities. This advancement would not only help individuals with disabilities restore their capabilities but also enable all users to transcend human limitations.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/tripleA/1.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Ideas of actions that can be assisted or augmented
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If user intentions are decoded with precision, they can be used to trigger preprogrammed routines that respond to the users' needs. This could provide crucial assistance to those unable to perform intended actions due to paralysis, stroke, or other disabilities. Beyond that, this capability could be utilized by anyone to enhance their abilities beyond natural limits. Potential applications include, but are not limited to:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Lifting
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Throwing
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Punching
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Jumping
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Running
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Kicking
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This would make prostheses beneficial not only for individuals with disabilities but also for anyone seeking to augment their abilities in various situations.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Fully recognizing user intentions and executing preprogrammed routines while adapting to dynamic environments poses significant challenges. These challenges become even more pronounced when greater force is required for ability augmentation. Ensuring the safe operation of prostheses is critical to prevent any harm to users. It is essential to balance the force used for augmentation with the need to minimize any potential harm. Developing strategies for shock minimization and absorption will be crucial to ensure users experience no adverse effects from ability augmentation. The risks associated with this technology must be thoroughly evaluated before it is implemented in real-world applications.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                    <Image
                      alt="wheel"
                      className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/tripleA/2.webp?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="mt-2 text-center text-gray-400 text-sm">
                    Concept art of tripleA
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Prostheses hold the potential to do much more than assist those with disabilities. By controlling prostheses based on user intentions, we can not only aid individuals but also empower them to break through the biological limits of mankind. This technology could revolutionize the way we interact with the world, offering benefits to anyone, anywhere.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default TripleA;