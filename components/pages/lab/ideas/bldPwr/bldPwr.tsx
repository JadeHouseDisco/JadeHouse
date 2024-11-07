"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const BldPwr = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708573/1_w09pqh.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      BldPwr
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Blood Power
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
                      10 February 2022
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    n this blog post, I delve into the concept of generating electricity within the human body using the natural flow of blood, aimed at powering implantable devices and artificial organs. Inspired by the challenge of powering an implantable device during my time at Seoul National University, I propose harnessing the energy of circulating blood, either chemically or mechanically, to eliminate the need for batteries or external power sources. While this idea presents exciting possibilities for enhancing the quality of life for patients, it also poses significant challenges, including safety concerns, the complexity of energy generation, and ensuring adequate power supply. Despite the hurdles, I believe that with innovative engineering, this concept could revolutionize how we power internal medical devices, pushing the boundaries of human-machine integration.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    While <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/experiences/snu">developing an implantable device</a> at Seoul National University, I encountered the challenge of providing power for such devices. This led me to consider other body-interacting machines, such as artificial organs or prostheses. For prostheses, an external power source is more feasible since the device is attached to the body. However, for implantable devices or artificial organs that reside within the body, powering them becomes much more complex. Current solutions require either implanting a battery or connecting the device via a wire to an external power source, both of which significantly reduce a patient's quality of life and limit the use of such technology to clinical settings. My idea is to develop a method for generating electricity using the body's circulating blood to power these devices.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708573/1_w09pqh.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Ideas for electricity generation using blood
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our bodies use the oxygen content in blood to power all organs through a chemical reaction that converts oxygen to carbon dioxide, generating energy in the process. My idea is to replicate this biological energy generation. As long as we are alive, blood continues to circulate throughout the body. If we can harness this blood flow to generate electricity, we could eliminate the need for batteries or external power supplies for internal devices. This could be achieved either through a chemical reaction with blood components or by mechanically generating electricity from blood flow.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    While the idea is promising, it presents numerous challenges and considerations. The foremost concern is safety. Any method of using blood to generate electricity could disrupt blood flow, potentially causing issues in the circulatory system. Additionally, electricity generated within the body must be perfectly insulated to prevent harm from leakage.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another significant challenge is the process of generating electricity itself. If a chemical method is used, how will the byproducts of the reaction be managed? For instance, if gases are produced, we would need a way to expel them from the body or introduce them into the veins for removal by the respiratory system. If heat is generated, we must ensure it does not harm the body. If mechanical methods are employed, it’s crucial to ensure they don’t interfere with the circulatory system. Finally, we need to verify whether any of these methods could generate sufficient electricity to power the necessary devices.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708573/2_eovvwf.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of BldPwr
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I’m uncertain about the feasibility of this idea; it may be close to impossible, which could explain why such technology doesn’t yet exist. However, as an engineer, I believe there are no impossible problems—only those that have yet to be solved. I’m confident that if realized, this technology could play a crucial role in bringing the robotic evolution of mankind to reality.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default BldPwr;