import { type ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

interface RegisterUserFormLayoutProps {
  emailInput: ReactElement;
  nameInput: ReactElement;
  passwordInput: ReactElement;
  confirmPasswordInput: ReactElement;
  submitButton: ReactElement;
  formErrorMessage?: string;
}

const RegisterUserFormLayout = ({
  emailInput,
  nameInput,
  passwordInput,
  confirmPasswordInput,
  submitButton,
  formErrorMessage = '',
}: RegisterUserFormLayoutProps) => {
  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          {emailInput}
          {nameInput}
          {passwordInput}
          {confirmPasswordInput}
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

export default RegisterUserFormLayout;
