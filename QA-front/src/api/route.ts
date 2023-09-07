import { Route } from '../state/interfaces';
import { apiClient } from './client';

export async function getRoutes(): Promise<Route[]> {
  const { data: routes } = await apiClient.get<Route[]>('/api/Travel');
  return routes;
}

export async function createRoute(route: Partial<Route>, userId: string): Promise<Route> {
  const { data: routesResponse } = await apiClient.post<Route>(`/api/Travel?userId=${userId}`, route);
  return routesResponse;
}

export async function joinRoute(routeId: string, userId: string): Promise<Route> {
  const { data: routesResponse } = await apiClient.put(`/api/AddUserToTravel/${userId}/${routeId}`);
  return routesResponse;
}
