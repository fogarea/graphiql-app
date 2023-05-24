import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
  isExample,
}: TypeExplorerDocsArgumentsProps): JSX.Element => {
  const { selectedElements, setSelectedElements, setFieldInfo } = useExplorer();
  const [docsArguments, setDocsArguments] = useState<ITypeArguments[]>([]);

  const handleClickArgument = (name: string) => {
    const argInfo = typeArguments.args.find((value) => value.name === name);
    if (argInfo) {
      setFieldInfo(argInfo);
      setSelectedElements({ selectedTypeArguments: name, selectedTypeDetails: '' });
    }
  };

  useEffect(() => {
    const docs = getTypeArguments(typeArguments);
    const isValidDocs = docs?.every((el): el is ITypeArguments => {
      return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
    });
    if (isValidDocs) setDocsArguments(docs);
  }, [typeArguments]);

  if (!isExample) {
    return (
      <Grid item>
        {docsArguments &&
          docsArguments.map((argument) => (
            <pre
              className={`${styles.query} ${
                selectedElements.selectedTypeArguments === argument.name ? styles.activeQuery : ''
              }`}
              key={argument.name}
              onClick={() => handleClickArgument(argument.name)}
            >
              <span className={styles.colorBlue}>{argument.name}: </span>
              <span className={styles.colorOrange}>{argument.type}</span>
              <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
            </pre>
          ))}
      </Grid>
    );
  } else {
    return (
      <Grid item>
        {docsArguments &&
          docsArguments.map((argument) => (
            <pre key={argument.name}>
              <span className={styles.colorBlue}>{argument.name}: </span>
              <span className={styles.colorOrange}>{argument.type}</span>
            </pre>
          ))}
      </Grid>
    );
  }
};

type isExample = {
  isExample: boolean;
};

type TypeExplorerDocsArgumentsProps = isExample & IExplorerDocsArgumentsProps;
