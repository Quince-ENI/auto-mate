import { createSelector } from '@reduxjs/toolkit';
import { AutoMateState, Route } from '../interfaces';
import { selectSites } from './site.selector';

export function selectRoutes(state: AutoMateState): Route[] {
  return state.entities.routes;
}

export function selectFilterRoutes(state: AutoMateState): Route[] {
  return state.entities.routes.filter(route => state.ui.filter.sites.includes(route.departureCity));
}

export const selectFilterRoutesFree = createSelector(selectFilterRoutes, selectSites, (filteredRoutes, sites) =>
  filteredRoutes.filter(route => sites.includes(route.departureCity) && route.remainingPlaces !== 0)
);
