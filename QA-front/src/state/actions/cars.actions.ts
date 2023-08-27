import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../../api/cars';

export const getCarsAsync = createAsyncThunk('autoMate/getCarsAsync', () => getCars());
