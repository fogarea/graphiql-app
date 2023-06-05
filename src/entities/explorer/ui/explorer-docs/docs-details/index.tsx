import Grid from '@mui/material/Grid';
import { useCallback } from 'react';

import { ArrowRightIcon, ClosingCurlyBracket, OpeningCurlyBracket } from '@/shared/ui';
import { TypeTypography } from '@/shared/ui/explorer';
import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { IDocsTypeDetails as IExplorerDocsDetailsProps } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerDocsDetails = ({ typeDetails }: IExplorerDocsDetailsProps): JSX.Element => {
  const { selectedElements, setSelectedElements, setFieldInfo } = useExplorer();
  const docsDetails = useExplorerProps({ parsedField: typeDetails, option: Options.details });

  const findFieldInfo = useCallback(
    (name: string) => typeDetails.args.find((value) => value.name === name),
    [typeDetails]
  );

  const handleClickDetail = (name: string) => {
    const fieldInfo = findFieldInfo(name);
    if (fieldInfo) {
      setFieldInfo(fieldInfo);
      setSelectedElements({ selectedTypeDetails: name, selectedTypeArguments: '' });
    }
  };

  return (
    <Grid item>
      <pre>
        <TypeTypography className={styles.colorBlue} />
        <span className={styles.colorRed}>{typeDetails.name}</span>
        <OpeningCurlyBracket />
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
              <ArrowRightIcon />
            </pre>
          ))}
        <ClosingCurlyBracket />
      </pre>
    </Grid>
  );
};
