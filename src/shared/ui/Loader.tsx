import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
      role="status"
      aria-label="Loading page"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
