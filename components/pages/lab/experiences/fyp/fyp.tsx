"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';


const Fyp = () => {
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/fyp/1.jpg?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Novel Calibration Procedure of Assistive Robot Arm Extender (ARAE) for Personalized Assistance
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Final Year Project
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
                      1 September 2024
                  </p>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Mobility impairment of the upper limbs is a widespread issue affecting various populations, particularly those with neurological conditions such as stroke, cerebral palsy (CP), and multiple sclerosis (MS). These impairments can significantly impact daily activities and overall quality of life.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    While many research initiatives aim to develop solutions for rehabilitation and assistance, current approaches like exoskeletons and end-effector assistive devices have limitations. They are often cumbersome, difficult to use at home, can exert unintended forces at the attachment points, and lack personalized support.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The Assistive Robotic Arm Extender (ARAE) is designed to address these challenges by providing arm support in three-dimensional (3D) space for functional task training. It offers high transparency in movement and adaptive support based on estimated human postures.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    However, a key limitation of the current ARAE design is the lack of personalized assistance, as it relies on a nominal human model for support force calculation. My project aims to develop a calibration procedure to create personalized human models for different users, enhancing the device's effectiveness.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Curent Progress
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/fyp/2.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/fyp/3.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="lcd"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/fyp/4.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      ARAE mechanical design
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Human arm support force calculation
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Human model with sagittal plane for shoulder position estimation
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My final year project is still in its early stages, focused on literature review and preliminary research to build the necessary foundation. Here’s what I’ve accomplished so far:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Gained a thorough understanding of the ARAE workflow
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Identified six key anthropometric data points needed for personalized human modeling
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Developed a preliminary concept for the calibration Procedure
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Experimented with the Mujoco simulation of ARAE
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My preliminary idea for the calibration involves having the ARAE move the human arm to three different coordinates, recording the torque exerted by the two active motors, and comparing it against the hypothetical required torque. This data will be used to solve six simultaneous equations to derive the user's anthropometric data.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Skills I expect to gain from this project include:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        C++
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Python
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        ROS
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Mujoco
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Modeling
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Human dynamics
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Challenges
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Even at this early stage, I’ve encountered several challenges. The first was mastering the complex mathematical calculations involved in the ARAE's operation, particularly vector calculations. Although I had some exposure to vectors in my coursework, I had to learn much of the required material from scratch to fully understand the ARAE paper. This process, though time-consuming, has deepened my understanding of the device and its calibration needs.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another challenge has been adapting to new tools. Despite having some experience with ROS from a <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/experiences/delta">previous internship in mobile robotics</a>, using a new package to control the ARAE is unfamiliar and challenging. Additionally, this is my first time working with physics simulation software like Mujoco, making the learning curve steep. However, I am actively seeking advice from postgraduate students in the lab to overcome these hurdles as quickly as possible.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I anticipate facing more challenges as the project progresses, but I am confident that I will navigate them successfully.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Ongoing Work
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The next steps in the project include:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Developing a calculation procedure to derive human anthropometric data
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Implementing the calculation in C++/Python code
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Testing the calculation with human data
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Developing the calibration procedure
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In the later stages of the project, I plan to:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Implement the calibration procedure in the Mujoco simulation
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Test the calibration procedure with the ARAE
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Collect data and conduct tests on human subjects
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Though I’m still in the early stages of this project, it has already proven challenging. However, I am eager to learn, dive deeper into the work, and achieve meaningful results. I am confident that developing a novel calibration procedure will enable the ARAE to provide tailored support, ultimately improving the lives of its users.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default Fyp;