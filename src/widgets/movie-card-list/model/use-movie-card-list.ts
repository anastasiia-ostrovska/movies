import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_ERROR_MESSAGES } from '@/shared/configs';
import { useMoviesParams, useMoviesListQuery, CARDS_PER_PAGE } from '@/entities/movie';
import { generateFakeMoviesList } from '@/entities/movie';
import { useModalController } from '@/entities/modal';

export const useMovieCardList = () => {
  const { params } = useMoviesParams();
  const { data, isLoading, isError } = useMoviesListQuery(params);

  // Error state
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isError || (!!data && 'error' in data)) {
      setErrorMessage(DEFAULT_ERROR_MESSAGES.unexpected);
    } else {
      setErrorMessage('');
    }
  }, [data, isError]);

  // Loading state
  const isLoadingState = isLoading || isError || (!!data && 'error' in data);

  // Movie list
  let movies;
  if (!isLoading && data && 'data' in data) {
    movies = data?.data;
  } else {
    movies = generateFakeMoviesList(CARDS_PER_PAGE);
  }

  // Check if no movies
  const isNoMovies = data && !errorMessage && !movies.length;

  // onClick modal handler
  const { showModal } = useModalController();
  const handleCardOpen = useCallback(
    (id: number) => {
      showModal({ modalVariant: 'showCard', id });
    },
    [showModal]
  );

  return { data, movies, isNoMovies, isLoadingState, errorMessage, handleCardOpen };
};
