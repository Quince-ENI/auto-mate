import { createSelector } from '@reduxjs/toolkit';
import { AutoMateState, Car } from '../interfaces';
import { selectAreFiltersEmpty, selectSitesFilter } from './common.selector';
import { selectFilterRoutes } from './routes.selector';
import { selectUser } from './user.selector';

export function selectCars(state: AutoMateState): Car[] {
  return state.entities.cars;
}

export const selectFilteredCars = createSelector(
  selectFilterRoutes,
  selectCars,
  selectAreFiltersEmpty,
  selectSitesFilter,
  (filteredRoutes, cars, areFiltersEmpty, site) => {
    if (areFiltersEmpty) return [];
    const usedCarsImmat = filteredRoutes?.map(route => route.car.immatriculation);
    console.log(usedCarsImmat);
    return cars.filter(car => !usedCarsImmat?.includes(car.immatriculation) && car.site.city === site);
  }
);

export const selectUserSiteCars = createSelector(selectCars, selectUser, (cars, user) =>
  cars.filter(car => car.site.idSite === user.site.idSite)
);
