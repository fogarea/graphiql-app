import { ArrowRightIcon, HiddenArguments } from '@/shared/ui';
import { useExplorer } from '../../../hooks';
import { getQueryInfo, showQueryValueByInfo } from '../../../lib';
import {
  TypeDocsTypeInfo,
  IDocsTypeArguments as IExplorerDocsQueryProps,
  IGetQueryValue,
} from '../../../model';
import styles from '../styles.module.scss';

export const ExplorerDocsQuery = ({ typeArguments }: IExplorerDocsQueryProps): JSX.Element => {
  const { setDocsContainer, parsedSchema, selectedElements, setSelectedElements, setFieldInfo } =
    useExplorer();
  const queryInfo = getQueryInfo(typeArguments);
  const queryString = showQueryValueByInfo(queryInfo);

  const handleClickQuery = (queryInfo: IGetQueryValue) => {
    const findTypeDetails = parsedSchema.find((schema) => schema.name === queryInfo.name);

    if (findTypeDetails) {
      const docsTypeInfo: TypeDocsTypeInfo = {
        typeDetails: findTypeDetails,
        typeArguments,
      };

      setDocsContainer(docsTypeInfo);
      setSelectedElements({
        selectedQuery: typeArguments.id,
        selectedTypeDetails: '',
        selectedTypeArguments: '',
      });
      setFieldInfo(null);
    }
  };

  return (
    <div
      onClick={() => handleClickQuery(queryInfo)}
      className={`${styles.query} ${
        selectedElements.selectedQuery === typeArguments.id ? styles.activeQuery : ''
      }`}
    >
      <span className={styles.colorRed}>{typeArguments.name}</span>
      <HiddenArguments />
      <span className={styles.colorOrange}>{queryString}</span>
      <ArrowRightIcon />
    </div>
  );
};
