import { FieldType, Options, ParserField } from 'graphql-js-tree';
import { IGetQueryValue } from '../model';

const handleNestedFieldType = (fieldType: FieldType, result: IGetQueryValue) => {
  if (!('nest' in fieldType)) {
    return;
  }

  if ('name' in fieldType.nest && fieldType.type === Options.array) {
    result.name = fieldType.nest.name;
    result.nest.isArray = true;
    return;
  }

  if (fieldType.type === Options.required && 'name' in fieldType.nest) {
    result.name = fieldType.nest.name;
    result.nest.isRequired = true;
    return;
  }

  if (
    fieldType.type === Options.required &&
    fieldType.nest.type === Options.array &&
    'nest' in fieldType.nest.nest &&
    'name' in fieldType.nest.nest.nest
  ) {
    result.name = fieldType.nest.nest.nest.name;
    result.nest.isRequired = true;
    result.nest.isArray = true;
    return;
  }

  if (
    fieldType.type === Options.required &&
    'nest' in fieldType.nest &&
    'name' in fieldType.nest.nest
  ) {
    result.name = fieldType.nest.nest.name;
    result.nest.isArray = true;
    result.nest.isRequired = true;
    return;
  }
};

const handleNameFieldType = (fieldType: FieldType, result: IGetQueryValue) => {
  if (fieldType.type !== Options.name) {
    return;
  }

  result.name = fieldType.name;
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

  handleNestedFieldType(fieldType, result);
  handleNameFieldType(fieldType, result);

  return result;
};
