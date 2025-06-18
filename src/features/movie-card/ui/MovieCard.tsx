import type { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import type { MovieItem } from '@/entities/movie';
import MovieInfo from './MovieInfo';

interface MovieCardProps extends MovieItem {
  isLoading: boolean;
  onCardClick: (id: number) => void;
  action?: ReactNode;
}

const MovieCard = ({
  id,
  title,
  year,
  format,
  isLoading,
  onCardClick,
  action = null,
}: MovieCardProps) => {
  return (
    <Card sx={{ display: 'flex', height: '100%', width: '100%' }}>
      <CardActionArea onClick={() => onCardClick(id)} sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <MovieInfo title={title} year={year} format={format} isLoading={isLoading} />
        </CardContent>
      </CardActionArea>
      {action}
    </Card>
  );
};

export default MovieCard;
