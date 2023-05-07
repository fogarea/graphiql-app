import { copyToClipBoard } from '@/shared/lib';
import { prettifiedQueryContent } from '../lib';
import { useEditorStore } from '../model';

export const useQueryEditor = () => {
  const [
    queryCode,
    variableCode,
    headerCode,
    setQueryCode,
    setVariableCode,
    setHeaderCode,
    setResponseCode,
  ] = useEditorStore((state) => [
    state.queryCode,
    state.variableCode,
    state.headerCode,
    state.setQueryCode,
    state.setVariableCode,
    state.setHeaderCode,
    state.setResponseCode,
  ]);

  const execQuery = (): void => {
    console.log('execQuery');
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
