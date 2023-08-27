export type User = {
  name: string;
  picture: string;
  email: string;
};

interface AutoMateUiState {
  filter: string;
  carsLoading: boolean;
}

interface AutoMateEntitiesState {
  isUserLogged: boolean;
  cars: Car[];
  user: User;
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
