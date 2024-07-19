import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default async function Perspective() {
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

const blogPosts = await getBlogPosts('app/disco/thoughts/perspective');

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
      <BlogTilesSection blogPosts={blogPosts}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}