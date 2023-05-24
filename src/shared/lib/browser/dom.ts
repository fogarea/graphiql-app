import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | GraphiQL`;
  }, [title]);
};

export const copyToClipBoard = (text: string) => {
  void navigator.clipboard.writeText(text);
};
