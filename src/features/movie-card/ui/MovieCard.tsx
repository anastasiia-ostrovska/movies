import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { SkeletonText } from '@/shared/ui';
import type { MovieItem } from '../model/types';

interface MovieCard extends MovieItem {
  isLoading: boolean;
  onCardClick: (id) => void;
}

const MovieCard = ({ id, title, year, format, isLoading, onCardClick }: MovieCard) => {
  const releaseYearText = `Release Year: ${year}`;
  const formatText = `Format: ${format}`;

  return (
    <Card>
      <CardActionArea onClick={() => onCardClick(id)} sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography noWrap variant="h5" component="h3">
            <SkeletonText isLoading={isLoading} element={title} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <SkeletonText isLoading={isLoading} element={releaseYearText} />
            {/*{releaseYearText}*/}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <SkeletonText isLoading={isLoading} element={formatText} />
            {/*Format: {format}*/}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  // <Typography noWrap={noWrap} gutterBottom variant="h6" component="h3">
  //   <SkeletonText isLoading={isLoading} element={name} />
  // </Typography>;

  // return (
  //   <div>
  //     <div>id : {id}</div>
  //     <div>title : {title}</div>
  //     <div>year : {year}</div>
  //     <div>format : {format}</div>
  //   </div>
  // );
};

export default MovieCard;
