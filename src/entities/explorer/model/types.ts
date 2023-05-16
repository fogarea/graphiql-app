import { ParserField } from 'graphql-js-tree';

export interface IDocsTypeInfo {
  typeDetails: ParserField;
  typeArguments?: ParserField;
}
