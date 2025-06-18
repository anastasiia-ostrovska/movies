import Stack from '@mui/material/Stack';
import { useModalController } from '@/entities/modal';
import Button from '@mui/material/Button';
import { ModalController } from '@/app/modal-controller';
import { MovieCardList } from '@/widgets/movie-card-list';
import { SortMoviesMenu } from '@/features/sort-movies-menu';

const MoviesPage = () => {
  const { showModal } = useModalController();

  const handleOpenModal = () => {
    showModal({ modalVariant: 'addMovies', id: 1 });
  };

  return (
    <Stack spacing={4} alignItems="center" p={{ xs: 2, sm: 4, md: 8 }}>
      <SortMoviesMenu />
      <Button onClick={handleOpenModal}>Show Add Movies</Button>
      <MovieCardList />
      <ModalController />
    </Stack>
  );
};

export default MoviesPage;
