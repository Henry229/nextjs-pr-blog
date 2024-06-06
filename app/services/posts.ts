import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);
  return featuredPosts;
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const nonFeaturedPosts = allPosts.filter((post) => !post.featured);
  return nonFeaturedPosts;
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContent = await readFile(filePath, 'utf-8');
  const posts = JSON.parse(fileContent) as Post[];
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`${fileName} not found`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');

  return { ...post, content, next, prev };
}
