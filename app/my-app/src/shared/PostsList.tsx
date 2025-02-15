import React from 'react';
import Post from './Post';
import { Comment } from '../models/GenericComment';

interface PostData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  category: string;
  comments: Comment<any>[];
}

const posts
