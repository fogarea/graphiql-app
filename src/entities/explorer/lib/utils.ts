import { ParserField, Options } from 'graphql-js-tree';

import { ITypeArguments, TypeGetTypeArgumentsReturn, IGetQueryValue } from '../model/';

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
  } else if (
    fieldType.type === Options.required &&
    'nest' in fieldType.nest &&
    'name' in fieldType.nest.nest
  ) {
    return `[${fieldType.nest.nest.name}]!`;
  }
};

export const getQueryInfo = (parsedField: ParserField): IGetQueryValue => {
  const result: IGetQueryValue = {
    name: '',
    nest: {
      isRequired: false,
      isArray: false,
    },
  };

  const fieldType = parsedField.type.fieldType;

  if ('nest' in fieldType && 'name' in fieldType.nest && fieldType.type === Options.array) {
    result.name = fieldType.nest.name;

    result.nest.isArray = true;
  } else if (fieldType.type === Options.name) {
    result.name = fieldType.name;
  } else if (
    fieldType.type === Options.required &&
    'nest' in fieldType.nest &&
    'name' in fieldType.nest.nest
  ) {
    result.name = fieldType.nest.nest.name;

    (result.nest.isArray = true), (result.nest.isRequired = true);
  } else if (fieldType.type === Options.required && 'name' in fieldType.nest) {
    result.name = fieldType.nest.name;
    result.nest.isRequired = true;
  } else if (
    fieldType.type === Options.required &&
    fieldType.nest.type === Options.array &&
    'nest' in fieldType.nest.nest &&
    'name' in fieldType.nest.nest.nest
  ) {
    result.name = fieldType.nest.nest.nest.name;
    result.nest.isRequired = true;
    result.nest.isArray = true;
  }

  return result;
};

export const showQueryValue = (parsedField: ParserField): string => {
  const result = getQueryInfo(parsedField);
  if (result.nest.isArray) return `[${result.name}]`;
  else if (result.nest.isRequired) return `${result.name}]`;
  else return `${result.name}`;
};

export const showQueryValueByInfo = (queryInfo: IGetQueryValue): string => {
  if (queryInfo.nest.isArray && queryInfo.nest.isRequired) return `[${queryInfo.name}]!`;
  else if (queryInfo.nest.isRequired) return `${queryInfo.name}!`;
  else if (queryInfo.nest.isArray) return `[${queryInfo.name}]`;
  else return `${queryInfo.name}`;
};

export const checkArrayInterface = (
  array: TypeGetTypeArgumentsReturn,
  setState: React.Dispatch<React.SetStateAction<ITypeArguments[]>>
): void => {
  const isValid = array?.every((el): el is ITypeArguments => {
    return el !== undefined && typeof el.name === 'string' && typeof el.type === 'string';
  });
  if (isValid) setState(array);
};
