import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default async function Experiences() {
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
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
      },
      { text: 'Ideas', href: '/lab/ideas' },
      { text: 'Literature Reviews', href: '/lab/litrev' },
    ],
  }

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const experiences = await getBlogPosts('app/lab/experiences');

  const allBlogPosts = [...experiences];
  return allBlogPosts;
}

const blogPosts = await getAllBlogPosts();
const blogPostCategories= ["Project", "Research", "Work"]

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
      href: 'https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ',
      icon: <GoogleScholarIcon className="h-6 w-6" />,
    },
    {
      href: 'https://orcid.org/0009-0004-2586-0493',
      icon: <ORCIDIcon className="h-6 w-6" />,
    },
  ],
}

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header headerProps={headerProps}/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostCategories}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}