import { AutoMateState } from '../interfaces';

export function selectAreFiltersEmpty(state: AutoMateState): boolean {
  return state.ui.filter.sites.length === 0;
}
