import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/entities/user';
import { TypeAppRoute } from '@/shared/config';

export const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element => {
  const location = useLocation();

  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={TypeAppRoute.Login} state={{ from: location }} />;
  }

  return children;
};

interface IPrivateRouteProps {
  children: JSX.Element;
}
