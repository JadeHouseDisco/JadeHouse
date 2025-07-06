"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const ArmHead = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708572/1_z5lndx.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      ArmHead
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Switchable Arm Head
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
                      25 March 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I explore the concept of transforming our biological limbs into customizable tools through prosthetics and exoskeletons. By introducing interchangeable arm heads, similar to drill bits, users could adapt their arms to perform a wide range of tasks beyond the capabilities of fingers. This innovation would involve a standardized connector system, enabling easy attachment and control of different arm heads through a bi-directional neural interface. While this idea holds immense potential, challenges such as developing effective control strategies, providing sensory feedback, and ensuring compatibility across various tool heads must be addressed to make this vision a reality.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Many modern drills come with interchangeable heads, allowing users to customize the tool to their specific needs. Similarly, the human arm functions as a versatile tool, but we currently only have one "head"—our fingers. However, by replacing our biological limbs with prosthetics or equipping ourselves with exoskeletons, we could introduce the option to customize our arm’s functionality. My idea is to develop a mechanism that allows users to detach and swap out their arm heads, adapting them to various tasks.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708572/1_z5lndx.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Ideas for different arm heads
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Similar to drill bits, prosthetics and exoskeletons would feature a connector, enabling users to attach different arm heads as needed. Once connected, the internal circuitry—including power supply and a bi-directional neural interface for control and sensory feedback—would automatically establish, giving users full control over the newly equipped arm head. While our fingers are incredibly sophisticated and capable of performing many tasks, this technology would allow humans to extend their capabilities by using tools beyond the fingers.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    One of the main challenges with this idea is controlling the different arm heads. Each head would have a unique design, requiring a distinct actuation strategy. Conventional motor signals from our brain, which are designed to control biological limbs, might be insufficient for managing these new structures. Instead, <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/intrecog">decoding user intentions</a> would be more effective, allowing the arm heads to execute preprogrammed routines based on user needs. Additional sensors, such as <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/visCtr">vision systems</a>, could further assist in controlling these heads.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Providing sensory feedback to the brain is another significant challenge. For finger-like mechanisms, it may be possible to replicate the sensory feedback of biological fingers. However, other arm heads would need to deliver sensory feedback tailored to their specific purposes, which could complicate the process of establishing nerve connections.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Compatibility between different tool heads is another important consideration. A standardized connection system would be essential to ensure that arm heads from various manufacturers can be universally used by all users. Development of a <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/univExsk">universal exoskeleton</a> standard might be a solution, allowing the industry to agree on a fixed standard.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                    <Image
                      alt="wheel"
                      className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708572/2_abqi3a.webp"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="mt-2 text-center text-gray-400 text-sm">
                    Concept art of ArmHead
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    By moving beyond simply replicating human anatomy, prosthetics and exoskeletons could enable humans to use tools that exceed biological limitations. This technology could allow us to customize our bodies, pushing the boundaries of robotic evolution.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default ArmHead;