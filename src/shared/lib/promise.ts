import { SyntheticEvent } from 'react';

export const onPromise = <T>(promise: (event: SyntheticEvent) => Promise<T>) => {
  return (event: SyntheticEvent) => {
    if (promise) {
      promise(event).catch((error) => {
        console.log('Unexpected error', error);
      });
    }
  };
};
