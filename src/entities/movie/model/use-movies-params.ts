import { useAppSelector } from '@/shared/model';
import { selectParams, selectOffset } from './movies-params-slice';

export const useMoviesParams = () => {
  const params = useAppSelector(selectParams);
  const offset = useAppSelector(selectOffset);

  return { params, offset };
};
