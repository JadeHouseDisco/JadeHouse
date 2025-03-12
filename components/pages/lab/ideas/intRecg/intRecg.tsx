"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const IntRecg = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708591/1_k7l4ty.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      IntRecg
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Intention Based Prosthesis Actuation
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
                      19 January 2023
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I propose an innovative approach to actuating prostheses based on user intentions rather than complex motor signals. While directly interfacing with the brain to decode motor signals is an ultimate goal, it presents significant challenges due to the brain's complexity. My idea involves decoding general user intentions, such as walking or grasping, and using preprogrammed routines to execute these actions with the prosthesis. This method could simplify the control process and enhance users' quality of life, though it comes with its own set of challenges, including the need for additional sensing technologies and user training. Ultimately, this approach could pave the way for more intuitive and effective prosthesis control, allowing users to perform daily tasks more easily and even enabling new advancements in humanoid robots and prostheses with increased functionality.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Actuating prostheses or exoskeletons based on user intention is crucial for enhancing the quality of life for users. While connecting a prosthesis directly to the brain for a bi-directional interface offers a promising future, the complexity of the brain presents significant challenges. I believe that one day, the brain's intricate processes will be fully understood, but this could take a considerable amount of time. Meanwhile, I propose an alternative approach: actuating prostheses based on user intentions rather than motor signals.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708591/1_k7l4ty.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Control flow using intent recognition
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The core idea is straightforward. Instead of decoding the motor signals that control individual muscles, the brain interface would decode the user's intentions. These intentions could include actions like walking, running, or grasping, which are common in daily life. Once the intention is decoded, preprogrammed routines would execute the desired actions, actuating the prosthesis. These routines would need to adapt to dynamic environments using additional sensing or modeling technologies. This approach could reduce the complexity of decoding neural signals while still allowing users to perform essential tasks.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Decoding neural signals for intentions may be less complex than decoding motor signals, but it remains a significant challenge. Most people don't consciously think about their intentions before acting; much of the planning and execution occurs subconsciously. This could make it difficult for brain interfaces to accurately capture these intentions. Users might need to consciously focus on their intentions to actuate their prosthesis.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    To better understand user intentions, a combination of sensors, such as electromyography for monitoring muscle activity and <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/visCtr">vision systems</a>, could be employed. Additionally, users might require training to fully control their prosthesis. Preprogrammed routines would also need to be customized for each individual to ensure optimal functionality and quality of life.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Finding the most effective method for decoding and utilizing user intentions as a driving force for prosthesis actuation is vital. Rigorous testing would be essential to optimize user experience and prevent unexpected behaviors.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The ideal scenario is a complete decoding of motor signals, allowing users to control their prosthesis as if it were part of their organic body. However, this is a complex goal, and it's unclear how long it will take to achieve. In the meantime, decoding intentions could provide users with sufficient control to enhance their quality of life.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If user intentions can be accurately decoded, this method could also be applied to control <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/VRM">humanoid robots that replicate user intentions</a>. It could even predict user movements and provide <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/tripleA">assistance or augmentation</a>. Further advancements could lead to control of prostheses with <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/expnArm">increased degrees of freedom</a> or <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/armHead">interchangeable components</a>.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I hope that when this idea becomes a reality, it will enable more people to live beyond their disabilities.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default IntRecg;