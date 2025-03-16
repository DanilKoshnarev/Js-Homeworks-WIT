import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Comments: React.FC<{ postId: number; comments: any[] }> = ({ postId, comments }) => {
  const { user } = useUser();
  const [newComment, setNewComment] = useState('');

  const handleAddComment = async () => {
  }

  return (
    <div>
      <h2>Комментарии</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
      {user ? (
        <>
          <textarea value={newComment} onChange={e => setNewComment(e.target.value)} />
          <button onClick={handleAddComment}>Добавить комментарий</button>
        </>
      ) : (
        <p>
          Для оставления комментария <a href="/login">авторизуйтесь</a>.
        </p>
      )}
    </div>
  );
};

export default Comments;
