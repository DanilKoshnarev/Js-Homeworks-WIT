import { useState, useEffect } from 'react';

interface PostData {
  title: string;
  cover_image: string;
  tags: string[];
  body_markdown: string;
}

const usePostById = (id: string) => {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(https://dev.to/api/articles/${id})
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  return { post, loading, error };
};

export default usePostById;