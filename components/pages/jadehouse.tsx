import React from 'react';
import MainHeader from '../mainHeader';
import ParallaxScroll from "@/components/ui/parallaxScroll";
import ScrollImageSequence from '@/components/scrollImageSequence';
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import MainFooter from '../mainFooter';
import { LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons"

const JadeHouse = () => {
  const layers = [
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973409/13_nqxfed.png', speed: 0.7 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/12_bnf9m0.png', speed: 0.65 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/11_kjxtok.png', speed: 0.6 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973610/10_hoohd7.png', speed: 0.55 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/9_mvxdf0.png', speed: 0.5 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/8_bqdjpa.png', speed: 0.45 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/7_xenqxa.png', speed: 0.4 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973406/6_onrvnp.png', speed: 0.35 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/5_jabsyx.png', speed: 0.3 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/4_dohezt.png', speed: 0.25 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973407/3_qjtvoc.png', speed: 0.2 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/2_iremab.png', speed: 0.15 },
    { src: 'https://res.cloudinary.com/dss5ymotz/image/upload/v1755973408/1_izhise.png', speed: 0.1 }
  ];

    const frames = [
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757000751/1_owgpse.png", alt: "Frame 1" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757000750/2_ktn2ik.png", alt: "Frame 2" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757000781/3_kocizw.png", alt: "Frame 3" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757000751/4_akq2xu.png", alt: "Frame 4" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757007919/5_yifw6j.png", alt: "Frame 5" },
      { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757005550/6_eqdjrq.png", alt: "Frame 6" },
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
              bgImage: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757005550/6_2_tapkgf.png", fadeMs: 300 }, // optional
              // autoClearMs: 2500,                    // optional auto clear
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
              bgImage: { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1757005549/6_1_chp6r2.png", fadeMs: 300 },
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