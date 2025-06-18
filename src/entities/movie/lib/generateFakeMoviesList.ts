import type { MovieItem } from '@/entities/movie';

export const generateFakeMoviesList = (count: number): MovieItem[] =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    title: '',
    year: '',
    format: '',
  }));
