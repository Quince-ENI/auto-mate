import { AutoMateState, Route } from '../interfaces';
import { FulfilledAction } from '../redux';

export function onGetRoutesAsyncPending(state: AutoMateState): void {
  state.ui.routesLoading = true;
}

export function onGetRoutesAsyncRejected(state: AutoMateState): void {
  state.ui.routesLoading = false;
}

export function onGetRoutesAsyncFulfilled(state: AutoMateState, { payload: routes }: FulfilledAction<Route[]>): void {
  state.entities.routes = routes;
  state.ui.routesLoading = false;
}
