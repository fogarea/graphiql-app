import Grid from '@mui/material/Grid/Grid';
import { ReactNode } from 'react';

export const ColumnWrapper = ({ children }: IColumnWrapperProps): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      {children}
    </Grid>
  );
};

interface IColumnWrapperProps {
  children?: ReactNode;
}
