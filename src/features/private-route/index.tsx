import { Navigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';

export const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

interface IPrivateRouteProps {
  children: JSX.Element;
}
