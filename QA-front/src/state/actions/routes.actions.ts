import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRoutes } from '../../api/route';

export const getRoutesAsync = createAsyncThunk('autoMate/getRoutesAsync', () => getRoutes());
