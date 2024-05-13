import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"
import Footer from "@/components/footer"

export default async function Project() {
  const headerImage = {
    src: '/jadehouse_lab.png',
    width: 418,
    height: 538,
  };

  const headerText = [
    { text: 'JadeHouse', href: '/' },
    { text: 'Lab', href: '/lab' }
  ];

  const headerNavBar = [
    { text: 'Home', href: '/lab', subOptions: [] },
    { text: 'About', href: '/lab/aboutme', subOptions: [] },
    {
      href:"/lab/experiences",
      text: 'Experiences',
      subOptions: [
        { text: 'Research', href: '/lab/experiences/research' },
        { text: 'Work', href: '/lab/experiences/work' },
        { text: 'Project', href: '/lab/experiences/project' },
      ],
    },
    { text: 'Ideas', href: '/lab/ideas', subOptions: [] },
    { text: 'Literature Reviews', href: '/lab/litrev', subOptions: [] },
];

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

const blogPosts = await getBlogPosts('app/lab/experiences/project');

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header
          imageProps={headerImage}
          titles={headerText}
          dropdownOptions={headerNavBar}
      />
      <BlogTilesSection blogPosts={blogPosts}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}