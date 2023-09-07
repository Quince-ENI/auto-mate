import type { Dayjs } from 'dayjs';

export type Role = 'user' | 'admin';
export type RangeValue = [Dayjs | null, Dayjs | null] | undefined;
export type Status = 'validated' | 'pending' | 'ended';

export type User = {
  registration_number?: string;
  name: string;
  picture: string;
  mail: string;
  role: Role;
  site: Site;
};

export type Site = {
  idSite: number;
  name: string;
  address: string;
  city: string;
  departement: number;
  postal_code: number;
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
  userRoutes: Route[];
}

export interface AutoMateState {
  ui: AutoMateUiState;
  entities: AutoMateEntitiesState;
}

export interface Car {
  idCar: string;
  immatriculation: string;
  marque: string;
  modele: string;
  couleur: string;
  nb_Portes: number;
  disponibilité: number;
  nb_Km: number;
  site: Site;
}

export interface TravelUse {
  id: number;
  idRoute: number;
  registration_number: string;
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
  idCar: string;
  car: Car;
  travelUsers: TravelUse[];
}
