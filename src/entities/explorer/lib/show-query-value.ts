import { ParserField } from 'graphql-js-tree';
import { IGetQueryValue } from '../model';
import { getQueryInfo } from './get-query-info';

const handleArrayCase = (result: IGetQueryValue) => {
  if (!result.nest.isArray) {
    return null;
  }
  return `[${result.name}]`;
};

const handleRequiredCase = (result: IGetQueryValue) => {
  if (!result.nest.isRequired) {
    return null;
  }
  return `${result.name}]`;
};

const handleDefaultCase = (result: IGetQueryValue) => {
  return `${result.name}`;
};

export const showQueryValue = (parsedField: ParserField): string => {
  const result = getQueryInfo(parsedField);

  const arrayCaseResult = handleArrayCase(result);
  if (arrayCaseResult) {
    return arrayCaseResult;
  }

  const requiredCaseResult = handleRequiredCase(result);
  if (requiredCaseResult) {
    return requiredCaseResult;
  }

  return handleDefaultCase(result);
};
