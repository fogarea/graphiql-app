import { GraphQLClient, gql } from 'graphql-request';

export const graphiqlClient = {
  request: async (
    endpoint: string,
    queryString: string,
    headers: Record<string, string> = {},
    variables: Record<string, string> = {}
  ): Promise<string> => {
    try {
      const graphQLClient = new GraphQLClient(endpoint, {
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
