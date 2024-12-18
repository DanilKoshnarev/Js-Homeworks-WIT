import { useState, useEffect } from 'react';

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  category: string;
}

const usePosts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
};

export default usePosts;