import { useExplorerStore } from '../model';

export const useExplorer = () => {
  const [isOpen, content, toggleExplorer, fetchSchema] = useExplorerStore((state) => [
    state.isOpen,
    state.content,
    state.toggleExplorer,
    state.fetchSchema,
  ]);

  const execSchema = (): void => {
    void fetchSchema();
  };

  const handleToggleDocumentation = () => {
    toggleExplorer();
    // fetchSchema();

    console.log('handleToggleDocumentation');
  };

  return { isOpen, content, handleToggleDocumentation, execSchema };
};
