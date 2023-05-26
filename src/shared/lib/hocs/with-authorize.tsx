import { ComponentType } from 'react';

export const withAuthorize = (
  isAuthorized: boolean,
  ComponentForAuthorized: ComponentType<Record<string, never>>,
  ComponentForUnauthorized: ComponentType<Record<string, never>>
): JSX.Element => {
  if (isAuthorized) {
    return <ComponentForAuthorized />;
  }

  return <ComponentForUnauthorized />;
};
