"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import { DownloadIcon } from "@/components/icons"
import LabFooter from '@/components/labFooter';

const Snu = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708655/1_zhcfa6.jpg"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      SVC Occlusion Device
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Seoul National University Healthcare Robotics Laboratory
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
                      10 August 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    During my internship at the Healthcare Robotics (HeRo) Lab, Seoul National University, I contributed to a groundbreaking project focused on the development of a Superior Vena Cava (SVC) occlusion device. This experience not only expanded my technical skills but also solidified my passion for research, paving the way for my future in postgraduate studies.
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
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708658/2_pjrsp6.jpg" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Professor and the team
                        </div>
                      </div>
                      <div className="relative">
                        <Image 
                          alt="steer" 
                          className="rounded-3xl w-full h-auto object-cover" 
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708659/4_khspji.jpg" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Group photo after animal testing
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column with one vertical image */}
                    <div className="flex-1">
                      <div className="relative h-full">
                        <div className="aspect-[0.61] relative overflow-hidden rounded-3xl">
                          <Image 
                            alt="lcd" 
                            className="absolute top-0 left-0 w-full h-auto object-cover"
                            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708659/3_hg155f.jpg" 
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Animal testing
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This summer, I had the unique opportunity to join the Healthcare Robotics (HeRo) Lab at Seoul National University as a research assistant. Under the mentorship of Professor Kyoungwon Amy Han, I collaborated with a talented team of graduate and undergraduate researchers on an innovative project aimed at developing a device to externally occlude the Superior Vena Cava (SVC). The project was twofold: conducting in-vivo testing on swine to evaluate the efficacy of SVC occlusion in reducing heart preload, and developing a novel soft robotic device capable of achieving this occlusion.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My primary contributions centered around sensor development, a crucial aspect of the project that ensured the precise actuation and control of the SVC occlusion device.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Responsibilities
                  </h1>

                  <div className="mt-4 flex gap-6">
                    {/* Left column with two horizontal images */}
                    <div className="flex-1 flex flex-col gap-6">
                      <div className="relative">
                        <Image 
                          alt="wheel" 
                          className="rounded-3xl w-full h-auto object-cover" 
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708659/5_zfxlrk.jpg" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Strain gauge
                        </div>
                      </div>
                      <div className="relative">
                        <Image 
                          alt="steer" 
                          className="rounded-3xl w-full h-auto object-cover" 
                          src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708659/6_w3ddbx.jpg" 
                          height="400" 
                          width="800" 
                        />
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Velostat sensor
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
                            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708660/7_sbgmy9.jpg" 
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="mt-2 text-center text-gray-400 text-sm">
                          Flex sensor
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708660/8_dfdtkg.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708660/9_y5guco.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="lcd"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708655/10_ibob9i.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Hardware setup
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Fixed deflection test
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Feedback control SVC phantom test
                    </div>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708656/11_qbuarj.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708656/12_dv6ckd.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="lcd"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708656/13_cms8v5.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Barometric sensor ring and cast
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Fixed mass test
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Pressure ring SVC phantom test
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my time at the HeRo Lab, I undertook the following key responsibilities:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Bending Sensor Development</strong>: I developed and tested various bending sensors, including strain gauges, velostat, and flex sensors, to determine the optimal solution for the device's feedback control. This involved multiple iterations of sensor placement to achieve the most accurate actuation feedback.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Pressure Sensor Development</strong>: I designed and fabricated a barometric pressure sensor, encased in silicone, to measure intravascular pressure within the SVC. This sensor served as a critical component for monitoring central venous pressure, indirectly reflecting heart pressure and guiding device activation.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Actuation Workflow Design</strong>: I integrated the sensors into a comprehensive actuation workflow for the SVC occlusion device. The bending sensor provided real-time feedback to ensure precise device shaping, while the pressure sensor triggered the device's occlusion function in response to elevated heart pressure.
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  <div className="prose mx-auto">
                    <div className="mt-4 mb-2">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/uxgWfqKYvGQ?si=vfIrjrvE6c0WE2eJ`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 md:h-96"
                      ></iframe>
                    </div>
                    <div className="text-center text-gray-400 text-sm mb-8">
                      Device operation with actuation feedback control on SVC phantom
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="left"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708657/14_oziysg.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="right"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708657/15_xaqzrf.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="ui"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708657/16_pqpzbz.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Coronary artery ligation
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      SVC external occlusion
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Verifying occlusion and catheter placement via C-arm
                    </div>
                    <div className="relative">
                      <Image
                        alt="left"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708657/17_cfxizt.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="right"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708658/18_jiiubv.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="ui"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708658/19_fttmih.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Flex sensor value at expanded and occluded states
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Flex sensor value at different occlusion percentage
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Barometric sensor value at different SVC phantom intravascular pressure
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The research led to several significant achievements:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Successful design and fabrication of a flex sensor tailored specifically for the SVC occlusion device.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Establishment of an optimal sensor placement and calibration process, ensuring reliable and repeatable device occlusion.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Development of a barometric pressure sensor capable of accurately measuring intravascular pressure within an SVC phantom model.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Integration of hardware and software systems to enable controlled and responsive actuation of the SVC occlusion device.
                      </li>
                  </ul>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Skills
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My time at the HeRo Lab allowed me to develop and refine a diverse set of skills, including:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Soft robotics (shape memory alloy (SMA), silicone)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Circuit design and sensor fabrication
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data Acquisition System (DAQ) integration
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        MATLAB and C++ programming
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Computer-Aided Design (CAD) and 3D printing (filament and resin)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Surgical assistance and PV catheter operation
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data analysis, rapid prototyping, and teamwork
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Experiment planning, result interpretation, and presentation
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This internship was transformative, both technically and personally. While the challenges were numerous—ranging from mastering new technical domains to designing experiments from scratch—the experience reinforced my commitment to research. Initially, I found myself overwhelmed by the complexities of soft robotics, sensor integration, and circuit design. However, with guidance from Professor Han and my team, I learned to break down large problems into manageable tasks, ultimately leading to meaningful progress.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    A significant lesson was learning to embrace failure as part of the research process. Early setbacks in sensor testing and experiment design taught me the importance of persistence and iterative improvement. I realized that success in research is less about immediate results and more about rigorous planning, meticulous execution, and the resilience to learn from each setback.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Moreover, working closely with my team revealed the immense value of collaboration. The dynamic exchange of ideas, diverse perspectives, and shared passion for the project enhanced both the process and outcomes of our work. This experience has left me eager to find or build a team with whom I can continue to explore and innovate in future research endeavors.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    As I reflect on this experience, I am more certain than ever that research is the right path for me. The intellectual challenges, the creative problem-solving, and the potential for impactful discoveries align perfectly with my passions and aspirations.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The summer I spent as a research assistant at the HeRo Lab was the most enriching and challenging period of my academic journey thus far. It not only broadened my technical expertise but also reshaped my understanding of research and its demands. The skills, insights, and confidence I gained during this internship will undoubtedly guide my future endeavors, whether in academia or industry.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I am deeply grateful to Professor Han for the opportunity to contribute to this important project and to my team members—Junghyeon, Youngjin, and Domin—for their collaboration and support. The memories and lessons from this time will remain with me as I continue to pursue my passion for research.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1-04htW12KGFsTFUof3XZNAr0_P794jCX/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Final Presentation
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://res.cloudinary.com/dss5ymotz/raw/upload/v1730708661/Rigid_SVC_Calculations_wvjs5i.xlsx"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Rigid SVC Calculations
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="blank"
                      href="https://res.cloudinary.com/dss5ymotz/raw/upload/v1730708660/Code_r2wvfd.zip"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Code
                    </a>
                  </div>

              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default Snu;