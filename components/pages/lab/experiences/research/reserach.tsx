import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default async function Research() {
  const headerProps ={
    imageProps: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
      width: 418,
      height: 538,
    },
    titles: [
      { text: 'JadeHouse', href: '/' },
      { text: 'Lab', href: '/lab' }
    ],
    dropdownOptions: [
      { text: 'Home', href: '/lab' },
      { text: 'About', 
        href: '/lab/aboutme', 
        subOptions: [
          { text: 'Academic', href: '/lab/aboutme/academic' },
        ], 
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
        subOptions: [
          { text: 'Research', href: '/lab/experiences/research' },
          { text: 'Work', href: '/lab/experiences/work' },
          { text: 'Project', href: '/lab/experiences/project' },
        ],
      },
      { text: 'Ideas', href: '/lab/ideas' },
      { text: 'Literature Reviews', href: '/lab/litrev' },
    ],
  }

const footerProps = {
  logo: {
    src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
    alt: 'Website Logo',
    width: 64,
    height: 64,
  },
  title:"JadeHouse Lab",
  description:"Portfolio of my professional life",
  navLinks: [
    { text: 'Home', href: '/lab' },
    { text: 'About', href: '/lab/aboutme' },
    { text: 'Experiences', href: '/lab/experiences' },
    { text: 'Ideas', href: '/lab/ideas' },
    { text: 'Literature Reviews', href: '/lab/litrev' },
  ],
  socialLinks: [
    {
      href: 'mailto:HYUNWOO001@e.ntu.edu.sg',
      icon: <MailIcon className="h-6 w-6" />,
    },
    {
      href: 'https://github.com/JadeHouseDisco',
      icon: <GithubIcon className="h-6 w-6" />,
    },
    {
      href: 'https://linkedin.com/in/hyunwoolee0329',
      icon: <LinkedinIcon className="h-6 w-6" />,
    },
    {
      href: 'https://www.youtube.com/@JadeHouseCinema',
      icon: <YoutubeIcon className="h-6 w-6" />,
    },
    {
      href: '#',
      icon: <GoogleScholarIcon className="h-6 w-6" />,
    },
    {
      href: '#',
      icon: <ORCIDIcon className="h-6 w-6" />,
    },
  ],
}

const blogPosts = await getBlogPosts('app/lab/experiences/research');

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header headerProps={headerProps}/>
      <BlogTilesSection blogPosts={blogPosts}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}