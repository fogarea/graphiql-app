import { useUserStore } from '../model';
import { shallow } from 'zustand/shallow';

export const useAuth = () => {
  const [isLoading, isAuth, error, loginUser, registerUser, logoutUser] = useUserStore(
    (store) => [
      store.isLoading,
      store.isAuth,
      store.error,
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
    login,
    register,
    logout,
  };
};
