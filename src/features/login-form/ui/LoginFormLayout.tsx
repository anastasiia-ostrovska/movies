import { type ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

interface LoginFormLayoutProps {
  emailInput: ReactElement;
  passwordInput: ReactElement;
  submitButton: ReactElement;
  formErrorMessage?: string;
}

const LoginFormLayout = ({
  emailInput,
  passwordInput,
  submitButton,
  formErrorMessage = '',
}: LoginFormLayoutProps) => {
  return (
    <Paper sx={{ p: 2, width: '100%', maxWidth: 350 }}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          {emailInput}
          {passwordInput}
          {formErrorMessage && (
            <Alert variant="outlined" severity="error">
              {formErrorMessage}
            </Alert>
          )}
        </Stack>
        {submitButton}
      </Stack>
    </Paper>
  );
};

export default LoginFormLayout;
