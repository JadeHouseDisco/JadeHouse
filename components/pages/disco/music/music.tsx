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
        description: "If flowers bloom with sound, it would sound like this. Anything Anywhere you go and anything you do feels special with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/1.jpg?raw=true"
      },
      {
        title: "Crave You (Feat. Giselle)",
        artist: "Flight Facilities",
        album: "Down To Earth",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "Simple melody can hold so much more than simple words. This song is what loneliness would sound like.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/2.jpg?raw=true"
      },
      {
        title: "In Our Prime",
        artist: "The Black Keys",
        album: "Turn Blue",
        link: "https://music.youtube.com/watch?v=aHwGucd6z5w&si=HTnDg8mHJ2uoy5sc",
        description: "This ordinary day that I would so painfully miss. It always hurts to look back, regardless of whether it was good or bad memories.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/3.jpg?raw=true"
      },
      {
        title: "White Lies",
        artist: "Max Frost",
        album: "White Lies",
        link: "https://music.youtube.com/watch?v=WK8s7KTMbbw&si=73Xq6daGjY6QJxh4",
        description: "If you think you can't dance with sadness, this song tells you otherwise. Play this song, and dance the sadness away.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/4.jpg?raw=true"
      },
      {
        title: "Lone Digger",
        artist: "Caravan Palace",
        album: "<I°_°I>",
        link: "https://music.youtube.com/watch?v=36A-ZjOpui8&si=tVl0LYhN0_UI_hpO",
        description: "Time to swing out of your ordinary life and feel life to our skins. In other words, its time to get up and let go.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/5.jpg?raw=true"
      },
      {
        title: "Cry Babay",
        artist: "The Neighbourhood",
        album: "Wiped Out!",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "This song sounds like a grey cloudy sky that is about to pour down rain. How is this song holding down so much sorrow? It only shows bitter, sad, and sweet smiles.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/6.jpg?raw=true"
      },
      {
        title: "Kazino",
        artist: "BIBI",
        album: "Kazino",
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8",
        description: "BIBI's voice drags you deep into an endless hole, almost feeling like an addiction. Falling and rolling, deeper and deeper we go.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/7.jpg?raw=true"
      },
      {
        title: "High Noon",
        artist: "THORNAPPLE",
        album: "Capital Disease",
        link: "https://music.youtube.com/watch?v=dRegKRl-V_c&si=NlbI_64OoA4ffaSU",
        description: "Powerful energy and emotions exploding with vocal and guitar. Most vibrant and beautiful raving.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/8.jpg?raw=true"
      },
      {
        title: "Let Me Out",
        artist: "The Blue Stones",
        album: "Pretty Monster",
        link: "https://music.youtube.com/watch?v=GRijQiArYKc&si=ZmEwf77UcXQHSlS7",
        description: "Sometimes in life, you need to run away screaming your inner self. This song won't leave you sitting.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/9.jpg?raw=true"
      },
      {
        title: "El Mañana",
        artist: "Gorillaz",
        album: "Demon Days",
        link: "https://music.youtube.com/watch?v=vJrbeHQxPTA&si=MB-6eVZIGkrjMWda",
        description: "Gorillaz has many famous songs, but I don't understand why this one isn't one of them. This song introduces emptiness to your ears. No song ever felt so void.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/10.jpg?raw=true"
      },
      {
        title: "Wings",
        artist: "Mot",
        album: "Non-Linear",
        link: "https://music.youtube.com/watch?v=x40WEtm3uBk&si=nl8dnNN9CNKegJ1d",
        description: "Spiralling down towards the inevitable, reminiscing the good days. This song will accompany you till the end.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/11.jpg?raw=true"
      },
      {
        title: "마음이 그래",
        artist: "O.O.O",
        album: "사랑의 단상 Chapter 5: The Letter From Nowhere",
        link: "https://music.youtube.com/watch?v=meewe0gU8sQ&si=cW4m4nR-d3FRipfP",
        description: "Any love is beyond reason. No matter how much you resist it, your heart is always faster. O.O.O sings about this in the most relaxing way.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/12.jpg?raw=true"
      },
      {
        title: "Tidal Waves",
        artist: "Portugal. The Man",
        album: "Woodstock",
        link: "https://music.youtube.com/watch?v=wClC9RCF0g0&si=PaA_h5PFwjZlkTBn",
        description: "We all live with blurring memories, feelings, faces. But at times, they come back to you like tidal waves.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/13.jpg?raw=true"
      },
      {
        title: "Quitting time",
        artist: "CHEEZE",
        album: "Plain",
        link: "https://music.youtube.com/watch?v=dbCvrxLX5qA&si=mQaQY432dDLlLGvX",
        description: "Walking back home, watching the sun go down, surrounded by so many people yet still all alone in this world. This song tells you that it is ok to be sad and lonely.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/14.jpg?raw=true"
      },
      {
        title: "PIZZA",
        artist: "OOHYO",
        album: "PIZZA",
        link: "https://music.youtube.com/watch?v=1MJ6dcXXjhA&si=pS5emwXIQXgrSmsk",
        description: "You would never expect yourself to be swayed so much by such simple text messages. However, if you are, just remember that even pizza sucks without the person you are thinking of.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/15.jpg?raw=true"
      },
      {
        title: "PARACHUTE (feat. OHHYUK & Dok2",
        artist: "CODE KUNST",
        album: "MUGGLES' MANSION",
        link: "https://music.youtube.com/watch?v=F8W7snOKog0&si=l0poPBEbvWrfBEIk",
        description: "This song goes for all the youth struggling to climb up to their dreams. Your unwavering focus shall get you high. Even if you fall, this song opens up a parachute for you to try again.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/16.jpg?raw=true"
      },
      {
        title: "This Head I Hold",
        artist: "Electric Guest",
        album: "This Head I Hold",
        link: "https://music.youtube.com/watch?v=0iJDn8Ma3a0&si=xTPbrlVkq9YOW5AG",
        description: "Too much thoughts, worries, anxieties, sadness makes your head heavy. Leave it all behind and run forward with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/17.jpg?raw=true"
      },
      {
        title: "Blurry feat. DBO (prod by. PEEJAY)",
        artist: "Beenzino",
        album: "Blurry",
        link: "https://music.youtube.com/watch?v=ZCeoXkvME3I&si=KmVaswUOu_Bbcwxq",
        description: "You can't run away from reality, but you can seek shelter in this song. Float away from life for just a little with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/18.jpg?raw=true"
      },
      {
        title: "Goyeol",
        artist: "dosii",
        album: "dosii",
        link: "https://music.youtube.com/watch?v=42x9MeuxDuk&si=0jMKt0ctu-uUCMxG",
        description: "Sleepless night with too much thoughts in my head. Might as well enjoy the silence of night with the company of this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/19.jpg?raw=true"
      },
      {
        title: "불면증 (feat. Bobby Kim)",
        artist: "Dynamicduo",
        album: "Taxi Driver",
        link: "https://music.youtube.com/watch?v=UEbPNjL22gE&si=GDriymttPWQmjmuz",
        description: "Classic of Korean HipHop that talks about unchanging worries. May the heavy burden of yours be just a little less overwhelming with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/20.jpg?raw=true"
      },
      {
        title: "Every Night My Teeth Are Falling Out",
        artist: "The Anlters",
        album: "Burst Apart",
        link: "https://music.youtube.com/watch?v=0h07CYPZQ3E&si=1ES2Blf4_cGPireD",
        description: "Creeping thoughts in the the night comes with a sound. They flourish and fill your imaginations with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/21.jpg?raw=true"
      },
      {
        title: "Mama Lisa",
        artist: "Swervy",
        album: "Undercover Angel",
        link: "https://music.youtube.com/watch?v=dPSG8nw7lOc&si=ffTFxzUyDliQ8fNT",
        description: "Remember what they said about you? Watch me now.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/22.jpg?raw=true"
      },
      {
        title: "Smells Like Teen Spirit",
        artist: "Nirvana",
        album: "Nevermind",
        link: "https://music.youtube.com/watch?v=ljUtuoFt-8c&si=uS7rPGahIfVyetmZ",
        description: "Legendary song in rock, even after all this time.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/23.jpg?raw=true"
      },
      {
        title: "Rollercoaster (feat. Cho Wonseon)",
        artist: "Dok2",
        album: "Reborn",
        link: "https://music.youtube.com/watch?v=2F49L5W3lOU&si=8-ePGQhEgmmA3soH",
        description: "So many obstacles and hardship, life is truly a crazy rollercoaster. May this song give you courage to ride through it.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/24.jpg?raw=true"
      },
      {
        title: "Snap Out Of It",
        artist: "Artic Monekys",
        album: "AM",
        link: "https://music.youtube.com/watch?v=yfrEMQgBc2Y&si=aIIZExidBCfjFDol",
        description: "Snap out of life and move with style. This song gives you a smooth refresh to your life.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/25.jpg?raw=true"
      },
      {
        title: "PINK!",
        artist: "youra",
        album: "GAUSSIAN",
        link: "https://music.youtube.com/watch?v=TXRyn0rc4-I&si=o7qoSsfXhhuodCya",
        description: "When you are about to lose yourself, lose yourself to this song instead. Empty streets with lamplight never felt more special.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/26.jpg?raw=true"
      },
      {
        title: "AIYA (feat.Beenzino)",
        artist: "CHANGMO",
        album: "DBSG 3",
        link: "https://music.youtube.com/watch?v=Ds0vwgwxXRY&si=LIkQOpFJQ2ypIZkN",
        description: "Success, anger, and accomplishment in one song. Watch their gaze change with this song.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/27.jpg?raw=true"
      },
      {
        title: "instagram",
        artist: "DEAN",
        album: "instagram",
        link: "https://music.youtube.com/watch?v=lq3NLUN8DDc&si=e5829JdsYwpk7bUN",
        description: "Can you really be happy nowadays? This song contemplates with you the true meaning of happiness.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/28.jpg?raw=true"
      },
      {
        title: "Song 2",
        artist: "Blur",
        album: "Blur",
        link: "https://music.youtube.com/watch?v=SQrKCytWbj8&si=KhH9aGI1Hs3EH-uK",
        description: "Another classic of rock. This song lives through time.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/29.jpg?raw=true"
      },
      {
        title: "0310",
        artist: "Yerin Baek",
        album: "Every letter I sent you.",
        link: "https://music.youtube.com/watch?v=lgjudfWgB24&si=RhErNg7nC9LIfJLW",
        description: "Slow warm day can be beautiful yet sad. This song shows you how such irony is possible.",
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/30.jpg?raw=true"
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
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/1.jpg?raw=true",
              title: "Sad You, Stil Fine",
              artist: "Fromm",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/2.jpg?raw=true",
              title: "Hold Me Like It's Forever",
              artist: "Fromm & Car, the garden",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/3.jpg?raw=true",
              title: "Bad Apple",
              artist: "Sailor Honeymoon",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/4.jpg?raw=true",
              title: "A Day of Mercury",
              artist: "THORNAPPLE",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/5.jpg?raw=true",
              title: "More (feat. GIRIBOY)",
              artist: "youra",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/6.jpg?raw=true",
              title: "HIGH (feat. Rachel Lim)",
              artist: "JIDA",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/7.jpg?raw=true",
              title: "Nevermind",
              artist: "Dennis Lioyd",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/8.jpg?raw=true",
              title: "Islands",
              artist: "The xx",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/9.jpg?raw=true",
              title: "Noise Pollution [Version A, Vocal up Mix 1.3] (feat. Mary Elizabeth Winstead & Zoe Manville",
              artist: "Portugal. The Man",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/10.jpg?raw=true",
              title: "Lost 2 (feat. Sunwoojunga)",
              artist: "Car, the garden",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/11.jpg?raw=true",
              title: "Whiskey n Whiskey",
              artist: "Park Soeun",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/12.jpg?raw=true",
              title: "Youth",
              artist: "Daughter",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/13.jpg?raw=true",
              title: "Caffeine",
              artist: "Mot",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist1/14.jpg?raw=true",
              title: "Everything to Me",
              artist: "Shin Hae Gyeong",
          },
        ],
        link: 'https://music.youtube.com/playlist?list=PLADefd6IIr_n5aIa_u8M_d9PD6XQKXqZ6&si=dhjziUpfiTovhkul'
      },
      {
        label: 'Lamplight Starlight', 
        value: 'playlist2',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/background.webp?raw=true",
        songs: [
          {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/1.jpg?raw=true",
            title: "So life goes on",
            artist: "Heo Hoy Kyung",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/2.jpg?raw=true",
              title: "By bye my blue",
              artist: "Yerin Baek",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/3.jpg?raw=true",
              title: "Let You Down",
              artist: "Helb Glise",
          },
          {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/4.jpg?raw=true",
            title: "sleep tight",
            artist: "E SENS",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/5.jpg?raw=true",
              title: "No One Told Me Why",
              artist: "ALEPH",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/6.jpg?raw=true",
              title: "Romance",
              artist: "CHEEZE",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/7.jpg?raw=true",
              title: "Exile Vilify",
              artist: "The National",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/8.jpg?raw=true",
              title: "TT",
              artist: "Kim Sawol",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/9.jpg?raw=true",
              title: "Key",
              artist: "Kim Sawol",
          },
          {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/10.jpg?raw=true",
            title: "Hounds",
            artist: "The Antlers",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/11.jpg?raw=true",
              title: "Rainbow (Prod.IDeal) (feat.YDG)",
              artist: "Bassagong",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/12.jpg?raw=true",
              title: "flight",
              artist: "E SENS",
          },
          {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/13.jpg?raw=true",
            title: "Big Jet Plane",
            artist: "Angus & Gulia Stone",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/14.jpg?raw=true",
              title: "Rolled Together",
              artist: "The Antlers",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/15.jpg?raw=true",
              title: "Blind (feat. Rachel Lim)",
              artist: "JIDA",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/16.jpg?raw=true",
              title: "Over the Moon",
              artist: "The Marias",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/17.jpg?raw=true",
              title: "bath",
              artist: "offonoff",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/18.jpg?raw=true",
              title: "Fly Me to the Moon",
              artist: "The Macarons Project",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/19.jpg?raw=true",
              title: "Home is Far Away (feat. OH HYUK)",
              artist: "EPIK HIGH",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist2/20.jpg?raw=true",
              title: "Closely Far Away",
              artist: "Car, the Garden",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nqZexdl2AU09p9the09Khq&si=CIQRVCM4Ry-8aFYG"
      },
      {
        label: 'Warm orange sunlight', 
        value: 'playlist3',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/1.jpg?raw=true",
              title: "Watermelon Sugar",
              artist: "Harry Styles",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/2.jpg?raw=true",
              title: "Day 1",
              artist: "HONNE",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/3.jpg?raw=true",
              title: "Mouse",
              artist: "Lee go do",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/4.jpg?raw=true",
              title: "As it Was",
              artist: "Harry Styles",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/5.jpg?raw=true",
              title: "0310",
              artist: "Yerin Baek",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/6.jpg?raw=true",
              title: "Pluto",
              artist: "Chamsom",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/7.jpg?raw=true",
              title: "Light Chaser",
              artist: "JISOKURY",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/8.jpg?raw=true",
              title: "Painkiller",
              artist: "Ruel",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/9.jpg?raw=true",
              title: "Good Night Good Dream",
              artist: "Nerd Connection",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/10.jpg?raw=true",
              title: "In My City of Seoul",
              artist: "The Black Skirts",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/11.jpg?raw=true",
              title: "Redbone",
              artist: "Childish Gambino",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/12.jpg?raw=true",
              title: "West Coast Love",
              artist: "Emotional Oranges",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/13.jpg?raw=true",
              title: "Love is All",
              artist: "The Black Skirts",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/14.jpg?raw=true",
              title: "Sleep",
              artist: "Night Off",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/15.jpg?raw=true",
              title: "Sunset (feat. Stell Jang)",
              artist: "Pleyn",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/16.jpg?raw=true",
              title: "Not Worth It",
              artist: "Emotional Oranges",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist3/17.jpg?raw=true",
              title: "Imagination",
              artist: "Foster The People",
          },        
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nEvrLpboYz_j-tGXyRV_EB&si=KgBTjNRwZi7B0GqG"
      },
      {
        label: 'Pale flower fields', 
        value: 'playlist4',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/1.jpg?raw=true",
              title: "Stolen Dance",
              artist: "Milky Chance",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/2.jpg?raw=true",
              title: "Scent",
              artist: "캐스커",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/3.jpg?raw=true",
              title: "When spring comes (Piano ver.)",
              artist: "Kim Yun A",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/4.jpg?raw=true",
              title: "Most Ordinary Existence",
              artist: "Sister's Barbershop",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/5.jpg?raw=true",
              title: "Bedside",
              artist: "Kim Sawol",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/6.jpg?raw=true",
              title: "Exile Vilify",
              artist: "The National",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/7.jpg?raw=true",
              title: "Don't Panic",
              artist: "Coldplay",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/8.jpg?raw=true",
              title: "Are You Turning into a Devil?",
              artist: "Sister's Barbershop",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/9.jpg?raw=true",
              title: "Angeles",
              artist: "Eliott Smith",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/10.jpg?raw=true",
              title: "잔혹한 여행",
              artist: "한희정",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/11.jpg?raw=true",
              title: "Plankton",
              artist: "THORNAPPLE",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/12.jpg?raw=true",
              title: "No Widows",
              artist: "The Antlers",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/13.jpg?raw=true",
              title: "Cigarette (feat. Tablo & MISO)",
              artist: "offonoff",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/14.jpg?raw=true",
              title: "Aspiring Boy",
              artist: "전자양",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/15.jpg?raw=true",
              title: "I didn't know yet (feat. 하림 On Harmonica)",
              artist: "Lee Juck",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/16.jpg?raw=true",
              title: "Never Know",
              artist: "Jack Johnson",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/17.jpg?raw=true",
              title: "Metaphor",
              artist: "Han Hee Jung & Kim Sawol",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/18.jpg?raw=true",
              title: "No One Told Me Why",
              artist: "ALEPH",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist4/19.jpg?raw=true",
              title: "Night of the Living You",
              artist: "THORNAPPLE",
          },        
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mvn3rAN9pEFPcmFvGwngGZ&si=yeUl0FKhoMszD6Lo"
      },
      {
        label: 'Blue winter sky', 
        value: 'playlist5',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/1.jpg?raw=true",
              title: "BENTLEY 1.5",
              artist: "YUMDDA",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/2.jpg?raw=true",
              title: "Used To Be",
              artist: "pH-1",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/3.jpg?raw=true",
              title: "sydney, hongkong (feat. THAMA)",
              artist: "Kid Milli",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/4.jpg?raw=true",
              title: "The End of The Winter (feat. Fana)",
              artist: "Way Ched & unofficialboyy",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/5.jpg?raw=true",
              title: "Money Talk (feat. NO:EL & Hash Swan)",
              artist: "Primeboi",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/6.jpg?raw=true",
              title: "KOCEAN",
              artist: "Kid Milli & Jvcki Wai",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist5/7.jpg?raw=true",
              title: "Gone",
              artist: "JUSTHIS",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mkH-TyKOoShuP74ap0yEZc&si=fL8NkbjrZEnZwbR0"
      },
      {
        label: 'Warm worries', 
        value: 'playlist6',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/background.webp?raw=true",
        songs: [
          {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/1.jpg?raw=true",
            title: "Anxiety",
            artist: "Brown Tigger",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/2.jpg?raw=true",
              title: "City Life",
              artist: "GroovyRoom & Leellamarz",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/3.jpg?raw=true",
              title: "wing (feat. Alt)",
              artist: "Skyminhyuk",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/4.jpg?raw=true",
              title: "변하지 않아 (feat. HAON & CHANGMO)",
              artist: "Rohann",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist6/5.jpg?raw=true",
              title: "Fall",
              artist: "Ash Island",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_nXSuvgWn2XioV8Im5m0Onp&si=Jr5r4YO4UeTIZRwE"
      },
      {
        label: 'Blossoms Blowing', 
        value: 'playlist7',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/1.jpg?raw=true",
              title: "Vineyard",
              artist: "OOHYO",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/2.jpg?raw=true",
              title: "Papercut (Kor.)",
              artist: "OOHYO",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/3.jpg?raw=true",
              title: "Lovesick",
              artist: "Maroon 5",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/4.jpg?raw=true",
              title: "Kill Me",
              artist: "Bosudongcooler",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/5.jpg?raw=true",
              title: "Run Away! (feat. Broccoli, you too?)",
              artist: "CHOILB",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/6.jpg?raw=true",
              title: "Model",
              artist: "ADOY",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/7.jpg?raw=true",
              title: "hello!",
              artist: "ROLE MODEL",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/8.jpg?raw=true",
              title: "yours",
              artist: "Damons year",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist7/9.jpg?raw=true",
              title: "Day 1 ◑",
              artist: "HONNE",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_mTarIuVtdU8tlafa2_VnPH&si=km2mdvAZ_UBjT-3q"
      },
      {
        label: 'Night city drive', 
        value: 'playlist8',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/1.jpg?raw=true",
              title: "In Your Eyes",
              artist: "The Weeknd",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/2.jpg?raw=true",
              title: "Blinding Lights",
              artist: "The Weeknd",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/3.jpg?raw=true",
              title: "TV Star (feat. Kim Seungmin)",
              artist: "GIRIBOY(기리보이)",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/4.jpg?raw=true",
              title: "Outside (feat. Ellie Goulding)",
              artist: "Calvin Harris",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/5.jpg?raw=true",
              title: "Lee",
              artist: "MOGUAI & Zonderling",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/6.jpg?raw=true",
              title: "Nevada (feat. Cozi Zuehlsdorff)",
              artist: "Vicetone",
          },        
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/7.jpg?raw=true",
              title: "Bad Habits",
              artist: "Ed Sheeran",
          }, 
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/8.jpg?raw=true",
              title: "Titanium (feat. Sia)",
              artist: "David Guetta",
          }, 
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist8/9.jpg?raw=true",
              title: "Adventure of a Lifetime",
              artist: "Coldplay",
          }, 
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_m1rVe_ooeIJBCzRVwnrycm&si=4-VeZFbbxdWoBqOj"
      },
      {
        label: 'Flow surfing', 
        value: 'playlist9',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/1.jpg?raw=true",
              title: "AKIRA (Feat. Gaeko)",
              artist: "Nucksal",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/2.jpg?raw=true",
              title: "I did it (Feat. Crush)",
              artist: "BewhY",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/3.jpg?raw=true",
              title: "Wake up!",
              artist: "lIlBOI",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/4.jpg?raw=true",
              title: "boy (Feat. lIlBOI)",
              artist: "GIRIBOY",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/5.jpg?raw=true",
              title: "StrOngerrr (feat. Loco & Mino)",
              artist: "CODE KUNST",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/6.jpg?raw=true",
              title: "어린 왕자 The Little Prince (Prod. Godic)",
              artist: "HAON & PULLIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/7.jpg?raw=true",
              title: "Jeon-Yum (Til Infinity)",
              artist: "DON MALIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/8.jpg?raw=true",
              title: "No Tomorrow (Feat. lIlBOI, nafla)",
              artist: "GIRIBOY",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/9.jpg?raw=true",
              title: "노땡큐 (No Thanxxx) ft. MINO, SIMON DOMINIC, THE QUIETT",
              artist: "EPIK HIGH",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/10.jpg?raw=true",
              title: "GO HIGH (Prod. by CODE KUNST)",
              artist: "Lee Young Ji",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/11.jpg?raw=true",
              title: "Uhhl-Ma-Nya",
              artist: "DON MALIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/12.jpg?raw=true",
              title: "Gott-N-Ott",
              artist: "DON MALIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/13.jpg?raw=true",
              title: "Not an ambition",
              artist: "DON MALIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/14.jpg?raw=true",
              title: "Chingchingching (feat. DeVita)",
              artist: "DON MALIK",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist9/15.jpg?raw=true",
              title: "Be a pro",
              artist: "DON MALIK",
          },
        ],
        link: "https://music.youtube.com/playlist?list=PLADefd6IIr_kev9GGiQNREKoIfCQudKVS&si=o7jlgwOoQ_gHKRSP"
      },
      {
        label: 'Exploding vocal, sparking guitar', 
        value: 'playlist10',
        src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/background.webp?raw=true",
        songs: [
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/1.jpg?raw=true",
              title: "Uprising",
              artist: "Muse",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/2.jpg?raw=true",
              title: "Ready For Something",
              artist: "The Amazons",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/3.jpg?raw=true",
              title: "Running In Circles",
              artist: "Dead Poet Society",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/4.jpg?raw=true",
              title: "Song 2",
              artist: "Blur",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/5.jpg?raw=true",
              title: "Don't Miss",
              artist: "The Blue Stones",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/6.jpg?raw=true",
              title: "Well Wasted",
              artist: "Black Pistol Fire",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/7.jpg?raw=true",
              title: "Little Something",
              artist: "The Amazons",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/8.jpg?raw=true",
              title: "In My Mind",
              artist: "The Amazons",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/9.jpg?raw=true",
              title: "Black And Gold",
              artist: "Dead Poet Society",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/10.jpg?raw=true",
              title: "Typhoons",
              artist: "Royal Blood",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/11.jpg?raw=true",
              title: "Itch",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/12.jpg?raw=true",
              title: "Oblivion",
              artist: "Royal Blood",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/13.jpg?raw=true",
              title: "BABY SAID",
              artist: "Måneskin",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/14.jpg?raw=true",
              title: "Supermassive Black Hole",
              artist: "Muse",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/15.jpg?raw=true",
              title: "Forever & Ever More",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/16.jpg?raw=true",
              title: "Where Are You Now?",
              artist: "Royal Blood",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/17.jpg?raw=true",
              title: "How Did We Get So Dark?",
              artist: "Royal Blood",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/18.jpg?raw=true",
              title: "Freeze Me",
              artist: "Death From Above 1979",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/19.jpg?raw=true",
              title: "Blastoffff",
              artist: "Joywave",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/20.jpg?raw=true",
              title: "Doubt It",
              artist: "The Amazons",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/21.jpg?raw=true",
              title: "Spirit",
              artist: "The Blue Stones",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/22.jpg?raw=true",
              title: "HONEY (ARE U COMING?)",
              artist: "Måneskin",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/23.jpg?raw=true",
              title: "HURT",
              artist: "Dead Poet Society",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/24.jpg?raw=true",
              title: "Nowhere",
              artist: "Friday Pilots Club",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/25.jpg?raw=true",
              title: "Dead Weight",
              artist: "BRKN LOVE",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/26.jpg?raw=true",
              title: "Wayne",
              artist: "Des Rocs",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/27.jpg?raw=true",
              title: "Trading Punches",
              artist: "Friday Pilots Club",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/28.jpg?raw=true",
              title: "Let Me Out",
              artist: "The Blue Stones",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/29.jpg?raw=true",
              title: "Something To Hide",
              artist: "grandson",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/30.jpg?raw=true",
              title: "Smells Like Teen Spirit",
              artist: "Nirvana",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/31.jpg?raw=true",
              title: "Is Everybody Going Crazy?",
              artist: "Nothing But Thieves",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/32.jpg?raw=true",
              title: "Touch Fluffy Tail",
              artist: "Ken Ashcorp",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/33.jpg?raw=true",
              title: "Blood // Water",
              artist: "grandson",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/34.jpg?raw=true",
              title: "Thank God I'm Not You",
              artist: "HIMALAYAS",
          },
          {
              src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/playlist10/35.jpg?raw=true",
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
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory1/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=E6NLFY7STIg&si=w24kwNAAfkU59bJB",
        songTitle: "Hold On (feat. Mapei)",
        songArtist: "OLSSON",
        description: "Trip to Netherlands to participate in THIMUN was an exciting adventure, feeling the other side of the world and expanding my horizon. The thrill and anticipation of visiting a new place is absorbed in this song.",
        memoryName: "The Hague international Model United Nation (THIMUN)",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory1/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory1/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory1/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory1/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory2/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=HmKgFJGn46Q&si=9nrhbjlvLtZwrJUT",
        songTitle: "Can I Love ? , Meego) (feat. youra)",
        songArtist: "Cosmic Boy",
        description: "Coming to Singapore all alone, not knowing anyone or anything. The excitement, worries, and lonliness were all accompanied by this song.",
        memoryName: "First time in Singapore",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory2/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory2/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory2/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory2/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory3/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=M4RPilz6WlY&si=AEAZZkAYXaUEh5a7",
        songTitle: "For Elise",
        songArtist: "Saint Motel",
        description: "Starting a new chapter in NTU, everywhere I went felt new and interesting. My new journey in NTU began with this song.",
        memoryName: "New chapter in NTU",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory3/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory3/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory3/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory3/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory4/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=tfV3t2YtqSk&si=FzYJ_0m_0AE76a4h",
        songTitle: "Preach",
        songArtist: "Saint Motel",
        description: "Studying is important, but how can I just sit around and study all the time? I explored around Singapore with this song.",
        memoryName: "Exploring Singapore",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory4/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory4/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory4/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory4/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory5/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=jKmib7okBdY&si=lr93PC7-sKgEs9ts",
        songTitle: "EVERYTHING (feat. CHANGMO, Coogie, ASH ISLAND & BIBI)",
        songArtist: "Way Ched",
        description: "Settling into my new life, things that were once new and difficult turned to daily life. I kept on with my life with this song.",
        memoryName: "Settling in",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory5/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory5/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory5/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory5/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory6/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=f3taMXkqI5g&si=lyvs7P_0gpyAoBvj",
        songTitle: "Crazy AF",
        songArtist: "In Real Life",
        description: "You can't miss out the most important responsibility of student. My studies were accompanied by this song.",
        memoryName: "Studying",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory6/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory6/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory6/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory6/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory7/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=FB2GuBS9Ya0&si=eHLdD_eiqLqstwWO",
        songTitle: "End of the World (feat. GSoul)",
        songArtist: "EPIK HIGH",
        description: "Part-time job as a Hyundai translator position was my first working experience. This unique and different experience was with this song.",
        memoryName: "Hyundai part-time translator",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory7/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory7/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory7/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory7/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory8/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=hp1UqZJKvFg&si=gDspv-ZbGMCBLJwb",
        songTitle: "sydney, hongkong (feat. THAMA )",
        songArtist: "Kid Milli",
        description: "I thought discharge from national service would be the happiest thing in my life. As it approached, however, I felt ambivalent between excited and afraid. This bittersweet memory stays with this song.",
        memoryName: "Discharge",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory8/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory8/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory8/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory8/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory9/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=2vPDIBrTb-M&si=9QpZ6A1Bd_nnh2ap",
        songTitle: "BORED",
        songArtist: "INJI",
        description: "Returning to school after 18 months, I dived straight to internship. The hectic process of readjusting and catching up mixed well with this bouncy song.",
        memoryName: "Internship",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory9/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory9/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory9/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory9/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory10/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=lgjudfWgB24&si=IYqL58CTOQERT8DW",
        songTitle: "0310",
        songArtist: "Yerin Baek",
        description: "You don't know if you are lonley and tired unless you get out of that status. The comfort and happiness from my parents visitng Singapore, along with sadness that they can stay for only so long, is molten in the bright sad melodty of this song.",
        memoryName: "Family in Singapore",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory10/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory10/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory10/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory10/4.jpg?raw=true", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory11/music.jpg?raw=true",
        songLink:"https://music.youtube.com/watch?v=Cq6OejPKA8k&si=m0WpsBEWAzBW-Wmq",
        songTitle: "Away (feat. Taylor & YANU)",
        songArtist: "LILBOI",
        description: "Trying something new is always exciting, yet worrying. The anticipation and fear of starting a new journey in SNU was met with this song.",
        memoryName: "Seoul Natioanl University",
        photos: [
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory11/1.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory11/2.jpg?raw=true", width: 1920, height: 1080 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory11/3.jpg?raw=true", width: 2179, height: 2179 },
          { src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/memory11/4.jpg?raw=true", width: 1536, height: 1536 },
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