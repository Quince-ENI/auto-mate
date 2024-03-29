import { AutoMateState, RangeValue } from '../interfaces';

export function selectAreFiltersEmpty(state: AutoMateState): boolean {
  if (state.ui.filter.dates === undefined) return true;
  return state.ui.filter.site === '' || state.ui.filter.dates.includes(null);
}

export function selectSitesFilter(state: AutoMateState): string {
  return state.ui.filter.site;
}

export function selectDatesFilter(state: AutoMateState): RangeValue {
  return state.ui.filter.dates;
}
