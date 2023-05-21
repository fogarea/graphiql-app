import Popover from '@mui/material/Popover';
import { ReactNode } from 'react';

export const PopoverContent = ({ onClose, isOpen, anchorEl, children }: IPopoverContentProps) => {
  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 1,
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        },
      }}
    >
      {children}
    </Popover>
  );
};

interface IPopoverContentProps {
  onClose: () => void;
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  children: ReactNode;
}
