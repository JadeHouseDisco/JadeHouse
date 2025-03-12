import DiscoHeader from '@/components/disccoHeader';
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import DiscoFooter from '@/components/discoFooter';

export default async function Thoughts() {

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const thoughtsPosts = await getBlogPosts('app/disco/thoughts');

  const allBlogPosts = [...thoughtsPosts];
  return allBlogPosts;
}

const blogPosts = await getAllBlogPosts();
const blogPostCategories = ["Inspiration", "Perspective"]

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <DiscoHeader/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostCategories} noActive={true}/>
      <DiscoFooter/>
    </div>
  )
}
