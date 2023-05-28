import { useTranslation } from 'react-i18next';

import {
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
} from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const { parsedSchema, docsContainers, fieldInfo } = useExplorer();

  const { t } = useTranslation();

  return (
    <>
      {parsedSchema.length ? (
        <ExplorerDocsQueries parsedSchema={parsedSchema} />
      ) : (
        <p>{t(`explorer.no-data`)}</p>
      )}
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
