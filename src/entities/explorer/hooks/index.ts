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
    setDocsContainer,
    selectedElements,
    setSelectedElements,
    fieldInfo,
    setFieldInfo,
  ] = useExplorerStore((state) => [
    state.isOpen,
    state.isLoaded,
    state.content,
    state.toggleExplorer,
    state.fetchSchema,
    state.parsedSchema,
    state.docsContainers,
    state.setDocsContainer,
    state.selectedElements,
    state.setSelectedElements,
    state.fieldInfo,
    state.setFieldInfo,
  ]);

  const execSchema = (): void => {
    void fetchSchema();
  };

  const handleToggleDocumentation = () => {
    toggleExplorer();
  };

  return {
    isOpen,
    content,
    handleToggleDocumentation,
    execSchema,
    parsedSchema,
    isLoaded,
    docsContainers,
    setDocsContainer,
    selectedElements,
    setSelectedElements,
    fieldInfo,
    setFieldInfo,
  };
};
