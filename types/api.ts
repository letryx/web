import { User } from 'types/user';

export interface AuthResponse {
  currentUser: User;
  token: string;
}
