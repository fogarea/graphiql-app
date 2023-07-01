import CircularProgress from '@mui/material/CircularProgress';
import { getIntrospectionQuery } from 'graphql';
import { useEffect } from 'react';

import { useEndpoint } from '@/entities/editor';
import {
  useExplorer,
  ExplorerDocsQueries,
  ExplorerDocsInfo,
  ExplorerFieldInfo,
  parseResultsSchema,
} from '@/entities/explorer';
import { graphiqlClient } from '@/shared/api';

export const ExplorerContainer = (): JSX.Element => {
  const { parsedSchema, docsContainers, fieldInfo, setParsedSchema, isLoaded } = useExplorer();
  const { endpoint } = useEndpoint();

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

  if (!isLoaded) {
    return <CircularProgress sx={{ margin: '2rem auto' }} />;
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
