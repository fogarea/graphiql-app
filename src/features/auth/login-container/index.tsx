import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';
import { auth } from '@/shared/config';

//TODO: wrap signInWithEmailAndPassword into hook

export const LoginContainer = (): JSX.Element => {
  const login = useAuth((store) => store.setUser);

  const navigate = useNavigate();

  const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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

  return <AuthForm authUser={loginUser} label={'Sign In'} />;
};
