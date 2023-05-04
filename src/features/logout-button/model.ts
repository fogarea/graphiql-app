import { useAuth } from '@/entities/user';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const logout = useAuth((store) => store.logoutUser);

  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();

    navigate('/');
  };

  return { onLogout };
};
