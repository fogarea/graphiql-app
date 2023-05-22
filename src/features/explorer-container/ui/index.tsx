import {
  ExplorerDrawer,
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
} from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const { isOpen, handleToggleDocumentation, parsedSchema, docsContainers, fieldInfo } =
    useExplorer();

  return (
    <ExplorerDrawer open={isOpen} toggleDrawer={handleToggleDocumentation}>
      {/* {parsedSchema.length ? (
        <ExplorerSchemaBlock schemaField={parsedSchema} />
      ) : (
        <p>No documentation</p>
      )} */}
      {parsedSchema.length ? (
        <ExplorerDocsQueries parsedSchema={parsedSchema} />
      ) : (
        <p>No documentation</p>
      )}
      {docsContainers &&
        docsContainers.map((typeInfo) => (
          <ExplorerDocsInfo
            key={typeInfo.typeDetails.id}
            typeDetails={typeInfo.typeDetails}
            typeArguments={typeInfo.typeArguments}
          />
        ))}
      {fieldInfo && <ExplorerFieldInfo typeDetails={fieldInfo} />}
    </ExplorerDrawer>
  );
};
