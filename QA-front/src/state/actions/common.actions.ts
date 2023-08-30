import { PayloadAction } from '@reduxjs/toolkit';
import { AutoMateState } from '../interfaces';

export function onSetFilterSite(state: AutoMateState, { payload: sites }: PayloadAction<string[]>): void {
  state.ui.filter.sites = sites;
}
