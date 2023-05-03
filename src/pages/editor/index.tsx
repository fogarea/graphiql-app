import { useAuth } from '@/entities/user';

export const EditorPage = (): JSX.Element => {
  const { logout } = useAuth();

  return (
    <>
      <h1>Editor page</h1>
      <button onClick={() => logout()}>Log out</button>
    </>
  );
};
