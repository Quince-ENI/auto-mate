interface AutoMateUiState {
  filter: string
}

interface AutoMateEntitiesState {
  carName: string
}

export interface AutoMateState {
  ui: AutoMateUiState
  entities: AutoMateEntitiesState
}
