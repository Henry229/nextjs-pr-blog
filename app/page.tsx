import Image from 'next/image';
import Hero from './components/hero';
import FeaturedPosts from './components/featuredPosts';
import CarousePosts from './components/carousePosts';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarousePosts />
    </>
  );
}
