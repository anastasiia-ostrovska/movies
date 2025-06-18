import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useModalController } from '@/entities/modal';

const AddMoviesButton = () => {
  const { showModal } = useModalController();

  const handleOpenModal = () => {
    showModal({ modalVariant: 'addMovies', id: 1 });
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: 'fixed', right: 30, bottom: 30 }}
      onClick={handleOpenModal}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddMoviesButton;
