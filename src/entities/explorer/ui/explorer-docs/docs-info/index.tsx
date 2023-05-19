import Grid from '@mui/material/Grid';

import {
  ExplorerDocsDetails,
  ExplorerDocsArguments,
  ExplorerDocsExample,
  TypeDocsTypeInfo as IExplorerDocsInfoProps,
} from '@/entities/explorer';

export const ExplorerDocsInfo = ({
  typeDetails,
  typeArguments,
}: IExplorerDocsInfoProps): JSX.Element => {
  return (
    <Grid container sx={{ borderLeft: 1, paddingLeft: 3, flexDirection: 'column' }}>
      <ExplorerDocsExample typeArguments={typeArguments} />
      <Grid item>
        <p>{typeArguments?.description}</p>
      </Grid>
      <Grid item>
        <h2>Type Details</h2>
      </Grid>
      <ExplorerDocsDetails typeDetails={typeDetails} />
      <Grid item>
        <h2>Arguments</h2>
      </Grid>
      {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} />}
    </Grid>
  );
};
