import { PayloadAction } from '@reduxjs/toolkit';
import { AutoMateState, RangeValue } from '../interfaces';

export function onSetFilterSite(state: AutoMateState, { payload: sites }: PayloadAction<string[]>): void {
  state.ui.filter.sites = sites;
}

export function onSetFilterDates(state: AutoMateState, { payload: dates }: PayloadAction<RangeValue>): void {
  state.ui.filter.dates = dates;
}
