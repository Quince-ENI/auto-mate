import { AutoMateState, RangeValue } from '../interfaces';

export function selectAreFiltersEmpty(state: AutoMateState): boolean {
  return state.ui.filter.sites.length === 0;
}

export function selectSitesFilter(state: AutoMateState): string[] {
  return state.ui.filter.sites;
}

export function selectDatesFilter(state: AutoMateState): RangeValue {
  return state.ui.filter.dates;
}
