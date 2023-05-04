import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/entities/user';

export const useLogout = () => {
  const logout = useAuth((store) => store.logoutUser);

  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();

    navigate('/');
  };

  return { onLogout };
};
