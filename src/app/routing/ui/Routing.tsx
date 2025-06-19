import { Routes, Route } from 'react-router';
import { ROUTES } from '@/shared/consts';
import { MoviesPage } from '@/pages/movies-page';
import { LoginPage } from '@/pages/login-page';
import { NotFoundPage } from '@/pages/not-found-page';
import ProtectedRoute from './ProtectedRoute';

const Routing = ({ isAuth }: { isAuth: boolean }) => {
  const AuthorizedMoviesPage = (
    <ProtectedRoute isAllowed={isAuth} redirectPath={ROUTES.LOGIN}>
      <MoviesPage />
    </ProtectedRoute>
  );

  return (
    <Routes>
      <Route index element={AuthorizedMoviesPage} />
      <Route path={ROUTES.MOVIES} element={AuthorizedMoviesPage} />
      <Route
        path={ROUTES.LOGIN}
        element={
          <ProtectedRoute isAllowed={!isAuth} redirectPath={ROUTES.MOVIES}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
