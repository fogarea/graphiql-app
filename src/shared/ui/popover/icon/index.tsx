import IconButton from '@mui/material/IconButton';
import { ReactNode, MouseEvent } from 'react';

export const PopoverIcon = ({ onOpen, children }: IPopoverIconProps) => {
  return (
    <IconButton
      onClick={onOpen}
      sx={{
        padding: 0,
        width: 28,
        height: 20,
        margin: { xs: '0', sm: '0 10px' },
      }}
    >
      {children}
    </IconButton>
  );
};

interface IPopoverIconProps {
  onOpen: (event: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}
