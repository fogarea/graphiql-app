import Grid from '@mui/material/Grid';

import {
  ExplorerDocsArguments,
  showQueryValue,
  IDocsTypeArguments as IExplorerDocsExampleProps,
} from '@/entities/explorer/';
import styles from '../styles.module.scss';

export const ExplorerDocsExample = ({ typeArguments }: IExplorerDocsExampleProps) => {
  const detailsName = showQueryValue(typeArguments);
  return (
    <Grid item sx={{ fontWeight: 600 }}>
      <pre>
        <span className={styles.colorRed}>{typeArguments.name}</span>
        <span>{'('}</span>
      </pre>
      <pre style={{ paddingLeft: 30 }}>
        {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} />}
      </pre>
      <pre>
        <span>{'): '}</span>
        <span className={styles.colorOrange}>{detailsName}</span>
      </pre>
    </Grid>
  );
};
