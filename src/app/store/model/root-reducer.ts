import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@/shared/api';

export const rootReducer = combineSlices(baseAPI);
