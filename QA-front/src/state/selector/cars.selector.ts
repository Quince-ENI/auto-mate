import { createSelector } from '@reduxjs/toolkit';
import { AutoMateState, Car } from '../interfaces';
import { selectAreFiltersEmpty } from './common.selector';
import { selectFilterRoutes } from './routes.selector';

export function selectCars(state: AutoMateState): Car[] {
  return state.entities.cars;
}

export const selectFilteredCars = createSelector(
  selectFilterRoutes,
  selectCars,
  selectAreFiltersEmpty,
  (filteredRoutes, cars, areFiltersEmpty) => {
    if (areFiltersEmpty) return [];
    const usedCarsImmat = filteredRoutes?.map(route => route.car.immatriculation);
    return cars.filter(car => !usedCarsImmat?.includes(car.immatriculation));
  }
);
