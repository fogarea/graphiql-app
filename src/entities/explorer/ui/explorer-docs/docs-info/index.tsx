import Grid from '@mui/material/Grid';

import {
  ExplorerDocsDetails,
  ExplorerDocsArguments,
  ExplorerDocsExample,
  TypeDocsTypeInfo as IExplorerDocsInfoProps,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsInfo = ({
  typeDetails,
  typeArguments,
}: IExplorerDocsInfoProps): JSX.Element => {
  return (
    <div style={{ paddingLeft: 16, width: 265 }}>
      <ExplorerDocsExample typeArguments={typeArguments} />
      <Grid item>
        <p className={styles.colorGray}>{typeArguments?.description}</p>
      </Grid>
      <Grid item>
        <h3 className={styles.colorGray}>TYPE DETAILS</h3>
      </Grid>
      <ExplorerDocsDetails typeDetails={typeDetails} />
      <Grid item>
        <h3 className={styles.colorGray}>ARGUMENTS</h3>
      </Grid>
      {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} />}
    </div>
  );
};
