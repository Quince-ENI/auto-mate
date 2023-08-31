import { Route } from '../state/interfaces';
import { apiClient } from './client';

export async function getRoutes(): Promise<Route[]> {
  const { data: routes } = await apiClient.get<Route[]>('/api/Travel');
  return routes;
}

export async function createRoute(route: Partial<Route>): Promise<Route> {
  return {
    departureCity: route.departureCity || 'Rennes',
    arrivalCity: route.arrivalCity || 'Niort',
    remainingPlaces: 4,
    departureTime: route.departureTime || '6h',
    departureDate: route.departureDate || new Date('2023-02-01'),
    arrivalDate: route.arrivalDate || new Date('2023-03-02'),
    car: {
      immatriculation: route.car?.immatriculation || 'QI-297-CN',
      marque: 'Peugeot',
      modele: '508',
      couleur: 'Bleu',
      nbDoors: 5,
      disponibility: false,
      kilometers: 10000,
      site: 'Rennes'
    }
  };
}
