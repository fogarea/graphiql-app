import { FieldType, Options, ParserField } from 'graphql-js-tree';
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

  if (
    fieldType.type === Options.required &&
    'nest' in fieldType.nest &&
    fieldType.nest.type === Options.array &&
    'name' in fieldType.nest.nest
  ) {
    return {
      name: arg.name,
      type: `[${fieldType.nest.nest.name}]!`,
    };
  }

  if (fieldType.type === Options.array && 'name' in fieldType.nest) {
    return {
      name: arg.name,
      type: `[${fieldType.nest.name}]`,
    };
  }

  return null;
};

export const getTypeDetails = (parsedField: ParserField): TypeGetTypeArgumentsReturn => {
  return parsedField.args.map((arg) => {
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
