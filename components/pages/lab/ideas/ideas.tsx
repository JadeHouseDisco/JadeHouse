import LabHeader from "@/components/labHeader"
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import LabFooter from '@/components/labFooter';

export default async function Ideas() {
const blogPosts = await getBlogPosts('app/lab/ideas');
const blogPostsCategories = ["Research", "Product"]

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <LabHeader/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostsCategories} noActive={true}/>
      <LabFooter/>
    </div>
  )
}