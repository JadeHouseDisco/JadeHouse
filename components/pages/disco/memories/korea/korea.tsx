"use client"

import { useEffect, useState } from 'react';
import DiscoHeader from '@/components/disccoHeader';
import Image from 'next/image';
import DiscoFooter from '@/components/discoFooter';

const Korea = () => {
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
                  src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708644/1_bhmthl.jpg"
                  height="858"
                  width="858"
              />
              <div className="absolute inset-0 bg-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
              <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Korea
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    Memories of my youth
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
                    20 July 2024
                </p>
                
                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Glimpse of memories
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  Reminiscing back to my time in Korea is hard. Many years passed since I departed from Korea, and memories from my youth are mostly just faint glimpse of images. Nevertheless, this elusive memories are what makes it more special, because the gaps in the memories can be filled with imaginations and feelings I remember from back in the time. Despite the fact that many years passed since I departed from Korea, I am still writing this blog post because I want to keep of record of my time there before I remember even less of it.
                </p>  

                <h1 id="introduction" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Get a son like you, and you will know
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708644/2_twvfwy.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708644/3_nvilrv.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708645/4_ljvn92.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Cutting cake on my birthday
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Parent participation class
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Photo with my mom
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  My mother always told me that I was a challenging kid. She told me I would never stop asking questions, do only what I understand and please, and disregard what everyone had to say about it. She told me that when I eventually get married and have children, I should get a son like myself and I would understand. Looking back to my youth, I am definitely not ready for Hyunwoo version two in this world.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Starting from kindergarten, teachers would say that I am slightly different from other kids. When other kids were playing or eating, I would lie down in another room, staring up at the ceiling all alone. At early age, peer pressure is really something that drives most kids to actions. Apparently, I wasn't included in the most kids. I don't really remember what was going on around in my head at the time, but I guess I just did whatever I wanted to do, just like me now. There was this one time the class was learning an instrument together. With my bleak outlook for improvement, I quickly lost interest. Teacher came up to me and told me I would be sent out of class if I didn't try my best. After hearing that, I decided to walk out of the class myself. 
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Going to primary school didn't change the outlook of things much. I learned more responsibilities, but that was it. My teachers would tell my parents that I would always get distracted in class. When they approach me to correct my behavior, they would realize that I actually finished everything that the class was doing, and I was just doing other things that were on my mind. This all sounds like I was the troublesome kid in the class, but I really wasn't. I didn't disrupt the class, actively participated, and disturbed nobody (except myself). I was just interested in many things, and I figured I should do all of it because I can.
                </p>

                <h1 id="journey" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Play like you mean it
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Most of the time, things going around in my head usually circled around how I should spend my time doing the most enjoyable thing. I loved playing, and I had all kinds of innovative ways to make the most out of my time. Whenever there was snow, I would grab a paper box with my friends and go to hills in our town for snow sledding. The hills were dangerous with many rocks and steep inclines, but that never stopped me. I still remember the day I came back home from snow sledding. For some reason, I couldn't get the door to open, so I decided to climb from the veranda into my house (my house was on 1st floor). I still remember people staring at me as I climbed up the railing.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I was once obsessed with making igloo, so I got a friend of mine and started building igloo (more like just thin walls of snow) in the middle of the park. We invested 5 hours in blistering cold just to pile up 10 cm of snow in a rectangular shape. Our grand plan was to build the igloo for 1 whole week, but the sun next day didn't agree to our plan. Its funny now that I look back at it, but I was really sad back in the time. Another obsession of mine was to catch birds. My naive thought was that rice will attract birds, meaning that I could have a basket held up with stick connected with a string, which could be pulled to trap birds that were eating rice beneath the basket. I waited in a bush like a vicious predator for almost 2 hours, only to return home empty handed.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  I also loved spending time alone doing whatever I liked. One time I was investigating the optimal posture I had to take on a slide to get the maximum speed. I was so focused in this research that I forgot about my academy and missed the shuttle bus. If I missed class this time, it would be my second time missing it, and my mother was going to suspend me from playing for at least a week. I could simply not tolerate this, so I decided to run to the academy. That was my first time not taking a vehicle to any destination that far alone, but I managed just fine (without any map or navigation!). I even arrived at the academy faster than the shuttle bus.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Living the life they couldn't
                </h1>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                  <div className="relative">
                    <Image
                      alt="air"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708645/5_gqml20.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="screw"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708645/6_bowxgm.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      alt="step"
                      className="rounded-3xl inset-0 w-full h-full object-cover"
                      src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708646/7_dyilfa.jpg"
                      height="800"
                      width="1600"
                    />
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Childhood friends
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Handshake with woodman
                  </div>
                  <div className="text-center text-gray-400 text-sm">
                    Dad bed
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Both my parents would always tell me that their goal was to make me live the life they could not. They wanted me to see and experience a bigger world that they could not growing up. First thing they did to show me a bigger world is bringing me around Korea every weekend. Our family usually went to the recreational forest around South Korea on weekends. Now that I experienced internship and feel what it is like to work during weekdays, I understand how much sacrifices and efforts they made to show me around the world. My father would bring me to small streams of water in the mountains and catch freshwater crayfish with me. At dinner time, we would light up  charcoal and have barbeque. Next morning, we would go for hiking in the mountains, do various activities offered like woodworks and return home. Even after all these years, traveling around with my parents are still valuable memories.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  My mother believed that it was important for me to experience as many things as possible growing up. There was a program she signed me up for along with my friends, which brought us around the historic sties around Korea every 2 weeks during the weekends. We were exposed to various historic buildings that remain from the past and learn about Korean culture through directly experiencing them. Another memorable place she brought me was a theme park that allowed kids to experience various jobs. I still remember firing water jets into flames when experiencing fire fighter. I can't clearly define the influence all these experiences had on me, but I am sure they helped me broaden my horizon and kept me open minded to prepare for the future.
                </p>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  To further broaden my scope, my parents decided to move abroad. Of course they had their business to run, but the main objective of moving abroad was for me to attend an international school. I can't fathom the amount of uncertainty and fear they had when making this decision, with the sole purpose of exposing me to a bigger world. I hated them at first for making me leave my friends and my country, but now, thanks to their efforts, I live in a bigger world, living the life my parents dreamed of growing up.
                </p>

                <h1 id="skills" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  What changed and what remains
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  During my time in military, when I was out for vacation, I decided to pay a visit to my hometown. Returning back after 10 years, the place was completely different. The whole region was undergoing redevelopment, and the buildings I knew, the schools I studied, and the parks I played in were all replaced with construction cites. It was raining that day, and my umbrella could cover me from the water, but not from the nostalgia seeping into my heart. There were some buildings still remaining, awaiting their destruction. The whole place was turning into a modern city, and it left me ambivalent, excited by the new look of the place and sad from losing the place of my childhood memories. It was this day that I actually decided to leave a record of my memories. I realized that important, meaningful places might someday disappear, and would only remain in my memories. Nostalgia is beautiful yet painful, and I wanted to save this strong emotion somewhere safe and everlasting. With this blogpost, my childhood in Korea will forever remain for me to reminisce.
                </p>
            </div>
          </div>
          <DiscoFooter/>
      </div>
    )
  }
  
export default Korea;