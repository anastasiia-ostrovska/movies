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
      <Stack direction="row" justifyContent="space-between" spacing={{ xs: 1, sm: 2 }}>
        <Stack sx={{ width: 'auto' }}>
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
