import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton/IconButton';
import { ReactNode } from 'react';

export const TooltipButton = ({
  title,
  onClick,
  children,
  isDisabled,
  ...rest
}: IToolButtonProps): JSX.Element => {
  return (
    <Tooltip title={title}>
      <span>
        <IconButton disabled={false || isDisabled} color="default" onClick={onClick} {...rest}>
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
}
