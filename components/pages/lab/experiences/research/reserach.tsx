import Header from "@/components/header";
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';

export default async function Research() {
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
      { text: 'About', href: '#', subOptions: [] },
      {
        href:"#",
        text: 'Experiences',
        subOptions: [
          { text: 'Research', href: '#' },
          { text: 'Work', href: '#' },
          { text: 'Project', href: '#' },
        ],
      },
      { text: 'Ideas', href: '#', subOptions: [] },
      { text: 'Literature Reviews', href: '#', subOptions: [] },
  ];

const blogPosts = await getBlogPosts('app/lab/experiences/research');

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header
          imageProps={headerImage}
          titles={headerText}
          dropdownOptions={headerNavBar}
      />
      <BlogTilesSection blogPosts={blogPosts}/>
    </div>
  )
}