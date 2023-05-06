import { useUserStore } from '../model';

export const useAuth = () => {
  const [isAuth, loginUser, registerUser, logoutUser] = useUserStore((store) => [
    store.isAuth,
    store.loginUser,
    store.registerUser,
    store.logoutUser,
  ]);

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
    isAuth,
    login,
    register,
    logout,
  };
};
