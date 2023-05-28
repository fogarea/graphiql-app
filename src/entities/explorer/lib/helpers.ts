import { buildClientSchema, IntrospectionQuery, printSchema } from 'graphql';
import { Parser } from 'graphql-js-tree';

export const parseResultsSchema = (results: string) => {
  const data = JSON.parse(results) as IntrospectionQuery;
  const schema = buildClientSchema(data);
  const printedSchema = printSchema(schema);
  const parsedSchema = Parser.parse(printedSchema);

  return parsedSchema;
};
