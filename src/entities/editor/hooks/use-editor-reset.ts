import { useEditorStore } from '../model';

export const useEditorReset = () => {
  const [reset] = useEditorStore((state) => [state.reset]);

  const resetEditor = (): void => {
    reset();
  };

  return [resetEditor];
};
