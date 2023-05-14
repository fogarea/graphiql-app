import { ExplorerDrawer, useExplorer, ExplorerSchemaBlock } from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const { isOpen, handleToggleDocumentation, parsedSchema } = useExplorer();

  return (
    <ExplorerDrawer open={isOpen} toggleDrawer={handleToggleDocumentation}>
      {parsedSchema.length ? (
        <ExplorerSchemaBlock schemaField={parsedSchema} />
      ) : (
        <p>No documentation</p>
      )}
    </ExplorerDrawer>
  );
};
