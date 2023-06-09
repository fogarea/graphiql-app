import MuiLoadingButton, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab/LoadingButton';
import { alpha } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import { ReactNode } from 'react';

const StyledLoadingButton = styled(MuiLoadingButton)(({ theme }) => ({
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
}));

export const LoadingButton = ({ children, variant, ...rest }: ILoadingButtonProps): JSX.Element => {
  return (
    <StyledLoadingButton variant={variant} {...rest}>
      {children}
    </StyledLoadingButton>
  );
};

interface ILoadingButtonProps
  extends Pick<MuiLoadingButtonProps, Exclude<keyof MuiLoadingButtonProps, 'variant'>> {
  children?: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
}
