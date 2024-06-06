import { getFeaturedPosts } from '../services/posts';
import PostsGrid from './postsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
