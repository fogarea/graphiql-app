import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState, useMemo } from 'react';

import {
  useExplorer,
  getTypeDetails,
  ITypeArguments,
  IDocsTypeDetails as IExplorerDocsDetailsProps,
} from '@/entities/explorer';
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
