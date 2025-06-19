import { type ModalProps, type ModalVariant } from '@/entities/modal';
import { MOVIE_CARD_MODAL_PROPS } from '@/features/movie-card';
import { ADD_MOVIES_MODAL_PROPS } from '@/widgets/add-movies';

type ModalItems = Record<ModalVariant, ModalProps>;

export const MODAL_VARIANTS_PROPS: ModalItems = {
  ['addMovies']: ADD_MOVIES_MODAL_PROPS,
  ['showCard']: MOVIE_CARD_MODAL_PROPS,
};
