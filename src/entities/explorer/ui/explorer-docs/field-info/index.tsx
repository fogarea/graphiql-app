import { useEffect, useState } from 'react';

import { useExplorer } from '../../../hooks';
import { getQueryInfo, getTypeDetails } from '../../../lib';
import { IDocsTypeDetails, ITypeArguments } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerFieldInfo = ({ typeDetails }: IDocsTypeDetails): JSX.Element => {
  const { parsedSchema } = useExplorer();
  const [docsDetails, setDocsDetails] = useState<ITypeArguments[]>([]);
  const queryInfo = getQueryInfo(typeDetails);

  useEffect(() => {
    const findQuery = parsedSchema.find((el) => el.name === queryInfo.name);
    if (findQuery) {
      const details = getTypeDetails(findQuery);
      const isValidDetails = details?.every((el): el is ITypeArguments => {
        return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
      });
      if (isValidDetails) setDocsDetails(details);
    } else {
      setDocsDetails([]);
    }
  }, [queryInfo.name, parsedSchema]);

  return (
    <div style={{ width: 300 }}>
      <pre className={styles.fontBold}>
        <span className={styles.colorRed}>{typeDetails.name}: </span>
        <span className={styles.colorOrange}>{queryInfo.name}</span>
      </pre>
      <p className={styles.colorGray}>{typeDetails.description}</p>
      {!!docsDetails.length && (
        <div>
          <pre>
            <span className={styles.colorBlue}>{'type '}</span>
            <span className={styles.colorRed}>{queryInfo.name}</span>
            <span>{' {'}</span>
          </pre>
          {docsDetails.map((el) => (
            <pre style={{ paddingLeft: 6 }} key={el.name}>
              <span className={styles.colorBlue}>{`  ${el.name}: `}</span>
              <span className={styles.colorOrange}>{el.type}</span>
            </pre>
          ))}
          <span>{'}'}</span>
        </div>
      )}
    </div>
  );
};
