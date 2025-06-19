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

  if (!data || 'error' in data)
    return {
      currentPage: 0,
      pagesCount: 0,
      handlePageChange: () => {},
    };

  const handlePageChange: PageChangeHandler = (_, page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }

    let newOffset: number;
    const diff = Math.abs(page - currentPage) * CARDS_PER_PAGE;

    if (page > currentPage) {
      newOffset = offset + diff;
      dispatch(setOffset(newOffset));
    } else {
      newOffset = offset - diff;
      dispatch(setOffset(newOffset));
    }
  };

  const moviesCount = (data as MoviesListSuccessResponse).meta.total;
  const pagesCount = Math.ceil(moviesCount / CARDS_PER_PAGE);

  return { currentPage, pagesCount, handlePageChange };
};
