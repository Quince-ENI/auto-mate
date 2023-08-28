import { AutoMateState, User } from '../interfaces';
import { FulfilledAction } from '../redux';

export function onGetConnectedUserAsyncPending(state: AutoMateState): void {
  state.ui.isUserReceive = true;
}

export function onGetConnectedUserAsyncRejected(state: AutoMateState): void {
  state.ui.isUserReceive = false;
}

export function onGetConnectedUserAsyncFulfilled(state: AutoMateState, { payload: user }: FulfilledAction<User>): void {
  state.entities.user = user;
  state.ui.isUserReceive = false;
}
