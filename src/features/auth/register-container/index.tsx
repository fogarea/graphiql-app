import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';
import { auth } from '@/shared/config';

//TODO: wrap createUserWithEmailAndPassword into hook

export const RegisterContainer = (): JSX.Element => {
  const login = useAuth((store) => store.setUser);

  const navigate = useNavigate();

  const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        login({
          id: user.uid,
          email: user.email,
          token: user.refreshToken,
        })
      )
      .then(() => navigate('/editor'))
      .catch((e) => {
        console.log(e);
      });
  };

  return <AuthForm authUser={registerUser} label={'Sign Up'} />;
};
