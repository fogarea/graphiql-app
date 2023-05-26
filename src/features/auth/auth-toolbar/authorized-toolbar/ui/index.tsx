import PersonIcon from '@mui/icons-material/Person';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { MouseEvent, useState } from 'react';

import { LogoutButton } from '@/features/auth';
import { useAuth, UserCard } from '@/entities/user';
import { PopoverContent, PopoverIcon } from '@/shared/ui';

export const AuthorizedToolbar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const { user } = useAuth();

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <PopoverIcon onOpen={handleOpen}>
        {user.email && (
          <Avatar sx={{ width: 28, height: 28, opacity: '0.8' }}>
            <PersonIcon />
          </Avatar>
        )}
      </PopoverIcon>

      <PopoverContent onClose={handleClose} isOpen={isOpen} anchorEl={anchorEl}>
        {user.email && <UserCard email={user.email} />}
        <Divider sx={{ borderStyle: 'dashed', my: 1 }} />
        <LogoutButton onLogout={handleClose} />
      </PopoverContent>
    </>
  );
};
