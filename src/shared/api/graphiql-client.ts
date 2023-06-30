import { GraphQLClient, gql } from 'graphql-request';

import { GRAPHQL_API_ENDPOINT } from '../config';

export const graphiqlClient = {
  request: async (
    queryString: string,
    headers: Record<string, string> = {},
    variables: Record<string, string> = {}
  ): Promise<string> => {
    try {
      const graphQLClient = new GraphQLClient(GRAPHQL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          ...headers,
        },
      });

      const query = gql`
        ${queryString}
      `;

      const data = await graphQLClient.request(query, variables);

      return JSON.stringify(data);
    } catch (error) {
      return JSON.stringify(error);
    }
  },
};
