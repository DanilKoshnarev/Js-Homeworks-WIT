import { fetchCommentsByPostId, fetchCommentsByUserId } from '../services/GenericCommentService';
import { Comment } from '../models/GenericComment';

export const getCommentsByPostId = (req, res) => {
  const { postId } = req.body;
  const comments: Comment<any>[] = fetchCommentsByPostId(postId);
  res.json(comments);
};

export const getCommentsByUserId = (req, res) => {
  const { userId } = req.body;
  const comments: Comment<any>[] = fetchCommentsByUserId(userId);
  res.json(comments);
};
