import { Parser } from 'graphql-js-tree';
import {
  GraphQLSchema,
  getIntrospectionQuery,
  buildClientSchema,
  IntrospectionQuery,
  printSchema,
} from 'graphql';

import { graphiqlClient } from '@/shared/api';

export const expoloreSevice = {
  loadDocumentation: async () => {
    const iQueryString = getIntrospectionQuery();
    const results = await graphiqlClient.request(iQueryString);
    const data = JSON.parse(results) as IntrospectionQuery;
    const schema: GraphQLSchema = buildClientSchema(data);
    const printedSchema = printSchema(schema);
    const parsedSchema = Parser.parse(printedSchema);
    console.log(parsedSchema);
    return parsedSchema;
  },
};
