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
                      Personalization of Human Arm Dynamics Model for Assistive Robot Arm Extender (ARAE)
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
                      23 March 2025
                  </p>
                  

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In my final year at Nanyang Technological University, I had the opportunity to work on an exciting and impactful project in the field of assistive robotics. The focus of my project was to enhance the performance of the Assistive Robotic Arm Extender (ARAE) by personalizing the human arm dynamics model. By estimating individual-specific anthropometric data, I aimed to improve the robot’s ability to provide accurate, stable, and user-specific support—ultimately reducing muscle activation and fatigue leading to increased comfort for users with upper limb mobility impairments.
                  </p>  
                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>

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
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742711878/20250301_145710_vhi6zo.jpg" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          ARAE experimental setup
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column with one vertical image */}
                    <div className="flex-1">
                      <div className="relative h-full">
                        <div className="aspect-[0.63] relative overflow-hidden rounded-3xl">
                          <Image 
                            alt="lcd" 
                            className="absolute top-0 left-0 w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742712040/default_position_labeled_g1lvx2.png" 
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Sagittal plane human arm dynamics model
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Mobility impairment of the upper limbs is a widespread issue affecting various populations, particularly those with neurological conditions such as stroke, cerebral palsy (CP), and multiple sclerosis (MS). These impairments can significantly impact daily activities and overall quality of life.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Previous work on ARAE introduced a model to estimate the user’s arm posture using only the robot’s internal sensors—removing the need for external wearable devices. However, this model relied on nominal human parameters, which don’t account for individual differences in arm mass or limb structure. These inaccuracies can affect the effectiveness of support, potentially leading to discomfort or fatigue.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    To address this, my project developed a method to personalize the human model based on each user’s unique biomechanics—allowing ARAE to provide truly tailored assistance.
                  </p>

                  <h1 id="methodology" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Methodology
                  </h1>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The core idea was to estimate a user’s immeasurable anthropometric parameters (like arm mass and center of mass) by comparing actual torques measured during robot-assisted arm postures with theoretical torques calculated from a model. Here’s how it was done:
                  </p>

                  <div className="prose mx-auto">
                    <div className="my-8">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/EZOjQGsDn38`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 md:h-96"
                      ></iframe>
                    </div>
                  </div>

                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Simulation with MuJoCo</strong>
                        <ul className="list-disc my-1 pl-8">
                          <li className="max-w-3xl text-base md:text-lg">
                            I built a 3D simulation of ARAE and a human model in the MuJoCo physics engine.
                          </li>
                          <li className="max-w-3xl text-base md:text-lg">
                            By applying torque via a PID controller to reach different ADL-like positions, I validated that personalized parameters closely matched actual torque values.
                          </li>
                       </ul>
                      </li>

                      <div className="relative">
                        <Image
                          alt="lcd"
                          className="rounded-3xl inset-0 mt-4 my-2 w-full h-full object-cover"
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742711903/calibration_positions_z7awfm.png"
                          height="800"
                          width="1600"
                        />
                      </div>
                      <div className="text-center text-gray-400 text-sm">
                        Arm positions for personalization procedure
                      </div>

                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Human Testing - Personalization</strong>
                        <ul className="list-disc my-1 pl-8">
                          <li className="max-w-3xl text-base md:text-lg">
                            Ten healthy participants were recruited for testing.
                          </li>
                          <li className="max-w-3xl text-base md:text-lg">
                            The torques required to maintain those positions were logged and used to estimate individual anthropometric values through optimization.
                          </li>
                       </ul>
                      </li>

                      <div className="relative">
                        <Image
                          alt="lcd"
                          className="rounded-3xl inset-0 mt-4 my-2 w-full h-full object-cover"
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742711902/sEMG_placement_s3drx0.png"
                          height="800"
                          width="1600"
                        />
                      </div>
                      <div className="text-center text-gray-400 text-sm">
                        sEMG sensor placement on subjects
                      </div>

                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Human Testing - sEMG Analysis</strong>
                        <ul className="list-disc my-1 pl-8">
                          <li className="max-w-3xl text-base md:text-lg">
                            I placed wireless sEMG sensors on six key upper limb muscles to measure muscle activation and fatigue during different activities (forward reach, lateral reach, drinking, and scooping).
                          </li>
                          <li className="max-w-3xl text-base md:text-lg">
                            Activities were performed under three modes: no robot, ARAE with nominal model, and ARAE with personalized model.
                          </li>
                          <li className="max-w-3xl text-base md:text-lg">
                            Features like mean absolute value (MAV) and median frequency (MDF) were extracted to analyze performance.
                          </li>
                       </ul>
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742712690/error_u96nq3.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Percentage error of nominal and personalized torque compared against actual torque
                    </div>
                  </div>
                    <p className="mt-4 max-w-3xl text-base md:text-lg">
                      The personalization of the human arm dynamics model led to several notable improvements in the performance of the Assistive Robotic Arm Extender (ARAE). One of the most significant outcomes was the improvement in torque estimation accuracy. When comparing the actual torque exerted by ARAE with the theoretical torque calculated using both nominal and personalized models, the personalized model consistently showed lower error—particularly for Motor 2 and Motor 3, which are primarily responsible for supporting and lifting the arm. This indicates that the personalized model aligns more closely with the user’s true biomechanical needs, enabling more precise support force computation.
                    </p>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742712690/torque_pbamal.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Comparison of torque exerted by nominal and personalized model and robot position controller
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another important finding was the effect of personalization on system stability. In previous versions of ARAE, Motor 1 often exhibited torque fluctuations due to encoder noise and loose coupling with the user’s arm, which sometimes caused instability. With the personalized model, the torque output of Motor 1 was consistently close to zero across all positions. This helped suppress fluctuations, contributing to more stable and safer robot behavior, particularly during static support.
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742711877/MAV_qfrjdm.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Comparison of change in MAV from nominal to personalized model
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1742711877/MDF_rllklp.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Comparison of change in MDF from nominal to personalized model
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In terms of muscle activation and fatigue, results from surface electromyography (sEMG) revealed that personalization had a beneficial effect on extension muscles. Muscles such as the triceps brachii and posterior deltoid showed reduced activation and fatigue across all activities when using the personalized model compared to the nominal one. This means users experienced less physical effort and strain during tasks involving arm extension.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    For flexion muscles, such as the biceps brachii and anterior deltoid, the outcomes were more mixed. While some users experienced slightly higher activation levels with the personalized model, the overall impact was relatively small. In most cases, the personalized model maintained or slightly reduced fatigue levels, even when muscle activation increased.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Overall, the results demonstrate that personalizing the human dynamics model significantly improves assistive performance, especially in tasks requiring arm extension. The improved torque accuracy and system stability make ARAE safer and more effective, while sEMG analysis confirms that tailored support helps reduce muscle workload in critical muscle groups.
                  </p>
                  
                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Skills
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    ARAE project has allowed me to develop and refine a diverse set of skills, including:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Biomechanical modeling – Understanding and applying human dynamics in robotic systems
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Robotic control systems – Implementing and tuning PID/PD controllers through ROS and C++
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Physics simulation (MuJoCo) – Developing and validating robotic models in simulation environments
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data analysis – Processing and interpreting sensor and torque data using MATLAB
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Surface electromyography (sEMG) – Setting up, collecting, and analyzing muscle signal data
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Optimization techniques – Solving inverse problems using numerical methods
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Hardware integration – Calibrating, debugging, and testing a physical robot with human subjects
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Scientific writing – Producing technical documentation, reports, and publications
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Human-subject testing – Designing and conducting experiments ethically and effectively
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Working on this project has been one of the most challenging yet rewarding experiences of my undergraduate journey. I stepped into this research with a background in engineering, but quickly realized that tackling a real-world assistive robotics problem required knowledge across multiple domains—biomechanics, control systems, optimization, simulation, signal processing, and human testing. No single person can be an expert in all of these areas, and this project taught me the true value of collaboration. I am deeply grateful for the guidance of my supervisors and the support of my lab mates, without whom this work would not have been possible.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Throughout the project, I encountered numerous technical and experimental challenges—from unstable system behavior and data inconsistencies to modeling complexities and hardware integration issues. These moments were often frustrating, but they were also where I learned the most. Through each obstacle, I gained a deeper understanding of the research process—not just the technical aspects, but also the perseverance, patience, and creative thinking it demands.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Despite the hardships, the joy of solving difficult problems and developing a technology that can meaningfully improve people’s lives reminded me of why I chose this path. This experience has solidified my passion for assistive technologies and strengthened my resolve to continue this journey in research. As I look ahead to my future as a PhD student, I carry with me not only the skills I’ve gained, but also a renewed sense of purpose—to contribute to meaningful innovations that make a difference in the world.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This project has been a milestone in my academic journey, giving me the opportunity to apply engineering principles to solve real-world challenges in assistive robotics. From developing a personalized human dynamics model to validating its effectiveness through simulation and human testing, the experience has been both technically enriching and personally fulfilling. While the road was far from easy, every setback offered a chance to grow, and every breakthrough reaffirmed my passion for research. I’m excited to carry this momentum forward as I continue exploring the intersection of technology and human well-being in my future endeavors.
                  </p>
                  
                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The code used for this project can be found in <a className = "text-blue-500 text-under underline" target="_blank" href="https://github.com/JadeHouseDisco/ARAE_Calibration">github</a>.
                  </p>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1MkTaxTUsulHD4uKjRAAFNyCQPUMmBFHM/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Final Presentation
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1iq2uLqm20Jl756I1fyVml-fJAqSt_d0D/view?usp=drive_link"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Report
                    </a>
                  </div>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default Fyp;