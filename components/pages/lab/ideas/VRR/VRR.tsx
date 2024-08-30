"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon, DownloadIcon } from "@/components/icons"
import Footer from "@/components/footer"

const VRR = () => {
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
            href: 'https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ',
            icon: <GoogleScholarIcon className="h-6 w-6" />,
          },
          {
            href: 'https://orcid.org/0009-0004-2586-0493',
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/VRR/1.png?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      VRR
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Virtual Robot Reality
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
                      16 September 2023
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I present the idea of combining virtual reality (VR) technology with robotics to enable people to be virtually present at remote locations through humanoid robots. Inspired by advancements like Apple's Vision Pro, this concept involves using bi-directional neural interfaces to control humanoid robots, allowing users to experience and interact with distant environments as if they were physically there. While the challenges of perfecting sensory feedback and seamless control are significant, this technology has the potential to revolutionize how we attend meetings, explore dangerous environments, and even conduct rescue missions, all without the need for physical presence.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Many talented and capable individuals are changing the world, but they often have one thing in common: they are incredibly busy. Their schedules are packed with meetings, work, and countless other important tasks. For these people, time is literally more valuable than money. One of the most time-consuming aspects of their lives is traveling to different locations for meetings, conferences, or events. This becomes even more challenging when international travel is involved, often leading to jet lag and fatigue. My idea is to combine virtual reality (VR) technology with robotics to allow users to be present at remote locations without being there physically.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/VRR/1.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Idea sketch of controlling humanoid robot for virtual robot reality
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    When Apple introduced the Vision Pro, I was captivated by its potential. One of the first ideas that crossed my mind was integrating this technology with robotics. If we can develop neural interfaces to control prosthetics and exoskeletons, the same technology could be used to control humanoid robots. A bi-directional interface between the brain and the humanoid robot would enable users to control the robot and receive sensory feedback, allowing them to be virtually present at different locations.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    VR technology, such as the Vision Pro or other VR devices, can provide users with visual  information, which could be combined with other sensory feedback through a brain-machine interface or other feedback systems. This would essentially be an upgraded form of virtual meetings, where robots physically attend events on behalf of the user.
                  </p>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/VRR/2.webp?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of VRR being used for rescue
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If we further refine the control precision of humanoid robots and perfect sensory feedback, this concept could be applied to a wide range of situations, including but not limited to:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Rescue missions
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Space or ocean exploration
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Dangerous procedures
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Creating a seamless connection between the user and the humanoid robot is crucial to making users feel as if they are truly present at remote locations. Both the sensing and actuation aspects must be perfected for the user to experience the robot as an extension of their own body. Realistic sensory feedback is essential for users to feel in control and connected to the robot.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    For large movements, such as walking, a control pod may need to be developed to allow users to perform these actions from a relatively fixed location. Existing VR technologies, like moving or rolling platforms used in gaming, could be adapted for this purpose.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Safety standards for humanoid robots must also be established to ensure they operate without causing harm to the people they interact with. Additionally, precautions must be taken to prevent any accidents during robot operation.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/VRR/3.webp?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of VRR
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The idea of "being there without physically being there" sounds like something out of a science fiction movie. As an engineer, I am excited to realize that technology has advanced to a point where we can seriously consider making this vision a reality. I dream of the day when I can present this concept as a product, with both myself and my robot on stage, delivering a presentation together.
                  </p>
              </div>
            </div>
            <Footer footerProps={footerProps}/>
        </div>
      )
  }
  
export default VRR;