import LabHeader from "@/components/labHeader"
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts, BlogPost } from '@/components/utils/getBlogPosts';
import LabFooter from '@/components/labFooter';

export default async function Experiences() {
async function getAllBlogPosts(): Promise<BlogPost[]> {
  const experiences = await getBlogPosts('app/lab/experiences');

  const allBlogPosts = [...experiences];
  return allBlogPosts;
}

const blogPosts = await getAllBlogPosts();
const blogPostCategories= ["Project", "Research", "Work"]

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <LabHeader/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostCategories}/>
      <LabFooter/>
    </div>
  )
}