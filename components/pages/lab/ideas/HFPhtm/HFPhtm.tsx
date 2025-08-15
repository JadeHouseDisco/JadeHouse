"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const HFPhtm = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708587/1_x6eopd.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      HFPhtm
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Heart Failure with Preserved Ejection Fraction Phantom
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
                      10 July 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I introduce the concept of developing a heart phantom designed to replicate heart failure with preserved ejection fraction (HFpEF), a condition that arises after prolonged systolic dysfunction. During my research at Seoul National University, I recognized the difficulty in creating accurate HFpEF animal models due to the complex anatomical changes required. My idea involves creating a heart phantom that mimics the key characteristics of HFpEF, such as reduced heart chamber size, thickened heart walls, and diastolic and systolic dysfunction, enabling researchers to test interventions in a controlled environment. While the development of such a phantom presents significant challenges, it holds the potential to accelerate the creation of effective treatments for HFpEF patients.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During my time researching at the Seoul National University Healthcare Robotics lab, where we worked on <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/experiences/snu">developing a novel implantable device to prevent acute heart failure</a>, I gained valuable insights into the challenges heart researchers face. Historically, heart failure with reduced ejection fraction (HFrEF), caused by systolic dysfunction, was the primary concern due to its high mortality rate.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Today, various treatments and interventions have been developed to sustain patients with HFrEF. However, prolonged systolic dysfunction can lead to anatomical changes in the heart, such as thickening of the heart wall, resulting in heart failure with preserved ejection fraction (HFpEF). Patients with HFpEF experience a reduction in both blood entering and exiting the heart, preserving the ejection fraction. This indicates dysfunction in both systolic and diastolic phases, which, if left unchecked, can lead to increased heart pressure, lung congestion, and acute heart failure.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Animal testing is commonly used to explore potential treatments, interventions, or medications for heart-related issues. However, creating an animal model that accurately reflects HFpEF is challenging because the anatomical changes required for HFpEF only occur after prolonged systolic dysfunction. As a result, researchers often focus on replicating systolic and diastolic dysfunction rather than creating a true HFpEF model. My idea is to develop a heart phantom that can replicate HFpEF, enabling researchers to test various interventions and treatments in a controlled environment.
                  </p>


                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708587/1_x6eopd.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Idea sketch of what is required by the phantom
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Given the challenges of creating an HFpEF animal model, developing a heart phantom that mimics HFpEF could be a valuable tool for assessing the feasibility of treatments aimed at HFpEF patients. The key characteristics of an HFpEF heart include:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Reduced heart chamber size
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Thicker heart wall
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Swelling of heart volume
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Diastolic and systolic dysfunction
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Lung congestion
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Elevated internal heart pressure
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If a heart phantom could be developed to replicate these characteristics, it could be used alongside animal testing results to confirm the efficacy of proposed treatments.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Creating a heart phantom that accurately replicates the heart, while also incorporating the characteristics of HFpEF, is a highly complex task. The performance of the HFpEF phantom would need to be evaluated against the hearts of human patients with HFpEF to ensure it effectively mimics their conditions. Additionally, an animal model with HFpEF should be developed, and identical procedures should be carried out on both the animal model and the phantom to ensure they respond similarly to administered treatments.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708587/2_zftxnk.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of HFPhtm
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    HFpEF is a major concern for cardiovascular surgeons, and countless professionals are working tirelessly to develop novel treatments and interventions for patients suffering from this condition. However, creating an accurate model of HFpEF to validate these approaches remains a significant challenge. I hope that this idea can streamline the process of developing new treatments, ultimately helping more patients return to healthy lives.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default HFPhtm;