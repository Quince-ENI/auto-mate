import { PayloadAction } from '@reduxjs/toolkit';
import { AutoMateState, RangeValue } from '../interfaces';

export function onSetFilterSite(state: AutoMateState, { payload: site }: PayloadAction<string>): void {
  state.ui.filter.site = site;
}

export function onSetFilterDates(state: AutoMateState, { payload: dates }: PayloadAction<RangeValue>): void {
  state.ui.filter.dates = dates;
}
