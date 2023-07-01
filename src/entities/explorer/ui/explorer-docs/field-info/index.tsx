import Divider from '@mui/material/Divider';

import { ClosingCurlyBracket, OpeningCurlyBracket, TypeTypography } from '@/shared/ui';
import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { getQueryInfo, showQueryValueByInfo } from '../../../lib';
import { IDocsTypeDetails } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerFieldInfo = ({ typeDetails }: IDocsTypeDetails): JSX.Element => {
  const { parsedSchema } = useExplorer();

  const queryInfo = getQueryInfo(typeDetails);
  const queryInfoName = showQueryValueByInfo(queryInfo);
  const findQuery = parsedSchema.find((el) => el.name === queryInfo.name);
  const docsDetails = useExplorerProps({ parsedField: findQuery, option: Options.details });

  return (
    <>
      <Divider />
      <div style={{ paddingLeft: 16, flexBasis: '33.3%', marginTop: 20 }}>
        <pre className={styles.fontBold}>
          <span className={styles.colorRed}>{typeDetails.name}: </span>
          <span className={styles.colorOrange}>{queryInfoName}</span>
        </pre>
        <p className={styles.colorGray}>{typeDetails.description}</p>
        {!!docsDetails.length && (
          <div style={{ marginBottom: 10 }}>
            <pre>
              <TypeTypography className={styles.colorBlue} />
              <span className={styles.colorRed}>{queryInfo.name}</span>
              <OpeningCurlyBracket />
            </pre>
            {docsDetails.map((el) => (
              <pre style={{ paddingLeft: 6 }} key={el.name}>
                <span className={styles.colorBlue}>{`  ${el.name}: `}</span>
                <span className={styles.colorOrange}>{el.type}</span>
              </pre>
            ))}
            <ClosingCurlyBracket />
          </div>
        )}
      </div>
    </>
  );
};
