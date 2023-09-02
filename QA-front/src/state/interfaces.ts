import type { Dayjs } from 'dayjs';

export type Role = 'user' | 'admin';
export type RangeValue = [Dayjs | null, Dayjs | null] | undefined;
export type Status = 'validated' | 'pending' | 'ended';

export type User = {
  userId?: string;
  name: string;
  picture: string;
  email: string;
  role: Role;
};

export type Site = {
  idSite: number;
  name: string;
  address: string;
  city: string;
  departement: 75;
  postal_code: 75000;
};

interface AutoMateUiFilterState {
  site: string;
  dates: RangeValue;
}
interface AutoMateUiState {
  filter: AutoMateUiFilterState;
  carsLoading: boolean;
  routesLoading: boolean;
  isUserReceive: boolean;
}

interface AutoMateEntitiesState {
  isUserLogged?: boolean;
  cars: Car[];
  user: User;
  routes: Route[];
  sites: Site[];
}

export interface AutoMateState {
  ui: AutoMateUiState;
  entities: AutoMateEntitiesState;
}

export interface Car {
  immatriculation: string;
  marque: string;
  modele: string;
  couleur: string;
  nb_Portes: number;
  disponibility: boolean;
  kilometers: number;
  site: Site;
}

export interface Route {
  user: string;
  status: Status;
  departure_city: string;
  arrival_city: string;
  remaining_seats: number;
  departureHour: string;
  departure_time: Date;
  arrival_time: Date;
  car: Car;
}
