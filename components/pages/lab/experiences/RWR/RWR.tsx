"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';
import { DownloadIcon } from "@/components/icons"

const RWR = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1775090648/1767091993017_cxjwwo.jpg"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      Wearable Monocular Vision Teleoperation System
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Real World Robotics
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
                      17 January 2026
                  </p>
                  

                  <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Summary
                  </h1>
                  <p className="my-4 max-w-3xl text-base md:text-lg">
                    This project focused on developing a wearable real-time teleoperation system using Project Aria glasses to control a robotic arm and hand from a first-person perspective. To make the system practical, I built a monocular vision pipeline that combined fast hand detection with robust three-dimensional hand tracking, while compensating for head rotation using inertial measurement unit (IMU) data and integrating the perception stack with a Robot Operating System (ROS)-based control pipeline. The final system achieved responsive teleoperation at around 25 to 30 hertz (Hz) and demonstrated tasks such as drawer manipulation, pick-and-place, and object stacking. Beyond the technical outcome, the project was a valuable learning experience that strengthened my skills in computer vision, teleoperation, system integration, and performance optimization, while reinforcing how much can be learned by building complete robotic systems end to end.
                  </p>  
                  <hr className="my-12"></hr>

                  <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Introduction
                  </h1>

                  <div className="relative">
                    <Image
                      alt="lcd"
                      className="rounded-3xl inset-0 mt-4 my-2 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1775090649/1767091985628_tedumy.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Final presentation day for Real World Robotics
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Teleoperation has long been explored as a way to extend human capability into remote or hazardous environments, but many existing systems remain impractical outside controlled settings. Conventional vision-based teleoperation setups often rely on external cameras mounted on stands, requiring careful placement, repeated calibration, and dedicated workspace. These systems can also become costly and cumbersome, making them difficult to deploy as portable everyday tools.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This project was motivated by the goal of building a more practical alternative: a wearable teleoperation system that is portable, convenient, and capable of real-time operation. By using smart glasses as the sensing platform, the aim was to move away from fixed infrastructure and toward a more natural first-person interface, where the user could control a robotic arm and hand directly from their own viewpoint. The challenge, however, was to achieve this without sacrificing responsiveness, since teleoperation is only effective when the system can track motion and translate it to the robot with minimal latency.
                  </p>

                  <h1 id="methodology" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Methodology
                  </h1>

                  <div className="relative">
                    <Image
                      alt="lcd"
                      className="rounded-3xl inset-0 mt-4 my-2 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1775090649/Picture1_utxqat.png"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Teleopeartion pipeline
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The teleoperation pipeline was designed to convert first-person hand motion into real-time control commands for a robotic arm and hand. The system began with the monocular RGB camera on the Aria glasses, where MediaPipe was used as a fast front-end detector to locate the user’s hand in the image. Once the hand region was detected, the image was cropped around it and passed to Hamba, which served as the main hand-tracking model to estimate detailed three-dimensional hand keypoints. This two-stage design allowed the system to balance speed and robustness: MediaPipe provided fast localization, while Hamba handled the more challenging task of recovering hand structure from monocular input.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Because the camera was mounted on the user’s head, the estimated hand motion was affected not only by hand movement but also by head rotation. To address this, inertial measurement unit (IMU) data from the Aria glasses was used to compensate for head motion, allowing the recovered hand and wrist motion to remain stable relative to the world. The resulting keypoints were then transformed from the camera coordinate frame into the robot coordinate frame so that the robot could interpret the motion correctly. After this transformation, the pose data was transmitted from the Python-based perception pipeline to the Robot Operating System (ROS) control stack using User Datagram Protocol (UDP) communication.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Within the ROS pipeline, the incoming hand data was divided into two components. The wrist pose was sent to the robotic arm controller, allowing the arm to follow the user’s arm motion in space. The hand keypoints were sent to a retargeting module, which converted the tracked human hand posture into joint angle commands for the ORCA robotic hand. These joint commands were then passed to the hand controller so that the robotic hand could reproduce the posture of the user’s hand as closely as possible.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Several implementation details were important for making the system practical in real time. Since the Aria camera uses a fisheye lens, image undistortion was required before reliable hand tracking could be performed. To reduce computational overhead, the undistortion mapping was precomputed in advance rather than recalculated for every frame. MediaPipe and Hamba were also run in separate threads so that hand detection and hand reconstruction could proceed more efficiently without blocking each other. In addition, graphics processing unit (GPU) acceleration was used to improve inference speed and reduce latency across the perception pipeline.
                  </p>

                  <div className="prose mx-auto">
                    <div className="my-8">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/sVPW769DCMw`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 md:h-96"
                      ></iframe>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    To improve usability, two additional interaction features were introduced. The first was sensitivity control, which allowed the user to scale how strongly their arm motion was mapped to the robot arm. Higher sensitivity enabled larger robot movements from smaller human motion, increasing reachable workspace, while lower sensitivity provided finer control for precise manipulation. The second feature was clutching, which allowed the user to temporarily disengage their own motion from the robot. This made it possible to reposition or rest without moving the robot, while also helping compensate for the limited field of view and workspace constraints of a glasses-based teleoperation system.
                  </p>

                  <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Results
                  </h1>
                  
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The final system achieved real-time teleoperation performance, operating at approximately 25 to 30 hertz (Hz). This update rate was sufficient to support responsive control of both the robotic arm and hand, allowing the user’s motion to be transferred to the robot with low enough latency for intuitive operation. The result was a wearable first-person teleoperation setup that was not only portable, but also practical enough for live interactive use.
                  </p>

                  <div className="prose mx-auto">
                    <div className="my-8">
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/geHbxlWlRgU`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 md:h-96"
                      ></iframe>
                    </div>
                  </div>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    During the final demonstration, the system was used to complete several basic manipulation tasks, including opening and closing a drawer, pick-and-place motions, and object stacking. These tasks showed that the system could support both gross arm movement and finer hand coordination, demonstrating that monocular vision from a wearable platform could be used for functional robotic teleoperation despite the challenges of occlusion, distortion, and head motion.
                  </p>

                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The project was also recognized during the Real World Robotics final presentation, where it received awards for both Best Presentation and Best Demo. A LinkedIn post for the presentation day can be found <a className = "text-blue-500 text-under underline" target="_blank" href="https://www.linkedin.com/posts/srl-ethz_realworldrobotics-rwr-ethzurich-activity-7411721029338677248-ZYOO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADNQGuMBpFKmaNy6Mrbv0VF4nXMjEm2XGq0">here</a>.
                  </p>
                  
                  <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                      Skills
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This project allowed me to develop and refine a diverse set of skills, including:
                  </p>
                  <ul className="list-disc my-1 pl-8">
                    <li className="max-w-3xl text-base md:text-lg">
                      Computer vision – Building a monocular hand-tracking pipeline robust to occlusion, distortion, and depth ambiguity
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Sensor fusion – Combining camera and inertial measurement unit (IMU) data for head-motion compensation
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Robotic teleoperation – Translating human arm and hand motion into real-time control of a robotic arm and hand
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Robot Operating System (ROS) integration – Connecting a Python-based perception pipeline to a Robot Operating System (ROS) control stack
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Coordinate transformations – Converting hand and wrist pose data between camera and robot reference frames
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Performance optimization – Improving responsiveness through multithreading, precomputation, and graphics processing unit (GPU)-accelerated inference
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Human-robot interaction – Designing usability features such as sensitivity control and clutching for intuitive operation
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Retargeting – Mapping human hand keypoints into robot joint commands for dexterous hand control
                    </li>
                    <li className="max-w-3xl text-base md:text-lg">
                      Systems engineering – Integrating perception, communication, and control into a complete end-to-end robotic system
                    </li>
                  </ul>

                  <h1 id="reflection" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Reflection
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    This project also made clear that there is still significant room for improvement. Although the system achieved real-time teleoperation, reducing latency further would make the interaction feel more fluid and natural. This could likely be improved through additional inference optimization and stronger computing hardware. Another limitation is that the current system compensates only for head rotation, not head translation. In practice, both should be accounted for to capture the user’s arm and hand motion more accurately. In addition, the current compensation relies mainly on accelerometer data, which is susceptible to drift over time. A more robust future version could incorporate magnetometer data to improve long-term stability.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    There are also clear hardware directions for improvement. The version of the Aria glasses used in this project required connection to an external computer, and wireless communication introduced enough latency that a tethered setup was often necessary. A newer generation of the device with on-device programming capabilities would remove much of this inconvenience and make the system far more practical as a truly wearable interface. Higher communication bandwidth would also help enable untethered operation without compromising responsiveness.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    On a personal level, this project reinforced something I have come to believe strongly: the best way to learn robotics is by building real systems. I started this project with little background in teleoperation or computer vision, yet the pressure and momentum of working toward a functioning system forced me to learn quickly and apply concepts in a practical context. That intensity made the learning process far more effective than passively studying the subject in isolation.
                  </p>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The project was also deeply rewarding. Getting the system to work was often frustrating, and as with most robotics projects, progress came with plenty of trial and error. But that is also what made the final result satisfying. While the Aria glasses teleoperation pipeline itself was largely developed independently, the broader Real World Robotics journey was a team effort shared with four other teammates. Working alongside them, especially during long days in the workshop, became one of the most memorable parts of the experience. As my first major project at ETH Zurich, it gave me a strong sense of excitement for the projects and challenges still ahead.
                  </p>

                  <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Conclusion
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    Overall, this project showed that a portable first-person teleoperation system can be built using wearable monocular vision without relying on bulky external camera setups. By developing the full pipeline from hand detection and tracking to robot control, I gained practical experience in computer vision, Robot Operating System (ROS) integration, optimization, and human-robot interaction. More importantly, the project reinforced how much real learning in robotics comes from building complete systems, debugging them, and pushing them until they work reliably in practice.
                  </p>
                  
                  <h1 id="files" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                    Files
                  </h1>
                  <p className="mt-4 max-w-3xl text-base md:text-lg">
                    The code used for this project can be found in <a className = "text-blue-500 text-under underline" target="_blank" href="https://github.com/JadeHouseDisco/aria_hand_detection">github</a>.
                  </p>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://docs.google.com/presentation/d/1MUgl10jaFX2NzCwtXFTGayeaZiPCFCfk/edit?usp=drive_link&ouid=108511981520130649220&rtpof=true&sd=true"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Presentation
                    </a>
                    <a
                      className="inline-flex items-center mr-4 justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                      target="_blank"
                      href="https://drive.google.com/file/d/1_FPD_LuBU0MOwXksdGF4BdrHxVCEft9s/view?usp=drive_link"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5" />
                      Report
                    </a>
                  </div>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default RWR;