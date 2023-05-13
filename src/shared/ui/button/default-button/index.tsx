import { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

const StyledDefaultButton = styled(Button)(({ theme }) => ({
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

export const DefaultButton = ({ children, variant, ...rest }: IDefaultButtonProps): JSX.Element => {
  return (
    <StyledDefaultButton variant={variant} {...rest}>
      {children}
    </StyledDefaultButton>
  );
};

interface IDefaultButtonProps extends Pick<ButtonProps, Exclude<keyof ButtonProps, 'variant'>> {
  children?: ReactNode;
  variant: 'text' | 'outlined' | 'contained';
}
