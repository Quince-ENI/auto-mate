export type User = {
  name: string;
  picture: string;
  email: string;
};

interface AutoMateUiState {
  filter: string;
}

interface AutoMateEntitiesState {
  isUserLogged: boolean;
  user: User;
}

export interface AutoMateState {
  ui: AutoMateUiState;
  entities: AutoMateEntitiesState;
}
