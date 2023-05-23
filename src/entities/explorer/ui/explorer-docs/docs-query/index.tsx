import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  TypeDocsTypeInfo,
  useExplorer,
  getQueryInfo,
  showQueryValueByInfo,
  IDocsTypeArguments as IExplorerDocsQueryProps,
  IGetQueryValue,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsQuery = ({ typeArguments }: IExplorerDocsQueryProps): JSX.Element => {
  const { setDocsContainer, parsedSchema, selectedElements, setSelectedElements, setFieldInfo } =
    useExplorer();
  const queryInfo = getQueryInfo(typeArguments);
  const queryString = showQueryValueByInfo(queryInfo);

  const handleClickQuery = (queryInfo: IGetQueryValue) => {
    const findTypeDetails = parsedSchema.find((schema) => schema.name === queryInfo.name);
    console.log('findTypeDetails', findTypeDetails);
    console.log('props', typeArguments);

    if (findTypeDetails) {
      const docsTypeInfo: TypeDocsTypeInfo = {
        typeDetails: findTypeDetails,
        typeArguments,
      };

      setDocsContainer(docsTypeInfo);
      setSelectedElements({ selectedQuery: typeArguments.id });
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
      <span>{'(...): '}</span>
      <span className={styles.colorOrange}>{queryString}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
