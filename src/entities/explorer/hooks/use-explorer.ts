import { useExplorerStore } from '../model/';

export const useExplorer = () => {
  const [
    isOpen,
    isLoaded,
    toggleExplorer,
    parsedSchema,
    docsContainers,
    setDocsContainer,
    selectedElements,
    setSelectedElements,
    fieldInfo,
    setFieldInfo,
    setParsedSchema,
  ] = useExplorerStore((state) => [
    state.isOpen,
    state.isLoaded,
    state.toggleExplorer,
    state.parsedSchema,
    state.docsContainers,
    state.setDocsContainer,
    state.selectedElements,
    state.setSelectedElements,
    state.fieldInfo,
    state.setFieldInfo,
    state.setParsedSchema,
  ]);

  const handleToggleDocumentation = () => {
    toggleExplorer();
  };

  return {
    isOpen,
    handleToggleDocumentation,
    parsedSchema,
    isLoaded,
    docsContainers,
    setDocsContainer,
    selectedElements,
    setSelectedElements,
    fieldInfo,
    setFieldInfo,
    setParsedSchema,
  };
};
