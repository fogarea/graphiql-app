import {
  ExplorerDrawer,
  useExplorer,
  ExplorerSchemaBlock,
  ExplorerDocsQueries,
} from '@/entities/explorer';

import { ExplorerDocsContainer } from '../../../entities/explorer/ui/explorer-docs/docs-container';

export const ExplorerContainer = (): JSX.Element => {
  const { isOpen, handleToggleDocumentation, parsedSchema } = useExplorer();

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
      <ExplorerDocsContainer />
      <ExplorerDocsContainer />
    </ExplorerDrawer>
  );
};
