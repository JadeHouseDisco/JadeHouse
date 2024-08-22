"use client"

import { useEffect, useState } from 'react';
import Header from "@/components/header";
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon, DownloadIcon } from "@/components/icons"
import Footer from "@/components/footer"

const Ureca = () => {
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/main.jpg?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Investigation of Novel Lattice Designs for 3D Printing
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Undergraduate Research Experience on CAmpus (URECA)
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
                      31 June 2022
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    During my research at NTU's Undergraduate Research Experience on Campus (URECA) program, I explored innovative lattice designs for 3D printing under Dr. Lai Chang Quan. This project aimed to eliminate internal voids in lattice structures and optimize their mechanical properties, using tools like SolidWorks and COMSOL Multiphysics. Our findings revealed superior designs, which contributed to a co-authored paper currently under review. This hands-on experience was challenging yet rewarding, enhancing my technical skills and confirming my passion for research. It solidified my decision to pursue postgraduate studies and motivates me to engage in future research opportunities.
                  </p>  

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my research through NTU's Undergraduate Research Experience on Campus (URECA) program, I investigated 
                    novel lattice designs for 3D printing under the guidance of Dr. Lai Chang Quan. This research opportunity 
                    significantly contributed to my understanding of research methodologies and solidified my interest in 
                    postgraduate studies.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our research focused on developing a novel lattice design composed of two different types of unit cells to 
                    eliminate internal voids and optimize mechanical properties. Many lattice designs have internal voids, 
                    making them challenging to 3D print due to difficulties in removing support structures. Our goal was to design 
                    a symmetrical lattice that avoids these voids while enhancing mechanical properties.
                  </p>

                  <h1 id="methodology" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Methodology
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="cad"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/cad.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="mesh"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/mesh.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="optimization"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/main.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Symmetrical 3x3x3 lattice composed of plate and truss unit cells constructed with SolidWorks
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Lattice divided into meshes for stress and strain analysis in COMSOL
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Stress distribution in lattice from fixed compression simulated in COMSOL
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The research methodology involved three major steps:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Design</strong>: Using SolidWorks, I designed symmetrical lattices comprising two types of unit cells: plate and truss. Sixteen unique 3x3x3 symmetrical lattices were created.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Analysis</strong>: Using COMSOL Multiphysics, I conducted stress and strain analyses on each lattice design. The fixed strain and corresponding stress data were used to calculate the elastic modulus, identifying designs with superior mechanical properties.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Optimization</strong>: I optimized the thickness of the unit cells to maximize the elastic modulus at a given relative density, ensuring the lattice had no internal voids while maintaining optimal mechanical properties.
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="result1"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/result1.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="result2"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/result2.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="result3"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/Investigation_of_Novel_Lattice_Designs_for_3D_Printing/result3.png?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Elastic modulus of lattice with different structures at fixed unit cell thickness
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Relative modulus of lattice with different relative density
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Relative modulus of lattice with optimal unit cell thickness at different relative density
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The key findings from the simulation and optimization process were:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Lattices with 7 and 19 plate simple cubic unit cells demonstrated exceptional mechanical properties.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Lattice with 19 plate simple cubic unit cells showed optimal mechanical properties across almost all relative densities.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Lattice with 20 plate simple cubic unit cells showed optimal properties at 0.5 and 0.6 relative densities.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Composite lattices with optimized structure and thickness achieved relative modulus comparable to pure lattices, without internal voids.
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My work contributed to a paper titled "Bioinspired Compound Nested Lattices with Programmable Isotropy and 
                    Elastic Stiffness Up to Theoretical Limit," in which I am a co-author. The paper was published in journal Composites Part B: Engineering. [<a className = "text-blue-500 text-under underline" target="_blank" href="https://doi.org/10.1016/j.compositesb.2024.111656">doi</a>]
                  </p>

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
                        Multiphysics analysis and finite element analysis (COMSOL)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Literature review
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Research planning and execution
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data collection and processing
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Journal/Paper writing
                      </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The transition from classroom learning to hands-on research was challenging. I had to be self-directed, 
                    formulate my own research questions, and develop methodologies. Conducting literature reviews and bridging 
                    knowledge gaps were particularly difficult.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I am grateful for the guidance of Dr. Lai Chang Quan and Dr. Ian, who provided invaluable support and advice. 
                    They taught me essential research skills and helped me navigate through challenges. With their support, I 
                    learned that research is not always straightforward and that it requires patience and perseverance.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This experience confirmed my passion for research and clarified my career path. Prior to this experience, I 
                    was uncertain about my pursuit of career in research. Now, I understand both the challenges and rewards research 
                    has to offer. I now feel confident in pursuing postgraduate studies, eager to push beyond the boundaries of 
                    human knowledge and make significant impacts in my field.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Throughout my research journey with NTU's Undergraduate Research Experience on Campus (URECA) program, I delved into innovative lattice designs for 3D printing under the mentorship of Dr. Lai Chang Quan. This invaluable experience provided a robust understanding of research methodologies and cemented my interest in pursuing postgraduate studies. We successfully developed novel symmetrical lattice designs optimized for 3D printing, demonstrating superior mechanical properties without internal voids.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This research not only enhanced my technical skills in design and analysis using tools like SolidWorks and COMSOL Multiphysics but also honed my ability to independently formulate research questions and develop effective methodologies. The support and guidance from Dr. Lai Chang Quan and Dr. Ian were crucial in navigating the complexities of the research process and overcoming the challenges I faced.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Reflecting on this experience, I realize how stepping out of my comfort zone and embracing new challenges contributed to my personal and professional growth. The journey, despite its difficulties, was immensely rewarding and confirmed my passion for research. This project stands as a significant milestone in my portfolio, showcasing my ability to contribute meaningfully to advanced research.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In conclusion, this research experience has been a transformative journey, reinforcing my dedication to exploring new frontiers in my field. I eagerly look forward to engaging in future research opportunities, driven by the desire to push the boundaries of human knowledge and achieve impactful outcomes.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      href="https://github.com/JadeHouseDisco/JadeHouse_Files/raw/main/files/MAE21044_Paper.pdf"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Paper
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      href="https://github.com/JadeHouseDisco/JadeHouse_Files/raw/main/files/MAE21044_Poster.pdf"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Poster
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1kwMP48bzeZ6ObKBA3E_a0L0PHvyj4kXq/view?usp=drive_link"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Results
                    </a>
                  </div>

              </div>
            </div>
            <Footer footerProps={footerProps}/>
        </div>
      )
  }
  
export default Ureca;