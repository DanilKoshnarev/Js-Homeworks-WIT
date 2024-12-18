import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  category: string;
}

const PostList: React.FC<{ category: string }> = ({ category }) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.cover_image,
          author: item.user.name,
          category: item.tag_list[0] || 'разное'
        }));
        setPosts(formattedData);
      });
  }, []);

  const filteredPosts = category === 'Все' ? posts : posts.filter(post => post.category === category);

  return (
    <div>
      {filteredPosts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <Post
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

export default PostList;
