import { copyToClipBoard } from '@/shared/lib/browser';
import { prettifiedJSONContent, prettifiedQueryContent } from '../lib';
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
    endpoint,
    setEndpoint,
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
    state.endpoint,
    state.setEndpoint,
  ]);

  const execQuery = (): void => {
    void fetchData();
  };

  const prettifyQuery = (): void => {
    prettifiedQueryContent(queryCode, (v: string) => setQueryCode(v));

    prettifiedJSONContent(variableCode, (v: string) => setVariableCode(v));

    prettifiedJSONContent(headerCode, (v: string) => setHeaderCode(v));
  };

  const copyQuery = (): void => {
    copyToClipBoard(queryCode);
  };

  const cleanQuery = (): void => {
    setQueryCode('');
    setResponseCode('');
    setVariableCode('');
    setHeaderCode('');
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
    endpoint,
    setEndpoint,
  };
};
