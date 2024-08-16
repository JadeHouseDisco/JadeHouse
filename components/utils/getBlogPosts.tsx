import fs from 'fs/promises';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  imageHref: string;
  href: string;
  featured: string;
  active: string;
  category: string;
}

export async function getBlogPosts(dirPath: string): Promise<BlogPost[]> {
  const researchDir = path.join(process.cwd(), dirPath);
  const items = await fs.readdir(researchDir);
  const blogPosts: BlogPost[] = [];

  for (const item of items) {
    const itemPath = path.join(researchDir, item);

    const stats = await fs.stat(itemPath);
    if (stats.isDirectory()) {
      const pathSegments = itemPath.split('app');
      const href = pathSegments.length > 1 ? `${pathSegments.slice(1).join('app')}` : '';
      const dataFilePath = path.join(itemPath, 'data.json');
      const data = await fs.readFile(dataFilePath, 'utf8');
      const { title, date, content, imageHref, featured, active, category } = JSON.parse(data);
      blogPosts.push({ slug: item, title, date, content, imageHref, href, featured, active, category });
    }
  }

  return blogPosts;
}