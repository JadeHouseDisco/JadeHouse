"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon, DownloadIcon } from "@/components/icons"
import Footer from "@/components/footer"

const Dyson = () => {
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
        subOptions: [
          { text: 'Academic', href: '/lab/aboutme/academic' },
        ], 
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
        subOptions: [
          { text: 'Research', href: '/lab/experiences/research' },
          { text: 'Work', href: '/lab/experiences/work' },
          { text: 'Project', href: '/lab/experiences/project' },
        ],
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/heels.jpg?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Heal Heels
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Product Development Challenge
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
                      8 December 2021
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    Participating in the Product Development Challenge was a transformative journey, immersing me in the dynamic intersection of entrepreneurship, leadership, and innovation. Guided by the collaborative ethos of the course, I navigated through challenges, from market research to prototyping, honing essential skills in leadership, research, and project execution along the way. Successful prototype of heal heels, heels that can transform into flat shoes, was developed. Despite challenges, including pivoting our initial idea, the experience cultivated resilience and a passion for leveraging technology and entrepreneurship to effect tangible change in the world. As I move forward, I am guided by invaluable lessons and a newfound passion, shaping my future endeavors with gratitude and an unwavering excitement to catalyze positive change.
                  </p>  

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my time at university, I had the incredible opportunity to participate in the Product Development Challenge, a one-semester course offered through a collaboration between Nanyang Technological University (NTU) and Dyson. This course was designed with a strong focus on entrepreneurship, encouraging students to generate innovative ideas while teaching the fundamentals of starting a business. Key areas of learning included conducting market research, assessing market feasibility, navigating the prototyping stages, and much more.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In this course, students formed groups of five to six members, each guided by a supervisor from Dyson. I had the privilege of leading my group under the supervision of Ms. Yvonne Tan, the R&D Director of Dyson Singapore. Together, our team developed a prototype for Heal Heels, a pair of convertible heels that can transform into flat shoes. This experience solidified my eagerness to integrate my passion for research and technological advancement with entrepreneurship, driven by the belief that entrepreneurial endeavors have the power to bring innovative ideas to life and create meaningful impact on a global scale.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Journey
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="sketch"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/sketch.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="make1"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/make1.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="disassembled"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/disassembled.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Sketch of prototype design
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Creating the sole for first prototype
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Finished prototype disassembled
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Heal Heels project followed the following steps to completion:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Idea Brainstorm</strong>: We engaged in collaborative brainstorming sessions, identifying pressing problems and generating a multitude of product ideas aimed at addressing these challenges.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Market Research</strong>: Through meticulous market research, we examined the demand landscape, assessed existing products, and evaluated the market viability of our proposed solution to ensure alignment with consumer needs. 
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Customer Validation</strong>: We conducted comprehensive surveys and research to validate our product concept, gaining insights into customer preferences and demand to refine our solution further.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Product Design</strong>: Utilizing tools like SolidWorks, we meticulously planned and designed our product, considering factors like functionality, aesthetics, and manufacturability to ensure an effective solution to the identified problem.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Prototyping</strong>: Leveraging various prototyping techniques, we transformed our design concepts into tangible prototypes, iterating through multiple iterations to refine functionality and usability.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Final Presentation</strong>: In our culminating presentation, we articulated the problem we aimed to solve, showcased the market feasibility of our solution, and presented prototypes demonstrating the innovative features and benefits of our product concept.
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="heels"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/heels.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="flat"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/flat.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="heel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/heel.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Finished prototype of Heal Heels, heel mode
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                    Finished prototype of Heal Heels, flat mode
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Heel component that allows the transformation
                    </div>
                  </div>
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
                        CAD (SolidWorks)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Designing and prototyping
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Leadership
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Market research and analysis
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Presentation and effective communication
                      </li>
                  </ul>

                  <h1 id="Prospects" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Prospects
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="air"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/air_heels.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="screw"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/screw_heels.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="step"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Heal_Heels/step_heels.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Air heels
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Screw heels
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Step heels
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Upon completion of our first prototype, we designed three more heels to enhance our product:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Air Heels</strong>: Heel design to enable continuous height adjustment and enhance cushioning effect utilizing air pressure to support user weight
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Screw Heels</strong>: Heel design to enable convenient and continuous height adjustment
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Step Heels</strong>: Heel design to expand the discrete height adjustment capabilities
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    We plan to test the three designs and choose one to develop further. Upon developing a rigorous prototype, we plan to submit our design to Dyson Innovation Award.
                  </p>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Navigating the Product Development Challenge presented numerous hurdles, each requiring unique solutions. Leading the team demanded a delicate balance of motivation and effective problem-solving, with the weight of critical decisions intensifying the pressure. Transitioning from academia to product development necessitated adaptability and perseverance, amplified by the rigors of weekly presentations and tight deadlines. The most formidable challenge arose when we had to pivot our initial idea after investing seven weeks, a decision that strained team morale and compounded our already tight schedule. Embracing an entrepreneurial mindset added another layer of complexity, demanding constant adaptation and unbiased evaluation of our progress through the lens of market feedback.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Participating in the Product Development Challenge and pushing through its challenges provided a transformative learning experience, emphasizing effective leadership and teamwork amidst its hardships. Understanding team dynamics and fostering trust were crucial, highlighting the collective synergy of a cohesive team. Engaging in rigorous market research and customer validation sharpened my research skills for future endeavors, while flexibility and problem-focused thinking enabled effective adaptation to challenges. Aligning our vision with market realities underscored the need for constant reflection and adjustment, pivotal for progress. Navigating tight deadlines honed project management skills, with decisive action driving progress. Hands-on prototyping offered practical insights, informing future innovation initiatives. Overall, this journey illuminated myriad opportunities for those with adaptable minds, offering a holistic education beyond traditional academic boundaries.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This unique experience has ignited my passion for entrepreneurship as a vehicle for meaningful global impact. It has cultivated resilience and adaptability while opening new avenues for growth and exploration. Integrating research and technology with entrepreneurship offers promising avenues for societal progress. I am particularly drawn to deep-tech startups and their potential to address complex global challenges, eagerly looking forward to contributing to this transformative space.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Participating in the Product Development Challenge has been both demanding and fulfilling, pushing me beyond my comfort zone into the dynamic world of entrepreneurship and product development. Despite the challenges in leadership, market research, prototyping, and presentations, the journey has provided invaluable lessons and skills, fostering resilience and adaptability crucial for future endeavors. Beyond tangible outcomes, it's the intangible lessons in leadership, critical thinking, communication, and adaptability that resonate deeply and will guide my path forward.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Reflecting on this transformative experience fills me with gratitude and excitement for the future. The challenge has not only expanded my skill set but has also ignited a passion for effecting positive change. It's a journey marked by perseverance, innovation, and the relentless pursuit of making a meaningful impact—a journey I'll cherish and carry with me always.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1ZERuCPIxLyLmvi1KaN0sbyaKc3WT--d7/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Presentation
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1Fujhzo4nTwbvvHUjVAJmtbL93o3ktdzN/view?usp=drive_link"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      STEP Files
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/105N-nsW90n4B-ZmMh1t4M3ERxH7XBj-D/view?usp=drive_link"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Demo Videos
                    </a>
                  </div>
              </div>
            </div>
            <Footer footerProps={footerProps}/>
        </div>
      )
  }
  
export default Dyson;