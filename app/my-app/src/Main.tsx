import React from 'react';
import PostList from './PostList';

const Main: React.FC<{ category: string }> = ({ category }) => {
  return (
    <main>
      <PostList category={category} />
    </main>
  );
};

export default Main;
