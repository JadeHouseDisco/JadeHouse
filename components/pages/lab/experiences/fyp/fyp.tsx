"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';
import { DownloadIcon } from "@/components/icons"

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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708582/1_r24grq.jpg"
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
                      8 November 2024
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
                  <div className="mt-4 flex gap-6">
                    {/* Left column with two horizontal images */}
                    <div className="flex-1 flex flex-col gap-6">
                      <div className="relative">
                        <Image 
                          alt="wheel" 
                          className="rounded-3xl w-full h-auto object-cover" 
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038343/mechanism_fthyv0.png" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          ARAE mechanical design
                        </div>
                      </div>
                      <div className="relative">
                        <Image 
                          alt="steer" 
                          className="rounded-3xl w-full h-auto object-cover" 
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708582/3_fgycvd.png" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Human arm support force calculation
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column with one vertical image */}
                    <div className="flex-1">
                      <div className="relative h-full">
                        <div className="aspect-[0.7] relative overflow-hidden rounded-3xl">
                          <Image 
                            alt="lcd" 
                            className="absolute top-0 left-0 w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708583/4_ty8nap.png" 
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Human model with sagittal plane for shoulder position estimation
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The Assistive Robotic Arm Extender (ARAE) is designed to address these challenges by providing arm support in three-dimensional (3D) space for functional task training. It offers high transparency in movement and adaptive support based on estimated human postures.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    However, a key limitation of the current ARAE design is the lack of personalized assistance, as it relies on a nominal human model for support force calculation. My project aims to develop a calibration procedure to extract user-specific human anthropometric data that will be used to construct personalized human models for personalized assistance.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Curent Progress
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038162/workflow_gnlcda.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Calculation workflow
                    </div>
                    
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038085/data_a4lxtu.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Anthropometric data involved
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I have finished budling the necessary foundation required for the project, including literature review, preliminary research, and familiarization of the ARAE system. I have also completed the calculation procedure for the calibration. Here is what I have accomplished so far:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Gained a thorough understanding of the ARAE workflow
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Identified four key anthropometric data points needed for personalized human modeling
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Developed and tested the calculation that takes motor torque values at different ARAE positions and output 4 anthropometric data of interest
                      </li>
                  </ul>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                        <Image
                          alt="steer"
                          className="rounded-3xl inset-0 w-full h-full object-cover"
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038167/simplified_workflow_upwm63.png"
                          height="800"
                          width="1600"
                        />
                      </div>
                      <div className="text-center text-gray-400 text-sm">
                        Simplified calculation workflow
                      </div>
                    <div className="relative">
                        <Image
                          alt="steer"
                          className="rounded-3xl inset-0 w-full h-full object-cover"
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038147/solution_wp4znz.png"
                          height="800"
                          width="1600"
                        />
                      </div>
                      <div className="text-center text-gray-400 text-sm">
                        Calculation solution
                      </div>
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    To solve for the anthropometric data of interest, I used three stages to break the problem into manageable parts:
                  </p>
                  <ol className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Problem simplification by clustering anthropometric data
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        System regularization to keep the calculated answer close to the estimated solution
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Linear least-square problem solving through curve fitting with constraints and conditions
                      </li>
                  </ol>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="left"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038088/result1_l5zpjm.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="ui"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038142/result2_gnj97r.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="right"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038118/result3_puwbzw.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Error in calculated F_M against nominal estimation accuracy
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Error in calculated U_M * U_COM against nominal estimation accuracy
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Error in calculated F_M * F_COM against nominal estimation accuracy
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My results show that the more robot positions used for calculation, the better the accuracy gets. Furthemore, I was able to understand the importance of nominal estimation in ensuring minimal calculation error. Accurate nominal estimation using measurable data like human weight and height would be important in ensuring that the calculated values are accurate.
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
                      Ongoing Work
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1731038152/agenda_qzkgja.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Agenda
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The next steps in the project include:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Developing a position controller (PID) in MuJoCo simulation environment
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Validating calibration procedure in MuJoCo simulation environment
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Integrating the position controller into the ARAE hardware
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Undergoing human testing on healthy individuals to validate the efficacy of a personalized human model
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In the later stages of the project, I plan to:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Write paper for submission in the upcoming 2025 IROS
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Conduct human testing on upper limb mobility impairment patients
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Explore extensions of the project
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Challenges
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Throughout the project, I’ve encountered several challenges. The first was mastering the complex mathematical calculations involved in the ARAE's operation, particularly vector calculations. Although I had some exposure to vectors in my coursework, I had to learn much of the required material from scratch to fully understand the ARAE paper. This process, though time-consuming, has deepened my understanding of the device and its calibration needs.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another challenge has been adapting to new tools. Despite having some experience with ROS from a previous internship in mobile robotics, using a new package to control the ARAE is unfamiliar and challenging. Additionally, this is my first time working with physics simulation software like Mujoco, making the learning curve steep. However, I am actively seeking advice from postgraduate students in the lab to overcome these hurdles as quickly as possible.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another significant challenge was the calculation complexity of my problem. Initially, the problem looked like a simple simultaneous equations. I was underestimating the difficulty of the problem. However, I found myself stuck with this seemingly simple problem for month, and I started doubting myself and the project as a whole. Since research like this was not conducted before, there were limited resources available online, which further added onto the burden of the project. Despite the difficult times, I was able to press on, and I managed to solve the problem in a new and unexpected way.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I anticipate facing more challenges as the project progresses, but I am confident that I will navigate them successfully.
                  </p>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The unique experience of personalizing assistive technology has provided valuable insights and learning outcomes. Although there were several challenges involved, I am eager to learn, dive deeper into the research topic, and achieve meaningful results. I am confident that I can overcome any challenges ahead with persistence. I wish that my work can help push the boundaries of assistive technology, where everyone has tailored support to regain control of their life from injuries or diseases.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://res.cloudinary.com/dss5ymotz/raw/upload/v1731038173/test_modularized_wqyk8l.m"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Code
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1J3wuamPchDSDOEm17nl-5GmnjOjCVMl4/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Progress
                    </a>
                  </div>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default Fyp;