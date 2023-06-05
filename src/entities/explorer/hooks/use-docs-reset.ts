import { useExplorerStore } from '../model';

export const useDocsReset = () => {
  const [resetParsedSchema] = useExplorerStore((state) => [state.resetParsedSchema]);

  const resetDocs = (): void => {
    resetParsedSchema();
  };

  return [resetDocs];
};
