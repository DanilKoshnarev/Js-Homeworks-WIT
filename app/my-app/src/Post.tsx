import React from 'react';

interface PostProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

const Post: React.FC<PostProps> = ({ title, description, imageUrl, author }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      <p>Автор: {author}</p>
    </div>
  );
};

export default Post;
