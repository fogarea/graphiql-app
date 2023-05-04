import { parse, print } from 'graphql';

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
