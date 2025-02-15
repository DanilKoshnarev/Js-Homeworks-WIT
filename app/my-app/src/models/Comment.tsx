export interface Comment<T> {
  id: number;
  postId: number;
  userId: number;
  title: string;
  body: string;
  metadata: T;
}
