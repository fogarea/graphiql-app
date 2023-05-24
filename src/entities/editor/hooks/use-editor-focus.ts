import { FocusEvent } from 'react';

export const useEditorFocus = () => {
  const onFocus = (e: FocusEvent) => {
    const ct = e.currentTarget as HTMLTextAreaElement & Element;

    ct.setSelectionRange(ct.value.length, ct.value.length);
  };

  return { onFocus };
};
