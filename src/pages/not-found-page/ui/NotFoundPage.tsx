import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/consts';
import { NOT_FOUND_PAGE_TEXT } from '../config/not-found-helper-text';

const NotFoundPage = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        px: 3,
      }}
    >
      <Alert variant="outlined" severity="warning" sx={{ width: '100%' }}>
        {NOT_FOUND_PAGE_TEXT.helper}
      </Alert>
      <Button component={Link} to={ROUTES.MOVIES}>
        {NOT_FOUND_PAGE_TEXT.button}
      </Button>
    </Stack>
  );
};

export default NotFoundPage;
