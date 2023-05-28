import {
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
  parseResultsSchema,
  fetchData,
} from '@/entities/explorer';

const resource = fetchData();

export const ExplorerContainer = (): JSX.Element => {
  const { parsedSchema, docsContainers, fieldInfo, setParsedSchema } = useExplorer();

  const schema = resource.read();
  const getParsedSchema = parseResultsSchema(schema as string);
  if (parsedSchema.length === 0) {
    setParsedSchema(getParsedSchema.nodes);
  }

  return (
    <>
      {parsedSchema && <ExplorerDocsQueries parsedSchema={parsedSchema} />}
      {docsContainers &&
        docsContainers.map(({ typeDetails, typeArguments }) => (
          <ExplorerDocsInfo
            key={typeDetails.id}
            typeDetails={typeDetails}
            typeArguments={typeArguments}
          />
        ))}
      {fieldInfo && <ExplorerFieldInfo typeDetails={fieldInfo} />}
    </>
  );
};
