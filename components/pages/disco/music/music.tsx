import Header from "@/components/header";
import RecordPlayer from "@/components/recordPlayer";
import PlaylistShowcase from "@/components/playlistShowcase";
import AudibleMemories from "@/components/audibleMemories";
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default function Music() {
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

  const recordPlayerProps = {
    titleText: "All Time Favorites",
    descriptionText: "Best songs in my collection",
    songs: [
      {
        title: "Pink + White",
        artist: "Frank Ocean",
        album: "Blonde",
        link: "https://music.youtube.com/watch?v=9cHbvRUALrc&si=Hdqkv4Xt3zXE8mB1",
        description: "Pink + White Description Pink + White Description Pink + White Description Pink + White Description Pink + White Description Pink + White Description Pink + White Description Pink + White Description Pink + White",
        src: "/music/blonde.jpg"
      },
      {
        title: "Summertime",
        artist: "The Pianos of Cha'n",
        album: "Inspirations",
        link: "https://music.youtube.com/watch?v=S-AAQvQrPaw&si=reYEAFXIMnq9HPaR",
        description: "Summertime Description",
        src: "/music/inspirations.jpg"
      },
    ]
  }

  const playlistShowcaseProps = {
    titleText: "My playlists",
    descriptionText: "My favorite playlists",
    playlists: [
      {
        label: 'Playlist 1', 
        value: 'playlist1',
        src: "/test.png",
        songs: [
          {
            src: "/music/blonde.jpg",
            title: "Pink + White",
            artist: "Frank Ocean",
          },
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/3_songs.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/blonde.jpg",
            title: "Pink + White",
            artist: "Frank Ocean",
          },
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/blonde.jpg",
            title: "Pink + White",
            artist: "Frank Ocean",
          },
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
        ],
      },
      {
        label: 'Playlist 2', 
        value: 'playlist2',
        src: "/test2.png",
        songs: [
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/blonde.jpg",
            title: "Pink + White",
            artist: "Frank Ocean",
          },
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/blonde.jpg",
            title: "Pink + White",
            artist: "Frank Ocean",
          },
          {
            src: "/music/inspirations.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
          {
            src: "/music/3_songs.jpg",
            title: "Summertime",
            artist: "The Pianos of Cha'n",
          },
        ],
      }
    ],
  }

  const audibleMemoriesProps = {
    titleText: "Audible Memories",
    descriptionText: "Precious memories stored in the best music",
    songs:  [
      {
        songSrc: "/music/blonde.jpg",
        songLink:"",
        songTitle: "Pink + White",
        songArtist: "Frank Ocean",
        description: "Memory 1 description",
        memoryName: "Memory 1",
        photos: [
          { src: "/test.png", width: 1920, height: 1080 },
          { src: "/test2.png", width: 1920, height: 1080 },
          { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
          { src: "/main_background.jpeg", width: 1536, height: 1536 },
        ]
      },
      {
        songSrc: "/music/blonde.jpg",
        songLink:"",
        songTitle: "Pink + White",
        songArtist: "Frank Ocean",
        description: "Memory 1 description",
        memoryName: "Memory 2",
        photos: [
          { src: "/test.png", width: 1920, height: 1080 },
          { src: "/test2.png", width: 1920, height: 1080 },
          { src: "/profile_photo_main.jpg", width: 2179, height: 2179 },
          { src: "/main_background.jpeg", width: 1536, height: 1536 },
        ]
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
      <RecordPlayer recordPlayerProps={recordPlayerProps}/>
      <PlaylistShowcase playlistShowcaseProps={playlistShowcaseProps} />
      <AudibleMemories audibleMemoriesProps={audibleMemoriesProps} />
      <Footer footerProps={footerProps}/>
    </div>
  )
}