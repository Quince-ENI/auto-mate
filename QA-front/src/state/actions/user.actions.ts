import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';

export const getConnectedUserAsync = createAsyncThunk('autoMate/getConnectedUserAsync', (email: string) =>
  getUser(email)
);
