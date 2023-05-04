import { Button } from '@mui/material';

import { useLogout } from './model';
import { onPromise } from '@/shared/lib';

export const LogoutButton = (): JSX.Element => {
  const { onLogout } = useLogout();

  return (
    <Button color="inherit" onClick={onPromise(onLogout)}>
      Log out
    </Button>
  );
};
