import { useExplorer, useExplorerProps, Options } from '../../../hooks';
import { getQueryInfo } from '../../../lib';
import { IDocsTypeDetails } from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerFieldInfo = ({ typeDetails }: IDocsTypeDetails): JSX.Element => {
  const { parsedSchema } = useExplorer();
  const queryInfo = getQueryInfo(typeDetails);
  const findQuery = parsedSchema.find((el) => el.name === queryInfo.name);
  const docsDetails = useExplorerProps({ parsedField: findQuery, option: Options.details });

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
