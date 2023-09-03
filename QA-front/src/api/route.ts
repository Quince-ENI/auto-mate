import { Route } from '../state/interfaces';
import { apiClient } from './client';

export async function getRoutes(): Promise<Route[]> {
  const { data: routes } = await apiClient.get<Route[]>('/api/Travel');
  return routes;
}

export async function createRoute(route: Partial<Route>): Promise<Route> {
  return {
    user: 'co.cathelinais@gmail.com',
    status: 'pending',
    departure_city: route.departure_city || 'Paris',
    arrival_city: route.arrival_city || 'Niort',
    remaining_seats: 4,
    departureHour: route.departureHour || '6h',
    departure_time: route.departure_time || new Date('2023-02-01'),
    arrival_time: route.arrival_time || new Date('2023-03-02'),
    car: {
      immatriculation: route.car?.immatriculation || 'QI-297-CN',
      marque: route.car?.marque || 'Peugeot',
      modele: route.car?.modele || '508',
      couleur: route.car?.couleur || 'Bleu',
      nb_Portes: route.car?.nb_Portes || 5,
      disponibility: route.car?.disponibility || false,
      kilometers: route.car?.kilometers || 10000,
      site: route.car?.site || {
        idSite: 1,
        name: 'Site A',
        address: '123 Rue du Site A',
        city: 'Paris',
        departement: 75,
        postal_code: 75000
      }
    }
  };
}
