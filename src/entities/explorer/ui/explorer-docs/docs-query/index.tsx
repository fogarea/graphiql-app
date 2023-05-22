import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  TypeDocsTypeInfo,
  useExplorer,
  getQueryValue,
  IDocsTypeArguments as IExplorerDocsQueryProps,
} from '@/entities/explorer';
import styles from '../styles.module.scss';

export const ExplorerDocsQuery = ({ typeArguments }: IExplorerDocsQueryProps): JSX.Element => {
  const { setDocsContainer, parsedSchema, selectedElement, setSelectedElement, setFieldInfo } =
    useExplorer();
  const queryValue = getQueryValue(typeArguments);

  const handleClickQuery = (typeName: string, queryName: string) => {
    let typeNameNoBrackets = typeName;
    if (typeNameNoBrackets.startsWith('[') && typeNameNoBrackets.endsWith(']')) {
      typeNameNoBrackets = typeNameNoBrackets.slice(1, -1);
    }
    const findTypeDetails = parsedSchema.find((schema) => schema.name === typeNameNoBrackets);
    console.log('typeName', typeName);
    console.log('queryName ', queryName);
    console.log('findTypeDetails', findTypeDetails);
    console.log('props', typeArguments);

    if (findTypeDetails) {
      const docsTypeInfo: TypeDocsTypeInfo = {
        typeDetails: findTypeDetails,
        typeArguments,
      };

      setDocsContainer(docsTypeInfo);
      setSelectedElement(typeArguments.id);
      setFieldInfo(null);
    }
  };

  return (
    <div
      onClick={() => handleClickQuery(queryValue!, typeArguments.name)}
      className={`${styles.query} ${
        selectedElement === typeArguments.id ? styles.activeQuery : ''
      }`}
    >
      <span className={styles.colorRed}>{typeArguments.name}</span>
      <span>{'(...): '}</span>
      <span className={styles.colorOrange}>{queryValue}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
