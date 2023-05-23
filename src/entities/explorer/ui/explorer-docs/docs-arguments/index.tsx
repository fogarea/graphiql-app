import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  getTypeArguments,
  ITypeArguments,
  useExplorer,
  IDocsTypeArguments as IExplorerDocsArgumentsProps,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsArguments = ({
  typeArguments,
}: IExplorerDocsArgumentsProps): JSX.Element => {
  const { setFieldInfo } = useExplorer();
  const [docsArguments, setDocsArguments] = useState<ITypeArguments[]>([]);

  const handleClickArgument = (name: string) => {
    const agrInfo = typeArguments.args.find((value) => value.name === name);
    if (agrInfo) {
      setFieldInfo(agrInfo);
    }
  };

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
        docsArguments.map((argument) => (
          <pre key={argument.name} onClick={() => handleClickArgument(argument.name)}>
            <span className={styles.colorBlue}>{argument.name}: </span>
            <span className={styles.colorOrange}>{argument.type}</span>
          </pre>
        ))}
    </Grid>
  );
};
