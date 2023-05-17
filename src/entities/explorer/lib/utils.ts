import { ParserField, Options } from 'graphql-js-tree';

export const getTypeArgumentsTest = (parserField: ParserField): TypeGetTypeArgumentsReturn => {
  const argsLength = parserField.args.length;

  if (argsLength > 1) {
    const arrayTypeArguments = parserField.args.map((arg) => {
      const fieldType = arg.type.fieldType;
      if ('name' in fieldType) {
        return {
          name: arg.name,
          type: `${fieldType.name}`,
        };
      }
    });
    return arrayTypeArguments;
  } else if (argsLength === 1) {
    const arrayTypeArguments = parserField.args.map((arg) => {
      const fieldType = arg.type.fieldType;
      if ('nest' in fieldType) {
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
    return arrayTypeArguments;
  }
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

interface ITypeArguments {
  name: string;
  type: string;
}

type TypeGetTypeArgumentsReturn = Array<ITypeArguments | undefined> | undefined;
