import { ParserField } from 'graphql-js-tree';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { TypeDocsTypeInfo, useExplorer, getQueryValue } from '@/entities/explorer';

export const ExplorerDocsQuery = (props: ParserField): JSX.Element => {
  const { setDocsContainer, parsedSchema } = useExplorer();
  const queryValue = getQueryValue(props);
  const handleClickQuery = (typeName: string, queryName: string) => {
    const typeNameNoBrackets = typeName.slice(1, -1);
    const findTypeDetails = parsedSchema.find((schema) => schema.name === typeNameNoBrackets);
    const findQuery = parsedSchema.find((schema) => schema.name === 'Query');
    const findTypeArguments = findQuery?.args.find((arg) => arg.name === queryName);
    console.log('typeName', typeName);
    console.log('queryName ', queryName);
    console.log('findTypeDetails', findTypeDetails);
    console.log('findTypeArguments', findTypeArguments);

    if (findTypeDetails && findTypeArguments) {
      const docsTypeInfo: TypeDocsTypeInfo = {
        typeDetails: findTypeDetails,
        typeArguments: findTypeArguments,
      };

      setDocsContainer(docsTypeInfo);
    }
  };

  return (
    <div
      onClick={() => handleClickQuery(queryValue!, props.name)}
      style={{ position: 'relative', cursor: 'pointer', marginBottom: 6 }}
    >
      <span>{props.name}</span>
      <span>{'(...): '}</span>
      <span>{queryValue}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
