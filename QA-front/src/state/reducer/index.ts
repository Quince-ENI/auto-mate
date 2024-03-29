import { PayloadAction } from '@reduxjs/toolkit';
import { AutoMateState } from '../interfaces';

export function onSetIsUserLogged(state: AutoMateState, { payload: jwtToken }: PayloadAction<string | null>): void {
  if (jwtToken) {
    state.entities.isUserLogged = true;
  }
}
