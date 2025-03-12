"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const UFHF = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708662/1_nruc57.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      UFHF
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Underactuated Finger Mechanism with Haptic Feedback
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
                      13 May 2022
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I share my fascination with the complexity and precision of human fingers and my idea to replicate this intricate structure through a robotic mechanism. The concept involves a Haptic Feedback and Sensing Glove (HFG) that captures finger movements and provides haptic feedback, paired with an Underactuated Finger Mechanism (UFM) that mimics finger motions using a single actuator per finger. While this idea presents challenges, particularly in designing the feedback control and ensuring accurate motion replication, it holds the potential to enhance our capabilities by creating a robotic system that works in harmony with our fingers.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708662/2_os7m8j.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Basic idea of UFHF
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    I have an obsession with fingers—not in a strange way, but as an engineer. Every time I observe my fingers in motion, I’m amazed by their precision and complexity. This intricate structure is not only robust but also capable of generating significant force, enough to support our body weight with just a few fingers. The idea of replicating this complex and sophisticated structure with a robot has always fascinated me. My idea is to develop a robotic finger mechanism that can replicate the motion of our fingers while providing haptic feedback to our actual fingers for bi-directional control.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708662/1_nruc57.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Using mapping backpack to collect pointcloud data
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    My concept consists of two main components. The first is the Haptic Feedback and Sensing Glove (HFG), which captures finger movements using string-attached rotary encoders and provides haptic feedback via a linearly actuated friction brake. The second component is the Underactuated Finger Mechanism (UFM), which uses a single rotational actuator per finger for grasping motion, coupled with a silicon-cast barometric sensor to measure grasping force.
                  </p>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730989936/3_opgsgi.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Control flow of UFHF
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    When you move your fingers, the strings attached to the glove’s fingertips rotate the rotary encoder in the HFG, capturing the finger’s status. The rotational actuator in the UFM then moves the robotic fingers accordingly. When the UFM grasps an object, the silicon-cast barometric sensor measures the normal force exerted during the grasp. This value is then used to control the linearly actuated friction brake, which provides haptic feedback by adding tension to the strings attached to the glove’s fingertips.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The UFM will be controlled using a PID (Proportional-Integral-Derivative) controller, with the torque exerted by the rotational actuator proportional to the discrepancy between the HFG’s status and the UFM’s status. This allows users to feel the sensation of a tighter grasp. If the barometric sensor measures a greater grasping force, the friction brake will apply greater force, increasing the haptic feedback force to the user.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Designing the feedback control is crucial, as it directly influences the system’s response. Faulty control system can lead to feedback loop that could destabilize the system. Careful calibration of each sensor’s tolerance is necessary to ensure that the UFM’s motion remains both stable and accurate.
                  </p>
                  <div className="relative flex justify-center">
                    <Image
                      alt="wheel"
                      className="mt-4 rounded-3xl object-cover max-w-[40%] h-auto"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708663/4_gyarhv.png"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="mt-2 text-center text-gray-400 text-sm">
                    Fully actuated finger mechanism
                  </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    While the underactuated mechanism simplifies actuation, it has limitations in fully replicating the sophisticated motion of human fingers. Once this concept is validated using the underactuated mechanism, a fully actuated mechanism could be developed to more accurately mimic the full range of finger movements. This would require additional barometric sensors to measure the force on each segment of the finger, as well as more strings, rotary encoders, and friction brakes in the HFG.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another challenge is to make the HFG design compact to enhance user experience. If the project evolves into a fully actuated mechanism, managing the added components without making the design too bulky will be important.
                  </p>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708663/5_h30m8g.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Miniaturized FM
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If feasible, the UFM could be miniaturized, and the grasping force amplified to provide scaled-up haptic feedback to the HFG. This would enable users to control smaller, more precise robotic fingers for intricate tasks.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708664/6_mwmjuf.webp"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Concept art of UFHF
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Fingers have played a crucial role in our evolution, allowing us to use tools, gain advantages over other animals, and ultimately build modern civilization. It’s time to appreciate this incredible structure by using technology to create a robotic replication that can work in harmony with our fingers, enhancing our capabilities.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default UFHF;