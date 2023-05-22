import { shallow } from 'zustand/shallow';

import { useUserStore } from '../model';

export const useAuth = () => {
  const [isLoading, isAuth, error, user, loginUser, registerUser, logoutUser] = useUserStore(
    (store) => [
      store.isLoading,
      store.isAuth,
      store.error,
      store.user,
      store.loginUser,
      store.registerUser,
      store.logoutUser,
    ],
    shallow
  );

  const login = async (email: string, password: string) => {
    await loginUser(email, password);
  };

  const register = async (email: string, password: string) => {
    await registerUser(email, password);
  };

  const logout = async (cb: () => void) => {
    await logoutUser(cb);
  };

  return {
    isLoading,
    isAuth,
    error,
    user,
    login,
    register,
    logout,
  };
};
