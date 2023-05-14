import { useExplorerStore } from '../model';

export const useExplorer = () => {
  const [isOpen, isLoaded, content, toggleExplorer, fetchSchema, parsedSchema] = useExplorerStore(
    (state) => [
      state.isOpen,
      state.isLoaded,
      state.content,
      state.toggleExplorer,
      state.fetchSchema,
      state.parsedSchema,
    ]
  );

  const execSchema = (): void => {
    void fetchSchema();
  };

  const handleToggleDocumentation = () => {
    toggleExplorer();
    // await fetchSchema();

    console.log('handleToggleDocumentation');
  };

  return { isOpen, content, handleToggleDocumentation, execSchema, parsedSchema, isLoaded };
};
