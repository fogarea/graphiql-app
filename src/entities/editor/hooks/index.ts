import { copyToClipBoard } from '@/shared/lib';
import { prettifiedQueryContent } from '../lib';
import { useEditorStore } from '../model';

export const useQueryEditor = () => {
  const [queryCode, setQueryCode] = useEditorStore((state) => [
    state.queryCode,
    state.setQueryCode,
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
  };

  return { queryCode, execQuery, prettifyQuery, copyQuery, cleanQuery, setQueryCode };
};
