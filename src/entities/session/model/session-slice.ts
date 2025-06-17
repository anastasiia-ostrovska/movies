import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from '@/app/store';
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setTokenToLocalStorage,
} from '../lib/token-local-storage-handlers';

const initialState = {
  token: getTokenFromLocalStorage(),
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  selectors: {
    selectToken: state => state.token,
  },
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = null;
    },
  },
});

const { addToken, removeToken } = sessionSlice.actions;

export const storeAccessToken =
  (token: string): AppThunk =>
  dispatch => {
    dispatch(addToken(token));
    setTokenToLocalStorage(token);
  };

export const removeAccessToken = (): AppThunk => dispatch => {
  dispatch(removeToken());
  removeTokenFromLocalStorage();
};

export const { selectToken } = sessionSlice.selectors;
