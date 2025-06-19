import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LoginForm } from '@/features/login-form';

const LoginPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh" p={2}>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: '100%', sm: 350 } }}
      >
        <Typography variant="h4" component="h1">
          Log in
        </Typography>
        <Typography variant="body" component="p">
          Welcome! Please log in to continue
        </Typography>
        <LoginForm />
      </Stack>
    </Stack>
  );
};

export default LoginPage;
