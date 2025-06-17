import { Routes, Route } from 'react-router';
import { MoviesPage } from '@/pages/movies-page';
import { LoginPage } from '@/pages/login-page';
import * as ROUTES from './routes';

const Routing = () => {
  return (
    <Routes>
      <Route index element={<MoviesPage />} />
      <Route path={ROUTES.MOVIES} element={<MoviesPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
