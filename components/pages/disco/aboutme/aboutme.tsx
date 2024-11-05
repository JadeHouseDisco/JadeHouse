import React from 'react';
import DiscoHeader from '@/components/disccoHeader';
import FamilyIntro from "@/components/familyIntro"
import BackgroundTimeline from "@/components/backgroundTimeline"
import AboutMeIntro from '@/components/aboutMeIntro';
import DiscoFooter from '@/components/discoFooter';

const Aboutme = () => {
    const aboutMeIntroProps = {
        headerText: "Nice to Meet you!",
        pText: "I am Hyunwoo, a curious and energetic soul constantly in search of new adventures. Guided by my heart and driven by opportunity, I explore unique experiences that others might never encounter. Music is my constant companion, enriching my journey and helping me memorialize the unforgettable memories I create along the way.",
        imgSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/aboutMeIntro/disco_profile_image.jpg?raw=true",
        buttons: [
          {
            text: "Interests",
            href: "/disco/aboutme/interest"
          },
          {
            text: "Favorite Quotes",
            href: "/disco/aboutme/quotes"
          },
        ]
      }

    const familyIntroProps = {
      titleText: "Family",
      descriptionText: "Loved ones that keep me going",
      images: [
        {
          src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/family_photo.jpeg?raw=true",
          map: {
            name: "family_photo_map",
            areas: [
              {
                name: "mom",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [-1,522,35,509,71,455,122,417,169,388,216,363,267,354,334,363,396,379,441,412,472,453,505,480,532,511,554,551,579,600,588,642,586,701,570,743,544,785,526,819,510,875,485,933,465,995,439,1067,401,1115,370,1147,332,1183,305,1203,256,1249,209,1296,164,1343,117,1388,-1,1372],
                popup: {
                  titleText: "Oh Hyunmi",
                  nicknameText: "Pretty",
                  descriptionText: "Hyun for benevolence, Mi for beauty. Strong and charismatic. Best mentor and dearest friend. Great taste for music and books. Loves animals more than humans.",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/1.jpg?raw=true", width: 1280, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/2.jpg?raw=true", width: 1280, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/3.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/4.jpg?raw=true", width: 721, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/5.jpg?raw=true", width: 721, height: 942 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/6.jpg?raw=true", width: 721, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/7.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/8.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/mom/9.jpg?raw=true", width: 1024, height: 768 },
                  ]
                },
              },
              { 
                name: "me",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [1,1354,55,1361,115,1366,166,1305,231,1249,305,1177,367,1131,434,1093,470,1053,543,1073,679,1023,718,1026,764,990,782,981,847,923,862,920,864,833,833,770,816,727,806,665,769,596,746,521,729,445,724,390,735,332,755,265,800,235,847,209,911,180,967,157,1039,146,1101,146,1159,171,1226,211,1273,249,1335,305,1344,383,1340,456,1329,508,1313,566,1299,622,1280,680,1251,722,1241,763,1222,805,1215,850,1221,891,1232,932,1253,954,1270,990,1308,1032,1346,1041,1377,1057,1426,1066,1453,1097,1498,1121,1531,1094,1567,1088,1594,1104,1609,1151,1627,1195,1654,1228,1699,1262,1743,1300,1794,1338,1842,1378,1906,1429,1939,1479,1951,1506,2018,1520,2046,1535,-1,1536],
                popup: {
                  titleText: "Lee Hyunwoo",
                  nicknameText: "Roundy",
                  descriptionText: "Hyun for jade, woo for house. Is eccentric, gets called eccentric, and likes being eccentric. Curiosity has taken control. Terrible multitasking abilities. Stops walking in the middle of the road to turn on music.",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/1.jpeg?raw=true", width: 3024, height: 4032 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/2.jpg?raw=true", width: 1263, height: 2526 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/3.jpg?raw=true", width: 1928, height: 2438 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/4.jpg?raw=true", width: 3024, height: 4032 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/5.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/6.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/7.jpg?raw=true", width: 960, height: 981 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/8.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/9.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/10.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/11.jpg?raw=true", width: 960, height: 1005 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/me/12.jpg?raw=true", width: 960, height: 890 },
                  ]
                },
              },
              { 
                name: "dad",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [2011,1535,1944,1517,1917,1466,1888,1433,1801,1359,1730,1307,1670,1276,1614,1231,1583,1160,1567,1091,1558,1026,1547,981,1522,949,1511,882,1505,833,1496,759,1476,699,1469,636,1487,580,1527,511,1583,464,1650,412,1717,365,1801,365,1875,365,1964,368,2049,375,2049,1535],
                popup: {
                  titleText: "Lee Youngok",
                  nicknameText: "Pikachu",
                  descriptionText: "Young for road, rich for ok. Steadfast and dependable. Strongest pillar of the house. Best crayfish catcher. 0.3 macgyver. Makes his baseball team lose by watching. Cute despite the looks. ",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/1.jpg?raw=true", width: 721, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/2.jpg?raw=true", width: 721, height: 964 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/3.jpg?raw=true", width: 721, height: 975 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/4.jpg?raw=true", width: 721, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/5.jpg?raw=true", width: 529, height: 799 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/6.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/7.jpg?raw=true", width: 262, height: 449 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/8.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/dad/9.jpg?raw=true", width: 721, height: 769 },
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
          src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/pet_photo.jpg?raw=true",
          map: {
            name: "pet_photo_map",
            areas: [
              {
                name: "brown",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [193, 183, 175, 191, 161, 201, 157, 216, 153, 233, 150, 247, 155, 267, 167, 282, 186, 286, 197, 291, 209, 299, 220, 299, 228, 286, 240, 273, 248, 283, 255, 299, 270, 307, 285, 303, 282, 289, 273, 279, 270, 273, 281, 271, 290, 264, 283, 255, 274, 252, 266, 236, 273, 225, 279, 209, 285, 195, 282, 181, 288, 164, 291, 151, 296, 138, 296, 124, 298, 112, 288, 112, 281, 115, 270, 114, 256, 113, 244, 105, 233, 105, 231, 117, 235, 129, 240, 141, 237, 155, 221, 167],
                popup: {
                  titleText: "Brown",
                  nicknameText: "Fat Cat",
                  descriptionText: "Brown cat with brown name. Real authority of the house. Smart and understands everything we say, but just doesn't care. Sometimes bites for no reason.",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/1.jpg?raw=true", width: 4032, height: 1960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/2.jpg?raw=true", width: 622, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/3.jpg?raw=true", width: 1280, height: 624 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/4.jpg?raw=true", width: 470, height: 435 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/5.jpg?raw=true", width: 622, height: 573 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/6.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/7.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/8.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/brown/9.jpg?raw=true", width: 1280, height: 721 },
                  ]
                },
              },
              { 
                name: "oreo",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [746,155,741,136,749,120,754,99,764,84,786,85,802,80,813,64,824,65,824,81,832,82,841,81,840,94,838,110,835,123,818,122,817,132,818,146,813,159,801,169,796,183,796,197,790,209,775,210,751,206,745,189,751,176],
                popup: {
                  titleText: "Oreo",
                  nicknameText: "Fast Cat",
                  descriptionText: "Obviously born to be called oreo with his color. Runs around and hunt human feet. Jumps really high. Usually not thinking. Hides for fun.",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/1.jpg?raw=true", width: 622, height: 732 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/2.jpg?raw=true", width: 502, height: 496 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/3.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/4.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/5.jpg?raw=true", width: 960, height: 1289 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/6.jpg?raw=true", width: 1280, height: 1162 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/7.jpg?raw=true", width: 1280, height: 960 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/8.jpg?raw=true", width: 340, height: 457 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/oreo/9.jpg?raw=true", width: 1280, height: 721 },
                  ]
                },
              },
              {
                name: "leo",
                shape: 'poly',
                fillColor: "rgba(255, 255, 255, 0.2)",
                strokeColor: "transparent",
                preFillColor: "rgba(255, 255, 255, 0.1)",
                coords: [699,333,705,355,715,375,732,386,745,401,736,413,719,413,709,430,711,451,722,468,722,490,712,513,717,534,719,555,722,576,735,593,754,598,773,598,793,603,810,623,832,646,860,668,889,686,926,698,966,714,1009,717,1102,712,1131,695,1154,669,1178,660,1196,626,1213,601,1239,565,1235,533,1216,519,1183,524,1158,538,1142,552,1122,552,1052,511,993,485,936,451,912,435,900,407,871,400,847,383,838,364,848,347,865,330,856,316,851,298,824,308,804,316,770,316,741,321,714,322],
                popup: {
                  titleText: "Leo",
                  nicknameText: "Good Boy",
                  descriptionText: "Lee + Oh. Runs faster than all three humans in the house combined. Delicate heart for his size. Likes tennis balls. Would guide anyone to our safe happily.",
                  photos: [
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/1.jpg?raw=true", width: 1960, height: 1984 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/2.jpg?raw=true", width: 730, height: 683 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/3.jpg?raw=true", width: 960, height: 1280 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/4.jpg?raw=true", width: 1280, height: 721 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/5.jpg?raw=true", width: 765, height: 660 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/6.jpg?raw=true", width: 419, height: 508 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/7.jpg?raw=true", width: 295, height: 473 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/8.jpg?raw=true", width: 565, height: 567 },
                    { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/familyIntro/leo/9.jpg?raw=true", width: 1024, height: 768 },
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
        titleText: "Journey",
        descriptionText: "Footprints of my life",
        timeStamps: [
            {
              title: `Hello World!`,  
              location: 'Seoul, South Korea',
              date: "March, 2002",
              description: 'Born in Cha hospital as a healthy baby.',
              photos: [
                { src: "/test.jpg", width: 1920, height: 1080 },
              ],
              detailedDescription: "My mom finished work, took a taxi to the hospital on her own and gave birth. She is a strong lady today, but she was something else back in the time."
            },
            {
              title: `But I wanna do this instead :<`,
              location: 'Seoul, South Korea',
              date: "January, 2007",
              description: 'Enrolled in Gaepo-dong kindergarten',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/1.jpg?raw=true", width: 799, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/2.jpg?raw=true", width: 1280, height: 832 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/3.jpg?raw=true", width: 1280, height: 815 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/4.jpg?raw=true", width: 721, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/5.jpg?raw=true", width: 1280, height: 721 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/6.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/7.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/8.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/9.jpg?raw=true", width: 770, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/10.jpg?raw=true", width: 852, height: 918 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/2/11.jpg?raw=true", width: 768, height: 1024 },
              ],
              detailedDescription: "A straw shows which way the wind blows. From the young age, teachers would tell my parents that I do what I please and move based on my curiosity and interests. Old habits never really fades away."
            },
            {
              title: `That sounds dumb... Lets do it.`,
              location: 'Seoul, South Korea',
              date: "January, 2009",
              description: "Enrolled in Gaewon elementary school",
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/1.jpg?raw=true", width: 2202, height: 3390 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/2.jpg?raw=true", width: 721, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/3.jpg?raw=true", width: 1224, height: 1224 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/4.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/5.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/6.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/7.jpg?raw=true", width: 1000, height: 750 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/3/8.jpg?raw=true", width: 1024, height: 768 },
              ],
              detailedDescription: "Body has grown with curiosity. Don't get me wrong though. I always did what I had to, just fast enough to do other things that I wanted to do."
            },  
            {
              title: `The fat mad scientist`,
              location: 'Phonm Penh, Cambodia',
              date: "May, 2014",
              description: 'Enrolled in Northbridge International School Cambodia (NISC)',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/1.jpg?raw=true", width: 1855, height: 1855 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/2.jpg?raw=true", width: 1920, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/3.jpg?raw=true", width: 1440, height: 1800 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/4.jpg?raw=true", width: 4032, height: 2268 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/5.jpg?raw=true", width: 4032, height: 3024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/6.jpg?raw=true", width: 3264, height: 1592 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/7.jpg?raw=true", width: 4032, height: 1960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/8.jpg?raw=true", width: 1566, height: 1542 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/9.jpg?raw=true", width: 1960, height: 2916 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/10.jpg?raw=true", width: 4032, height: 1960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/11.jpg?raw=true", width: 768, height: 1024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/12.jpg?raw=true", width: 1024, height: 768 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/13.jpg?raw=true", width: 1080, height: 720 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/14.jpg?raw=true", width: 1080, height: 1620 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/15.jpg?raw=true", width: 1080, height: 707 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/16.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/17.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/18.jpg?raw=true", width: 639, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/19.jpg?raw=true", width: 721, height: 694 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/20.jpg?raw=true", width: 1024, height: 768 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/21.jpg?raw=true", width: 2944, height: 2208 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/22.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/23.jpg?raw=true", width: 3024, height: 4023 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/24.jpg?raw=true", width: 2944, height: 2208 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/25.jpg?raw=true", width: 4032, height: 3024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/4/26.jpg?raw=true", width: 213, height: 438 },

              ],
              detailedDescription: "My parents started a new business, and I followed. Few tough years went by, but we made it through. Time in Cambodia is a cornerstone of my life, where I had great experiences, met amazing people, and learned valuable lessons. It was here my passion for engineering really took off—right along with my fat belly."
            },
            {
              title: `For glorious evolution!`,
              location: 'Singapore',
              date: "August, 2020",
              description: 'Enrolled in Nanyang Technological University (NTU)',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/1.jpg?raw=true", width: 4032, height: 1960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/2.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/3.jpg?raw=true", width: 1288, height: 2640 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/4.jpg?raw=true", width: 2224, height: 1080 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/5.jpg?raw=true", width: 1288, height: 2640 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/6.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/7.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/8.jpg?raw=true", width: 3648, height: 2736 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/9.jpg?raw=true", width: 1280, height: 624 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/10.jpg?raw=true", width: 721, height: 640 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/11.jpg?raw=true", width: 524, height: 924 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/12.jpg?raw=true", width: 720, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/13.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/14.jpg?raw=true", width: 1010, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/15.jpg?raw=true", width: 959, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/16.jpg?raw=true", width: 853, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/17.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/18.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/19.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/5/20.jpg?raw=true", width: 720, height: 1117 },
              ],
              detailedDescription: `During the pandemic, starting at NTU was a whirlwind. I was both excited and nervous as I stepped out from under my parents' wings. Living alone in a foreign country was tough but totally worth it. I was going around telling everyone my crazy dream of turning all the body's parts below the brain into robotic ones. My friends, knowing me well, joked that if anyone could pull that off, it would probably be me!`
            },
            {
              title: `When am I going home?`,
              location: 'Seoul, South Korea',
              date: "June, 2022",
              description: 'Enlisted in Republic of Korea Army',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/1.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/2.jpg?raw=true", width: 3000, height: 4000 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/3.jpg?raw=true", width: 1512, height: 1512 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/4.jpg?raw=true", width: 1512, height: 1512 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/5.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/6.jpg?raw=true", width: 680, height: 558 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/7.jpg?raw=true", width: 1469, height: 1102 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/8.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/9.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/10.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/11.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/12.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/13.jpg?raw=true", width: 1440, height: 1080 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/14.jpg?raw=true", width: 4032, height: 3024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/15.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/16.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/17.jpg?raw=true", width: 2992, height: 2992 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/18.jpg?raw=true", width: 3060, height: 4080 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/19.jpg?raw=true", width: 3060, height: 4080 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/20.jpg?raw=true", width: 3060, height: 4080 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/21.jpg?raw=true", width: 2640, height: 1980 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/22.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/23.jpg?raw=true", width: 1280, height: 855 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/24.jpg?raw=true", width: 1280, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/25.jpg?raw=true", width: 721, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/26.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/27.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/28.jpg?raw=true", width: 1280, height: 960 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/29.jpg?raw=true", width: 1242, height: 1656 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/30.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/31.jpg?raw=true", width: 721, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/32.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/6/33.jpg?raw=true", width: 720, height: 1280 },
              ],
              detailedDescription: "My country called, so I answered. After two years at NTU, I headed back to South Korea to fulfill my military service. The military was a rollercoaster with its highs and lows, but I learned things you definitely don't pick up in classrooms (like cutting grass and unblocking sewage pipes—skills I really hope I won't need in the future!). With plenty of downtime, I found myself always dreaming about the future."
            },
            {
              title: `This engine runs on caffeine.`,
              location: 'Singapore',
              date: "January, 2024",
              description: 'Started professional internship at DELTA-NTU corporate lab',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/1.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/2.jpg?raw=true", width: 3024, height: 4032 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/3.jpg?raw=true", width: 4032, height: 3024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/4.jpg?raw=true", width: 960, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/5.jpg?raw=true", width: 721, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/6.jpg?raw=true", width: 720, height: 1280 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/7.jpg?raw=true", width: 4032, height: 3024 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/8.jpg?raw=true", width: 1280, height: 853 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/9.jpg?raw=true", width: 2048, height: 1536 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/10.jpg?raw=true", width: 2048, height: 1536 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/7/11.jpg?raw=true", width: 1080, height: 1411 },
              ],
              detailedDescription: "Life is short, and there's no time to waste. After getting out of the military, I jumped straight back into school for a professional internship. Freedom felt even sweeter after getting it back. Driven by ambition and a caffeine intake that probably reached dangerous levels, I went after everything I wanted. Those dreams I had in the military were turning into reality, and I finally figured out what I wanted to do with my life."
            },
            {
              title: `The heart stealer (literally)`,  
              location: 'Seoul, South Korea',
              date: "June, 2024",
              description: 'Started research assistant at Seoul National University (SNU)',
              photos: [
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/1.jpg?raw=true", width: 1080, height: 1440 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/2.png?raw=true", width: 1200, height: 1800 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/3.jpg?raw=true", width: 2252, height: 4000 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/4.jpg?raw=true", width: 2252, height: 4000 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/5.jpg?raw=true", width: 2252, height: 4000 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/6.jpg?raw=true", width: 2252, height: 4000 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/7.jpg?raw=true", width: 1440, height: 1081 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/8.jpg?raw=true", width: 1440, height: 1081 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/9.jpg?raw=true", width: 1440, height: 1081 },
                { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/backgroundTimeline/8/10.jpg?raw=true", width: 960, height: 720 },


              ],
              detailedDescription: `Special dreams need special efforts. Right after wrapping up one internship, I jumped into another one at SNU. Research turned out to be entirely different from classroom learning, but it felt like my true calling. I got a taste of biomechatronic research and knew I needed more. And while I can't exactly steal people's hearts, I did manage to "steal" a few swine hearts. (Don't worry, it was all for science!).`
            },
        ],
      }

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <DiscoHeader/>
            <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
            <FamilyIntro familyIntroProps={familyIntroProps}/>
            <BackgroundTimeline backgroundTimelineProps={backgroundTimelineProps}/>
            <DiscoFooter/>
        </div>
    )
}

export default Aboutme;