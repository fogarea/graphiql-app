import { ElementType } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';

const StyledLargeButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  minWidth: 200,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
}));

export const LargeButton = <C extends ElementType>({
  children,
  ...rest
}: ButtonProps<C, { component?: C }>): JSX.Element => {
  return (
    <StyledLargeButton size="large" {...rest}>
      {children}
    </StyledLargeButton>
  );
};
