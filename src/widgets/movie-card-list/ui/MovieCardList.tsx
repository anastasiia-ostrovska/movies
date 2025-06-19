import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { MovieCard } from '@/features/movie-card/';
import { DeleteMovieButton } from '@/features/delete-movie-button';
import { useMovieCardList } from '../model/use-movie-card-list';
import { useMoviesPagination } from '../model/use-movies-pagination';
import EmptyBoxMessage from './EmptyBoxMessage';
import MovieCardListLayout from './MovieCardListLayout';

const MovieCardList = () => {
  const { data, movies, isNoMovies, isLoadingState, errorMessage, handleCardOpen } =
    useMovieCardList();
  const { currentPage, pagesCount, handlePageChange } = useMoviesPagination(data);

  if (isNoMovies) {
    return <EmptyBoxMessage />;
  }

  return (
    <MovieCardListLayout
      pagesCount={pagesCount}
      errorMessage={errorMessage}
      pagination={
        <Pagination
          size="small"
          count={pagesCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      }
      cards={movies.map(movie => {
        return (
          <Grid key={movie.id} component="li" size={{ xs: 12, sm: 6, md: 4 }}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              format={movie.format}
              year={movie.year as string}
              isLoading={isLoadingState}
              onCardClick={handleCardOpen}
              action={<DeleteMovieButton id={movie.id} isLoading={isLoadingState} />}
            />
          </Grid>
        );
      })}
    />
  );
};

export default MovieCardList;
