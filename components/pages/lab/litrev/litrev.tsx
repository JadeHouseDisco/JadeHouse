import LabHeader from "@/components/labHeader"
import BlogTilesSection from "@/components/blogTilesSection";
import { getBlogPosts } from '@/components/utils/getBlogPosts';
import LabFooter from '@/components/labFooter';

export default async function Litrev() {
const blogPosts = await getBlogPosts('app/lab/litrev');
const blogPostsCategories = ["Heart", "Robot", 'sEMG']

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <LabHeader/>
      <BlogTilesSection blogPosts={blogPosts} categories={blogPostsCategories} noFeatured={true} noActive={true}/>
      <LabFooter/>
    </div>
  )
}
