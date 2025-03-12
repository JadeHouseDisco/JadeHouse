"use client"

import { useEffect, useState } from 'react';
import DiscoHeader from '@/components/disccoHeader';
import Image from 'next/image';
import DiscoFooter from '@/components/discoFooter';

const Military = () => {
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
          <DiscoHeader/>

          {/*blogPostIntro Section*/}
          <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
              <Image
                  alt="Background Image"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708646/1_cdrkre.jpg"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Military
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Republic of Korea Army, Capital Defense Command
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
                    28 December 2023
                </p>
                
                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Duty calls
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  When Korean men turn 19, they are required to enlist in either the army, navy, or the air force and fulfill their national service requirements. The duration depends on which force you enlist for, but the default option is the army, which requires you to serve for 18 month. You may defer the enlistment up to the age of 30, but you need to serve the army to keep your South Korea citizenship. When I finished my first year at NTU, I received a photo from my grandma. It was a photo of draft notice sent to my Korean address. I knew that it was about time I need to go the army, but anticipation and reality strike were two different things.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  550 days here?
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  After finishing my second year at NTU, I enlisted in an army, starting from 20th of June, 2022. On the day of the enlistment ceremony, my aunt and her family brought me to the cite. There was still Covid-19 going around, so no official ceremony was held in public. I remember the spicy seafood noodle soup I ate with the family before going in. If only I knew that the soup was the best thing I will eat for the next 5 weeks, I would have licked the dish clean.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I was the first person to enter and wait for the ceremony to begin. I was assigned the first number in our squad, and the rest of the day was spent with the introduction of the 5 week life that I will be spending in the boot camp. It was so hectic that I don't remember much about the first day. One thing I do remember clearly is the vigil I did on my first day. Since I was the first number in my squad, I was the first one to do the vigil. Standing in front of the door, looking at 13 other people in my room with super short hair just like me, I thought to myself, "How am I going to spend 550 more days here?". There is a common saying in Korean military which the superior usually tells to their inferiors: "Close your left eye, make a fist and put it in front of your right eyes. What you see is your future". That was exactly how I felt; starting my walk in a pitch dark tunnel that has no end.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Radar operator
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Time in boot camp was actually quite memorable. The 13 other people I shared room with were great people, and we pushed through many different challenges together. We also didn't have access to our phone, so the only way to reach out to the outer world was through phone calls that were allowed for 10 minutes every weekend. Isolated from the rest of the world, we huddled together even closer. We did many challenging trainings together, exercised together to get better performance, and helped each other when one of us reached our limits. One of the last training we did in the boot camp was march, where we carried a 20 kg backpack and walked 20 km. There was even heavy rain when we did the training, but our squad pulled through with no one giving up till the end.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  During the last few days, we received our specialization that will become our job for the rest of our time in military. People can either sign up for specific position before enlisting or come in and get assigned a random position. Since the tasks you do heavily depend on your specialization, most people prefer to register for specialization that less labor intensive. I, however, had to enlist in a very specific time window in order to get back to NTU right after finishing military, so I did not register for any roles. When I finally got my specialization, it said "radar operator". I was confused because I thought radar was something air forces do. When I called my parents about it, they said it was one of the hardest specialization to get, and that I was super lucky. I didn't know what to feel about it. The only thing I knew for certain was the I was going to a second boot camp to learn more about my specialization.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  The second boot camp was called air defense boot camp, where everyone that had specialization related to air defense, be it a weapon or a reconnaissance device, came to learn before going to their assigned unit. air defense school was only 3 weeks, but my time there felt like 3 month. The facility was poor and the days were boring. Above all, the people I met there were tiring to deal with. Fortunately, there were some good people among them, so that kept me going. 3 weeks, despite feeling like a long time, flied by now that I look back. On the last week, each of us received our assigned unit. Contrary to what our instructor said, many of us were assigned to capital defense command (CDC), a unit in Seoul to defend the country's capital. I was one of them, and I was quite happy about this because I would be able to go home easily as I was staying in my Aunt's house which was in Seoul.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  New recruit
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708647/2_ogkyfl.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708647/3_pu6z3w.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708647/4_icauiw.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Squad photo at boot camp
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with outpost members under cherry blossoms
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Last photo with outpost members before leaving
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I still remember first entering the air defense department of CDC, where people were staring at the four of us that freshly came from air defense school. We were each assigned to a small air defense outpost spread around Seoul. When I first went to my outpost, I was surprised to see how small the outpost was, and even more surprised to see that there were only 15 or so people in the outpost. The military I knew was much bigger than this, so my expectation broke as soon as reality strike. The first few weeks were just me learning how things worked around the camp. Fortunately, I had great superiors that helped me through the process, and I was able to catch up to everything very quickly. I became close with everyone in the outpost very fast, and the 450 days remaining seemed doable.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  That isn't to say that I had no difficulties. Melding in with new people, all of which were my superiors, in a new environment proved difficult. This was even more challenging because I was not familiar with Korean culture and the people. Also the large amount of contents I had to learn before starting my new duty was burdensome. Also, there were many changes happening at the time, and something I learned yesterday was different today. We were also lacking personnel required to have full shift rotations, resulting in maximum of 8 hours of duty per day. There were countless other difficulties, stresses, and hardships here and there. However, looking back, all the negative emotions and memories eventually wash away and only the lessons from the remain.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Sergeant Lee Hyunwoo on Duty
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708648/5_hag6a3.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708648/6_yukdkm.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708648/7_bhe5zf.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with my immediate superior before his discharge
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with first sargent before his departure
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with my inferiors
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  In Korean culture, military is often depicted as a place of abuse, violence, and harassments. Such cruelty has largely been addressed these days, but that doesn't mean military is a beautiful and enjoyable place. It is essentially being stuck in one place for 18 month following orders that you often times don't understand and obeying unfair treatments just because your rank is lower than someone else. It would be a lie if I tell anyone that my experience during military was a complete bliss, but after almost 7 month after being discharged, all that is left are good memories that kept me going during my time there.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I had good relationship with everyone in my outpost, and I did many things together with them. At 4:30, we would have our daily exercise time, where I would go gym with my superior and inferiors alike and assist each other as we exercised. We would occasionally throw up a meat party supplied by the headquarters, making us forget all the stress and worries that accumulated from our duties. I also remember playing futsal in the cement floor we have in our outpost. It was dangerous and small, but we had great fun. Another great entertainment was the outing and vacation we had every month. I would always go out with the people in my outpost or hang out with friends back in society, leaving the stress behind for a while.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I had some of the wildest experiences back in military. Whenever summer came, we would go pick grass and cut grass, and crouching down picking grass under the blazing for 5 hours is really an experience. When winter came, we would get our broomstick and shovel to clean the snow that piled up in our outpost. I didn't know that you can sweat at minus 20 degrees Celsius. Another great? experience I had was clearing the drain. This not just a normal drain. It is the main drain that connects all the water pipes in our outpost. Our facility was old, and the drain would occasionally get blocked. I would shove in a metal rod that would swirl around the drain and clear the blockage. I didn't know that I have a talent in shoving in metal rod into deep, dark, and narrow tunnel.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  As I approached the end of my service, I started preparing for my return back to society. One of the things I started preparing was the GRE. It has been a while since I last used English in daily life, so my language proficiency was hitting the floor. I started reading The Economist to catch up with English, and spent a whole month studying using material available online. After one month of intense studying, I was able to finish the test successfully. After trying desperately in a challenging environment, I realized that I could do anything, regardless of circumstances and environment, if I really wanted and needed it.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Beloved son Lee Hyunwoo
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708648/8_mh5fw0.webp"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708649/9_ulr7am.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708647/10_zn0of5.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    The watch
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Word notes I used to study GRE
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo on discharge day
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Many things kept me going during my time in military. The most significant boost was a text inscribed behind the watch I bought before joining the army. My mother ordered the watch for me, and she inscribed a text "beloved son Lee Hyunwoo" at the back of the watch. Whenever I was at a limit, I would take off my watch and read this text. It was a simple text, but it gave me more than enough courage and strength to push forward.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I really appreciate the support and care they showed when I first joined the outpost. Without them, I would have not survived the whole journey. It was them who taught me everything, from successfully fulfilling my duties to surviving in the intense social life of military. I have learned many things that I would have never learned in my classes. When it was time for them to be discharged, I felt lonely and void inside. I have been seeing them everyday ever since I came in, and it was hard to believe that they are going away. Fortunately, I had great inferiors to spend the rest of my time in military. I tried my best to not let my rank control how I treat people. I don't know what kind of person I was back in military, but seeing that I am still in touch with both my superiors and inferiors, I guess I wasn't too bad.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  The end of the winter
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  On the morning of December 21st, I got dressed in my uniform, packed my bag, returned my rifle, and headed up to the headquarters building. There we had the discharge ceremony, a small gathering of people I spent time in military, where I was given the certificate proving the termination of service. My inferiors followed me to the main gate to send me off, and I took one last photo with everyone. The day was cold and the streets were empty. The moment I had been waiting for 500 days came to life. I was expecting the day to be special, but it really wasn't. I had mixed feelings leaving and never returning to a place I had stayed for so long. Memories and lessons I would have never made in classrooms passed by, and I started walking. I put my earphones in, and the first song to play was called "The end of the winter" by Wayched and unofficalboyy. Winter in Korea has just started, but the cold winter of my life ended on that day, with spring of new experiences and adventures blooming.
                </p>
            </div>
          </div>
          <DiscoFooter/>
      </div>
    )
  }
  
export default Military;