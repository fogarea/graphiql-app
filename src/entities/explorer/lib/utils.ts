import { ParserField, Options } from 'graphql-js-tree';

import { ITypeArguments, TypeGetTypeArgumentsReturn } from '../model/types';

export const getTypeDetails = (parsedField: ParserField): TypeGetTypeArgumentsReturn => {
  return parsedField.args.map((arg) => {
    const fieldType = arg.type.fieldType;
    if ('name' in fieldType) {
      return {
        name: arg.name,
        type: `${fieldType.name}`,
      };
    } else if ('nest' in fieldType) {
      if (fieldType.type === Options.required && 'nest' in fieldType.nest) {
        if (fieldType.nest.type === Options.array && 'name' in fieldType.nest.nest) {
          return {
            name: arg.name,
            type: `[${fieldType.nest.nest.name}]!`,
          };
        }
      }
      if (fieldType.type === Options.array && 'name' in fieldType.nest) {
        return {
          name: arg.name,
          type: `[${fieldType.nest.name}]`,
        };
      }
    }
  });
};

export const getTypeArguments = (parserField: ParserField): TypeGetTypeArgumentsReturn => {
  return parserField.args.map((arg) => {
    const fieldType = arg.type.fieldType;
    if ('name' in fieldType) {
      return {
        name: arg.name,
        type: `${fieldType.name}`,
      };
    } else if ('nest' in fieldType) {
      if (fieldType.nest.type === Options.name) {
        return {
          name: arg.name,
          type: `${fieldType.nest.name}!`,
        };
      } else if (fieldType.nest.type === Options.array) {
        if ('nest' in fieldType.nest.nest && 'name' in fieldType.nest.nest.nest)
          return {
            name: arg.name,
            type: `[${fieldType.nest.nest.nest.name}!]!`,
          };
      }
    }
  });
};

export const getQueryValue = (parsedField: ParserField): string | undefined => {
  const fieldType = parsedField.type.fieldType;
  if ('nest' in fieldType && 'name' in fieldType.nest && fieldType.type === Options.array) {
    return `[${fieldType.nest.name}]`;
  } else if (fieldType.type === Options.name) {
    return `${fieldType.name}`;
  }
};

export const checkArrayInterface = (array: TypeGetTypeArgumentsReturn): boolean | undefined => {
  return array?.every((el): el is ITypeArguments => {
    return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
  });
};