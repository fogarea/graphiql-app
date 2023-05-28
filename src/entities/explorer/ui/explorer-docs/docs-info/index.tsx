import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { TypeDocsTypeInfo as IExplorerDocsInfoProps } from '../../../model';
import { ExplorerDocsArguments } from '../docs-arguments';
import { ExplorerDocsDetails } from '../docs-details';
import { ExplorerDocsExample } from '../docs-example';
import styles from '../styles.module.scss';

export const ExplorerDocsInfo = ({
  typeDetails,
  typeArguments,
}: IExplorerDocsInfoProps): JSX.Element => {
  return (
    <>
      <Divider />
      <div style={{ paddingLeft: 16, width: 265, marginTop: 20 }}>
        <ExplorerDocsExample typeArguments={typeArguments} />
        <Grid item>
          <p className={styles.colorGray}>{typeArguments?.description}</p>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h3" sx={{ color: 'text.secondary', marginTop: 5 }}>
            Type Details
          </Typography>
        </Grid>
        <ExplorerDocsDetails typeDetails={typeDetails} />
        <Grid item>
          <Typography variant="h4" component="h3" sx={{ color: 'text.secondary', marginTop: 5 }}>
            Arguments
          </Typography>
        </Grid>
        {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} isExample={false} />}
      </div>
    </>
  );
};
