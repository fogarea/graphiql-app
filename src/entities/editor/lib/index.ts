import { parse, print } from 'graphql';

import { TypeQueryErrorObject } from '../model';

export const prettifiedJSONContent = (content: string, setValue: (value: string) => void): void => {
  try {
    const prettifiedContent = JSON.stringify(JSON.parse(content), null, 2);

    if (prettifiedContent !== content) {
      setValue(prettifiedContent);
    }
  } catch {
    /* Parsing JSON failed, skip prettification */
  }
};

export const prettifiedQueryContent = (
  content: string,
  setValue: (value: string) => void
): void => {
  try {
    const prettifiedContent = print(parse(content));

    if (prettifiedContent !== content) {
      setValue(prettifiedContent);
    }
  } catch {
    /* Parsing Query failed, skip prettification */
  }
};

export const parseJSONStringToObject = (value: string): Record<string, string> => {
  try {
    const headers = JSON.parse(value) as Record<string, string>;

    return headers;
  } catch {
    return {};
  }
};

export const parseErrorMessage = (results: string): string => {
  const DEFAULT_MESSAGE = 'Something went wrong while executing your query';

  try {
    const resultsObj = JSON.parse(results) as TypeQueryErrorObject;

    if (typeof resultsObj.response === 'undefined' && typeof resultsObj === 'object') {
      return '';
    }

    if (resultsObj.response?.errors && resultsObj.response.errors[0]) {
      const message = resultsObj.response.errors[0].message || DEFAULT_MESSAGE;

      return message;
    }

    return '';
  } catch {
    return DEFAULT_MESSAGE;
  }
};
