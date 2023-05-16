import { useExplorerStore } from '../model';

export const useExplorer = () => {
  const [
    isOpen,
    isLoaded,
    content,
    toggleExplorer,
    fetchSchema,
    parsedSchema,
    docsContainers,
    addDocsContainer,
    setDocsContainer,
    removeDocsContainer,
  ] = useExplorerStore((state) => [
    state.isOpen,
    state.isLoaded,
    state.content,
    state.toggleExplorer,
    state.fetchSchema,
    state.parsedSchema,
    state.docsContainers,
    state.addDocsContainer,
    state.setDocsContainer,
    state.removeDocsContainer,
  ]);

  const execSchema = (): void => {
    void fetchSchema();
  };

  const handleToggleDocumentation = async () => {
    toggleExplorer();
    await fetchSchema();

    console.log('handleToggleDocumentation');
  };

  return {
    isOpen,
    content,
    handleToggleDocumentation,
    execSchema,
    parsedSchema,
    isLoaded,
    docsContainers,
    addDocsContainer,
    setDocsContainer,
    removeDocsContainer,
  };
};
