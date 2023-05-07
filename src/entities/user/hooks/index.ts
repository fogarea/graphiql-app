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
    try {
      await loginUser(email, password);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await registerUser(email, password);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
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
