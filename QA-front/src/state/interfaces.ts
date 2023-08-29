export type User = {
  name: string;
  picture: string;
  email: string;
};

interface AutoMateUiState {
  filter: string;
  carsLoading: boolean;
  routesLoading: boolean;
}

interface AutoMateEntitiesState {
  isUserLogged: boolean;
  cars: Car[];
  user: User;
  routes: Route[];
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
  departure_time: string;
  car: Car;
}
