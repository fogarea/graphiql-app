import { useExplorerStore } from '../model';

export const useDocsReset = () => {
  const [resetParsedSchema] = useExplorerStore((state) => [state.resetParsedSchema]);

  const resetDecs = (): void => {
    resetParsedSchema();
  };
  return [resetDecs];
};
