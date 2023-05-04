import { Button } from '@mui/material';

import { useLogout } from './model';

//TODO: fix promise

export const LogoutButton = (): JSX.Element => {
  const { onLogout } = useLogout();

  return (
    <Button
      color="inherit"
      onClick={async () => {
        await onLogout();
      }}
    >
      Log out
    </Button>
  );
};
