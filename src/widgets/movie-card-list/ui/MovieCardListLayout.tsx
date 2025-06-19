import type { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

interface MovieCardListLayoutProps {
  pagesCount: number;
  errorMessage: string;
  pagination: ReactElement;
  cards: ReactElement[];
}

const MovieCardListLayout = ({
  pagesCount,
  errorMessage,
  pagination,
  cards,
}: MovieCardListLayoutProps) => {
  const showPagination = !!pagesCount && pagesCount > 1;

  return (
    <Stack alignItems="center" spacing={2}>
      {showPagination && pagination}
      {errorMessage && (
        <Alert variant="outlined" severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      )}
      <Grid container component="ul" rowSpacing={2} columnSpacing={2} width="100%">
        {cards}
      </Grid>
    </Stack>
  );
};

export default MovieCardListLayout;
