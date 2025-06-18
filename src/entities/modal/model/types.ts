import type { ReactElement, ReactNode } from 'react';

export interface ModalProps {
  title: ReactNode;
  content: ReactElement;
  actions?: ReactNode;
  withTitleDivider?: boolean;
  withActionsDivider?: boolean;
}

export type ModalVariant = 'addMovies' | 'showCard';
