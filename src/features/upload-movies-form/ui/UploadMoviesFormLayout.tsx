import type { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

interface UploadMoviesFormLayoutProps {
  uploadButton: ReactElement;
  submitButton: ReactElement;
  fileName: string;
  successMessage: string;
}

const UploadMoviesFormLayout = ({
  uploadButton,
  submitButton,
  fileName,
  successMessage,
}: UploadMoviesFormLayoutProps) => {
  return (
    <Stack spacing={3}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: { xs: 'center', sm: 'baseline' },
        }}
      >
        <Stack sx={{ width: { xs: '100%', sm: 'auto' } }}>
          {uploadButton}
          {fileName && (
            <Typography variant="caption" component="p" color="text.secondary">
              {fileName}
            </Typography>
          )}
        </Stack>
        {submitButton}
      </Stack>
      {successMessage && (
        <Alert variant="outlined" severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      )}
    </Stack>
  );
};

export default UploadMoviesFormLayout;
