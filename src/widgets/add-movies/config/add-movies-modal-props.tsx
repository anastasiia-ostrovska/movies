import type { ModalProps } from '@/entities/modal';
import AddMoviesAccordion from '../ui/AddMoviesAccordion';

export const ADD_MOVIES_MODAL_PROPS: ModalProps = {
  title: 'Add Movies',
  withTitleDivider: true,
  content: <AddMoviesAccordion />,
};
