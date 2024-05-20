import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import { MailIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default async function Thoughts() {
  const headerProps ={
    imageProps: {
      src: '/jadehouse_disco.png',
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

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const inspirationPosts = await getBlogPosts('app/disco/thoughts/inspiration');
  const pespectivePosts = await getBlogPosts('app/disco/thoughts/perspective');

  const allBlogPosts = [...inspirationPosts, ...pespectivePosts];
  return allBlogPosts;
}

const blogPosts = await getAllBlogPosts();

const footerProps = {
  logo: {
    src: '/jadehouse_lab.png',
    alt: 'Website Logo',
    width: 64,
    height: 64,
  },
  title:"JadeHouse Lab",
  description:"A short description of your website",
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