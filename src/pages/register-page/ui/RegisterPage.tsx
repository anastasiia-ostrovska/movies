import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RegisterUserForm } from '@/features/register-user-form';

const RegisterPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh" p={2}>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: '100%', sm: 350 } }}
      >
        <Typography variant="h4" component="h1">
          Create account
        </Typography>
        <Typography variant="body2" component="p">
          Welcome! Please create your account to continue
        </Typography>
        <RegisterUserForm />
      </Stack>
    </Stack>
  );
};

export default RegisterPage;
