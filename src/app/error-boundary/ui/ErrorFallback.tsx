import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorFallback = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        px: 3,
      }}
      role="error status"
      aria-label="Unexpected error"
    >
      <Alert variant="outlined" severity="error" sx={{ width: '100%' }}>
        Looks like some error occurred. Please, try refreshing page.
      </Alert>
    </Stack>
  );
};

export default ErrorFallback;
