import { User } from '../state/interfaces';

export async function getUser(email: string): Promise<User> {
  return {
    name: 'Corentin',
    picture: '',
    email: email,
    role: 'admin'
  };
}
