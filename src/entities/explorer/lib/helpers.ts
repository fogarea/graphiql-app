import { buildClientSchema, IntrospectionQuery, printSchema } from 'graphql';
import { Parser } from 'graphql-js-tree';

export const parseResultsSchema = (results: string) => {
  try {
    const data = JSON.parse(results) as IntrospectionQuery;
    const schema = buildClientSchema(data);
    const printedSchema = printSchema(schema);

    return Parser.parse(printedSchema);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
};
