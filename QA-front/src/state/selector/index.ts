import { AutoMateState, User } from '../interfaces';

export function selectIsUserLogged(state: AutoMateState): boolean {
  return state.entities.isUserLogged;
}

export function selectUser(state: AutoMateState): User {
  return state.entities.user;
}
