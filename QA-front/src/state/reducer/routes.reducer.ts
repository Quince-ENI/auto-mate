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

export function onCreateRouteAsyncPending(state: AutoMateState): void {
  state.ui.routesLoading = true;
}

export function onCreateRouteAsyncRejected(state: AutoMateState): void {
  state.ui.routesLoading = true;
}

export function onCreateRouteAsyncFulfilled(
  state: AutoMateState,
  { payload: routesResponse }: FulfilledAction<Route>
): void {
  state.entities.routes = [...state.entities.routes, routesResponse];
  state.ui.routesLoading = false;
}
