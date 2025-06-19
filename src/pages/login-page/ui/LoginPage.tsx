import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ROUTES } from '@/shared/consts';
import { Link } from 'react-router-dom';
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
        <Typography variant="body2" component="p">
          Welcome! Please log in to continue
        </Typography>
        <LoginForm />
        <Typography variant="body2" component="p" textAlign="center">
          Do not have an account yet?
          <Button component={Link} to={ROUTES.REGISTER}>
            Create account
          </Button>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
