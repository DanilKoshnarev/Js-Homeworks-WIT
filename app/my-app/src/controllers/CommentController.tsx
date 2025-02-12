import { fetchCommentsByPostId, fetchCommentsByUserId } from '../services/CommentService';
import { Comment } from '../models/Comment';

export const getCommentsByPostId = (req, res) => {
  const { postId } = req.body;
  const comments: Comment[] = fetchCommentsByPostId(postId);
  res.json(comments);
};

export const getCommentsByUserId = (req, res) => {
  const { userId } = req.body;
  const comments: Comment[] = fetchCommentsByUserId(userId);
  res.json(comments);
};
