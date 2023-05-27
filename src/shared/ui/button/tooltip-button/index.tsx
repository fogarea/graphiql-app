import IconButton from '@mui/material/IconButton/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ReactNode } from 'react';

export const TooltipButton = ({
  title,
  onClick,
  children,
  color = 'default',
  ...rest
}: IToolButtonProps): JSX.Element => {
  return (
    <Tooltip title={title}>
      <IconButton color={color} onClick={onClick} {...rest}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

interface IToolButtonProps {
  title: string;
  onClick?: () => void;
  children?: ReactNode;
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}
