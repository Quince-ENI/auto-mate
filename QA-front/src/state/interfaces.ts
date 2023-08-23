import { GsiButtonConfiguration } from "@react-oauth/google"

interface AutoMateUiState {
  filter: string
}

interface AutoMateEntitiesState {
  user: {
    name: string
    picture: string
    email: string
  }
}

export interface AutoMateState {
  ui: AutoMateUiState
  entities: AutoMateEntitiesState
}
