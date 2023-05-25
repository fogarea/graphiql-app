import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from '@mui/material/Grid';
import { useState, useMemo } from 'react';

import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { ITypeArguments, IDocsTypeDetails as IExplorerDocsDetailsProps } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerDocsDetails = ({ typeDetails }: IExplorerDocsDetailsProps): JSX.Element => {
  const { selectedElements, setSelectedElements, setFieldInfo } = useExplorer();
  const [docsDetails, setDocsDetails] = useState<ITypeArguments[]>([]);

  const findFieldInfo = useMemo(() => {
    return (name: string) => {
      return typeDetails.args.find((value) => value.name === name);
    };
  }, [typeDetails]);

  const handleClickDetail = (name: string) => {
    const fieldInfo = findFieldInfo(name);
    if (fieldInfo) {
      setFieldInfo(fieldInfo);
      setSelectedElements({ selectedTypeDetails: name, selectedTypeArguments: '' });
    }
  };

  useExplorerProps({ parsedField: typeDetails, setState: setDocsDetails, option: Options.details });

  return (
    <Grid item>
      <pre>
        <span className={styles.colorBlue}>{'type '}</span>
        <span className={styles.colorRed}>{typeDetails.name}</span>
        <span>{` {`}</span>
        {docsDetails &&
          docsDetails.map((detail) => (
            <pre
              className={`${styles.query} ${
                selectedElements.selectedTypeDetails === detail.name ? styles.activeQuery : ''
              }`}
              key={detail.name}
              onClick={() => handleClickDetail(detail.name)}
            >
              <span className={styles.colorBlue}>{`  ${detail.name}: `}</span>
              <span className={styles.colorOrange}>{`${detail.type}`}</span>
              <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
            </pre>
          ))}
        <span>{`}`}</span>
      </pre>
    </Grid>
  );
};
