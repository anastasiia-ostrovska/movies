import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@/shared/api';
import { sessionSlice } from '@/entities/session';

export const rootReducer = combineSlices(baseAPI, sessionSlice);
