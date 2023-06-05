import { IGetQueryValue } from '../model';

const handleArrayAndRequiredCase = (queryInfo: IGetQueryValue) => {
  if (!(queryInfo.nest.isArray && queryInfo.nest.isRequired)) {
    return null;
  }
  return `[${queryInfo.name}]!`;
};

const handleRequiredCase = (queryInfo: IGetQueryValue) => {
  if (!queryInfo.nest.isRequired) {
    return null;
  }
  return `${queryInfo.name}!`;
};

const handleArrayCase = (queryInfo: IGetQueryValue) => {
  if (!queryInfo.nest.isArray) {
    return null;
  }
  return `[${queryInfo.name}]`;
};

const handleDefaultCase = (queryInfo: IGetQueryValue) => {
  return `${queryInfo.name}`;
};

export const showQueryValueByInfo = (queryInfo: IGetQueryValue): string => {
  const arrayAndRequiredCaseResult = handleArrayAndRequiredCase(queryInfo);
  if (arrayAndRequiredCaseResult) {
    return arrayAndRequiredCaseResult;
  }

  const requiredCaseResult = handleRequiredCase(queryInfo);
  if (requiredCaseResult) {
    return requiredCaseResult;
  }

  const arrayCaseResult = handleArrayCase(queryInfo);
  if (arrayCaseResult) {
    return arrayCaseResult;
  }

  return handleDefaultCase(queryInfo);
};
