import { ParserField } from 'graphql-js-tree';

export interface IDocsTypeInfo {
  typeDetails: ParserField;
  typeArguments?: ParserField;
}

export interface ITypeArguments {
  name: string;
  type: string;
}

export type TypeGetTypeArgumentsReturn = Array<ITypeArguments | undefined> | undefined;
