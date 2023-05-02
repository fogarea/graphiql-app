import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { AuthForm } from '../ui';
import { useAuth } from '@/entities/user';

export const RegisterContainer = (): JSX.Element => {
  const { login } = useAuth();

  const registerUser = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => login(user))
      .catch((e) => {
        console.log(e);
      });
  };

  return <AuthForm authUser={registerUser} label={'Sign Up'} />;
};
