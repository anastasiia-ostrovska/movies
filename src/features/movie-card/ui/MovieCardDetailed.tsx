import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Loader } from '@/shared/ui';
import MovieInfo from './MovieInfo';
import { useMovieCard } from '@/features/movie-card/model/use-movie-card';

const MovieCardDetailed = () => {
  const { movie, isLoading, isError } = useMovieCard();

  if (isLoading || isError) {
    return (
      <Stack sx={{ width: 300, height: 200 }}>
        <Loader />
      </Stack>
    );
  }

  return (
    <Stack sx={{ maxWidth: 400 }}>
      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <MovieInfo
          isLoading={isLoading}
          title={movie.title}
          year={movie.year as string}
          format={movie.format}
        />
        <Divider />
        <Typography noWrap variant="subtitle1" component="p">
          Actors:
        </Typography>
        <Stack flexWrap="wrap" direction="row" gap={1}>
          {movie.actors.map(actor => (
            <Chip
              key={actor.id}
              label={actor.name}
              variant="outlined"
              sx={{ width: 'fit-content' }}
            />
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default MovieCardDetailed;
