import FilterablePosts from '../components/filterablePosts';
import { getAllPosts } from '../services/posts';

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
