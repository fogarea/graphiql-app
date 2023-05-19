import { ParserField } from 'graphql-js-tree';

export interface IDocsTypeArguments {
  typeArguments: ParserField;
}

export interface IDocsTypeDetails {
  typeDetails: ParserField;
}

export type TypeDocsTypeInfo = IDocsTypeDetails & IDocsTypeArguments;

export interface ITypeArguments {
  name: string;
  type: string;
}

export type TypeGetTypeArgumentsReturn = Array<ITypeArguments | undefined> | undefined;
