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
        imgSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707798/disco_profile_image_jabbwb.jpg",
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
          src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708680/family_photo_tpvd2d.jpg",
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708687/1_wmxihz.jpg", width: 1280, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708687/2_p0e5fz.jpg", width: 1280, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708687/3_aepjbg.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708687/4_uesutc.jpg", width: 721, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708688/5_pjl4dg.jpg", width: 721, height: 942 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708688/6_qzw3me.jpg", width: 721, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708688/7_b4nitw.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708689/8_lp4kv7.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708689/9_zlohur.jpg", width: 1024, height: 768 },
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708683/1_xsu2cd.jpg", width: 3024, height: 4032 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708684/2_y8rnpj.jpg", width: 1263, height: 2526 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708684/3_lmf9pc.jpg", width: 1928, height: 2438 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708685/4_kms5rj.jpg", width: 3024, height: 4032 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708685/5_cj3qcn.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708685/6_q9tdlq.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708686/7_epl7pd.jpg", width: 960, height: 981 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708686/8_ithvtb.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708686/9_exdhiq.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708683/10_kdpvzb.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708684/11_pkri1y.jpg", width: 960, height: 1005 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708684/12_dnptyg.jpg", width: 960, height: 890 },
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708678/1_r89eun.jpg", width: 721, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708678/2_hhj5w7.jpg", width: 721, height: 964 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708678/3_qetza8.jpg", width: 721, height: 975 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708678/4_stk5xm.jpg", width: 721, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708679/5_whjaz0.jpg", width: 529, height: 799 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708679/6_qh5rmj.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708679/7_ekhdb9.jpg", width: 262, height: 449 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708680/8_csvysm.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708680/9_wjz4bh.jpg", width: 721, height: 769 },
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
          src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708692/pet_photo_uqo7ib.jpg",
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708675/1_cwqvot.jpg", width: 4032, height: 1960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708675/2_fzdp8c.jpg", width: 622, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708675/3_wziqit.jpg", width: 1280, height: 624 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708676/4_lfuuxv.jpg", width: 470, height: 435 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708676/5_lx7hhc.jpg", width: 622, height: 573 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708678/6_xuigci.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708677/7_hbllal.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708677/8_giqlcc.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708677/9_fswtv2.jpg", width: 1280, height: 721 },
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708689/1_cmwf3z.jpg", width: 622, height: 732 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708689/2_tdgzyp.jpg", width: 502, height: 496 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708690/3_npgpme.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708690/4_camiwc.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708690/5_yla0kt.jpg", width: 960, height: 1289 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708691/6_jslibh.jpg", width: 1280, height: 1162 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708691/7_v6octp.jpg", width: 1280, height: 960 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708691/8_ijve60.jpg", width: 340, height: 457 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708691/9_dvnerp.jpg", width: 1280, height: 721 },
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
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708681/1_ranvss.jpg", width: 1960, height: 1984 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708681/2_scc8ry.jpg", width: 730, height: 683 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708681/3_dzvvas.jpg", width: 960, height: 1280 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708681/4_fk6gd3.jpg", width: 1280, height: 721 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708682/5_zcjrsb.jpg", width: 765, height: 660 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708682/6_tlepgd.jpg", width: 419, height: 508 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708682/7_hxr09z.jpg", width: 295, height: 473 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708683/8_vra22o.jpg", width: 565, height: 567 },
                    { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708683/9_gpocgh.jpg", width: 1024, height: 768 },
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
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983648/1_jfppkc.jpg", width: 751, height: 1043 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983648/2_iqkyux.jpg", width: 844, height: 630 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983649/3_mdjmrx.jpg", width: 553, height: 746 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983648/4_ravrsu.jpg", width: 895, height: 658 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983649/5_vdr0a5.jpg", width: 946, height: 679 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983650/6_kgsdy3.jpg", width: 491, height: 662 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983651/7_ydjwou.jpg", width: 564, height: 745 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983652/8_e6ngte.jpg", width: 616, height: 825 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730983652/9_yimyun.jpg", width: 724, height: 530 },
              ],
              detailedDescription: "My mom finished work, took a taxi to the hospital on her own and gave birth. She is a strong lady today, but she was something else back in the time."
            },
            {
              title: `But I wanna do this instead :<`,
              location: 'Seoul, South Korea',
              date: "January, 2007",
              description: 'Enrolled in Gaepo-dong kindergarten',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707798/1_bd31wz.jpg", width: 799, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/2_gj1yn8.jpg", width: 1280, height: 832 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/3_l0knzx.jpg", width: 1280, height: 815 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/4_xixnwu.jpg", width: 721, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/5_wju79v.jpg", width: 1280, height: 721 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707800/6_w7i8cn.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707800/7_j2lac2.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707800/8_bsek2u.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707800/9_kysr0o.jpg", width: 770, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/10_fffp5j.jpg", width: 852, height: 918 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707799/11_hvulfe.jpg", width: 768, height: 1024 },
              ],
              detailedDescription: "A straw shows which way the wind blows. From the young age, teachers would tell my parents that I do what I please and move based on my curiosity and interests. Old habits never really fades away."
            },
            {
              title: `That sounds dumb... Lets do it.`,
              location: 'Seoul, South Korea',
              date: "January, 2009",
              description: "Enrolled in Gaewon elementary school",
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707801/1_migqyv.jpg", width: 2202, height: 3390 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707801/2_gxdx88.jpg", width: 721, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707801/3_s4o7cc.jpg", width: 1224, height: 1224 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707801/4_dmmtvd.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707802/5_cfdfzh.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707802/6_mabfn0.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707802/7_huqbqs.jpg", width: 1000, height: 750 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707802/8_gncdti.jpg", width: 1024, height: 768 },
              ],
              detailedDescription: "Body has grown with curiosity. Don't get me wrong though. I always did what I had to, just fast enough to do other things that I wanted to do."
            },  
            {
              title: `The fat mad scientist`,
              location: 'Phonm Penh, Cambodia',
              date: "May, 2014",
              description: 'Enrolled in Northbridge International School Cambodia (NISC)',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707803/1_ia8fij.jpg", width: 1855, height: 1855 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707836/2_ysdbym.jpg", width: 1920, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707972/3_h193bk.jpg", width: 1440, height: 1800 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707973/4_gqpfps.jpg", width: 4032, height: 2268 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707973/5_ngyxvt.jpg", width: 4032, height: 3024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707973/6_sptn2y.jpg", width: 3264, height: 1592 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707973/7_jrlqtf.jpg", width: 4032, height: 1960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707973/8_qlhz9b.jpg", width: 1566, height: 1542 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707974/9_wusayc.jpg", width: 1960, height: 2916 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707803/10_r9yzum.jpg", width: 4032, height: 1960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707803/11_ywac9x.jpg", width: 768, height: 1024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707804/12_yewbtf.jpg", width: 1024, height: 768 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707804/13_gvdjhz.jpg", width: 1080, height: 720 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707804/14_pg8w5v.jpg", width: 1080, height: 1620 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707805/15_nt5z7d.jpg", width: 1080, height: 707 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707805/16_bsvnxl.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707835/17_uvkfgn.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707836/18_z8drmt.jpg", width: 639, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707836/19_cxgr40.jpg", width: 721, height: 694 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707837/20_qup931.jpg", width: 1024, height: 768 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707837/21_zl3lzx.jpg", width: 2944, height: 2208 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707837/22_fsneft.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707838/23_nkxaam.jpg", width: 3024, height: 4023 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707850/24_unztlv.jpg", width: 2944, height: 2208 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707971/25_bsu10g.jpg", width: 4032, height: 3024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707972/26_oiotpa.jpg", width: 213, height: 438 },

              ],
              detailedDescription: "My parents started a new business, and I followed. Few tough years went by, but we made it through. Time in Cambodia is a cornerstone of my life, where I had great experiences, met amazing people, and learned valuable lessons. It was here my passion for engineering really took off—right along with my fat belly."
            },
            {
              title: `For glorious evolution!`,
              location: 'Singapore',
              date: "August, 2020",
              description: 'Enrolled in Nanyang Technological University (NTU)',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707974/1_njarlm.jpg", width: 4032, height: 1960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707977/2_cdvhiq.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707978/3_whefou.jpg", width: 1288, height: 2640 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707978/4_oofnwh.jpg", width: 2224, height: 1080 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707978/5_t4q2ui.jpg", width: 1288, height: 2640 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707979/6_aykh3i.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707979/7_dgojyp.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707979/8_yktllv.jpg", width: 3648, height: 2736 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707981/9_qtvnuq.jpg", width: 1280, height: 624 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707974/10_huwfyy.jpg", width: 721, height: 640 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707975/11_wi2k1y.jpg", width: 524, height: 924 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707975/12_vuj5xu.jpg", width: 720, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707975/13_n06pmv.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707975/14_tnbvre.jpg", width: 1010, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707976/15_j6zq5h.jpg", width: 959, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707976/16_easdcp.jpg", width: 853, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707976/17_erehav.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707977/18_esvo06.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707977/19_tipkj6.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707978/20_vltyyx.jpg", width: 720, height: 1117 },
              ],
              detailedDescription: `During the pandemic, starting at NTU was a whirlwind. I was both excited and nervous as I stepped out from under my parents' wings. Living alone in a foreign country was tough but totally worth it. I was going around telling everyone my crazy dream of turning all the body's parts below the brain into robotic ones. My friends, knowing me well, joked that if anyone could pull that off, it would probably be me!`
            },
            {
              title: `When am I going home?`,
              location: 'Seoul, South Korea',
              date: "June, 2022",
              description: 'Enlisted in Republic of Korea Army',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707997/1_rayi95.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708150/2_m61nac.jpg", width: 3000, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708153/3_anlk1b.jpg", width: 1512, height: 1512 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708154/4_t0qz81.jpg", width: 1512, height: 1512 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708154/5_qyb1v3.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708155/6_bwtqb5.jpg", width: 680, height: 558 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708155/7_i2odas.jpg", width: 1469, height: 1102 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708155/8_szpzkr.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708156/9_gdrarl.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707998/10_a4iqz8.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708006/11_yghilu.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708098/12_cieto8.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708098/13_k7xdoo.jpg", width: 1440, height: 1080 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708099/14_kvefdg.jpg", width: 4032, height: 3024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708099/15_thjrth.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708099/16_au7acx.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708124/17_rnkksj.jpg", width: 2992, height: 2992 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708149/18_ovxbak.jpg", width: 3060, height: 4080 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708149/19_edsboo.jpg", width: 3060, height: 4080 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708150/20_hgc88u.jpg", width: 3060, height: 4080 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708150/21_d7d7ro.jpg", width: 2640, height: 1980 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708150/22_tbbz5e.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708151/23_v8zkjd.jpg", width: 1280, height: 855 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708151/24_hrwawy.jpg", width: 1280, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708151/25_buf3eg.jpg", width: 721, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708152/26_fibaet.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708152/27_pj2nrg.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708152/28_t7gpy4.jpg", width: 1280, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708152/29_qnwhvl.jpg", width: 1242, height: 1656 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708153/30_ipgghm.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708153/31_y8aakb.jpg", width: 721, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708154/32_ikpmbo.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708154/33_jgrkfp.jpg", width: 720, height: 1280 },
              ],
              detailedDescription: "My country called, so I answered. After two years at NTU, I headed back to South Korea to fulfill my military service. The military was a rollercoaster with its highs and lows, but I learned things you definitely don't pick up in classrooms (like cutting grass and unblocking sewage pipes—skills I really hope I won't need in the future!). With plenty of downtime, I found myself always dreaming about the future."
            },
            {
              title: `This engine runs on caffeine.`,
              location: 'Singapore',
              date: "January, 2024",
              description: 'Started professional internship at DELTA-NTU corporate lab',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708203/1_wdcw2d.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708567/2_ff6cjk.jpg", width: 3024, height: 4032 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708567/3_lhdwpy.jpg", width: 4032, height: 3024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708567/4_mlwkjj.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708567/5_yl98kr.jpg", width: 721, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708567/6_ftqwx6.jpg", width: 720, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708568/7_u6ms6w.jpg", width: 4032, height: 3024 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708568/8_lshfaw.jpg", width: 1280, height: 853 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708569/9_r3uplx.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708566/10_gabvk5.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708566/11_wvnunv.jpg", width: 1080, height: 1411 },
              ],
              detailedDescription: "Life is short, and there's no time to waste. After getting out of the military, I jumped straight back into school for a professional internship. Freedom felt even sweeter after getting it back. Driven by ambition and a caffeine intake that probably reached dangerous levels, I went after everything I wanted. Those dreams I had in the military were turning into reality, and I finally figured out what I wanted to do with my life."
            },
            {
              title: `The heart stealer (literally)`,  
              location: 'Seoul, South Korea',
              date: "June, 2024",
              description: 'Started research assistant at Seoul National University (SNU)',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708569/1_qbekxx.jpg", width: 1080, height: 1440 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708570/2_owx21v.png", width: 1200, height: 1800 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708570/3_c2qwsb.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708570/4_quq2mv.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708571/5_coctiz.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708571/6_kd242q.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708571/7_be6nae.jpg", width: 1440, height: 1081 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708571/8_sgp19n.jpg", width: 1440, height: 1081 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708572/9_fhoqh2.jpg", width: 1440, height: 1081 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708569/10_ktn8yf.jpg", width: 960, height: 720 },


              ],
              detailedDescription: `Special dreams need special efforts. Right after wrapping up one internship, I jumped into another one at SNU. Research turned out to be entirely different from classroom learning, but it felt like my true calling. I got a taste of biomechatronic research and knew I needed more. And while I can't exactly steal people's hearts, I did manage to "steal" a few swine hearts. (Don't worry, it was all for science!).`
            },
            {
              title: `Where does the extended arm point?`,  
              location: 'Singapore',
              date: "August, 2024",
              description: 'Started final year project at Nanyang Technological University (NTU)',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871370/1723474036925_sibbqn.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871370/1724125602809_cscbd8.jpg", width: 960, height: 1280 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871371/1724773481659_syqp7n.jpg", width: 632, height: 720 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871377/1730540042846_yvz9ul.jpg", width: 402, height: 714 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871377/1745821889500_cukpin.jpg", width: 756, height: 1008 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871378/20240823_194417_uyqqmz.jpg", width: 563, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871380/20240906_151827_jsmmds.jpg", width: 563, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871381/20240913_204258_cla4yp.jpg", width: 563, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871382/20241021_190831_j1xszq.jpg", width: 563, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871383/20241121_210752_pswiwd.jpg", width: 563, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871384/20250213_172351_myq475.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871385/20250215_185829_hdsnvf.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871241/20250227_190202_hg7bss.jpg", width: 540, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871238/20250228_145443_jvnffg.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871239/20250301_145512_ivbw6h.jpg", width: 803, height: 467 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871238/20250322_000224_nqymhk.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871240/20250327_163120_oc5oxu.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871241/20250502_162848_oaybex.jpg", width: 540, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774871369/20250502_163753_mkis8z.jpg", width: 540, height: 960 },
              ],
              detailedDescription: `I'm back in Singapore. This time, I'm tackling my final year project at NTU. It's a whole new challenge, with a stronger focus in robotics and biomechatonics. It is also a time to prepare for my major change. Where will I be after NTU? Where does the extended arm point towards?`
            },
            {
              title: `Alps squirrel`,  
              location: 'Zürich, Switzerland',
              date: "September, 2025",
              description: 'Started masters in robotics, systems, and controls at ETH Zürich',
              photos: [
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872995/1759846801443_yiktni.jpg", width: 1000, height: 750 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872997/1762040531797_veuwsw.jpg", width: 1008, height: 756 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872955/1764417030009_jjgtyi.jpg", width: 750, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872977/20250917_195902_a5jpwu.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872979/20250920_092441_y3rwid.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872990/20251114_222703_vl62cx.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872993/20251117_112747_m4quaj.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872983/20251117_113119_hnv4te.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872985/20251125_193245_efzpnp.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872988/20251209_135002_r3pgno.jpg", width: 1000, height: 467 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872946/20251218_133225_wh75pi.jpg", width: 1000, height: 467 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872999/2025_12_11_07_30_pzidzy.jpg", width: 540, height: 960 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872948/20260225_235657_mhmbmb.jpg", width: 467, height: 1000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872951/20260226_211047_s3kmbu.jpg", width: 2956, height: 4320 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872950/20260227_084414_iec9rs.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873013/20260227_084440_dic4cn.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872953/20260227_125333_nt95db.jpg", width: 2252, height: 4000 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872957/IMG-20251002-WA0006_ogrcgi.jpg", width: 1356, height: 2048 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872959/IMG-20251010-WA0008_lhhdbz.jpg", width: 1200, height: 1600 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872961/IMG-20251025-WA0007_pfb5bn.jpg", width: 1600, height: 900 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872963/IMG-20251108-WA0009_uqeal7.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873002/IMG-20251109-WA0001_prp6zb.jpg", width: 1600, height: 1200 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872966/IMG-20251118-WA0004_f9ld59.jpg", width: 1600, height: 900 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873004/IMG-20251126-WA0003_o2ikio.jpg", width: 1356, height: 2048 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873011/IMG-20251129-WA0002_dv9ipy.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872971/IMG-20251211-WA0000_q06otb.jpg", width: 1536, height: 2048 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873009/IMG-20251214-WA0005_wsgq7q.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774873006/IMG-20251218-WA0003_huynp0.jpg", width: 2048, height: 1536 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872973/IMG-20251218-WA0006_h37b0b.jpg", width: 1600, height: 1200 },
                { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1774872975/IMG-20260224-WA0005_yyhyah.jpg", width: 1536, height: 2048 },
              ],
              detailedDescription: `Starting a new life in Europe. New environment, new people, and full of surprises and excitements. Probabaly one of the best time of my life.`
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