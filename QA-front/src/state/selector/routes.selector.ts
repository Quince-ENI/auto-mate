import { createSelector } from '@reduxjs/toolkit';
import { AutoMateState, Route } from '../interfaces';
import { selectDatesFilter, selectSitesFilter } from './common.selector';
import { selectSites } from './site.selector';
import { selectUser } from './user.selector';

export function selectRoutes(state: AutoMateState): Route[] {
  return state.entities.routes;
}

export const selectFilterRoutes = createSelector(
  selectRoutes,
  selectSitesFilter,
  selectDatesFilter,
  (routes, site, dates) =>
    routes.filter(route => site === route.departure_city && dates && dates[0]?.isSame(route.departure_time, 'day'))
);

export const selectFilterRoutesFree = createSelector(selectFilterRoutes, selectSites, (filteredRoutes, sites) => {
  const sitesCity = sites.map(site => site.city);
  return filteredRoutes.filter(route => sitesCity.includes(route.departure_city) && route.remaining_seats !== 0);
});

export const selectUserRoutes = createSelector(selectRoutes, selectUser, (routes, user) =>
  routes.filter(route => route.user === user.mail)
);

export const selectPendingRoutes = createSelector(selectRoutes, routes =>
  routes.filter(route => route.status === 'pending')
);
