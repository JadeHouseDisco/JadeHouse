import React from 'react';
import DiscoHeader from '@/components/disccoHeader';
import HobbyIntro from '@/components/hobbyIntro';
import BucketList from '@/components/bucketList';
import DiscoFooter from '@/components/discoFooter';

const Interest = () => {
    const hobbyIntroProps = {
      titleText: "Hobbies",
      descriptionText: "Things I love doing in my free time",
      hobbies: [
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708695/swimming_x3otn8.webp",
            alt: "Swimming",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Swimming",
            description: "Swimming helps me release stress and clear my mind",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708694/running_is9j1k.webp",
            alt: "Jogging",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Jogging",
            description: "Jogging with beautiful scenery and music relieves stress and creates lasting memories",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708693/cycling_cau4so.webp",
            alt: "Cycling",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Cycling",
            description: "Cycling along the riverside with the fresh wind makes any day special",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708693/mountain_climbing_hq5tvl.webp",
            alt: "Mountain Climbing",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Mountain Climbing",
            description: "The breathtaking scenery from the mountaintop is everlasting",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708694/snowboarding_xucggu.webp",
            alt: "Snowboarding",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Snowboarding",
            description: "The thrill of speed makes me forget the cold of winter",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708696/traveling_y0vp46.webp",
            alt: "Traveling",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Traveling",
            description: "Exploring new places is full of surprises and wonders",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708693/music_digging_gl27p9.webp",
            alt: "Music Digging",
            width: 1920,
            height: 1080,
          },
          content: {
            title: "Music Digging",
            description: "Adding new music to my collection to create new slots for audible memories",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708695/stocks_auny6y.webp",
            alt: "Stocks",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Stocks",
            description: "Predicting how the world will change is always exciting",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708694/reading_t6eq7r.webp",
            alt: "Reading",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Reading",
            description: "The best way to learn new things and explore my imagination",
          }
        },
        {
          backgroundImage: {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708695/tinker_i6f2cb.webp",
            alt: "Tinkering",
            width: 1536,
            height: 1536,
          },
          content: {
            title: "Tinkering",
            description: "The joy of bringing my imagination to reality",
          }
        }
      ],
    }

    const bucketListProps = {
      titleText: "Bucket List",
      descriptionText: "Explore the dreams of my lifetime",
      bucketList: [
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708666/1_o1i3zr.webp",
          title: "Record a vlog of my ordinary day",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708669/2_iv4b46.webp",
          title: "Make travel vlog with the perfect song choice",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708672/3_p2h4it.webp",
          title: "Share my favorite playlists on internet",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708672/4_xhj26m.webp",
          title: "Go backpacking alone",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708673/5_jpo06x.webp",
          title: "Live in a foreign environment (preferably snowy) for a month",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708673/6_gxcrk9.webp",
          title: "Go snowboarding in a snowy mountain",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708673/7_v1rk56.webp",
          title: "Go for scuba diving",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708674/8_vgyrhi.webp",
          title: "Lie down and see shooting star flying across a sky full of stars",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708674/9_orrqdn.webp",
          title: "Watch the aurora",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708666/10_ywijsz.webp",
          title: "Build a igloo and a big snowman",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708666/11_mioepj.webp",
          title: "Take a family portrait",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708666/12_ldnlak.webp",
          title: "Go to a concert",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708667/13_wuyvok.webp",
          title: "Get on a train and stop at a random location to explore",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708667/14_aim9mi.webp",
          title: "Make a photo album out of photos I took with the people I helped",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708667/15_xv26un.webp",
          title: "Revisit places of nostalgia after 20 years",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708668/16_vw3tem.webp",
          title: "Label the countries I visit with a song",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708668/17_gedwhf.webp",
          title: "Have a drink with my old friends in our 30s",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708668/18_ifjmfs.webp",
          title: "Make a speech at Ted Talks",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708669/19_xkm3kp.webp",
          title: "Make a photo album of my favorite sceneries",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708669/20_hzasuz.webp",
          title: "Travel the space and visit other planets",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708670/21_aw88rc.webp",
          title: "Make my personal study and fill it with books I read",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708670/22_neepqd.webp",
          title: "Have a personal lab to tinker",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708670/23_zg4o1h.webp",
          title: "Build my personal gym to do all the exercise I want",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708671/24_ssqckz.webp",
          title: "Learn boxing",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708671/25_w4hfp8.webp",
          title: "Learn fencing",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708671/26_x9yznw.webp",
          title: "Learn archery",
        },
        {
          src:"https://res.cloudinary.com/dss5ymotz/image/upload/v1730708672/27_q6of88.webp",
          title: "Learn shooting",
        },
      ]
    }

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <DiscoHeader/>
            <HobbyIntro hobbyIntroProps={hobbyIntroProps}/>
            <BucketList bucketListProps={bucketListProps}/>
            <DiscoFooter/>
        </div>
    )
}

export default Interest;