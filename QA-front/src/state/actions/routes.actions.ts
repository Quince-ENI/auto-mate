import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRoute, getRoutes } from '../../api/route';
import { Route } from '../interfaces';

export const getRoutesAsync = createAsyncThunk('autoMate/getRoutesAsync', () => getRoutes());

export const createRouteAsync = createAsyncThunk(
  'backoffice/createRouteAsync',
  ({ route, userId }: { route: Partial<Route>; userId: string }) => createRoute(route, userId)
);
