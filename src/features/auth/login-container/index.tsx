import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const LoginContainer = (): JSX.Element => {
  const loginUser = useAuth((store) => store.loginUser);

  const navigate = useNavigate();

  const loginUserHandler = async (email: string, password: string) => {
    await loginUser(email, password);

    navigate('/editor');
  };

  return <AuthForm authUser={loginUserHandler} label={'Sign In'} />;
};
