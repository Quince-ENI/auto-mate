import { AutoMateState, Route } from '../interfaces';

export function selectRoutes(state: AutoMateState): Route[] {
  return state.entities.routes;
}
