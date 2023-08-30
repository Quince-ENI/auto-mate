import { AutoMateState } from '../interfaces';

export function selectSites(state: AutoMateState): string[] {
  return state.entities.sites;
}
