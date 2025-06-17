import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { MoviesParams, OrderParam, SortParam } from './types';

const initialState: MoviesParams = {
  actor: '',
  search: '',
  title: '',
  limit: 12,
  offset: 0,
  sort: 'id',
  order: 'ASC',
};

export const moviesParamsSlice = createSlice({
  name: 'moviesParams',
  initialState,
  selectors: {
    selectParams: state => state,
    selectOffset: state => state.offset,
  },
  reducers: {
    setActor: (state, action: PayloadAction<string>) => {
      state.actor = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setSort: (state, action: PayloadAction<SortParam>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<OrderParam>) => {
      state.order = action.payload;
    },
  },
});

export const { setActor, setSearch, setTitle, setOffset, setSort, setOrder } =
  moviesParamsSlice.actions;
export const { selectParams, selectOffset } = moviesParamsSlice.selectors;
