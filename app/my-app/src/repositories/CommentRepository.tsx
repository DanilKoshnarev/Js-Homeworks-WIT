import { Comment } from '../models/Comment';

const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    title: 'Привет',
    body: 'Я Daniel'
  },
  {
    id: 2,
    postId: 1,
    userId: 2,
    title: 'Я люблю суп суп',
    body: 'Горячий суп'
  },

];

export const getCommentsByPostId = (postId: number): Comment[] => {
  return comments.filter(comment => comment.postId === postId);
};

export const getCommentsByUserId = (userId: number): Comment[] => {
  return comments.filter(comment => comment.userId === userId);
};
