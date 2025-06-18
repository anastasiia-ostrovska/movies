import Grid from '@mui/material/Grid';
import { MovieCard } from '@/features/movie-card/';
import { useMovieCardList } from '../model/use-movie-card-list';
import { DeleteMovieButton } from '@/features/delete-movie-button';

const MovieCardList = () => {
  const { movies, isLoading, handleCardOpen } = useMovieCardList();

  return (
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
  );
};

export default MovieCardList;
