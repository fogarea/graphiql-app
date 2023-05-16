import {
  ExplorerDrawer,
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsDetails,
} from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const { isOpen, handleToggleDocumentation, parsedSchema, docsContainers } = useExplorer();

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
          <ExplorerDocsDetails
            key={typeInfo.typeDetails.id}
            typeDetails={typeInfo.typeDetails}
            typeArguments={typeInfo.typeArguments}
          />
        ))}
    </ExplorerDrawer>
  );
};
