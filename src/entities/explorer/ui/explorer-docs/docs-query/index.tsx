import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  TypeDocsTypeInfo,
  useExplorer,
  getQueryValue,
  IDocsTypeArguments as IExplorerDocsQueryProps,
} from '@/entities/explorer';

export const ExplorerDocsQuery = ({ typeArguments }: IExplorerDocsQueryProps): JSX.Element => {
  const { setDocsContainer, parsedSchema } = useExplorer();
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
    }
  };

  return (
    <div
      onClick={() => handleClickQuery(queryValue!, typeArguments.name)}
      style={{ position: 'relative', cursor: 'pointer', marginBottom: 6 }}
    >
      <span>{typeArguments.name}</span>
      <span>{'(...): '}</span>
      <span>{queryValue}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
