import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  getTypeArguments,
  ITypeArguments,
  IDocsTypeArguments as IExplorerDocsArgumentsProps,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsArguments = ({
  typeArguments,
}: IExplorerDocsArgumentsProps): JSX.Element => {
  const [docsArguments, setDocsArguments] = useState<ITypeArguments[]>([]);

  useEffect(() => {
    const docs = getTypeArguments(typeArguments);
    const isValidDocs = docs?.every((el): el is ITypeArguments => {
      return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
    });
    if (isValidDocs) setDocsArguments(docs);
  }, [typeArguments]);

  return (
    <Grid item>
      {docsArguments &&
        docsArguments.map((el) => (
          <pre key={el.name}>
            <span className={styles.colorBlue}>{el.name}: </span>
            <span className={styles.colorOrange}>{el.type}</span>
          </pre>
        ))}
    </Grid>
  );
};
