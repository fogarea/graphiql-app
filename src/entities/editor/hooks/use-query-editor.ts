import { copyToClipBoard } from '@/shared/lib';
import { prettifiedQueryContent } from '../lib';
import { useEditorStore } from '../model';

export const useQueryEditor = () => {
  const [
    isFetching,
    queryCode,
    variableCode,
    headerCode,
    setQueryCode,
    setVariableCode,
    setHeaderCode,
    setResponseCode,
    fetchData,
  ] = useEditorStore((state) => [
    state.isFetching,
    state.queryCode,
    state.variableCode,
    state.headerCode,
    state.setQueryCode,
    state.setVariableCode,
    state.setHeaderCode,
    state.setResponseCode,
    state.fetchData,
  ]);

  const execQuery = (): void => {
    void fetchData();
  };

  const prettifyQuery = (): void => {
    prettifiedQueryContent(queryCode, (value: string) => {
      setQueryCode(value);
    });
  };

  const copyQuery = (): void => {
    copyToClipBoard(queryCode);
  };

  const cleanQuery = (): void => {
    setQueryCode('');
    setResponseCode('');
  };

  return {
    isFetching,
    queryCode,
    variableCode,
    headerCode,
    execQuery,
    prettifyQuery,
    copyQuery,
    cleanQuery,
    setQueryCode,
    setVariableCode,
    setHeaderCode,
  };
};
