import { type ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

interface AddMovieFormLayoutProps {
  titleInput: ReactElement;
  yearInput: ReactElement;
  formatInput: ReactElement;
  actorsInput: ReactElement;
  submitButton: ReactElement;
  formErrorMessage?: string;
  successMessage?: string;
}

const AddMovieFormLayout = ({
  titleInput,
  yearInput,
  formatInput,
  actorsInput,
  submitButton,
  formErrorMessage = '',
  successMessage = '',
}: AddMovieFormLayoutProps) => {
  return (
    <Stack spacing={3} alignItems="center" width="100%">
      <Stack spacing={2} width="inherit">
        {titleInput}
        {yearInput}
        {formatInput}
        {actorsInput}
        {formErrorMessage && (
          <Alert variant="outlined" severity="error">
            {formErrorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert variant="outlined" severity="success" sx={{ width: '100%' }}>
            {successMessage}
          </Alert>
        )}
      </Stack>
      {submitButton}
    </Stack>
  );
};

export default AddMovieFormLayout;
