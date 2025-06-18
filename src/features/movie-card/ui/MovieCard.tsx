import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import type { MovieItem } from '@/entities/movie';
import MovieInfo from './MovieInfo';

interface MovieCardProps extends MovieItem {
  isLoading: boolean;
  onCardClick: (id: number) => void;
}

const MovieCard = ({ id, title, year, format, isLoading, onCardClick }: MovieCardProps) => {
  return (
    <Card>
      <CardActionArea onClick={() => onCardClick(id)} sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <MovieInfo title={title} year={year} format={format} isLoading={isLoading} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
