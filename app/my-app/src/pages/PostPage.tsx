import React from 'react';
import usePosts from '../hooks/usePosts';
import PostCard from '../shared/PostList/PostCard';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const PostListPage: React.FC = () => {
  const { posts, loading, error } = usePosts();

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

  return (
    <div>
      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <PostCard
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            author={post.author}
          />
        </Link>
      ))}
    </div>
  );
};

export default PostListPage;
