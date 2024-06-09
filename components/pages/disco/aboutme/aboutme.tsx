import React from 'react';
import Header from "@/components/header";
import FamilyIntro from "@/components/familyIntro"
import BackgroundTimeline from "@/components/backgroundTimeline"
import AboutMeIntro from '@/components/aboutMeIntro';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

const Aboutme = () => {
    const headerProps ={
      imageProps: {
        src: '/logo/jadehouse_disco.png',
        width: 418,
        height: 538,
      },
      titles: [
        { text: 'JadeHouse', href: '/' },
        { text: 'Disco', href: '/disco' }
      ],
      dropdownOptions: [
        { text: 'Home', href: '/disco' },
        { text: 'About', 
          href: '/disco/aboutme', 
          subOptions: [
            { text: 'Interest', href: '/disco/aboutme/interest' },
            { text: 'Quotes', href: '/disco/aboutme/quotes' },
          ] 
        },
        { text: 'Memories', href: '/disco/memories' },
        {
          href:"/disco/thoughts",
          text: 'Thoughts',
          subOptions: [
            { text: 'Perspective', href: '/disco/thoughts/perspective' },
            { text: 'Inspiration', href: '/disco/thoughts/inspiration' },
          ],
        },
        { text: 'Music', href: '/disco/music' },
      ],
    }

    const aboutMeIntroProps = {
        headerText: "Nice to Meet you!",
        pText: "I am Hyunwoo, a curious and energetic soul constantly in search of new adventures. Guided by my heart and driven by opportunity, I explore unique experiences that others might never encounter. Music is my constant companion, enriching my journey and helping me memorialize the unforgettable memories I create along the way.",
        imgSrc: "/aboutMeIntro/disco_profile_image.jpg"
      }

    const familyIntroProps = {
      titleText: "My Family",
      descriptionText: "Loved ones that keep me going",
      images: [
        {
          src: "/familyIntro/family_photo.jpg",
          map: {
            name: "family_photo_map",
            areas: [
              {
                name: "mom",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [-1,522,35,509,71,455,122,417,169,388,216,363,267,354,334,363,396,379,441,412,472,453,505,480,532,511,554,551,579,600,588,642,586,701,570,743,544,785,526,819,510,875,485,933,465,995,439,1067,401,1115,370,1147,332,1183,305,1203,256,1249,209,1296,164,1343,117,1388,-1,1372],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
              { 
                name: "me",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [1,1354,55,1361,115,1366,166,1305,231,1249,305,1177,367,1131,434,1093,470,1053,543,1073,679,1023,718,1026,764,990,782,981,847,923,862,920,864,833,833,770,816,727,806,665,769,596,746,521,729,445,724,390,735,332,755,265,800,235,847,209,911,180,967,157,1039,146,1101,146,1159,171,1226,211,1273,249,1335,305,1344,383,1340,456,1329,508,1313,566,1299,622,1280,680,1251,722,1241,763,1222,805,1215,850,1221,891,1232,932,1253,954,1270,990,1308,1032,1346,1041,1377,1057,1426,1066,1453,1097,1498,1121,1531,1094,1567,1088,1594,1104,1609,1151,1627,1195,1654,1228,1699,1262,1743,1300,1794,1338,1842,1378,1906,1429,1939,1479,1951,1506,2018,1520,2046,1535,-1,1536],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
              { 
                name: "dad",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [2011,1535,1944,1517,1917,1466,1888,1433,1801,1359,1730,1307,1670,1276,1614,1231,1583,1160,1567,1091,1558,1026,1547,981,1522,949,1511,882,1505,833,1496,759,1476,699,1469,636,1487,580,1527,511,1583,464,1650,412,1717,365,1801,365,1875,365,1964,368,2049,375,2049,1535],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
            ]
          },
          originalWidth: 2054,
          areaTranslateX: -8,
          areaTranslateY: -5,
        },
        {
          src: "/familyIntro/pet_photo.jpg",
          map: {
            name: "pet_photo_map",
            areas: [
              {
                name: "brown",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [193, 183, 175, 191, 161, 201, 157, 216, 153, 233, 150, 247, 155, 267, 167, 282, 186, 286, 197, 291, 209, 299, 220, 299, 228, 286, 240, 273, 248, 283, 255, 299, 270, 307, 285, 303, 282, 289, 273, 279, 270, 273, 281, 271, 290, 264, 283, 255, 274, 252, 266, 236, 273, 225, 279, 209, 285, 195, 282, 181, 288, 164, 291, 151, 296, 138, 296, 124, 298, 112, 288, 112, 281, 115, 270, 114, 256, 113, 244, 105, 233, 105, 231, 117, 235, 129, 240, 141, 237, 155, 221, 167],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
              { 
                name: "oreo",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [746,155,741,136,749,120,754,99,764,84,786,85,802,80,813,64,824,65,824,81,832,82,841,81,840,94,838,110,835,123,818,122,817,132,818,146,813,159,801,169,796,183,796,197,790,209,775,210,751,206,745,189,751,176],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
              { 
                name: "leo",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.2)",
                coords: [699,333,705,355,715,375,732,386,745,401,736,413,719,413,709,430,711,451,722,468,722,490,712,513,717,534,719,555,722,576,735,593,754,598,773,598,793,603,810,623,832,646,860,668,889,686,926,698,966,714,1009,717,1102,712,1131,695,1154,669,1178,660,1196,626,1213,601,1239,565,1235,533,1216,519,1183,524,1158,538,1142,552,1122,552,1052,511,993,485,936,451,912,435,900,407,871,400,847,383,838,364,848,347,865,330,856,316,851,298,824,308,804,316,770,316,741,321,714,322],
                popup: {
                  titleText: "test",
                  descriptionText: "test",
                  photos: [
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                    { src: "/test.png", width: 1920, height: 1080 },
                    { src: "/test2.png", width: 1920, height: 1080 },
                    { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                    { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  ]
                },
              },
            ]
          },
          originalWidth: 1280,
          areaTranslateX: -8,
          areaTranslateY: -5,
        }
      ]
    }

    const backgroundTimelineProps = {
        titleText: "My Journey",
        descriptionText: "Footprints of my life",
        timeStamps: [
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
            {
                location: 'Seoul, South Korea',
                date: "March, 2002",
                description: 'Born in South Korea, Seoul in Cha hospital...',
                photos: [
                  { src: "/test.png", width: 1920, height: 1080 },
                  { src: "/test2.png", width: 1920, height: 1080 },
                  { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
                  { src: "/main_background.jpeg", width: 1536, height: 1536 },
                ],
                detailedDescription: "More testing required"
            },
        ],
    }
    
    const footerProps = {
      logo: {
        src: '/logo/jadehouse_disco.png',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Disco",
      description:"Archive of my personal life",
      navLinks: [
        { text: 'Home', href: '/disco' },
        { text: 'About', href: '/disco/aboutme' },
        { text: 'Memories', href: '/disco/memories' },
        { text: 'Thoughts', href: '/disco/thoughts' },
        { text: 'Music', href: '/disco/music' },
      ],
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
          href: 'https://www.instagram.com/jadehousedisco/',
          icon: <InstagramIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
      ],
    }

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <Header headerProps={headerProps}/>
            <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
            <FamilyIntro familyIntroProps={familyIntroProps}/>
            <BackgroundTimeline backgroundTimelineProps={backgroundTimelineProps}/>
            <Footer footerProps={footerProps}/>
        </div>
    )
}

export default Aboutme;