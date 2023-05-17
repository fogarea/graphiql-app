import { ParserField } from 'graphql-js-tree';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { IDocsTypeInfo, useExplorer } from '@/entities/explorer';

export const ExplorerDocsQuery = (props: ParserField): JSX.Element => {
  const { setDocsContainer, parsedSchema } = useExplorer();
  const fieldLink = props.type.fieldType.name
    ? `${props.type.fieldType.name}`
    : `[${props.type.fieldType.nest.name}]`;

  const handleClickQuery = (typeName: string, queryName: string) => {
    const typeNameNoBrackets = typeName.replace(/[\[\]]/g, '');
    const findTypeDetails = parsedSchema.find((schema) => schema.name === typeNameNoBrackets);
    const findQuery = parsedSchema.find((schema) => schema.name === 'Query');
    const findTypeArguments = findQuery?.args.find((arg) => arg.name === queryName);
    console.log('typeName', typeName);
    console.log('queryName ', queryName);
    console.log('findTypeDetails', findTypeDetails);
    console.log('findTypeArguments', findTypeArguments);

    if (findTypeDetails && findTypeArguments) {
      const docsTypeInfo: IDocsTypeInfo = {
        typeDetails: findTypeDetails,
        typeArguments: findTypeArguments,
      };

      setDocsContainer(docsTypeInfo);
    }
  };

  return (
    <div
      onClick={() => handleClickQuery(fieldLink, props.name)}
      style={{ position: 'relative', cursor: 'pointer', marginBottom: 6 }}
    >
      <span>{props.name}</span>
      <span>{'(...): '}</span>
      <span>{fieldLink}</span>
      <ArrowRightIcon sx={{ position: 'absolute', right: 0 }} />
    </div>
  );
};
