import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

import {
  getTypeDetails,
  ITypeArguments,
  IDocsTypeDetails as IExplorerDocsDetailsProps,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsDetails = ({ typeDetails }: IExplorerDocsDetailsProps): JSX.Element => {
  const [docsDetails, setDocsDetails] = useState<ITypeArguments[]>([]);

  useEffect(() => {
    const details = getTypeDetails(typeDetails);
    const isValidDetails = details?.every((el): el is ITypeArguments => {
      return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
    });
    if (isValidDetails) setDocsDetails(details);
  }, [typeDetails]);
  return (
    <Grid item>
      <pre>
        <span className={styles.colorBlue}>{'type'}</span>
        <span> </span>
        <span className={styles.colorRed}>{typeDetails.name}</span>
        <span>{` {`}</span>
        {docsDetails &&
          docsDetails.map((detail) => (
            <pre key={detail.name}>
              <span className={styles.colorBlue}>{`  ${detail.name}: `}</span>
              <span className={styles.colorOrange}>{`${detail.type}`}</span>
            </pre>
          ))}
        <span>{`}`}</span>
      </pre>
    </Grid>
  );
};
