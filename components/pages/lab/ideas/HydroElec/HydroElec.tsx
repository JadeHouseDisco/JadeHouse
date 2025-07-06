"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const HydroElec = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731225140/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-11-10_155210_gzosbx.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      HydroElec
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Hybrid Hydraulic Electric Actuation Strategy
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
                      27 October 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    This blog explores a hybrid actuation approach that combines the high power of hydraulics with the precise control of electric actuation to enhance robotic adaptability, especially for human-interactive robots. By enabling robots to switch between or use both modes as needed, this approach could optimize performance across diverse tasks, though challenges like compatibility, seamless transitions, and automated switching remain key to its development.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Two common modes of robot actuation are hydraulic and electric. Hydraulic can output great amount of force, but has lacking in precise control and must rely on feedback control system that might not be sensitive enough. On the other hand, electric actuation strategies offer precise control using sensing technologies like optical encoder. However, they lack the power density that hydraulic actuation strategies possess. In this blog post, I wish to discuss the combination strategy to utilize the benefits of both approaches.
                  </p>


                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731225140/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-11-10_155210_gzosbx.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Idea sketch of what is required by the phantom
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Robots need to carry out diverse array of actions depending on their applications. For robots that closely interact with humans, the need for adaptability is greatly pronounced due to the multifaceted actions humans undergo. The idea is to design a robotic mechanism that can switch between electrical actuation and hydraulic actuation strategy depending on the task that has to be performed. User will have the autonomy to change between the actuation strategy depending on their judgment.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another approach is to have a cooperative system that makes use of both actuation strategies. When deemed necessary, both system will come into play to offer optimal actuation performance. With further development, automatic system to detect the requirements of the performed task can be developed to automatically transition from one strategy to another.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    One important consideration is the compatibility of the two actuation strategies. It is important for one another to function without hindering the performance of the other. Since two actuation strategies very different mechanism design, it would be important to put both system while accounting for compactness and robustness.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    There must also be a minimization of excessive force being applied by the two systems. The transition from one system to another must be responsive enough to prevent any accidents. There must also be safety system to ensure that the dual control system are kept in control. It would also be important to clearly define the threshold to determine which actuation strategy is appropriate or required.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731225088/2_huifbb.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of HydroElec
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I believe that the combination of two actuation strategies can greatly enhance the capabilities of robotic systems. Focusing specifically on robots that interact with humans, it would serve as a foundation to augmenting human ability while maintaining the precise control capabilities our intricate body possess.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default HydroElec;