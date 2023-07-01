import { shallow } from 'zustand/shallow';
import { useExplorerStore } from '../model';

export const useDocsReset = () => {
  const [resetParsedSchema] = useExplorerStore((state) => [state.resetParsedSchema], shallow);

  const resetDocs = (): void => {
    resetParsedSchema();
  };

  return [resetDocs];
};
