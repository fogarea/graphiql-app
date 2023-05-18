import Grid from '@mui/material/Grid';

import { IDocsTypeInfo, ExplorerDocsDetails, ExplorerDocsArguments } from '@/entities/explorer';

export const ExplorerDocsInfo = ({ typeDetails, typeArguments }: IDocsTypeInfo): JSX.Element => {
  return (
    <Grid container sx={{ borderLeft: 1, paddingLeft: 3, flexDirection: 'column' }}>
      <Grid item>
        <p>{typeArguments?.description}</p>
      </Grid>
      <Grid item></Grid>
      {typeDetails && <ExplorerDocsDetails typeDetails={typeDetails} />}
      {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} />}
    </Grid>
  );
};
