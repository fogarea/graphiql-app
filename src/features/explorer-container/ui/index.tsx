import { useEffect } from 'react';

import {
  ExplorerDrawer,
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
} from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const {
    isOpen,
    isLoaded,
    handleToggleDocumentation,
    parsedSchema,
    docsContainers,
    fieldInfo,
    execSchema,
  } = useExplorer();

  useEffect(() => {
    if (!isLoaded || !parsedSchema) {
      execSchema();
    }
  });

  return (
    <ExplorerDrawer open={isOpen} toggleDrawer={handleToggleDocumentation}>
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
