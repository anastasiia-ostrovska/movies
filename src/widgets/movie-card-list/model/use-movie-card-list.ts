import { useMoviesParams, useMoviesListQuery, CARDS_PER_PAGE } from '@/entities/movie';
import { generateFakeMoviesList } from '@/entities/movie';
import { useModalController } from '@/entities/modal';

export const useMovieCardList = () => {
  const { params } = useMoviesParams();
  const { data, isLoading, isError } = useMoviesListQuery(params);

  let movies;
  if (!isLoading && data && 'data' in data) {
    movies = data?.data;
  } else {
    movies = generateFakeMoviesList(CARDS_PER_PAGE);
  }

  const { showModal } = useModalController();
  const handleCardOpen = (id: number) => {
    showModal({ modalVariant: 'showCard', id });
  };

  return { data, movies, isLoading: isLoading || isError, handleCardOpen };
};
