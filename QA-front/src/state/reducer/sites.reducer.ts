import { AutoMateState, Site } from '../interfaces';
import { FulfilledAction } from '../redux';

export function onGetSitesAsyncPending(state: AutoMateState): void {
  state.ui.isUserReceive = true;
}

export function onGetSitesAsyncRejected(state: AutoMateState): void {
  state.ui.isUserReceive = false;
}

export function onGetSitesAsyncFulfilled(state: AutoMateState, { payload: sites }: FulfilledAction<Site[]>): void {
  state.entities.sites = sites;
  state.ui.isUserReceive = false;
}
