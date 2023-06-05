import Grid from '@mui/material/Grid';

import { ArrowRightIcon } from '@/shared/ui';
import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { IDocsTypeArguments as IExplorerDocsArgumentsProps } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerDocsArguments = ({
  typeArguments,
  isExample,
}: TypeExplorerDocsArgumentsProps): JSX.Element => {
  const { selectedElements, setSelectedElements, setFieldInfo } = useExplorer();
  const docsArguments = useExplorerProps({ parsedField: typeArguments, option: Options.arguments });

  const handleClickArgument = (name: string) => {
    const argInfo = typeArguments.args.find((value) => value.name === name);
    if (argInfo) {
      setFieldInfo(argInfo);
      setSelectedElements({ selectedTypeArguments: name, selectedTypeDetails: '' });
    }
  };

  return (
    <Grid item>
      {docsArguments &&
        docsArguments.map(({ name, type }) =>
          isExample ? (
            <pre key={name}>
              <span className={styles.colorBlue}>{name}: </span>
              <span className={styles.colorOrange}>{type}</span>
            </pre>
          ) : (
            <pre
              className={`${styles.query} ${
                selectedElements.selectedTypeArguments === name ? styles.activeQuery : ''
              }`}
              key={name}
              onClick={() => handleClickArgument(name)}
            >
              <span className={styles.colorBlue}>{name}: </span>
              <span className={styles.colorOrange}>{type}</span>
              <ArrowRightIcon />
            </pre>
          )
        )}
    </Grid>
  );
};

type isExample = {
  isExample: boolean;
};

type TypeExplorerDocsArgumentsProps = isExample & IExplorerDocsArgumentsProps;
