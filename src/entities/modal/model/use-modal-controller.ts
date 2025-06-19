import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/model';
import { closeModal, openModal } from './modal-slice';
import type { ModalDetails } from './types';

type ShowModalHandler = (modalVariant: ModalDetails) => void;

interface ModalControllerResult {
  showModal: ShowModalHandler;
  hideModal: () => void;
}

export const useModalController = (): ModalControllerResult => {
  const dispatch = useAppDispatch();

  const showModal: ShowModalHandler = useCallback(
    modalType => {
      dispatch(openModal(modalType));
    },
    [dispatch]
  );

  const hideModal = useCallback(() => dispatch(closeModal()), [dispatch]);

  return { showModal, hideModal };
};
