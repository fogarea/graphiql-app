import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton/IconButton';
import { ReactNode } from 'react';

export const TooltipButton = ({
  title,
  onClick,
  children,
  ...rest
}: IToolButtonProps): JSX.Element => {
  // const theme = useTheme();

  return (
    <Tooltip title={title}>
      <IconButton color="default" onClick={onClick} {...rest}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

interface IToolButtonProps {
  title: string;
  onClick?: () => void;
  children?: ReactNode;
}
