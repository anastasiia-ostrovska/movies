import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { MovieItem } from '@/entities/movie';
import { SkeletonText } from '@/shared/ui';

interface MovieInfoProps extends Omit<MovieItem, 'id'> {
  isLoading: boolean;
}

const MovieInfo = ({ title, year, format, isLoading }: MovieInfoProps) => {
  const releaseYearText = `Release Year: ${year}`;
  const formatText = `Format: ${format}`;

  return (
    <Box>
      <Typography noWrap variant="h5" component="h3">
        <SkeletonText isLoading={isLoading} element={title} />
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <SkeletonText isLoading={isLoading} element={releaseYearText} />
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <SkeletonText isLoading={isLoading} element={formatText} />
      </Typography>
    </Box>
  );
};

export default MovieInfo;
