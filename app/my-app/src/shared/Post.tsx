import React from 'react';
import { Comment } from '../models/GenericComment';

interface PostProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  comments: Comment<any>[];
}

const Post: React.FC<PostProps> = ({ title, description, imageUrl, author, comments }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      <p>Автор: {author}</p>
      <p>Комментарии:</p>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <h2>{comment.title}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
