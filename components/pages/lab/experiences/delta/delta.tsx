"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon, DownloadIcon } from "@/components/icons"
import Footer from "@/components/footer"

const Delta = () => {
  const headerProps ={
    imageProps: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
      width: 418,
      height: 538,
    },
    titles: [
      { text: 'JadeHouse', href: '/' },
      { text: 'Lab', href: '/lab' }
    ],
    dropdownOptions: [
      { text: 'Home', href: '/lab' },
      { text: 'About', 
        href: '/lab/aboutme', 
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
      },
      { text: 'Ideas', href: '/lab/ideas' },
      { text: 'Literature Reviews', href: '/lab/litrev' },
    ],
  }

    const footerProps = {
        logo: {
          src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
          alt: 'Website Logo',
          width: 64,
          height: 64,
        },
        title:"JadeHouse Lab",
        description:"Portfolio of my professional life",
        navLinks: [
          { text: 'Home', href: '/lab' },
          { text: 'About', href: '/lab/aboutme' },
          { text: 'Experiences', href: '/lab/experiences' },
          { text: 'Ideas', href: '/lab/ideas' },
          { text: 'Literature Reviews', href: '/lab/litrev' },
        ],
        socialLinks: [
          {
            href: 'mailto:HYUNWOO001@e.ntu.edu.sg',
            icon: <MailIcon className="h-6 w-6" />,
          },
          {
            href: 'https://github.com/JadeHouseDisco',
            icon: <GithubIcon className="h-6 w-6" />,
          },
          {
            href: 'https://linkedin.com/in/hyunwoolee0329',
            icon: <LinkedinIcon className="h-6 w-6" />,
          },
          {
            href: 'https://www.youtube.com/@JadeHouseCinema',
            icon: <YoutubeIcon className="h-6 w-6" />,
          },
          {
            href: '#',
            icon: <GoogleScholarIcon className="h-6 w-6" />,
          },
          {
            href: '#',
            icon: <ORCIDIcon className="h-6 w-6" />,
          },
        ],
      }

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
            <Header headerProps={headerProps}/>

            {/*blogPostIntro Section*/}
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/map.png?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Mobile Robotics Intern
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Delta-NTU Corporate Laboratory for Advanced Robotics
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
                      31 May 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    During my 20-week internship as a Mobile Robotics Intern at Delta-NTU Corporate Laboratory for Advanced Robotics, I gained hands-on experience in developing an Autonomous Mobile Robot (AMR) to deliver medical supplies to elderly residents. Guided by John Chua and Associate Professor Mir Feroskhan, I tackled responsibilities such as researching safety features, designing a mapping backpack, generating and post-processing pointcloud maps, and documenting procedures. Despite initial challenges in hardware and software development, I bridged my knowledge gaps through online resources, colleague advice, and hands-on experimentation. This experience not only enhanced my technical and soft skills but also taught me the importance of effective communication and user-centric design. Working with vulnerable populations and welfare organizations like Lion Befrienders provided valuable insights that will shape my future projects. I am eager to apply these skills in new opportunities and highly recommend internships for their invaluable professional growth and networking opportunities.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my recent internship as a Mobile Robotics Intern at Delta-NTU Corporate Laboratory for Advanced Robotics, I had the opportunity to immerse myself in cutting-edge technology and innovative projects. This internship, a vital component of my NTU Mechanical Engineering curriculum, spanned 20 weeks from January 15th, 2024, to May 31st, 2024. Under the expert guidance of John Chua, a Senior Robotics Research Engineer at Delta Electronics, and Associate Professor Mir Feroskhan, I gained invaluable hands-on experience in the field of mobile robotics.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Throughout my attachment, I contributed to the development of an Autonomous Mobile Robot (AMR) designed to deliver medical supplies and necessities to elderly residents in apartments. This project provided me with a comprehensive understanding of both software and hardware development, as well as practical fieldwork involving data collection, testing, and deployment. Engaging directly with elderly residents allowed me to incorporate their needs into the development process, ensuring that our solutions were user-centric. The skills, lessons, and experiences I acquired during this period have significantly enhanced my capabilities and prepared me for future endeavors in robotics.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Responsibilities
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/mapping.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/map_edit.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="lcd"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/edited_map.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Using mapping backpack to collect pointcloud data
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Editing pointcloud map
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Comparison of raw and processed pointcloud map
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Key responsibilities of my position included:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Safety Features of AMR</strong>: I conducted in-depth research into safety standards for AMRs and evaluated available safety components on the market. I designed basic safety feature implementations, including a proof of concept for integrating ultrasonic sensors with safety relays.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Mapping Backpack</strong>: I researched existing mapping backpacks and designed two versions tailored to our project needs. This involved creating components such as plates and mounts, and analyzing IMU data to ensure the stability and quality of the mapping process.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Pointcloud Map Generation</strong>: I utilized the mapping backpack to collect pointcloud data for generating maps essential for AMR navigation. My focus was on ensuring the accuracy of these maps by preventing common errors such as drifting or duplication.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Pointcloud Map Post-Processing</strong>: I installed and learned to use three post-processing packages to refine the generated pointcloud maps. These tools allowed me to correct errors, remove unwanted obstacles, and enhance the overall accuracy of the maps.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Documentation</strong>: I created clear, structured documentation to detail the usage of the mapping backpack and the post-processing tools. This documentation was designed to be accessible even to individuals without prior knowledge of the project.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Sensors / Actuators Testing</strong>: I prepared various setups to test sensors and actuators before their implementation, ensuring they functioned correctly and met the project requirements.
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
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/safety.jpg?raw=true"
                         height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="right"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/backpack.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="ui"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Mobile_Robotics_Intern/map.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Safety ultrasonic sensor system circuit
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Mapping backpack component breakdown
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Processed map against satellite image
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Key achievements from the internship are:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Establishment of a foundational safety feature implementation for AMRs.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Development of a stable and reliable mapping backpack.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Creation of clean and accurate pointcloud maps for use in AMR navigation and deployment.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Rigorous documentation that enables future teams to replicate and build upon my work.
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
                        Robot Operating System (ROS)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        C++
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Python
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        CAD (SolidWorks)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        3D Lidar VSLAM
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Sensors and actuators (LIDAR)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Machine learning
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Computer vision
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Safety Sensors and components 
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        International standards
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Project planning and execution
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Rapid prototyping for proof of concept
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data collection and presentation
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Structured documentation
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my internship, I faced several challenges that tested my adaptability and resilience. Initially, my lack of background knowledge in hardware and software development, along with limited hands-on experience, posed significant hurdles. Understanding parts, components, assembly, sensors, and software frameworks was daunting, and the transition from academic projects to workplace demands required independent planning and execution. To overcome these challenges, I invested time in bridging my knowledge gaps through online resources, advice from colleagues, and hands-on experimentation. This proactive approach, combined with a willingness to learn from every opportunity, enabled me to build confidence and enhance productivity.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I learned that continuous learning and adaptability are crucial for growth, and there are no shortcuts to achieving it. Online resources are valuable, but practice is essential for honing skills. Effective communication is also key to optimal productivity. These lessons underscored the importance of a growth mindset and ongoing development. My internship also provided insights into rapid prototyping, proof of concept, and the complexities of development, including fieldwork, data collection, and deployment. Working with the elderly and welfare organizations like Lion Befrienders highlighted the importance of user-centric design and collaboration to develop impactful solutions.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The skills and knowledge I gained are invaluable for future projects. I learned effective project design and management, team participation, and working with vulnerable populations and welfare organizations. These experiences have given me early insights into structuring teams for future projects in my startup, particularly in biomechatronics. I am eager to apply these skills in new opportunities and challenges, confident they will support my continued growth.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    For anyone considering an internship or research opportunity, I highly recommend seizing the chance. The practical skills, professional growth, and networking opportunities are invaluable. Embrace these opportunities fully; you won't regret the experience and knowledge gained.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Reflecting on my internship at the Delta-NTU Corporate Laboratory for Advanced Robotics, I am immensely grateful for the invaluable experiences and lessons gained. Despite facing numerous challenges, I emerged with a wealth of new skills and knowledge, both technical and soft, essential for my professional development.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I owe a great deal of appreciation to my supervisors and my colleagues, whose unwavering support and guidance were instrumental throughout my journey. This opportunity not only enhanced my understanding of mobile robotics and practical development procedures but also taught me the importance of working with vulnerable populations and welfare organizations. I look forward to apply my newfound knowledge and skills to future endeavors with confidence and enthusiasm.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Thank you for reading about my journey. I hope my experiences inspire others to pursue their passions and embrace every learning opportunity.
                  </p>

              </div>
            </div>
            <Footer footerProps={footerProps}/>
        </div>
      )
  }
  
export default Delta;