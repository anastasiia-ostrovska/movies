import { generateFakeMovie, type MovieWithActors, useMovieByIdQuery } from '@/entities/movie';
import type { FakeMovie } from '@/entities/movie';
import { selectModalState } from '@/entities/modal';
import { useAppSelector } from '@/shared/model';

interface UseMovieCardReturn {
  movie: MovieWithActors | FakeMovie;
  isLoading: boolean;
  isError: boolean;
}

export const useMovieCard = (): UseMovieCardReturn => {
  const { modalVariant, id } = useAppSelector(selectModalState);
  const isShowCard = modalVariant === 'showCard' && id;

  const { data, isLoading, isError } = useMovieByIdQuery(id as number, {
    skip: !isShowCard,
  });

  let movie: MovieWithActors | FakeMovie;
  if (!isLoading && data && 'data' in data) {
    movie = data?.data as MovieWithActors;
  } else {
    movie = generateFakeMovie();
  }

  return { movie, isLoading, isError };
};
