import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MOVIE_LIST_TEXT } from '../config/movie-list-text';

const EmptyBoxMessage = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Typography variant="h3" component="p" sx={{ mt: 5 }} color="textDisabled">
        {MOVIE_LIST_TEXT.empty}
      </Typography>
    </Stack>
  );
};

export default EmptyBoxMessage;
