import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModalDetails } from './types';

interface ModalState extends ModalDetails {
  isOpen: boolean;
}

const initialState: ModalState = {
  id: null,
  isOpen: false,
  modalVariant: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  selectors: {
    selectModalState: state => state,
    selectModalId: state => state.id,
    selectModalType: state => state.modalVariant,
    selectIsModalOpen: state => state.isOpen,
  },
  reducers: {
    openModal(state, action: PayloadAction<ModalDetails>) {
      const { id, modalVariant } = action.payload;

      state.isOpen = true;
      state.modalVariant = modalVariant;
      state.id = id;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalVariant = null;
      state.id = null;
    },
  },
});

export const { selectIsModalOpen, selectModalState, selectModalId } = modalSlice.selectors;
export const { openModal, closeModal } = modalSlice.actions;
