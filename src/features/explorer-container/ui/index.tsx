import { getIntrospectionQuery } from 'graphql';
import { useEffect } from 'react';

import {
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
  parseResultsSchema,
} from '@/entities/explorer';
import { graphiqlClient } from '@/shared/api';

export const ExplorerContainer = (): JSX.Element => {
  const { parsedSchema, docsContainers, fieldInfo, setParsedSchema } = useExplorer();

  useEffect(() => {
    if (parsedSchema.length === 0) {
      const iQueryString = getIntrospectionQuery();

      graphiqlClient
        .request(iQueryString)
        .then((data) => parseResultsSchema(data))
        .then((schema) => setParsedSchema(schema.nodes))
        .catch(() => Promise.reject());
    }
  }, [parsedSchema.length, setParsedSchema]);

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
