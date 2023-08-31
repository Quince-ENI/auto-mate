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
  (routes, site, dates) =>
    routes.filter(route => site === route.departureCity && dates && dates[0]?.isSame(route.departureDate, 'day'))
);

export const selectFilterRoutesFree = createSelector(selectFilterRoutes, selectSites, (filteredRoutes, sites) =>
  filteredRoutes.filter(route => sites.includes(route.departureCity) && route.remainingPlaces !== 0)
);
