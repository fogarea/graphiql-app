import Grid from '@mui/material/Grid';

import { ClosingBracket, OpeningBracket } from '@/shared/ui';
import { showQueryValue } from '../../../lib/';
import { IDocsTypeArguments as IExplorerDocsExampleProps } from '../../../model';
import { ExplorerDocsArguments } from '../docs-arguments';
import styles from '../styles.module.scss';

export const ExplorerDocsExample = ({ typeArguments }: IExplorerDocsExampleProps) => {
  const detailsName = showQueryValue(typeArguments);
  return (
    <Grid item sx={{ fontWeight: 600 }}>
      <pre>
        <span className={styles.colorRed}>{typeArguments.name}</span>
        <OpeningBracket />
      </pre>
      <pre style={{ paddingLeft: 30 }}>
        {typeArguments && <ExplorerDocsArguments typeArguments={typeArguments} isExample={true} />}
      </pre>
      <pre>
        <ClosingBracket />
        <span className={styles.colorOrange}>{detailsName}</span>
      </pre>
    </Grid>
  );
};
