import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getCarsAsync } from '../state/actions/cars.actions';
import { onGetCarsAsyncFulfilled, onGetCarsAsyncPending, onGetCarsAsyncRejected } from '../state/reducer/cars.reducer';
import { getRoutesAsync } from './actions/routes.actions';
import { INITIAL_STATE } from './constants';
import { onSetIsUserLogged } from './reducer';
import { onGetRoutesAsyncFulfilled, onGetRoutesAsyncPending, onGetRoutesAsyncRejected } from './reducer/routes.reducer';

const autoMateSlice = createSlice({
  name: 'autoMate',
  initialState: INITIAL_STATE,
  reducers: {
    setIsUserLogged: onSetIsUserLogged
  },
  extraReducers: builder =>
    builder
      .addCase(getCarsAsync.pending, onGetCarsAsyncPending)
      .addCase(getCarsAsync.fulfilled, onGetCarsAsyncFulfilled)
      .addCase(getCarsAsync.rejected, onGetCarsAsyncRejected)
      .addCase(getRoutesAsync.pending, onGetRoutesAsyncPending)
      .addCase(getRoutesAsync.fulfilled, onGetRoutesAsyncFulfilled)
      .addCase(getRoutesAsync.rejected, onGetRoutesAsyncRejected)
});

export const actions = {
  ...autoMateSlice.actions
};

const { reducer } = autoMateSlice;
export const backofficeReducer = reducer;
export const store = configureStore({ reducer });

export type AutoMateDispatch = typeof store.dispatch;

export function useAutoMateDispatch(): AutoMateDispatch {
  return useDispatch<AutoMateDispatch>();
}
