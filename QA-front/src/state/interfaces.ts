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
  site: string;
}

export interface Route {
  user: string;
  status: Status;
  departureCity: string;
  arrivalCity: string;
  remainingPlaces: number;
  departureTime: string;
  departureDate: Date;
  arrivalDate: Date;
  car: Car;
}
