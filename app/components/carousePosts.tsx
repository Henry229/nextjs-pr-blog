import { getNonFeaturedPosts } from '../services/posts';
import MultiCarousel from './multiCarousel';
import PostCard from './postCard';

export default async function CarousePosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section>
      <h2>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
