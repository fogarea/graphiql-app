import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { ITypeArguments, IDocsTypeArguments as IExplorerDocsArgumentsProps } from '../../../model';
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

  useExplorerProps({
    parsedField: typeArguments,
    setState: setDocsArguments,
    option: Options.arguments,
  });

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
