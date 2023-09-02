import { AutoMateState, Site } from '../interfaces';

export function selectSites(state: AutoMateState): Site[] {
  return state.entities.sites;
}
