import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { MovieCard } from '@/features/movie-card/';
import { DeleteMovieButton } from '@/features/delete-movie-button';
import { useMovieCardList } from '../model/use-movie-card-list';
import { useMoviesPagination } from '../model/use-movies-pagination';

const MovieCardList = () => {
  const { data, movies, isLoading, handleCardOpen } = useMovieCardList();
  const { currentPage, pagesCount, handlePageChange } = useMoviesPagination(data);

  return (
    <Stack alignItems="center" spacing={2}>
      {!!pagesCount && (
        <Pagination
          size="small"
          count={pagesCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      )}
      <Grid container component="ul" rowSpacing={2} columnSpacing={2}>
        {movies.map(movie => {
          return (
            <Grid key={movie.id} component="li" size={{ xs: 12, sm: 6, md: 4 }}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                format={movie.format}
                year={movie.year as string}
                isLoading={isLoading}
                onCardClick={handleCardOpen}
                action={<DeleteMovieButton id={movie.id} />}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default MovieCardList;
