export type UserRole = 'admin' | 'customer' | 'subscriber';

export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  jobtitle: string;
  username: string;
  location: string;
  role: UserRole;
  posts: string;
  coverImg: string;
  followers: string;
  description: string;
  [key: string]: any;
}
