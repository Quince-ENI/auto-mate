import { Route } from '../state/interfaces';
import { apiClient } from './client';

export async function getRoutes(): Promise<Route[]> {
  const { data: routes } = await apiClient.get<Route[]>('/api/Travel');
  return routes;
}
