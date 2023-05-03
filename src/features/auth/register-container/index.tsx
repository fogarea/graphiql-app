import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const RegisterContainer = (): JSX.Element => {
  const registerUser = useAuth((store) => store.registerUser);

  const navigate = useNavigate();

  const registerUserHandler = async (email: string, password: string) => {
    await registerUser(email, password);

    navigate('/editor');
  };

  return <AuthForm authUser={registerUserHandler} label={'Sign Up'} />;
};
