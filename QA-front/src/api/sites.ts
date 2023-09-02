import { Site } from '../state/interfaces';
import { apiClient } from './client';

export async function getSites(): Promise<Site[]> {
  const { data: site } = await apiClient.get('/api/Site');
  return site;
}
