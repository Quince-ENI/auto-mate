import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSites } from '../../api/sites';

export const getSitesAsync = createAsyncThunk('autoMate/getSitesAsync', () => getSites());
