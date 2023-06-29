interface AutoMateUiState {
  filter: string
}

interface AutoMateEntitiesState {
  user: boolean
}

export interface AutoMateState {
  ui: AutoMateUiState
  entities: AutoMateEntitiesState
}
