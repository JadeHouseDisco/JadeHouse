import React from 'react';
import MainHeader from '../mainHeader';
import ParallaxScroll from "@/components/ui/parallaxScroll";
import ScrollImageSequence from '@/components/scrollImageSequence';
import MiniAbout from "@/components/miniAbout";
import MainFooter from '../mainFooter';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const layers = [
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198790/13_nqxfed_bjr6d4.png', speed: 0.7 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198790/12_bnf9m0_glo539.png', speed: 0.65 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198791/11_kjxtok_bymp5c.png', speed: 0.6 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198789/10_hoohd7_r12zzj.png', speed: 0.55 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198789/9_mvxdf0_pdodsw.png', speed: 0.5 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198788/8_bqdjpa_siqd1x.png', speed: 0.45 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198789/7_xenqxa_nqyhkq.png', speed: 0.4 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198755/6_onrvnp_roierf.png', speed: 0.35 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198788/5_jabsyx_yhk7tm.png', speed: 0.3 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198727/4_dohezt_id5vdx.png', speed: 0.25 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198726/3_qjtvoc_z7v390.png', speed: 0.2 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198788/2_iremab_gblugz.png', speed: 0.15 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1758198727/1_izhise_balrez.png', speed: 0.1 }
  ];

    const frames = [
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198962/1_asgknn.png", alt: "Frame 1" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198962/2_hikupb.png", alt: "Frame 2" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198964/3_bsoxwh.png", alt: "Frame 3" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198963/4_kitc6r.png", alt: "Frame 4" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198964/5_ubutmq.png", alt: "Frame 5" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198965/6_lhqaer.png", alt: "Frame 6" },
    ];

  const miniAboutProps = {
    profileImage: {
      src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1730708698/profile_photo_main_lpmouz.jpg',
      alt: 'Profile Photo',
      width: 256,
      height: 256,
    },
    name: 'Lee Hyunwoo',
    bio:  "Hi, I'm Hyunwoo Lee, a passionate engineer and a curious soul with a love for music. Eager to learn new skills and chase my ambitions, I thrive on making new memories and trying new things. Join me as I blend creativity and technical expertise to shape a dynamic future.",
    socialLinks: [
      {
        href: 'mailto:HYUNWOO001@e.ntu.edu.sg',
        icon: <MailIcon className="h-6 w-6" />,
      },
      {
        href: 'https://twitter.com/JadeHouseDisco',
        icon: <TwitterIcon className="h-6 w-6" />,
      },
      {
        href: 'https://linkedin.com/in/hyunwoolee0329',
        icon: <LinkedinIcon className="h-6 w-6" />,
      },
    ],
    button: {text:"", href:""}
  }

  const parseCoords = (s: string) =>
    s.split(",").map(v => Number(v.trim()));

  const pixelsToPercentPolygon = (coordsPx: number[], baseWidth: number, baseHeight: number) =>
    coordsPx.map((v, i) => {
      const isX = i % 2 === 0;
      return (v / (isX ? baseWidth : baseHeight)) * 100;
    });

  const poly1Px = parseCoords("936,710,933,614,930,512,932,387,930,244,932,189,948,168,981,165,1024,166,1091,170,1182,173,1203,175,1208,194,1210,226,1215,280,1210,362,1212,417,1207,500,1200,588,1203,660,1199,721,1184,739,1151,747,1106,752,1062,756,1022,747,989,747,960,733");
  const poly2Px = parseCoords("299,233,299,196,313,182,350,180,419,182,491,188,554,190,592,198,599,231,597,272,599,348,597,444,597,515,597,599,594,668,594,727,589,745,534,750,472,745,421,744,381,740,340,737,309,730,302,699,300,627");

  const BASE_W = 1536;
  const BASE_H = 1024;

  const poly1Pct = pixelsToPercentPolygon(poly1Px, BASE_W, BASE_H);
  const poly2Pct = pixelsToPercentPolygon(poly2Px, BASE_W, BASE_H);

  return (
    <div key="1" className="relative flex flex-col min-h-[100dvh]">
      <MainHeader />
      <ParallaxScroll layers={layers} className="absolute inset-0 -z-10" />
      <div className="bg-black h-72"></div>
      <ScrollImageSequence
        images={frames}
        intrinsicSize={{ width: 1536, height: 1024 }} // native size used for your <area> coords
        lastImageAreasPx={[
          {
            name: "Lab Region",
            shape: "polygon",
            coords: [299,233,299,196,313,182,350,180,419,182,491,188,554,190,592,198,599,231,597,272,599,348,597,444,597,515,597,599,594,668,594,727,589,745,534,750,472,745,421,744,381,740,340,737,309,730,302,699,300,627],
            effect: {
              overlaySide: "right",                    // clicking left region overlays the right half
              overlayColor: "rgb(31 41 55 / 0.80)",    // optional
              overlayOpacity: 0.8,                     // optional
              bgImage: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198964/6_2_mghdcp.png", fadeMs: 300 }, // optional
              content: {
                image: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758199144/lab_ookoc5.png", alt: "Lab", width: 150, height: 150 },   // optional
                title: "JadeHouse Lab",
                description: "Explore my professional life, including experiences, ideas, and reviews",
                buttonText: "Enter the Lab",
                buttonHref: "/lab",
              },
            },
          },
          {
            name: "Disco Region",
            shape: "polygon",
            coords: [936,710,933,614,930,512,932,387,930,244,932,189,948,168,981,165,1024,166,1091,170,1182,173,1203,175,1208,194,1210,226,1215,280,1210,362,1212,417,1207,500,1200,588,1203,660,1199,721,1184,739,1151,747,1106,752,1062,756,1022,747,989,747,960,733],
            effect: {
              overlaySide: "left",                     // clicking right region overlays the left half
              overlayColor: "rgb(31 41 55 / 0.80)",
              overlayOpacity: 0.8,
              bgImage: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758198963/6_1_wnjpc6.png", fadeMs: 300 },
              content: {
                image: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/disco_r4homm.png", alt: "Lab", width: 150, height: 150 },   // optional
                title: "JadeHouse Disco",
                description: "Explore my personal life, including memories, thoughts, and music",
                buttonText: "Enter the Disco",
                buttonHref: "/disco",
              },
            },
          },
        ]}
        className="relative w-full"
        offsetElementId="main-header"
        verticalAnchorPercent={30}
      />
      <MiniAbout miniAboutProps={miniAboutProps} />
      <MainFooter />
    </div>
  );
};

export default JadeHouse;