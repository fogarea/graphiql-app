import IconButton from '@mui/material/IconButton/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ReactNode } from 'react';

export const TooltipButton = ({
  title,
  onClick,
  children,
  isDisabled,
  color = 'default',
  ...rest
}: IToolButtonProps): JSX.Element => {
  return (
    <Tooltip title={title}>
      <span>
        <IconButton disabled={false || isDisabled} color={color} onClick={onClick} {...rest}>
          {children}
        </IconButton>
      </span>
    </Tooltip>
  );
};

interface IToolButtonProps {
  title: string;
  isDisabled?: boolean;
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
