import { useAppSelector } from '@/shared/model';
import { Modal, selectModalState, useModalController } from '@/entities/modal';
import { MODAL_VARIANTS_PROPS } from '../config/modal-variants-props';

const ModalController = () => {
  const { hideModal } = useModalController();
  const { isOpen, modalVariant } = useAppSelector(selectModalState);

  if (!isOpen || !modalVariant) return null;

  const modalProps = MODAL_VARIANTS_PROPS[modalVariant];

  return <Modal isOpen={isOpen} onClose={hideModal} {...modalProps} />;
};

export default ModalController;
