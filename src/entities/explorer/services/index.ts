import {
  GraphQLSchema,
  getIntrospectionQuery,
  buildClientSchema,
  IntrospectionQuery,
  printSchema,
} from 'graphql';
import { Parser } from 'graphql-js-tree';

import { graphiqlClient } from '@/shared/api';

export const expolorerSevice = {
  loadDocumentation: async () => {
    const iQueryString = getIntrospectionQuery();
    const results = await graphiqlClient.request(iQueryString);
    const data = JSON.parse(results) as IntrospectionQuery;
    const schema: GraphQLSchema = buildClientSchema(data);
    const printedSchema = printSchema(schema);
    const parsedSchema = Parser.parse(printedSchema);
    return parsedSchema;
  },
};
