import { parse, print } from 'graphql';

import { TypeQueryErrorObject } from '../model';

export const prettifiedJSONContent = (content: string, setValue: (value: string) => void): void => {
  try {
    const prettifiedContent = JSON.stringify(JSON.parse(content), null, 2);

    if (prettifiedContent !== content) {
      setValue(prettifiedContent);
    }
  } catch {
    return;
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
    return;
  }
};

export const parseJSONStringToObject = (value: string): Record<string, string> => {
  try {
    const resultObject = JSON.parse(value) as Record<string, string>;

    return resultObject;
  } catch {
    return {};
  }
};

export const parseErrorMessage = (results: string): string => {
  const DEFAULT_MESSAGE = 'Something went wrong while executing your query';

  try {
    const resultObject = JSON.parse(results) as TypeQueryErrorObject;

    if (typeof resultObject.response === 'undefined' && typeof resultObject === 'object') {
      return '';
    }

    if (resultObject.response?.errors && resultObject.response.errors[0]) {
      const message = resultObject.response.errors[0].message || DEFAULT_MESSAGE;

      return message;
    }

    return '';
  } catch {
    return DEFAULT_MESSAGE;
  }
};
