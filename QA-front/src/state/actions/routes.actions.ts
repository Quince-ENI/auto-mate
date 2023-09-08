import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRoute, getRoutes, joinRoute } from '../../api/route';
import { Route } from '../interfaces';

export const getRoutesAsync = createAsyncThunk('autoMate/getRoutesAsync', () => getRoutes());

export const createRouteAsync = createAsyncThunk(
  'backoffice/createRouteAsync',
  ({ route, userId }: { route: Partial<Route>; userId: string }) => createRoute(route, userId)
);

export const joinRouteAsync = createAsyncThunk(
  'autoMate/joinRouteAsync',
  ({ routeId, userId }: { routeId: string; userId: string }) => joinRoute(routeId, userId)
);
