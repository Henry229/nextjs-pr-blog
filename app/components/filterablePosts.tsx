'use client';

import { useState } from 'react';
import { Post } from '../services/posts';
import PostsGrid from './postsGrid';
import Categories from './categories';

interface Pros {
  posts: Post[];
  categories: string[];
}
const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Pros) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className='flex m-4'>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
