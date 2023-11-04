export interface Review {
  title: string;
  postID: string;
  description: string;
  rating: number;
  user?: User;
  userEmail: string;
  date: Date;
}
