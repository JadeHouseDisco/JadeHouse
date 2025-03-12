import DiscoHeader from '@/components/disccoHeader';
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import DiscoFooter from '@/components/discoFooter';

export default async function Memories() {

const blogPosts = await getBlogPosts('app/disco/memories');
const blogPostsCategories = ["Panorama", "Snapshot" ]

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <DiscoHeader/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostsCategories}/>
      <DiscoFooter/>
    </div>
  )
}