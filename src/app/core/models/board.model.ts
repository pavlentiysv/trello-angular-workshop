import { User } from './user.model';

export interface Board {
  users: User[];
  columns: any[];
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
