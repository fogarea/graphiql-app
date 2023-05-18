import Grid from '@mui/material/Grid';
import { ParserField } from 'graphql-js-tree';
import { useEffect, useState } from 'react';

import { getTypeDetails, ITypeArguments } from '@/entities/explorer';
import styles from './styles.module.scss';

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
    <>
      <Grid item>
        <h2>Type Details</h2>
      </Grid>
      <Grid item>
        <pre>
          <span className={styles.type}>{'type'}</span>
          <span> </span>
          <span className={styles.typeName}>{typeDetails.name}</span>
          <span>{` {`}</span>
          {docsDetails &&
            docsDetails.map((detail) => (
              <pre key={detail.name}>
                <span className={styles.typeField}>{`  ${detail.name}: `}</span>
                <span className={styles.typeFieldType}>{`${detail.type}`}</span>
              </pre>
            ))}
          <span>{`}`}</span>
        </pre>
      </Grid>
    </>
  );
};

interface IExplorerDocsDetailsProps {
  typeDetails: ParserField;
}
