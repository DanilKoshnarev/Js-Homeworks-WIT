import { getCommentsByPostId, getCommentsByUserId } from '../repositories/GenericCommentRepository';
import { Comment } from '../models/GenericComment';

export const fetchCommentsByPostId = (postId: number): Comment<any>[] => {
  return getCommentsByPostId(postId);
};

export const fetchCommentsByUserId = (userId: number): Comment<any>[] => {
  return getCommentsByUserId(userId);
};
