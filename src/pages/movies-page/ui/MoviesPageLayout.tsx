import type { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';

interface MoviesPageLayoutProps {
  searchInput: ReactElement;
  sortButton: ReactElement;
  moviesList: ReactElement;
  addMoviesButton: ReactElement;
  modalController: ReactElement;
}

const MoviesPageLayout = ({
  searchInput,
  sortButton,
  moviesList,
  addMoviesButton,
  modalController,
}: MoviesPageLayoutProps) => {
  return (
    <Stack spacing={4} alignItems="center" px={{ xs: 2, sm: 4 }} py={8}>
      <Stack flex={1} spacing={4} sx={{ width: '100%', maxWidth: 900, m: 0, p: 0 }}>
        <AppBar sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={1}
            sx={{ alignSelf: 'end', width: '100%' }}
          >
            {searchInput}
            {sortButton}
          </Stack>
        </AppBar>
        <Stack component="main">{moviesList}</Stack>
      </Stack>
      {addMoviesButton}
      {modalController}
    </Stack>
  );
};

export default MoviesPageLayout;
