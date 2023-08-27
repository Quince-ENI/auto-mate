import { AutoMateState, Car } from '../interfaces';

export function selectCars(state: AutoMateState): Car[] {
  return state.entities.cars;
}
