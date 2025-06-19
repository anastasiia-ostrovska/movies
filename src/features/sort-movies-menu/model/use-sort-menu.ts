import { useState, type MouseEvent } from 'react';
import { type SortParam, setSort, setOrder } from '@/entities/movie';
import { useAppDispatch } from '@/shared/model';

export const useSortMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSortClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();
  const handleSortItemClick = (param: SortParam) => {
    handleMenuClose();
    
    dispatch(setSort(param));
    if (param === 'id') {
      dispatch(setOrder('DESC'));
    } else {
      dispatch(setOrder('ASC'));
    }
  };

  return {
    anchorEl,
    open,
    handleSortClick,
    handleMenuClose,
    handleSortItemClick,
  };
};
