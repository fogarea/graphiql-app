import { ParserField } from 'graphql-js-tree';

export type TypeArrayParsedField = ParserField[];

export type TypeParsedField = ParserField;

interface INest {
  isRequired: boolean;
  isArray: boolean;
}

export interface IGetQueryValue {
  name: string;
  nest: INest;
}
export interface IArrayParsedShema {
  parsedSchema: ParserField[];
}

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
