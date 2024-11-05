"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import { DownloadIcon } from "@/components/icons"
import LabFooter from '@/components/labFooter';

const SENSE = () => {
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
                    src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/SENSE/1.png?raw=true"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      SENSE - Surface Electromyography Nerve Symptom Evaluator
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Personal start-up project
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
                      5 November 2024
                  </p>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My colleague Lee Yeonjae and I had the opportunity to attend a cohesion lunch with venture capitalists, entrepreneurs, and mentors. While mingling, we met undergraduate students already launching their own startups. Inspired by their drive, we realized that nothing was stopping us from initiating something meaningful before graduation. With a shared passion for self-initiated projects, we brainstormed ideas that could make a significant impact. 
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Modern lifestyles often lead to prolonged poor posture, which can result in disc conditions like bulging or herniated discs. These issues can compress spinal nerves, causing pain and discomfort.
                  </p>
                  <div className="relative">
                    <Image
                      alt="lcd"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/SENSE/1.png?raw=true"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    SENSE logo
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    SENSE is a medical device we’re developing to detect abnormal muscle activity using surface electromyography (sEMG) sensors. It identifies disc conditions by:
                  </p>
                  <ol className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Collecting voltage signals from muscles
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Amplifying and processing the signals
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Converting signals into 2D images using transformation techniques (e.g., Continuous Wavelet Transform, Empirical Mode Decomposition)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Feeding the images into a trained convolutional neural network (CNN) model
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Diagnosing and prognosticating disc herniation through binary classification
                      </li>
                  </ol>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The CNN model is trained on data from patients and healthy subjects. Although SENSE is still in development, this blog post will document our progress, insights, challenges, and any other exciting updates.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Current Progress
                  </h1>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our idea began as a posture correction device, alerting users to avoid prolonged bad postures. However, after discussions and consultations, we pivoted multiple times, eventually arriving at SENSE. Throughout this process, we conducted extensive research, from acquiring background knowledge to reading up on the latest technologies. We sought advice from NTU professors, orthopedic clinicians, and business owners, building connections with experts willing to support our project, including:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Heng Kok Hui, John Gerard</strong>: Senior Lecturer, School of Mechanical & Aerospace Engineering
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Chou Siaw Meng</strong>: Associate Professor, School of Mechanical & Aerospace Engineering
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Zheng (David) Fan</strong>: Associate Professor, School of Mechanical and Aerospace Engineering
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Jiang Lei</strong>: Consultant Spine Surgeon, Singapore General Hospital
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Joshua Decruz</strong>: Consultant Spine Surgeon, Khoo Teck Puat Hospital
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Jack Lo Yu Tung</strong>: Neurosurgery Resident, National Neuroscience Institute (NNI) Singapore
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Lam Wee Leon</strong>: Senior Consultant and Hand ＆ Reconstructive Microsurgeon, Singapore General Hospital
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Dr. Chen Jing</strong>: Rehabilitation Medicine Consultant, Singapore General Hospital
                      </li>
                  </ul>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/SENSE/2.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/blogPosts/SENSE/3.jpg?raw=true"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Hardware setting
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Static Proof of Concept
                    </div>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730823443/Accuracy_lmkia3.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt="steer"
                        className="rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730823443/Loss_yjotbo.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Model Accuracy
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Model Loss
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      alt="lcd"
                      className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730823599/Results_zqkdm0.png"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="mt-2 text-center text-gray-400 text-sm">
                    Model performance evaluation
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Yeonjae and I dedicated ourselves to this project, achieving significant milestones:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Development of hardware and software for proof of concept
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Successful static environment proof of concept by simulating abnormal muscle activities using electrical stimulations
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Establishing collaboration with doctors from Singapore General Hospital
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Successful classification model proof of concept using publicly available sEMG dataset
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Awarded multidisciplinary team fund of up to S$ $10,000 for the project
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    You may find all our code and results <a className = "text-blue-500 text-under underline" target="_blank" href="https://github.com/JadeHouseDisco/SENSE">here</a>. For more details on our progress, refer to our <a className = "text-blue-500 text-under underline" target="_blank" href="https://docs.google.com/spreadsheets/d/1W0Z6j0c1Yzrwr__9PT0DGzZu3szxcANzaVkKT0paPg0/edit?usp=sharing">meeting and progress records</a>.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Recently, we were invited to take part in writing a review article on current trends of neuroprosthetics. Dr. Leon, who invited us to participate, suggested that since our project scope lies in the application of sEMG sensors, we might explore sEMG used in neuroprosthesis control. Temporary title of the paper is Advances in EMG-Driven Neuroprosthetics: A Review of Current Trends, Challenges, and Future Directions. Yeonjae and I will be participating as a contributing author for the publication, which will be submitted at the end of December 2024.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Ongoing Work
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our to-do list is constantly evolving. Current tasks include:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Submitting ethics approval for data collection on disc patients
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Conducting dynamic environment proof of concept
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Designing the sEMG sensor and data acquisition PCB circuit
                      </li>
                  </ul>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    In the long term, we aim to:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Collect data on disc patients and healthy subjects
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Develop affordable sEMG sensor hardware and a mobile app for disc condition diagnosis
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Pursue patent or other IP protection
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Productize the device
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Publish our findings
                      </li>
                  </ul>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Challenges
                  </h1>                                    
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The SENSE project has been fraught with challenges, but these obstacles have fueled our growth.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our biggest challenge was the lack of expertise. As mechanical engineering students, we had limited knowledge in medical, computer science, and electrical fields. To bridge this gap, we invested considerable time in research, reading papers, and seeking guidance from experts. We reached out to professors and clinicians both locally and internationally, and even contacted authors of relevant papers. These efforts taught us that no problem is insurmountable—it just hasn’t been solved yet.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Staying committed to the project during difficult times was another challenge. We faced opposition, resource constraints, and months of stalled progress. But our desire to make a real impact kept us going. We set realistic yet ambitious goals, sought advice and alternate perspectives, and maintained our focus. Most importantly, despite the ease of abandoning the project, we never gave up. We might set SENSE aside for a while, but we remained obsessed with seeing it through.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Our dedication was a double-edged sword that propelled us up to this point but also made us fall in love with our idea. The more we invested in the project, the harder it became to assess it objectively. Initially, we defended our idea from criticism, but over time, we learned that scrutinizing our work is essential for improvement. We now strive to evaluate SENSE from different perspectives, staying open to change and focusing on what’s needed rather than what we want.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Balancing our project with other commitments was also a challenge. Yeonjae is doing internship, and I’m completing my final year project. We to make the most out of our limited time, we used tools like meeting notes, calendar events, and to-do lists, prioritizing tasks and setting realistic deadlines.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    We expect more challenges ahead, but we welcome them, knowing they will make us stronger.
                  </p>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Through this journey, I’ve gained numerous skills and insights:
                  </p>
                  <ul className="list-decimal my-1 pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Circuit Design
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Data acquisition
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Signal processing and transformation
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Machine learning (CNN)
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Medical device requirements and considerations
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        There are only two type of problems: problems that have been solve, or problems that are yet to be solved
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Nothing is given before you try, so do not give up without even trying
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Subtle balance between meticulous preparation and audacious execution is extremely important in any project
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Never make compromise with yourselves
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Good work can come from individuals, but great work can only come from teams
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Everything is hard, scary, and seemingly impossible at first, but nothing stays as your first
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Not falling in love with your own idea
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Habit of always questioning myself to steer in the right direction
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Thinking in different perspectives
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        How to plan, propose, and initiate research
                      </li>
                  </ul>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Initiating this project has been a transformative experience. What started as a dream has grown into a reality, teaching me that anyone with dedication and passion can achieve something significant. With the wealth of information available online, anyone can learn and create.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Starting something new has always been daunting, but this project has shown me that while the fear is ephemeral, while the skills and results endure. Working with Yeonjae has helped me balance meticulous planning with timely execution. His approach of starting first and adjusting as we go complements my tendency to perfect the plan before beginning. This balance, along with the power of teamwork, has been crucial to our progress. I also learned that having a team to share thoughts, motivate each other, and rely on is key to any success.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    SENSE has been demanding, often leaving us exhausted, but the lessons we’ve learned and the progress we’ve made keep us going. Amidst all the uncertainty, one thing is clear: we will never give up.
                  </p>

                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1Z63IjDM4M0P2Gc33L8kO1gY9p6rPZrQK/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Pitch
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1-M_aEqae6taW0pu0tMkNCV55I2HGhVp5/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Technical Pitch
                    </a>
                  </div>

              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default SENSE;