export const generateFakeMoviesList = (count: number): MovieItem[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `movie-${index}`,
    title: '',
    year: '',
    format: '',
  }));
