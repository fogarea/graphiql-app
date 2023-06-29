import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import { ReactNode, MouseEvent } from 'react';

export const PopoverIcon = ({ onOpen, children }: IPopoverIconProps) => {
  return <PopoverIconButton onClick={onOpen}>{children}</PopoverIconButton>;
};

interface IPopoverIconProps {
  onOpen: (event: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}

const PopoverIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  width: 28,
  height: 20,
  marginLeft: '20px',
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  },
}));
