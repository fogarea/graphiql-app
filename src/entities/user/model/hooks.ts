import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/model';
import { setUser, removeUser, selectUserData } from './slice';

export const useAuth = (): IResultAuth => {
  const { id } = useAppSelector(selectUserData);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isAuth = !!id;

  const login = (user: User): void => {
    dispatch(
      setUser({
        email: user.email,
        token: user.refreshToken,
        id: user.uid,
      })
    );

    navigate('/');
  };

  const logout = (): void => {
    dispatch(removeUser());

    navigate('/');
  };

  return {
    isAuth,
    login,
    logout,
  };
};

interface IResultAuth {
  isAuth: boolean;
  login: (user: User) => void;
  logout: () => void;
}
