import { Comment } from '../models/GenericComment';

const comments: Comment<any>[] = [
  {
    id: 1,
    postId: 1,
    userId: 1,
    title: 'Первый комментарий',
    body: 'Текст первого комментария',
    metadata: { likes: 10 }
  },
  {
    id: 2,
    postId: 1,
    userId: 2,
    title: 'Второй комментарий',
    body: 'Текст второго комментария',
    metadata: { likes: 5 }
  },
  // Добавьте больше комментариев по необходимости
];

export const getCommentsByPostId = (postId: number): Comment<any>[] => {
  return comments.filter(comment => comment.postId === postId);
};

export const getCommentsByUserId = (userId: number): Comment<any>[] => {
  return comments.filter(comment => comment.userId === userId);
};
