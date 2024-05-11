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
}

export async function getBlogPosts(dirPath: string): Promise<BlogPost[]> {
  const researchDir = path.join(process.cwd(), dirPath);
  const items = await fs.readdir(researchDir);
  const blogPosts: BlogPost[] = [];

  for (const item of items) {
    const itemPath = path.join(researchDir, item);
    const fullPath = '/home/delta/project/JadeHouse/app/lab/experiences/research/ureca';
    const desiredPathRegex = /\/lab\/experiences\/(.*?)$/;
    const match = fullPath.match(desiredPathRegex);
    let href = '';
    if (match) {
      href = '/lab/experiences/' + match[1];
    }

    const stats = await fs.stat(itemPath);
    if (stats.isDirectory()) {
      const dataFilePath = path.join(itemPath, 'data.json');
      const data = await fs.readFile(dataFilePath, 'utf8');
      const { title, date, content, imageHref, featured } = JSON.parse(data);
      blogPosts.push({ slug: item, title, date, content, imageHref, href, featured });
    }
  }

  return blogPosts;
}