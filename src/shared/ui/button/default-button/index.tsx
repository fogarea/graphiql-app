import { ElementType } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@mui/material/styles/styled';

const StyledDefaultButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'inherit',
  color: theme.palette.grey['800'],
  borderColor: theme.palette.primary.main,
  boxShadow: 'none',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
}));

export const DefaultButton = <C extends ElementType>({
  children,
  ...rest
}: ButtonProps<C, { component?: C }>): JSX.Element => {
  return <StyledDefaultButton {...rest}>{children}</StyledDefaultButton>;
};
