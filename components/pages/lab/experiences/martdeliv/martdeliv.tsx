"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import { DownloadIcon } from "@/components/icons"
import LabFooter from '@/components/labFooter';

const Martdeliv = () => {
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
            <section className="relative min-h-[clamp(28rem,72svh,52rem)] w-full overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                    sizes="100vw"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708576/left_p0vmbm.jpg"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <h2 className="max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
                      Contactless Mart Delivery
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Mechatronics System Design
                    </p>
                </div>
            </section>

            {/*blogPostContents*/}
            <div className="relative flex min-w-0">

              <nav className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 flex-none overflow-y-auto bg-black py-8 pl-8 pr-4 xl:block">
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

              <div className="blog-content prose prose-lg mx-auto mb-12 flex-1">
                  <p className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                      28 November 2021
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    During my mechanical engineering studies, I led a team of four in an interactive robotics course under Professor Ang Wei Tech. We developed a contactless mart delivery system using Arduino technology to address pandemic-related challenges. Our project involved brainstorming, designing, coding, hardware development, testing, and presenting our solution, which resulted in a successful presentation and an A+ grade. This hands-on experience allowed me to apply theoretical knowledge to real-world issues, learn about C++ programming and electrical components, and understand the importance of organization, communication, and task distribution in team projects. Despite the challenges, the project provided valuable lessons and left me eager for future robotics collaborations.
                  </p>  

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my time at university, I had the incredible opportunity to participate in the Product Development Challenge, a one-semester course offered through a collaboration between Nanyang Technological University (NTU) and Dyson. This course was designed with a strong focus on entrepreneurship, encouraging students to generate innovative ideas while teaching the fundamentals of starting a business. Key areas of learning included conducting market research, assessing market feasibility, navigating the prototyping stages, and much more.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my mechanical engineering studies, I had the opportunity to take an interactive robotics course under the guidance of Professor Ang Wei Tech. This course, tailored for students in the robotics and mechatronics stream, focused on leveraging Arduino technology alongside other components to develop innovative contactless solutions in response to the pandemic. As the leader of a team of four, I piloted the development of a contactless mart delivery system. Our solution aimed to allow customers to safely purchase items in physical stores without the risk of COVID-19 exposure. Throughout the project, we engaged in extensive brainstorming, meticulous planning, prototyping, and a comprehensive final presentation, showcasing our innovative approach to pandemic-related challenges.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Journey
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708578/wheel_jlqb03.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708577/steer_xkmklv.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="lcd"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708576/lcd_i2tltp.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Wheel actuation mechanism
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Wheel steering mechanism
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      LCD and keypad setup
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Completion of contactless mart delivery solution followed these steps:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Idea Brainstorm</strong>: We identified pressing pandemic-related problems needing contactless solutions and brainstormed innovative, necessary, and achievable ideas to address them.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Solution Design</strong>: We meticulously designed the solution's features, including mechanical components, assembly, code, and required materials. 
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Coding</strong>: We programmed the desired features using C++ in the Arduino IDE.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Hardware Development</strong>: We sourced materials, created components, and assembled the complete solution.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Performance Testing and Adjustments</strong>: We rigorously tested the solution, refining the code and hardware to enhance performance.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Final Presentation</strong>: We presented the problem, our developed solution, its features, and the benefits it offered.
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="left"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708576/left_p0vmbm.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="right"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708577/right_rwjdpo.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="ui"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708577/ui_bjcqfl.jpg"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Cart moving backwards
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Cart steering right
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      UI for bluetooth menu
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Main features of the prototype are:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Bluetooth menu input
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Steering and pathing
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Obstacle detection
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Order display and interaction
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Key results from the project were:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Completion of a working prototype
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Successful final presentation
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        A+ course result
                      </li>
                  </ul>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Skills
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Throughout the experience, I acquired or enhanced the following skills:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Arduino (C++)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Mechanics
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Sensors and actuators
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Version control
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Leadership
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Project organization
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Participating in this robotics project provided a great opportunity to apply the theoretical knowledge gained in class to real-life issues. The hands-on experience allowed me to plan and develop a mechatronics system that addresses specific problems, and I learned to effectively utilize C++ to interact with sensors and control actuators. Additionally, I gained valuable insights into the workings of various electrical components, enhancing my overall understanding of robotics.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    However, the project was not without its challenges. It was difficult to stay organized with multiple people working on the project simultaneously, leading to complications in merging code due to a lack of agreement on code structure or style. Meeting the deadline was also challenging given the complicated project requirements. Additionally, communication was often difficult, as the complexity of the code made it hard to describe and discuss effectively.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    These obstacles highlighted the importance of establishing clear protocols and improving collaboration strategies in team projects. Rigorous planning and communication were crucial, including thorough code planning, agreeing on code formatting, implementing version control strategies, and maintaining consistent progress updates. Effective communication ensured that all team members were aligned, and task distribution was essential to meet project deadlines efficiently.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This robotics project provided an invaluable opportunity to apply classroom knowledge to real-world challenges, reinforcing the importance of teamwork in achieving significant outcomes. Although working in a team on such a complex project presented many challenges, it was through these difficulties that I gained crucial lessons and insights. The hands-on experience not only enhanced my technical skills but also underscored the necessity of effective communication, rigorous planning, and task distribution. The successful completion of this project and the knowledge gained have left me eager for future robotics team projects, where I can further develop these skills and contribute to innovative solutions.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1CjBesglQUwZnhki5tLUgUUuSTRXciWQK/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true" rel="noreferrer"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Presentation
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1RsxoBgJg6-gLz-FnRtr-fZh3Do5aYGzR/view?usp=drive_link" rel="noreferrer"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Code
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1RSk1XNbRtfBdSatZIEhcK1TD3Ut_HOBy/view?usp=drive_link" rel="noreferrer"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Demo Videos
                    </a>
                  </div>

              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default Martdeliv;
