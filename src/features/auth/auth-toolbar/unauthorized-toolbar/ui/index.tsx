import { LoginButton, RegisterButton } from '@/features/auth';

export const UnauthorizedToolbar = (): JSX.Element => {
  return (
    <>
      <LoginButton />
      <RegisterButton />
    </>
  );
};
