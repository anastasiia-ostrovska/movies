import { type ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import {
  CARDS_PER_PAGE,
  type MoviesListResponse,
  type MoviesListSuccessResponse,
  selectOffset,
  setOffset,
} from '@/entities/movie';

type PageChangeHandler = (event: ChangeEvent<unknown>, page: number) => void;

export const useMoviesPagination = (data: MoviesListResponse | undefined) => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = useAppSelector(selectOffset);
  const dispatch = useAppDispatch();

  if (!data)
    return {
      currentPage: 0,
      pagesCount: 0,
      handlePageChange: () => {},
    };

  const moviesCount = (data as MoviesListSuccessResponse).meta.total;
  const pagesCount = Math.ceil(moviesCount / CARDS_PER_PAGE);

  const handlePageChange: PageChangeHandler = (_, page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
    if (page > currentPage) {
      const newOffset = offset + CARDS_PER_PAGE;
      dispatch(setOffset(newOffset));
    } else {
      const newOffset = offset - CARDS_PER_PAGE;
      dispatch(setOffset(newOffset));
    }
  };

  return { currentPage, pagesCount, handlePageChange };
};
