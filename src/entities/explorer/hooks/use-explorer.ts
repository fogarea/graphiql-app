import { useExplorerStore } from '../model/';

export const useExplorer = () => {
  const [
    isLoaded,
    parsedSchema,
    docsContainers,
    setDocsContainer,
    selectedElements,
    setSelectedElements,
    fieldInfo,
    setFieldInfo,
    setParsedSchema,
  ] = useExplorerStore((state) => [
    state.isLoaded,
    state.parsedSchema,
    state.docsContainers,
    state.setDocsContainer,
    state.selectedElements,
    state.setSelectedElements,
    state.fieldInfo,
    state.setFieldInfo,
    state.setParsedSchema,
  ]);

  return {
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
