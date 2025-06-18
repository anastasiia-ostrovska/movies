import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModalVariant } from '@/entities/modal';

interface ModalState {
  isOpen: boolean;
  modalVariant: ModalVariant | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalVariant: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  selectors: {
    selectModalState: state => state,
    selectIsModalOpen: state => state.isOpen,
    selectModalType: state => state.ModalVariant,
  },
  reducers: {
    openModal(state, action: PayloadAction<ModalVariant>) {
      state.isOpen = true;
      state.modalVariant = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.ModalVariant = null;
    },
  },
});

export const { selectIsModalOpen, selectModalState } = modalSlice.selectors;
export const { openModal, closeModal } = modalSlice.actions;
