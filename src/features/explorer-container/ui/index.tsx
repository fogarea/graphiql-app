import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
        <p>{t(`explorer.no-data`)}</p>
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
