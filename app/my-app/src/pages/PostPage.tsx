import React from 'react';
import { useParams } from 'react-router-dom';
import usePostById from '../hooks/usePostById';
import useTitle from '../hooks/useTitle';
import { Oval } from 'react-loader-spinner';
import './PostPage.css';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePostById(id);

  useTitle(post ? post.title : 'Загрузка...');

  if (loading) {
    return (
      <div className="loader">
        <Oval
          height={80}
          width={80}
          color="#007bff"
          ariaLabel="loading"
        />
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return null;
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
