import { getIntrospectionQuery } from 'graphql';
import { useEffect } from 'react';

import { useEditorStore } from '@/entities/editor';
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
  const endpoint = useEditorStore((state) => state.endpoint);

  useEffect(() => {
    if (parsedSchema.length === 0) {
      const iQueryString = getIntrospectionQuery();

      graphiqlClient
        .request(endpoint, iQueryString)
        .then((data) => parseResultsSchema(data))
        .then((schema) => {
          if (schema) {
            setParsedSchema(schema.nodes);
          }
        })
        .catch(() => Promise.reject());
    }
  }, [endpoint, parsedSchema.length, setParsedSchema]);

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
