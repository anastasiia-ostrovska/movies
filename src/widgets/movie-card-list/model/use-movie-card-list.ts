import { useMoviesParams, useMoviesListQuery } from '@/entities/movie';
import { generateFakeMoviesList } from '@/entities/movie';
import { useModalController } from '@/entities/modal';

export const useMovieCardList = () => {
  const { params } = useMoviesParams();
  const { data, isLoading, isError } = useMoviesListQuery(params);

  let movies;
  if (!isLoading && data && 'data' in data) {
    movies = data?.data;
  } else {
    movies = generateFakeMoviesList(12);
  }

  const { showModal } = useModalController();
  const handleCardOpen = (id: number) => {
    showModal({ modalVariant: 'showCard', id });
  };

  return { movies, isLoading: isLoading || isError, handleCardOpen };
};
