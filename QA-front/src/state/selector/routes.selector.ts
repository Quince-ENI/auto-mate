import { createSelector } from '@reduxjs/toolkit';
import { AutoMateState, Route } from '../interfaces';
import { selectDatesFilter, selectSitesFilter } from './common.selector';
import { selectSites } from './site.selector';

export function selectRoutes(state: AutoMateState): Route[] {
  return state.entities.routes;
}

export const selectFilterRoutes = createSelector(
  selectRoutes,
  selectSitesFilter,
  selectDatesFilter,
  (routes, sites, dates) =>
    routes.filter(
      route =>
        sites.includes(route.departureCity) &&
        dates &&
        dates[0]?.isBefore(route.departureCity) &&
        dates[1]?.isAfter(route.departureCity)
    )
);

export const selectFilterRoutesFree = createSelector(selectFilterRoutes, selectSites, (filteredRoutes, sites) =>
  filteredRoutes.filter(route => sites.includes(route.departureCity) && route.remainingPlaces !== 0)
);
