import Grid from '@mui/material/Grid/Grid';
import { ReactNode } from 'react';

export const ColumnXsNoneMd40 = ({ children }: IColumnXsNoneMd40Props): JSX.Element => {
  return (
    <Grid item sm={1} display={{ xs: 'none', md: 'block' }} style={{ maxWidth: 40 }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

interface IColumnXsNoneMd40Props {
  children?: ReactNode;
}
