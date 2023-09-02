import { User } from '../state/interfaces';
import { apiClient } from './client';

export async function getUser(email: string): Promise<User> {
  const { data: user } = await apiClient.get<User>(`/api/User/byEmail?mail=${email}`);
  return user;
}
