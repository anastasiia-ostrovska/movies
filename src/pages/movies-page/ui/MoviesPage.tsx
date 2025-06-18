import Stack from '@mui/material/Stack';
import { ModalController } from '@/app/modal-controller';
import { MovieCardList } from '@/widgets/movie-card-list';
import { SortMoviesMenu } from '@/features/sort-movies-menu';
import { AddMoviesButton } from '@/features/add-movies-button';

const MoviesPage = () => {
  return (
    <Stack spacing={4} alignItems="center" p={{ xs: 2, sm: 4, md: 4 }}>
      <Stack sx={{ width: '100%', maxWidth: 900, m: 0, p: 0 }}>
        <Stack sx={{ alignSelf: 'end', mb: 1 }}>
          <SortMoviesMenu />
        </Stack>
        <MovieCardList />
      </Stack>
      <AddMoviesButton />
      <ModalController />
    </Stack>
  );
};

export default MoviesPage;
