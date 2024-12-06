import React from 'react';
import Post from './Post';

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  category: string;
}

const posts: PostData[] = [
  {
    id: 1,
    title: 'Первый пост',
    description: 'Описание первого поста',
    imageUrl: 'path/to/image1.jpg',
    author: 'Автор 1',
    category: 'маркетинг'
  },
  {
    id: 2,
    title: 'Второй пост',
    description: 'Описание второго поста',
    imageUrl: 'path/to/image2.jpg',
    author: 'Автор 2',
    category: 'программирование'
  },
  {
    id: 3,
    title: 'Третий пост',
    description: 'Описание третьего поста',
    imageUrl: 'path/to/image3.jpg',
    author: 'Автор 3',
    category: 'котики'
  },
  {
    id: 4,
    title: 'Четвертый пост',
    description: 'Описание четвертого поста',
    imageUrl: 'path/to/image4.jpg',
    author: 'Автор 4',
    category: 'фильмы'
  },
  // Добавьте больше постов по необходимости
];

const PostList: React.FC<{ category: string }> = ({ category }) => {
  const filteredPosts = category === 'Все' ? posts : posts.filter(post => post.category === category);

  return (
    <div>
      {filteredPosts.map(post => (
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
