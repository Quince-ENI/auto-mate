import { AutoMateState, Car } from '../interfaces';
import { FulfilledAction } from '../redux';

export function onGetCarsAsyncPending(state: AutoMateState): void {
  state.ui.carsLoading = true;
}

export function onGetCarsAsyncRejected(state: AutoMateState): void {
  state.ui.carsLoading = false;
}

export function onGetCarsAsyncFulfilled(state: AutoMateState, { payload: cars }: FulfilledAction<Car[]>): void {
  state.entities.cars = cars;
  state.ui.carsLoading = false;
}
