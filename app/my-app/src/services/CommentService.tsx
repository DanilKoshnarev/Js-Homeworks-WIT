import { getCommentsByPostId, getCommentsByUserId } from '../repositories/CommentRepository';
import { Comment } from '../models/Comment';

export const fetchCommentsByPostId = (postId: number): Comment[] => {
  return getCommentsByPostId(postId);
};

export const fetchCommentsByUserId = (userId: number): Comment[] => {
  return getCommentsByUserId(userId);
};
