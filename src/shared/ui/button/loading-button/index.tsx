import { ReactNode } from 'react';
import styled from '@mui/material/styles/styled';
import MuiLoadingButton, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab/LoadingButton';

const StyledLoadingButton = styled(MuiLoadingButton)(({ theme }) => ({
  backgroundColor: 'inherit',
  color: theme.palette.grey['800'],
  boxShadow: 'none',
  borderColor: theme.palette.grey['800'],
  whiteSpace: 'nowrap',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.grey['800'],
    boxShadow: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
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
