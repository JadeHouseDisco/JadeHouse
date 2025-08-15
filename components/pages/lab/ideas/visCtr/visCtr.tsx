"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const VisCtr = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708665/1_pdtwow.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      VisCtr
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Vision Guided Prosthesis Control
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
                      20 June 2024
                  </p>

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    In this blog post, I explore the potential of integrating vision-guided control into prosthetics and exoskeletons to enhance the precision of user intention-based control. While current approaches like brain-machine interfaces and muscle sensors have brought us closer to perfect control, adding a vision system could provide real-time feedback, similar to how our eyes guide our movements in everyday tasks. Although this idea presents significant challenges, such as associating visual data with user intentions and ensuring a stable frame of reference, I believe that combining multiple control strategies is essential for achieving the level of precision needed to create prosthetics that could eventually surpass biological capabilities.
                  </p>

                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Achieving precise control of prosthetics and exoskeletons based on user intentions is one of the most crucial tasks in the field. Researchers are exploring various strategies, including brain-machine interfaces, muscle sensors, human modeling, and other sensing methods. While combining these approaches is bringing us closer to perfect control, there is still a long way to go. My idea is to add vision-guided prosthesis control to this mix, further enhancing control precision.
                  </p>

                  <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      The Idea
                  </h1>
                    <div className="relative">
                      <Image
                        alt="wheel"
                        className="mt-4 rounded-3xl inset-0 w-full h-full object-cover"
                        src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708665/1_pdtwow.png"
                        height="800"
                        width="1600"
                      />
                    </div>
                    <div className="mt-2 text-center text-gray-400 text-sm">
                      Idea sketch of using visual feedback for prosthesis control
                    </div>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Consider the simple task of grabbing an object from a table. We usually look at the object we want to grab and reach for it with our hands. Although this seems straightforward, the subconscious processes involved are complex, starting with our intentions and ending with the precise control of muscle strands to achieve the desired action. Our vision plays a key role in this process, providing essential feedback that guides our movements.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Human eyes have both color and depth-sensing capabilities, which help us fine-tune our actions. Similarly, integrating a vision system into prosthesis control could enhance the precision of actuation by providing real-time feedback.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    For example, in the task of grabbing an object, the vision system could detect the location of both the object and the prosthesis. By using depth information, the relative positions of the object and the prosthesis could be calculated and used as feedback to ensure a successful grab. This visual feedback should be combined with other control and feedback strategies, functioning similarly to Simultaneous Localization and Mapping (SLAM), where multiple factors are integrated to achieve precise control.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Challenges and Considerations
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The main challenge is associating visual information with user intentions. Since the interpretation of data from a vision system for control feedback depends on the intended action, <a className = "text-blue-500 text-under underline" target="_blank" href="/lab/ideas/intRecg">decoding user intentions</a> will be essential. The example of grabbing an object is a simplified scenario, but in dynamic real-world settings, numerous complex factors must be considered. Additionally, planning the use of vision for various tasks—such as walking, punching, or jumping—will be critical.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Ensuring a consistent frame of reference for the camera is also vital, as it will serve as the foundation for modeling based on depth information. A strategy must be devised either to keep the vision system's position stable or to compensate for its movement.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Another challenge is objectively defining how the vision system will be used for control feedback in specific actions. For example, grabbing is a relatively straightforward task with a clear objective. However, for more complex motions, like throwing, it might be difficult to determine how the vision system should be evaluated to provide meaningful feedback and achieve the desired motion.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    If motor signals are used to control the prosthesis, the vision system could offer additional feedback to confirm that the prosthesis is moving according to the motor signals.
                  </p>

                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Incorporating a vision system into prosthesis control may be challenging and potentially impractical at this stage. However, I believe there are only two types of problems in the world: those that are solved and those that have yet to be solved. To replicate the complexity of the human body, such obstacles must be overcome. I truly believe that combining multiple control strategies is the key to achieving precise control. With perfect control, developing technology that outperforms biological human body parts is not an impossibility.
                  </p>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default VisCtr;