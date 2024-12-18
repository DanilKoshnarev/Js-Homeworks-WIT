import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.css';

interface PostData {
  title: string;
  cover_image: string;
  tags: string[];
  body_markdown: string;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then(data => setPost(data))
      .catch(error => setError(error.message));
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      {post.cover_image && <img src={post.cover_image} alt={post.title} />}
      <div className="tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.body_markdown }} />
    </div>
  );
};

export default PostPage;
