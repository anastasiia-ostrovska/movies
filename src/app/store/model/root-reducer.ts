import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@/shared/api';
import { sessionSlice } from '@/entities/session';
import { moviesParamsSlice } from '@/entities/movie';

export const rootReducer = combineSlices(baseAPI, sessionSlice, moviesParamsSlice);
