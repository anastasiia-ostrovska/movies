import { configureStore } from '@reduxjs/toolkit';
import { baseAPI } from '@/shared/api';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
});
