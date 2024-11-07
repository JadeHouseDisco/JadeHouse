import DiscoHeader from '@/components/disccoHeader';
import RecordPlayer from "@/components/recordPlayer";
import PlaylistShowcase from "@/components/playlistShowcase";
import AudibleMemories from "@/components/audibleMemories";
import DiscoFooter from '@/components/discoFooter';

export default function Music() {

  const recordPlayerProps = {
    titleText: "All Time Favorites",
    descriptionText: "Best songs in my collection",
    songs: [
      {
        title: "Pink + White",
        artist: "Frank Ocean",
        album: "Blonde",
        link: "https://music.youtube.com/watch?v=9cHbvRUALrc&si=Hdqkv4Xt3zXE8mB1",
        description: "If flowers bloom with sound, it would sound like this. Anywhere you go and anything you do feels special with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708698/1_rccmun.jpg"
      },
      {
        title: "Crave You (Feat. Giselle)",
        artist: "Flight Facilities",
        album: "Down To Earth",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "Simple melody can hold so much more than simple words. This song is what loneliness would sound like.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708701/2_to6ncb.jpg"
      },
      {
        title: "In Our Prime",
        artist: "The Black Keys",
        album: "Turn Blue",
        link: "https://music.youtube.com/watch?v=aHwGucd6z5w&si=HTnDg8mHJ2uoy5sc",
        description: "This ordinary day that I would so painfully miss. It always hurts to look back, regardless of whether it was good or bad memories.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708705/3_ruih4o.jpg"
      },
      {
        title: "White Lies",
        artist: "Max Frost",
        album: "White Lies",
        link: "https://music.youtube.com/watch?v=WK8s7KTMbbw&si=73Xq6daGjY6QJxh4",
        description: "If you think you can't dance with sadness, this song tells you otherwise. Play this song, and dance the sadness away.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708705/4_wgdihs.jpg"
      },
      {
        title: "Lone Digger",
        artist: "Caravan Palace",
        album: "<I°_°I>",
        link: "https://music.youtube.com/watch?v=36A-ZjOpui8&si=tVl0LYhN0_UI_hpO",
        description: "Time to swing out of your ordinary life and feel life to our skins. In other words, its time to get up and let go.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708706/5_nlfe89.jpg"
      },
      {
        title: "Cry Babay",
        artist: "The Neighbourhood",
        album: "Wiped Out!",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "This song sounds like a grey cloudy sky that is about to pour down rain. How is this song holding down so much sorrow? It only shows bitter, sad, and sweet smiles.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708706/6_kfuggc.jpg"
      },
      {
        title: "Kazino",
        artist: "BIBI",
        album: "Kazino",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "BIBI's voice drags you deep into an endless hole, almost feeling like an addiction. Falling and rolling, deeper and deeper we go.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708706/7_cc5skm.jpg"
      },
      {
        title: "High Noon",
        artist: "THORNAPPLE",
        album: "Capital Disease",
        link: "https://music.youtube.com/watch?v=dRegKRl-V_c&si=NlbI_64OoA4ffaSU",
        description: "Powerful energy and emotions exploding with vocal and guitar. Most vibrant and beautiful raving.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708707/8_t5cguq.jpg"
      },
      {
        title: "Let Me Out",
        artist: "The Blue Stones",
        album: "Pretty Monster",
        link: "https://music.youtube.com/watch?v=GRijQiArYKc&si=ZmEwf77UcXQHSlS7",
        description: "Sometimes in life, you need to run away screaming your inner self. This song won't leave you sitting.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708707/9_x5nlef.jpg"
      },
      {
        title: "El Mañana",
        artist: "Gorillaz",
        album: "Demon Days",
        link: "https://music.youtube.com/watch?v=vJrbeHQxPTA&si=MB-6eVZIGkrjMWda",
        description: "Gorillaz has many famous songs, but I don't understand why this one isn't one of them. This song introduces emptiness to your ears. No song ever felt so void.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708698/10_pg3uro.jpg"
      },
      {
        title: "Wings",
        artist: "Mot",
        album: "Non-Linear",
        link: "https://music.youtube.com/watch?v=x40WEtm3uBk&si=nl8dnNN9CNKegJ1d",
        description: "Spiralling down towards the inevitable, reminiscing the good days. This song will accompany you till the end.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708699/11_sfiah9.jpg"
      },
      {
        title: "마음이 그래",
        artist: "O.O.O",
        album: "사랑의 단상 Chapter 5: The Letter From Nowhere",
        link: "https://music.youtube.com/watch?v=meewe0gU8sQ&si=cW4m4nR-d3FRipfP",
        description: "Any love is beyond reason. No matter how much you resist it, your heart is always faster. O.O.O sings about this in the most relaxing way.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708699/12_e5qrdk.jpg"
      },
      {
        title: "Tidal Waves",
        artist: "Portugal. The Man",
        album: "Woodstock",
        link: "https://music.youtube.com/watch?v=wClC9RCF0g0&si=PaA_h5PFwjZlkTBn",
        description: "We all live with blurring memories, feelings, faces. But at times, they come back to you like tidal waves.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708699/13_ttfqpc.jpg"
      },
      {
        title: "Quitting time",
        artist: "CHEEZE",
        album: "Plain",
        link: "https://music.youtube.com/watch?v=dbCvrxLX5qA&si=mQaQY432dDLlLGvX",
        description: "Walking back home, watching the sun go down, surrounded by so many people yet still all alone in this world. This song tells you that it is ok to be sad and lonely.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708700/14_af0uih.jpg"
      },
      {
        title: "PIZZA",
        artist: "OOHYO",
        album: "PIZZA",
        link: "https://music.youtube.com/watch?v=1MJ6dcXXjhA&si=pS5emwXIQXgrSmsk",
        description: "You would never expect yourself to be swayed so much by such simple text messages. However, if you are, just remember that even pizza sucks without the person you are thinking of.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708700/15_meyizj.jpg"
      },
      {
        title: "PARACHUTE (feat. OHHYUK & Dok2",
        artist: "CODE KUNST",
        album: "MUGGLES' MANSION",
        link: "https://music.youtube.com/watch?v=F8W7snOKog0&si=l0poPBEbvWrfBEIk",
        description: "This song goes for all the youth struggling to climb up to their dreams. Your unwavering focus shall get you high. Even if you fall, this song opens up a parachute for you to try again.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708700/16_diwt0d.jpg"
      },
      {
        title: "This Head I Hold",
        artist: "Electric Guest",
        album: "This Head I Hold",
        link: "https://music.youtube.com/watch?v=0iJDn8Ma3a0&si=xTPbrlVkq9YOW5AG",
        description: "Too much thoughts, worries, anxieties, sadness makes your head heavy. Leave it all behind and run forward with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708700/17_r5vd15.jpg"
      },
      {
        title: "Blurry feat. DBO (prod by. PEEJAY)",
        artist: "Beenzino",
        album: "Blurry",
        link: "https://music.youtube.com/watch?v=ZCeoXkvME3I&si=KmVaswUOu_Bbcwxq",
        description: "You can't run away from reality, but you can seek shelter in this song. Float away from life for just a little with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708701/18_q7dfaf.jpg"
      },
      {
        title: "Goyeol",
        artist: "dosii",
        album: "dosii",
        link: "https://music.youtube.com/watch?v=42x9MeuxDuk&si=0jMKt0ctu-uUCMxG",
        description: "Sleepless night with too much thoughts in my head. Might as well enjoy the silence of night with the company of this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708701/19_ybqkkn.jpg"
      },
      {
        title: "불면증 (feat. Bobby Kim)",
        artist: "Dynamicduo",
        album: "Taxi Driver",
        link: "https://music.youtube.com/watch?v=UEbPNjL22gE&si=GDriymttPWQmjmuz",
        description: "Classic of Korean HipHop that talks about unchanging worries. May the heavy burden of yours be just a little less overwhelming with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708702/20_fnbrrt.jpg"
      },
      {
        title: "Every Night My Teeth Are Falling Out",
        artist: "The Anlters",
        album: "Burst Apart",
        link: "https://music.youtube.com/watch?v=0h07CYPZQ3E&si=1ES2Blf4_cGPireD",
        description: "Creeping thoughts in the the night comes with a sound. They flourish and fill your imaginations with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708702/21_aeaxvb.jpg"
      },
      {
        title: "Mama Lisa",
        artist: "Swervy",
        album: "Undercover Angel",
        link: "https://music.youtube.com/watch?v=dPSG8nw7lOc&si=ffTFxzUyDliQ8fNT",
        description: "Remember what they said about you? Watch me now.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708702/22_zg7lcr.jpg"
      },
      {
        title: "Smells Like Teen Spirit",
        artist: "Nirvana",
        album: "Nevermind",
        link: "https://music.youtube.com/watch?v=ljUtuoFt-8c&si=uS7rPGahIfVyetmZ",
        description: "Legendary song in rock, even after all this time.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708703/23_fnbah9.jpg"
      },
      {
        title: "Rollercoaster (feat. Cho Wonseon)",
        artist: "Dok2",
        album: "Reborn",
        link: "https://music.youtube.com/watch?v=2F49L5W3lOU&si=8-ePGQhEgmmA3soH",
        description: "So many obstacles and hardship, life is truly a crazy rollercoaster. May this song give you courage to ride through it.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708703/24_ivbipm.jpg"
      },
      {
        title: "Snap Out Of It",
        artist: "Artic Monekys",
        album: "AM",
        link: "https://music.youtube.com/watch?v=yfrEMQgBc2Y&si=aIIZExidBCfjFDol",
        description: "Snap out of life and move with style. This song gives you a smooth refresh to your life.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708703/25_foydiy.jpg"
      },
      {
        title: "PINK!",
        artist: "youra",
        album: "GAUSSIAN",
        link: "https://music.youtube.com/watch?v=TXRyn0rc4-I&si=o7qoSsfXhhuodCya",
        description: "When you are about to lose yourself, lose yourself to this song instead. Empty streets with lamplight never felt more special.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708703/26_hqsdzk.jpg"
      },
      {
        title: "AIYA (feat.Beenzino)",
        artist: "CHANGMO",
        album: "DBSG 3",
        link: "https://music.youtube.com/watch?v=Ds0vwgwxXRY&si=LIkQOpFJQ2ypIZkN",
        description: "Success, anger, and accomplishment in one song. Watch their gaze change with this song.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708704/27_ph7aq8.jpg"
      },
      {
        title: "instagram",
        artist: "DEAN",
        album: "instagram",
        link: "https://music.youtube.com/watch?v=lq3NLUN8DDc&si=e5829JdsYwpk7bUN",
        description: "Can you really be happy nowadays? This song contemplates with you the true meaning of happiness.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708704/28_pjdnuh.jpg"
      },
      {
        title: "Song 2",
        artist: "Blur",
        album: "Blur",
        link: "https://music.youtube.com/watch?v=SQrKCytWbj8&si=KhH9aGI1Hs3EH-uK",
        description: "Another classic of rock. This song lives through time.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708704/29_cqfkyi.jpg"
      },
      {
        title: "0310",
        artist: "Yerin Baek",
        album: "Every letter I sent you.",
        link: "https://music.youtube.com/watch?v=lgjudfWgB24&si=RhErNg7nC9LIfJLW",
        description: "Slow warm day can be beautiful yet sad. This song shows you how such irony is possible.",
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708705/30_nhytdz.jpg"
      },
    ]
  }

  const playlistShowcaseProps = {
    titleText: "My playlists",
    descriptionText: "My favorite playlists",
    playlists: [
      {
        label: 'Gloomy walk in New York', 
        value: 'playlist1',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708727/background_rxftil.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708723/1_zmtwm2.jpg",
              title: "Sad You, Stil Fine",
              artist: "Fromm",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708725/2_plkjer.jpg",
              title: "Hold Me Like It's Forever",
              artist: "Fromm & Car, the garden",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708725/3_oncpma.jpg",
              title: "Bad Apple",
              artist: "Sailor Honeymoon",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708726/4_kxxch7.jpg",
              title: "A Day of Mercury",
              artist: "THORNAPPLE",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708726/5_oxagtv.jpg",
              title: "More (feat. GIRIBOY)",
              artist: "youra",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708726/6_otwt92.jpg",
              title: "HIGH (feat. Rachel Lim)",
              artist: "JIDA",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708726/7_krjznw.jpg",
              title: "Nevermind",
              artist: "Dennis Lioyd",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708727/8_rm8wyh.jpg",
              title: "Islands",
              artist: "The xx",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708727/9_ieboze.jpg",
              title: "Noise Pollution [Version A, Vocal up Mix 1.3] (feat. Mary Elizabeth Winstead & Zoe Manville",
              artist: "Portugal. The Man",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708724/10_htve8g.jpg",
              title: "Lost 2 (feat. Sunwoojunga)",
              artist: "Car, the garden",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708724/11_nebxzq.jpg",
              title: "Whiskey n Whiskey",
              artist: "Park Soeun",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708724/12_ralete.jpg",
              title: "Youth",
              artist: "Daughter",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708724/13_i29nxw.jpg",
              title: "Caffeine",
              artist: "Mot",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708725/14_silwal.jpg",
              title: "Everything to Me",
              artist: "Shin Hae Gyeong",
          },
        ],
        link: 'https://music.youtube.com/playlist?list=PLADefd6IIr_n5aIa_u8M_d9PD6XQKXqZ6&si=dhjziUpfiTovhkul'
      },
      {
        label: 'Lamplight Starlight', 
        value: 'playlist2',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708744/background_c3hyvx.webp",
        songs: [
          {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708738/1_sashfi.jpg",
            title: "So life goes on",
            artist: "Heo Hoy Kyung",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708741/2_ot94l8.jpg",
              title: "By bye my blue",
              artist: "Yerin Baek",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708742/3_x91yys.jpg",
              title: "Let You Down",
              artist: "Helb Glise",
          },
          {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708742/4_hcd8tw.jpg",
            title: "sleep tight",
            artist: "E SENS",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708742/5_s72bnm.jpg",
              title: "No One Told Me Why",
              artist: "ALEPH",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708743/6_pohd2m.jpg",
              title: "Romance",
              artist: "CHEEZE",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708743/7_bvhazx.jpg",
              title: "Exile Vilify",
              artist: "The National",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708743/8_giwrp6.jpg",
              title: "TT",
              artist: "Kim Sawol",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708744/9_bz2ghd.jpg",
              title: "Key",
              artist: "Kim Sawol",
          },
          {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708738/10_wbstux.jpg",
            title: "Hounds",
            artist: "The Antlers",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708738/11_tgonds.jpg",
              title: "Rainbow (Prod.IDeal) (feat.YDG)",
              artist: "Bassagong",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708739/12_apb6k4.jpg",
              title: "flight",
              artist: "E SENS",
          },
          {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708739/13_n714ce.jpg",
            title: "Big Jet Plane",
            artist: "Angus & Gulia Stone",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708739/14_akofbh.jpg",
              title: "Rolled Together",
              artist: "The Antlers",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708740/15_lo3oty.jpg",
              title: "Blind (feat. Rachel Lim)",
              artist: "JIDA",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708740/16_vnrthu.jpg",
              title: "Over the Moon",
              artist: "The Marias",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708740/17_ipdubw.jpg",
              title: "bath",
              artist: "offonoff",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708740/18_aikttk.jpg",
              title: "Fly Me to the Moon",
              artist: "The Macarons Project",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708741/19_qlksrk.jpg",
              title: "Home is Far Away (feat. OH HYUK)",
              artist: "EPIK HIGH",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708741/20_sfcm12.jpg",
              title: "Closely Far Away",
              artist: "Car, the Garden",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nqZexdl2AU09p9the09Khq&si=CIQRVCM4Ry-8aFYG"
      },
      {
        label: 'Warm orange sunlight', 
        value: 'playlist3',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708749/background_cgokbk.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708744/1_nby94l.jpg",
              title: "Watermelon Sugar",
              artist: "Harry Styles",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708747/2_eo7jht.jpg",
              title: "Day 1",
              artist: "HONNE",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708747/3_qwyuii.jpg",
              title: "Mouse",
              artist: "Lee go do",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708747/4_t3aczp.jpg",
              title: "As it Was",
              artist: "Harry Styles",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708748/5_ubzdnc.jpg",
              title: "0310",
              artist: "Yerin Baek",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708748/6_kukfqq.jpg",
              title: "Pluto",
              artist: "Chamsom",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708748/7_ooqjis.jpg",
              title: "Light Chaser",
              artist: "JISOKURY",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708748/8_g7ikag.jpg",
              title: "Painkiller",
              artist: "Ruel",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708749/9_nfeamz.jpg",
              title: "Good Night Good Dream",
              artist: "Nerd Connection",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708744/10_e1hdbh.jpg",
              title: "In My City of Seoul",
              artist: "The Black Skirts",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708745/11_n6rwvn.jpg",
              title: "Redbone",
              artist: "Childish Gambino",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708745/12_roetvv.jpg",
              title: "West Coast Love",
              artist: "Emotional Oranges",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708745/13_ltyvpe.jpg",
              title: "Love is All",
              artist: "The Black Skirts",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708746/14_lmdbhf.jpg",
              title: "Sleep",
              artist: "Night Off",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708746/15_xlbnxx.jpg",
              title: "Sunset (feat. Stell Jang)",
              artist: "Pleyn",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708746/16_x3dehc.jpg",
              title: "Not Worth It",
              artist: "Emotional Oranges",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708746/17_jrn6pa.jpg",
              title: "Imagination",
              artist: "Foster The People",
          },        
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nEvrLpboYz_j-tGXyRV_EB&si=KgBTjNRwZi7B0GqG"
      },
      {
        label: 'Pale flower fields', 
        value: 'playlist4',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708755/background_wq44rc.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708749/1_v7s1uf.jpg",
              title: "Stolen Dance",
              artist: "Milky Chance",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708752/2_na7giz.jpg",
              title: "Scent",
              artist: "캐스커",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708753/3_pizzbi.jpg",
              title: "When spring comes (Piano ver.)",
              artist: "Kim Yun A",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708753/4_dauk74.jpg",
              title: "Most Ordinary Existence",
              artist: "Sister's Barbershop",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708753/5_bny0wu.jpg",
              title: "Bedside",
              artist: "Kim Sawol",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708754/6_p9ya95.jpg",
              title: "Exile Vilify",
              artist: "The National",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708754/7_hguxhd.jpg",
              title: "Don't Panic",
              artist: "Coldplay",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708754/8_u9qmsl.jpg",
              title: "Are You Turning into a Devil?",
              artist: "Sister's Barbershop",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708755/9_qb20rn.jpg",
              title: "Angeles",
              artist: "Eliott Smith",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708750/10_x5oyvr.jpg",
              title: "잔혹한 여행",
              artist: "한희정",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708750/11_sibnuu.jpg",
              title: "Plankton",
              artist: "THORNAPPLE",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708750/12_oje06u.jpg",
              title: "No Widows",
              artist: "The Antlers",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708750/13_c0bfmh.jpg",
              title: "Cigarette (feat. Tablo & MISO)",
              artist: "offonoff",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708751/14_lbfmup.jpg",
              title: "Aspiring Boy",
              artist: "전자양",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708751/15_egnler.jpg",
              title: "I didn't know yet (feat. 하림 On Harmonica)",
              artist: "Lee Juck",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708751/16_sgblxv.jpg",
              title: "Never Know",
              artist: "Jack Johnson",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708752/17_xemznd.jpg",
              title: "Metaphor",
              artist: "Han Hee Jung & Kim Sawol",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708752/18_rd1jof.jpg",
              title: "No One Told Me Why",
              artist: "ALEPH",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708752/19_egpsca.jpg",
              title: "Night of the Living You",
              artist: "THORNAPPLE",
          },        
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mvn3rAN9pEFPcmFvGwngGZ&si=yeUl0FKhoMszD6Lo"
      },
      {
        label: 'Blue winter sky', 
        value: 'playlist5',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708757/background_qyri53.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708755/1_xwjfoa.jpg",
              title: "BENTLEY 1.5",
              artist: "YUMDDA",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708755/2_s5nbih.jpg",
              title: "Used To Be",
              artist: "pH-1",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708756/3_sawpjf.jpg",
              title: "sydney, hongkong (feat. THAMA)",
              artist: "Kid Milli",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708756/4_bjowfs.jpg",
              title: "The End of The Winter (feat. Fana)",
              artist: "Way Ched & unofficialboyy",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708756/5_toqxbg.jpg",
              title: "Money Talk (feat. NO:EL & Hash Swan)",
              artist: "Primeboi",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708756/6_xbmgg6.jpg",
              title: "KOCEAN",
              artist: "Kid Milli & Jvcki Wai",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708757/7_jgviok.jpg",
              title: "Gone",
              artist: "JUSTHIS",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mkH-TyKOoShuP74ap0yEZc&si=fL8NkbjrZEnZwbR0"
      },
      {
        label: 'Warm worries', 
        value: 'playlist6',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708759/background_ruovpq.webp",
        songs: [
          {
            src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708757/1_azwb2m.jpg",
            title: "Anxiety",
            artist: "Brown Tigger",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708758/2_ovzem9.jpg",
              title: "City Life",
              artist: "GroovyRoom & Leellamarz",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708758/3_j3kqks.jpg",
              title: "wing (feat. Alt)",
              artist: "Skyminhyuk",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708758/4_s2n61r.jpg",
              title: "변하지 않아 (feat. HAON & CHANGMO)",
              artist: "Rohann",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708758/5_a97yzt.jpg",
              title: "Fall",
              artist: "Ash Island",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nXSuvgWn2XioV8Im5m0Onp&si=Jr5r4YO4UeTIZRwE"
      },
      {
        label: 'Blossoms Blowing', 
        value: 'playlist7',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708762/background_tsvryw.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708759/1_takp3n.jpg",
              title: "Vineyard",
              artist: "OOHYO",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708759/2_i9v5h1.jpg",
              title: "Papercut (Kor.)",
              artist: "OOHYO",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708760/3_s6cbll.jpg",
              title: "Lovesick",
              artist: "Maroon 5",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708760/4_v634lv.jpg",
              title: "Kill Me",
              artist: "Bosudongcooler",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708760/5_p46mzd.jpg",
              title: "Run Away! (feat. Broccoli, you too?)",
              artist: "CHOILB",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708760/6_jygfhf.jpg",
              title: "Model",
              artist: "ADOY",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708761/7_pxv9qn.jpg",
              title: "hello!",
              artist: "ROLE MODEL",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708761/8_j4yisv.jpg",
              title: "yours",
              artist: "Damons year",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708761/9_trcqtc.jpg",
              title: "Day 1 ◑",
              artist: "HONNE",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mTarIuVtdU8tlafa2_VnPH&si=km2mdvAZ_UBjT-3q"
      },
      {
        label: 'Night city drive', 
        value: 'playlist8',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708765/background_vqtzyo.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708762/1_pwa01b.jpg",
              title: "In Your Eyes",
              artist: "The Weeknd",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708762/2_g78h16.jpg",
              title: "Blinding Lights",
              artist: "The Weeknd",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708763/3_koayig.jpg",
              title: "TV Star (feat. Kim Seungmin)",
              artist: "GIRIBOY(기리보이)",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708763/4_zuk3ls.jpg",
              title: "Outside (feat. Ellie Goulding)",
              artist: "Calvin Harris",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708763/5_qetbej.jpg",
              title: "Lee",
              artist: "MOGUAI & Zonderling",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708763/6_dtcyha.jpg",
              title: "Nevada (feat. Cozi Zuehlsdorff)",
              artist: "Vicetone",
          },        
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708764/7_bxcqd6.jpg",
              title: "Bad Habits",
              artist: "Ed Sheeran",
          }, 
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708764/8_tg0az7.jpg",
              title: "Titanium (feat. Sia)",
              artist: "David Guetta",
          }, 
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708764/9_jv9pdy.jpg",
              title: "Adventure of a Lifetime",
              artist: "Coldplay",
          }, 
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_m1rVe_ooeIJBCzRVwnrycm&si=4-VeZFbbxdWoBqOj"
      },
      {
        label: 'Flow surfing', 
        value: 'playlist9',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708769/background_rw1zax.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708765/1_temxax.jpg",
              title: "AKIRA (Feat. Gaeko)",
              artist: "Nucksal",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708767/2_pna6vk.jpg",
              title: "I did it (Feat. Crush)",
              artist: "BewhY",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708767/3_vvzgt5.jpg",
              title: "Wake up!",
              artist: "lIlBOI",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708767/4_lncqnq.jpg",
              title: "boy (Feat. lIlBOI)",
              artist: "GIRIBOY",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708768/5_rkb4po.jpg",
              title: "StrOngerrr (feat. Loco & Mino)",
              artist: "CODE KUNST",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708768/6_syvugf.jpg",
              title: "어린 왕자 The Little Prince (Prod. Godic)",
              artist: "HAON & PULLIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708768/7_s5hb5c.jpg",
              title: "Jeon-Yum (Til Infinity)",
              artist: "DON MALIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708768/8_pinqhp.jpg",
              title: "No Tomorrow (Feat. lIlBOI, nafla)",
              artist: "GIRIBOY",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708769/9_px6q6t.jpg",
              title: "노땡큐 (No Thanxxx) ft. MINO, SIMON DOMINIC, THE QUIETT",
              artist: "EPIK HIGH",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708765/10_zlekkp.jpg",
              title: "GO HIGH (Prod. by CODE KUNST)",
              artist: "Lee Young Ji",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708765/11_yzqqdc.jpg",
              title: "Uhhl-Ma-Nya",
              artist: "DON MALIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708766/12_pwsg2i.jpg",
              title: "Gott-N-Ott",
              artist: "DON MALIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708766/13_cf99wv.jpg",
              title: "Not an ambition",
              artist: "DON MALIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708766/14_cqbbjt.jpg",
              title: "Chingchingching (feat. DeVita)",
              artist: "DON MALIK",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708767/15_yvx5du.jpg",
              title: "Be a pro",
              artist: "DON MALIK",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_kev9GGiQNREKoIfCQudKVS&si=o7jlgwOoQ_gHKRSP"
      },
      {
        label: 'Exploding vocal, sparking guitar', 
        value: 'playlist10',
        src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708738/background_vy5pvd.webp",
        songs: [
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708728/1_kderfc.jpg",
              title: "Uprising",
              artist: "Muse",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708731/2_xr8ouj.jpg",
              title: "Ready For Something",
              artist: "The Amazons",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708734/3_pg9mw8.jpg",
              title: "Running In Circles",
              artist: "Dead Poet Society",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708736/4_qcpkil.jpg",
              title: "Song 2",
              artist: "Blur",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708736/5_uek2e2.jpg",
              title: "Don't Miss",
              artist: "The Blue Stones",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708736/6_xxg0n9.jpg",
              title: "Well Wasted",
              artist: "Black Pistol Fire",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708737/7_nr9n6p.jpg",
              title: "Little Something",
              artist: "The Amazons",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708737/8_bjdx5l.jpg",
              title: "In My Mind",
              artist: "The Amazons",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708737/9_p52kyq.jpg",
              title: "Black And Gold",
              artist: "Dead Poet Society",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708728/10_whnc9j.jpg",
              title: "Typhoons",
              artist: "Royal Blood",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708728/11_nrz0lv.jpg",
              title: "Itch",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708728/12_aglfvm.jpg",
              title: "Oblivion",
              artist: "Royal Blood",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708729/13_swlduo.jpg",
              title: "BABY SAID",
              artist: "Måneskin",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708729/14_x2awk5.jpg",
              title: "Supermassive Black Hole",
              artist: "Muse",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708729/15_sbkafc.jpg",
              title: "Forever & Ever More",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708730/16_txdhrm.jpg",
              title: "Where Are You Now?",
              artist: "Royal Blood",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708730/17_t7ercl.jpg",
              title: "How Did We Get So Dark?",
              artist: "Royal Blood",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708730/18_pgekjd.jpg",
              title: "Freeze Me",
              artist: "Death From Above 1979",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708730/19_fxxzfk.jpg",
              title: "Blastoffff",
              artist: "Joywave",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708731/20_vqrmrf.jpg",
              title: "Doubt It",
              artist: "The Amazons",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708731/21_fuct5e.jpg",
              title: "Spirit",
              artist: "The Blue Stones",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708732/22_jsc2dq.jpg",
              title: "HONEY (ARE U COMING?)",
              artist: "Måneskin",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708732/23_rd2hhd.jpg",
              title: "HURT",
              artist: "Dead Poet Society",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708732/24_seh4yi.jpg",
              title: "Nowhere",
              artist: "Friday Pilots Club",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708732/25_mmujbl.jpg",
              title: "Dead Weight",
              artist: "BRKN LOVE",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708733/26_wdhiug.jpg",
              title: "Wayne",
              artist: "Des Rocs",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708733/27_u1rkho.jpg",
              title: "Trading Punches",
              artist: "Friday Pilots Club",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708733/28_c26czu.jpg",
              title: "Let Me Out",
              artist: "The Blue Stones",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708734/29_pxiu8f.jpg",
              title: "Something To Hide",
              artist: "grandson",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708734/30_qzv2d0.jpg",
              title: "Smells Like Teen Spirit",
              artist: "Nirvana",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708734/31_ytkuxb.jpg",
              title: "Is Everybody Going Crazy?",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708735/32_yrchfl.jpg",
              title: "Touch Fluffy Tail",
              artist: "Ken Ashcorp",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708735/33_npgpif.jpg",
              title: "Blood // Water",
              artist: "grandson",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708735/34_w7hl3b.jpg",
              title: "Thank God I'm Not You",
              artist: "HIMALAYAS",
          },
          {
              src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708736/35_syglma.jpg",
              title: "Drones",
              artist: "grandson",
          },        
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_lpm4ldTf-_aDtoGX28W5AT&si=uOMDd6cBX-4V4xfR"
      }
    ],
  }

  const audibleMemoriesProps = {
    titleText: "Audible Memories",
    descriptionText: "Precious memories stored in the best music",
    songs:  [
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708709/music_lqxbvs.jpg",
        songLink:"https://music.youtube.com/watch?v=E6NLFY7STIg&si=w24kwNAAfkU59bJB",
        songTitle: "Hold On (feat. Mapei)",
        songArtist: "OLSSON",
        description: "Trip to Netherlands to participate in THIMUN was an exciting adventure, feeling the other side of the world and expanding my horizon. The thrill and anticipation of visiting a new place is absorbed in this song.",
        memoryName: "The Hague international Model United Nation (THIMUN)",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708708/1_fxpcu8.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708708/2_sn8eah.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708708/3_kqyj4h.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708708/4_fm00eg.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708713/music_khjhro.jpg",
        songLink:"https://music.youtube.com/watch?v=HmKgFJGn46Q&si=9nrhbjlvLtZwrJUT",
        songTitle: "Can I Love ? , Meego) (feat. youra)",
        songArtist: "Cosmic Boy",
        description: "Coming to Singapore all alone, not knowing anyone or anything. The excitement, worries, and lonliness were all accompanied by this song.",
        memoryName: "First time in Singapore",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708712/1_z4tcel.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708712/2_rtyodl.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708713/3_autvxj.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708713/4_ali7ai.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708714/music_b1kriu.jpg",
        songLink:"https://music.youtube.com/watch?v=M4RPilz6WlY&si=AEAZZkAYXaUEh5a7",
        songTitle: "For Elise",
        songArtist: "Saint Motel",
        description: "Starting a new chapter in NTU, everywhere I went felt new and interesting. My new journey in NTU began with this song.",
        memoryName: "New chapter in NTU",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708713/1_mnksnl.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708714/2_u2lsdo.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708714/3_v9ob4r.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708714/4_vosv6g.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708716/music_qct4sf.jpg",
        songLink:"https://music.youtube.com/watch?v=tfV3t2YtqSk&si=FzYJ_0m_0AE76a4h",
        songTitle: "Preach",
        songArtist: "Saint Motel",
        description: "Studying is important, but how can I just sit around and study all the time? I explored around Singapore with this song.",
        memoryName: "Exploring Singapore",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708715/1_yk4zan.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708715/2_pvhdk4.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708715/3_ssw4em.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708716/4_if4tsx.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708717/music_okd959.jpg",
        songLink:"https://music.youtube.com/watch?v=jKmib7okBdY&si=lr93PC7-sKgEs9ts",
        songTitle: "EVERYTHING (feat. CHANGMO, Coogie, ASH ISLAND & BIBI)",
        songArtist: "Way Ched",
        description: "Settling into my new life, things that were once new and difficult turned to daily life. I kept on with my life with this song.",
        memoryName: "Settling in",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708716/1_vmchqg.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708716/2_almulr.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708717/3_g0enzx.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708717/4_eks7dl.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708719/music_e161tu.jpg",
        songLink:"https://music.youtube.com/watch?v=f3taMXkqI5g&si=lyvs7P_0gpyAoBvj",
        songTitle: "Crazy AF",
        songArtist: "In Real Life",
        description: "You can't miss out the most important responsibility of student. My studies were accompanied by this song.",
        memoryName: "Studying",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708718/1_nwcjkg.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708718/2_mkafuu.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708718/3_wuf2ku.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708718/4_enq4zc.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708720/music_anr6fq.jpg",
        songLink:"https://music.youtube.com/watch?v=FB2GuBS9Ya0&si=eHLdD_eiqLqstwWO",
        songTitle: "End of the World (feat. GSoul)",
        songArtist: "EPIK HIGH",
        description: "Part-time job as a Hyundai translator position was my first working experience. This unique and different experience was with this song.",
        memoryName: "Hyundai part-time translator",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708719/1_oqh6ec.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708719/2_t6polq.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708720/3_zc4wlg.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708720/4_liicst.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708722/music_ip4fdx.jpg",
        songLink:"https://music.youtube.com/watch?v=hp1UqZJKvFg&si=gDspv-ZbGMCBLJwb",
        songTitle: "sydney, hongkong (feat. THAMA )",
        songArtist: "Kid Milli",
        description: "I thought discharge from national service would be the happiest thing in my life. As it approached, however, I felt ambivalent between excited and afraid. This bittersweet memory stays with this song.",
        memoryName: "Discharge",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708720/1_uvultu.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708721/2_xvwhsl.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708721/3_zto0am.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708721/4_ugwweo.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708723/music_c6joln.jpg",
        songLink:"https://music.youtube.com/watch?v=2vPDIBrTb-M&si=9QpZ6A1Bd_nnh2ap",
        songTitle: "BORED",
        songArtist: "INJI",
        description: "Returning to school after 18 months, I dived straight to internship. The hectic process of readjusting and catching up mixed well with this bouncy song.",
        memoryName: "Internship",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708722/1_i4e4vy.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708722/2_mqctbl.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708722/3_lnnwu6.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708723/4_sjr5ya.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708710/music_yhpssk.jpg",
        songLink:"https://music.youtube.com/watch?v=lgjudfWgB24&si=IYqL58CTOQERT8DW",
        songTitle: "0310",
        songArtist: "Yerin Baek",
        description: "You don't know if you are lonley and tired unless you get out of that status. The comfort and happiness from my parents visitng Singapore, along with sadness that they can stay for only so long, is molten in the bright sad melodty of this song.",
        memoryName: "Family in Singapore",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708709/1_quae8p.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708709/2_rvkpe5.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708710/3_rvkzho.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708710/4_z8rugp.jpg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708712/music_swiqof.jpg",
        songLink:"https://music.youtube.com/watch?v=Cq6OejPKA8k&si=m0WpsBEWAzBW-Wmq",
        songTitle: "Away (feat. Taylor & YANU)",
        songArtist: "LILBOI",
        description: "Trying something new is always exciting, yet worrying. The anticipation and fear of starting a new journey in SNU was met with this song.",
        memoryName: "Seoul Natioanl University",
        photos: [
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708710/1_kg33gc.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708711/2_guujcf.jpg", width: 1920, height: 1080 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708711/3_q9a9nz.jpg", width: 2179, height: 2179 },
          { src: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708711/4_mc5cib.jpg", width: 1536, height: 1536 },
        ]
      },
    ],
  }
  
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <DiscoHeader/>
      <RecordPlayer recordPlayerProps={recordPlayerProps}/>
      <PlaylistShowcase playlistShowcaseProps={playlistShowcaseProps} />
      <AudibleMemories audibleMemoriesProps={audibleMemoriesProps} />
      <DiscoFooter/>
    </div>
  )
}