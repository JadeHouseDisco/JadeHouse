import React from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MiniAbout from "@/components/miniAbout";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import ProjectGrid from "@/components/projectGrid"
import SongGrid from "@/components/songGrid"
import PlaylistIntro from '@/components/playlistIntro';
import DropdownButton from '@/components/ui/dropdownButton';
import Footer from "@/components/footer"
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"

export default async function Disco() {
  const headerProps ={
    imageProps: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true',
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
      },
      { text: 'Memories', href: '/disco/memories' },
      {
        href:"/disco/thoughts",
        text: 'Thoughts',
      },
      { text: 'Music', href: '/disco/music' },
    ],
  }
  
  const heroSectionProps = {
    originalBackgroundImage: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/disco_main_background.jpg?raw=true',
      alt: 'Hero Image',
      width: 1920,
      height: 1080,
    },
    content: {
      title: 'Welcome to JadeHouse Disco',
      description: 'Archive of my personal life',
      cards: [
        {
          image: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse.png?raw=true",
            alt: "jadehouse logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse",
          description: "House of memory for my professional and personal life",
          buttonText: "Return to Jadehouse",
          buttonHref: "/",
          newBackgroundImage: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/main_background.jpeg?raw=true",
            alt: "lab background image",
            width: 1536,
            height: 1536,
          }
        },
        {
          image: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true",
            alt: "jadehouse disco logo",
            width: 120,
            height: 120,
          },
          title: "JadeHouse Lab",
          description: "Explore my professional life, including experiences, ideas, and reviews",
          buttonText: "Enter the Lab",
          buttonHref: "/lab",
          newBackgroundImage: {
            src: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/heroSection/lab_main_background.jpg?raw=true",
            alt: "lab background image",
            width: 1536,
            height: 1536,
          }
        }
      ]
    },
  }

  async function getAllBlogPosts(): Promise<BlogPost[]> {
    const memories = await getBlogPosts('app/disco/memories');
  
    const allBlogPosts = [...memories];
    return allBlogPosts;
  }
  
  const memories = await getAllBlogPosts();

  const featuredMemories = memories
  .filter(post => post.featured === 'y')
  .map(post => ({
    image: {
      src: post.imageHref,
      alt: post.title,
      width: 400,
      height: 300,
    },
    title: post.title,
    description: post.content,
    viewLink: post.href,
  }));
  
    const projectGridProps = {
      projectTitle: "Cherished Memories",
      projects: featuredMemories,
      viewAllLink: "/disco/memories",
      buttonText:"View all Memories"
    }

    const songGridProps = [
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/1.jpg?raw=true',
        title: 'Pink + White',
        artist: 'Frank Ocean',
        album: 'Blonde',
        description: 'Anywhere you go and anything you do feels special with this song.',
        link: "https://music.youtube.com/watch?v=9cHbvRUALrc&si=vh4bUS2Tk1u1aWri"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/2.jpg?raw=true',
        title: 'Crave You (Feat. Giselle)',
        artist: 'Flight Facilities',
        album: 'Down To Earth',
        description: 'What loneliness sounds like.',
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/3.jpg?raw=true',
        title: 'In Our Prime',
        artist: 'The Black Keys',
        album: 'Turn Blue',
        description: 'It always hurts to look back.',
        link: "https://music.youtube.com/watch?v=aHwGucd6z5w&si=cVFJMFkSF2MghjR4"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/4.jpg?raw=true',
        title: 'White Lies',
        artist: 'Max Frost',
        album: 'White Lies',
        description: 'Dance the sadness away.',
        link: "https://music.youtube.com/watch?v=WK8s7KTMbbw&si=73Xq6daGjY6QJxh4"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/5.jpg?raw=true',
        title: 'Lone Digger',
        artist: 'Caravan Palace',
        album: '<I°_°I>',
        description: "It's time to get up and let go.",
        link: "https://music.youtube.com/watch?v=36A-ZjOpui8&si=tVl0LYhN0_UI_hpO"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/6.jpg?raw=true',
        title: 'Cry Baby',
        artist: 'The Neighbourhood',
        album: 'Wiped Out!',
        description: 'Bitter, sad, and sweet smiles.',
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/7.jpg?raw=true',
        title: 'Kazino',
        artist: 'BIBI',
        album: 'Kazino',
        description: 'Falling and rolling, deeper and deeper.',
        link: "https://music.youtube.com/watch?v=xjj_OVvVQFc&si=2hO8K-yNxSYm5Xh8"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/8.jpg?raw=true',
        title: 'High Noon',
        artist: 'THORNAPPLE',
        album: 'Capital Disease',
        description: 'Beautiful raving.',
        link: "https://music.youtube.com/watch?v=dRegKRl-V_c&si=NlbI_64OoA4ffaSU"
      },
      {
        image: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/music/9.jpg?raw=true',
        title: 'Let Me Out',
        artist: 'The Blue Stones',
        album: 'Pretty Monster',
        description: "This song won't leave you sitting.",
        link: "https://music.youtube.com/watch?v=GRijQiArYKc&si=ZmEwf77UcXQHSlS7"
      },
    ];

    const playlistIntroProps = {
      titleText: "Favorite Playlists",
      playlists: [
        {
          name: "Gloomy walk in New York",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_n5aIa_u8M_d9PD6XQKXqZ6&si=wFJzgdgRRwSe1t9l",
          songs: [
            { title: "Sad You, Stil Fine", artist: "Fromm" },
            { title: "Hold Me LikeIt's Forever", artist: "Fromm & Car, the garden" },
            { title: "Bad Apple", artist: "Sailor Honeymoon" },
            { title: "A Day of Mercury", artist: "THORNAPPLE" },
            { title: "More (feat. GIRIBOY", artist: "youra" },
            { title: "HIGH (feat. Rachel Lim)", artist: "JIDA" },
            { title: "Nevermind", artist: "Dennis Lioyd" },
            { title: "Islands", artist: "The xx" },
            { title: "Noise Pollution [Version A, Vocal up Mix 1.3] (feat. Mary Elizabeth Winstead & Zoe Manville", artist: "Portugal. The Man" },
            { title: "Lost 2 (feat. Sunwoojunga)", artist: "Car, the garden" },
            { title: "Whiskey n Whiskey", artist: "Park Soeun" },
            { title: "Youth", artist: "Daughter" },
            { title: "Caffeine", artist: "Mot" },
            { title: "Everything to Me", artist: "Shin Hae Gyeong" },
          ],
        },
        {
          name: "Lamplight Starlight",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_nqZexdl2AU09p9the09Khq&si=coto3SRN583RC4Y0",
          songs: [
            { title: "So life goes on", artist: "Heo Hoy Kyung" },
            { title: "By bye my blue", artist: "Yerin Baek" },
            { title: "Let You Down", artist: "Helb Glise" },
            { title: "Big Jet Plane", artist: "Angus & Gulia Stone" },
            { title: "No One Told Me Why", artist: "ALEPH" },
            { title: "Romance", artist: "CHEEZE" },
            { title: "Exile Vilify", artist: "The National" },
            { title: "TT", artist: "Kim Sawol" },
            { title: "Key", artist: "Kim Sawol" },
            { title: "Blind (feat. Rachel Lim)", artist: "JIDA" },
            { title: "Rainbow (Prod.IDeal) (feat.YDG)", artist: "Bassagong" },
            { title: "flight", artist: "E SENS" },
            { title: "sleep tight", artist: "E SENS" },
            { title: "Rolled Together", artist: "The Antlers" },
            { title: "Hounds", artist: "The Antlers" },
            { title: "Over the Moon", artist: "The Marias" },
            { title: "bath", artist: "offonoff" },
            { title: "Fly Me to the Moon", artist: "The Macarons Project" },
            { title: "Home is Far Away (feat. OH HYUK)", artist: "EPIK HIGH" },
            { title: "Closely Far Away", artist: "Car, the Garden" },
          ],
        },
        {
          name: "Warm orange sunlight",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_nEvrLpboYz_j-tGXyRV_EB&si=RrW8XEmo_bqZGTX-",
          songs: [
            { title: "Watermelong Sugar", artist: "Harry Styles" },
            { title: "Day 1", artist: "HONNE" },
            { title: "Mouse", artist: "Lee go do" },
            { title: "As it Was", artist: "Harry Styles" },
            { title: "0310", artist: "Yerin Baek" },
            { title: "Pluto", artist: "Chamsom" },
            { title: "Light Chaser", artist: "JISOKURY" },
            { title: "Painkiller", artist: "Ruel" },
            { title: "Good Night Good Dream", artist: "Nerd Connection" },
            { title: "In My City of Seoul", artist: "The Black Skirts" },
            { title: "Redbone", artist: "Childish Gambino" },
            { title: "West Coast Love", artist: "Emotional Oranges" },
            { title: "Love is All", artist: "The Black Skirts" },
            { title: "Sleep", artist: "Night Off" },
            { title: "Sunset (feat. Stell Jang)", artist: "Pleyn" },
            { title: "Not Worth It", artist: "Emotional Oranges" },
            { title: "Imagination", artist: "Foster The People" },
          ],
        },
        {
          name: "Pale flower fields",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_mvn3rAN9pEFPcmFvGwngGZ&si=vqFj7vCqgfTq2QtX",
          songs: [
            { title: "Stolen Dance", artist: "Milky Chance" },
            { title: "Scent", artist: "캐스커" },
            { title: "When spring comes (Piano ver.)", artist: "Kim Yun A" },
            { title: "Most Ordinary Existence", artist: "Sister's Barbershop" },
            { title: "Bedside", artist: "Kim Sawol" },
            { title: "Exile Vilify", artist: "The National" },
            { title: "Don't Panic", artist: "Coldplay" },
            { title: "Are You Turning into a Devil?", artist: "Sister's Barbershop" },
            { title: "Angeles", artist: "Eliott Smith" },
            { title: "잔혹한 여행", artist: "한희정" },
            { title: "Plankton", artist: "THORNAPPLE" },
            { title: "No Widows", artist: "The Antlers" },
            { title: "Cigarette (feat. Tablo & MISO)", artist: "offonoff" },
            { title: "Aspiring Boy", artist: "전자양" },
            { title: "I didn't know yet (feat. 하림 On Harmonica)", artist: "Lee Juck" },
            { title: "Never Know", artist: "Jack Johnson" },
            { title: "Metaphor", artist: "Han Hee Jung & Kim Sawol" },
            { title: "No One Told Me Why", artist: "ALEPH" },
            { title: "Night of the Living You", artist: "THORNAPPLE" },
          ],
        },
        {
          name: "Blue winter sky",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_mkH-TyKOoShuP74ap0yEZc&si=vkcIBDqZ3J47NRcL",
          songs: [
            { title: "BENTLEY 1.5", artist: "YUMDDA" },
            { title: "Used To Be", artist: "pH-1" },
            { title: "sydney, hongkong (feat. THAMA)", artist: "Kid Milli" },
            { title: "The End of The Winter (feat. Fana)", artist: "Way Ched & unofficialboyy" },
            { title: "Money Talk (feat. NO:EL & Hash Swan", artist: "Primeboi" },
            { title: "KOCEAN", artist: "Kid Milli & Jvcki Wai" },
            { title: "Gone", artist: "JUSTHIS" },
          ],
        },
        {
          name: "Warm Worries",
          href: "https://music.youtube.com/playlist?list=PLADefd6IIr_nXSuvgWn2XioV8Im5m0Onp&si=4W59jfLVB0kO1MRk",
          songs: [
            { title: "Anxiety", artist: "Brown Tigger" },
            { title: "City Life", artist: "GroovyRoom & Leellamarz" },
            { title: "wing (feat. Alt)", artist: "Skyminhyuk" },
            { title: "변하지 않아 (feat. HAON & CHANGMO)", artist: "Rohann" },
            { title: "Fall", artist: "Ash Island" },
          ],
        },
      ],
    }

    const miniAboutProps = {
      profileImage: {  
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/miniAbout/profile_photo_disco.jpg?raw=true',
        alt: 'Profile Photo',
        width: 256,
        height: 256,
      },
      name: 'Lee Hyunwoo',
      bio: "I am traveller with earphones, creating unforgettable memories throughout my journey. Driven by passion and curiosity, I seek out new adventures and unique experiences. My goal is to explore extraordinary places and engage in special activities, all to craft my own remarkable story.",
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
      button: {
        text: "More About Me",
        href: "/disco/aboutme"
      }
    }

    const footerProps = {
      logo: {
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_disco.png?raw=true',
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
        <HeroSection heroSectionProps={heroSectionProps}/>
        <ProjectGrid projectGridProps={projectGridProps}/>
        <div className="grid grid-cols-2 items-start mx-20">
          <SongGrid songGridProps={songGridProps}/>
          <PlaylistIntro PlaylistIntroProps={playlistIntroProps}/>
        </div>
        <div className="mx-auto my-4">
          <DropdownButton href={"/disco/music"} options={[]} buttonText={"Explore all Music"} />
        </div>
        <MiniAbout miniAboutProps={miniAboutProps}/>
        <Footer footerProps={footerProps}/>
      </div>
    );
  };