import { AutoMateState, User } from '../interfaces';

export function selectUserRole(state: AutoMateState): string {
  return state.entities.user.role;
}

export function selectIsUserLogged(state: AutoMateState): boolean | undefined {
  return state.entities.isUserLogged;
}

export function selectUser(state: AutoMateState): User {
  return state.entities.user;
}
