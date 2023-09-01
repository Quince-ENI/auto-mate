import { Car } from '../state/interfaces';
import { apiClient } from './client';

export async function getCars(): Promise<Car[]> {
  const { data: cars } = await apiClient.get<Car[]>('/api/Car');
  return cars;
}
