"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const UnivExsk = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708664/1_qufwwp.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      UnivExsk
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Universal Exoskeleton
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
                      18 October 2023
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I explore the concept of a universal exoskeleton designed to adapt to the needs of individuals with various disabilities. Unlike traditional exoskeletons, this device offers flexibility by allowing users to attach it to their existing limbs or replace missing limbs with prosthetic components. The exoskeleton's modular design ensures that it can be customized to fit each individual's specific requirements, making it a versatile solution for a wide range of disabilities. While creating a universal standard presents significant challenges, this innovation could play a crucial role in making advanced prosthetics and exoskeletons accessible to everyone, regardless of their physical condition.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Prosthetics and exoskeletons hold great promise in restoring the everyday lives of people with disabilities. However, not all disabilities are the same—some individuals have lost entire limbs, others only part of their limbs, and some are paralyzed and unable to use their attached limbs. Developing customized solutions for each person would undoubtedly yield the best performance, but this approach is complex and costly, making it inaccessible to many. To help the most people, my idea is to develop a universal exoskeleton that can be used by anyone, regardless of their disability, and can be customized to fit their specific needs.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708664/1_qufwwp.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Idea sketch of universal exoskeleton utilized by people with different disabilities
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The basic structure of the exoskeleton is a device that attaches to the body. A key difference from traditional exoskeletons is that, aside from a central locking mechanism, strapping the exoskeleton to the body is optional. This flexibility allows all users to equip the exoskeleton and secure it to the limbs they still possess.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    For intact limbs, the exoskeleton straps onto them to assist movement. For missing limbs, the corresponding part of the exoskeleton can be replaced with a prosthesis, effectively restoring the missing limb. All components of the exoskeleton are modular and can be disassembled, making it adaptable to the unique needs of different individuals.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Additionally, a universal standard for connecting various components could be developed to ensure compatibility across manufacturers. This would also allow for the <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/armHead">replacement of specific components, such as hands, with other tools</a> as needed.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Creating a universal standard that accommodates individuals with a wide range of disabilities is a significant challenge. Each type of disability has specific needs and considerations that must be addressed in the design process. If these requirements conflict, multiple versions of the universal exoskeleton may be necessary to cater to different groups of disabilities.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The central locking mechanism must be carefully designed to securely attach to users with varying physical characteristics. It also needs to ensure that different types of components remain fully functional when connected through the locking mechanism. Safely securing the exoskeleton while minimizing user discomfort and burden is another critical consideration.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The connection between components must also be capable of recognizing the different parts that have been attached. This recognition would likely be managed through software, which is crucial because the actuation methods for prosthetics, exoskeletons, or other tools will vary. Signals from the brain and other sensors must be interpreted correctly to actuate each component appropriately.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708664/2_zl7oeq.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of UnivExsk
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Developing a universal standard that caters to all types of disabilities is an enormous task fraught with complexities and challenges. However, I believe that such technology is crucial to ensuring that everyone has access to robotic evolution that can transform their lives.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default UnivExsk;