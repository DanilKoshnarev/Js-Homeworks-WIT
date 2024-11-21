import React from 'react';
import Post from './Post';

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

const posts: PostData[] = [
  {
    id: 1,
    title: 'Первый пост',
    description: 'Описание первого поста',
    imageUrl: 'path/to/image1.jpg',
    author: 'Автор 1'
  },
  {
    id: 2,
    title: 'Второй пост',
    description: 'Описание второго поста',
    imageUrl: 'path/to/image2.jpg',
    author: 'Автор 2'
  },
  // Добавьте больше постов по необходимости
];

const PostList: React.FC = () => {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default PostList;
