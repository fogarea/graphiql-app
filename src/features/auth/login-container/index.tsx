import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const LoginContainer = (): JSX.Element => {
  const { login } = useAuth();

  const loginUser = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => login(user))
      .catch((e) => {
        console.log(e);
      });
  };

  return <AuthForm authUser={loginUser} label={'Sign In'} />;
};
