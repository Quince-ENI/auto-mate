import type { Dayjs } from 'dayjs';

export type Role = 'user' | 'admin';
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

export type User = {
  name: string;
  picture: string;
  email: string;
  role: Role;
};

interface AutoMateUiFilterState {
  sites: string[];
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
  sites: string[];
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
  nbDoors: number;
  disponibility: boolean;
  kilometers: number;
}

export interface Route {
  departureCity: string;
  arrivalCity: string;
  remainingPlaces: number;
  departureTime: string;
  departureDate: Date;
  arrivalDate: Date;
  car: Car;
}
