import type { ModalProps } from '@/entities/modal';
import MovieCardDetailed from '../ui/MovieCardDetailed';

export const MOVIE_CARD_MODAL_PROPS: ModalProps = {
  title: 'Detailed info',
  withTitleDivider: true,
  content: <MovieCardDetailed />,
};
