import { ParserField, Options, FieldType } from 'graphql-js-tree';
import { TypeGetTypeArgumentsReturn } from '../model';

const handleNameInFieldType = (arg: ParserField, fieldType: FieldType) => {
  if (!('name' in fieldType)) {
    return null;
  }

  return {
    name: arg.name,
    type: `${fieldType.name}`,
  };
};

const handleNestedFieldType = (arg: ParserField, fieldType: FieldType) => {
  if (!('nest' in fieldType)) {
    return null;
  }

  if (fieldType.nest.type === Options.name) {
    return {
      name: arg.name,
      type: `${fieldType.nest.name}!`,
    };
  }

  if (
    fieldType.nest.type === Options.array &&
    'nest' in fieldType.nest.nest &&
    'name' in fieldType.nest.nest.nest
  ) {
    return {
      name: arg.name,
      type: `[${fieldType.nest.nest.nest.name}!]!`,
    };
  }

  return null;
};

export const getTypeArguments = (parserField: ParserField): TypeGetTypeArgumentsReturn => {
  return parserField.args.map((arg) => {
    const fieldType = arg.type.fieldType;
    const typeDetailsFromName = handleNameInFieldType(arg, fieldType);
    if (typeDetailsFromName) {
      return typeDetailsFromName;
    }

    const typeDetailsFromNest = handleNestedFieldType(arg, fieldType);
    if (typeDetailsFromNest) {
      return typeDetailsFromNest;
    }
  });
};
