import { ResponseEditor, useResponseEditor } from '@/entities/editor';

export const ResponseContainer = (): JSX.Element => {
  const { isFetching, responseCode } = useResponseEditor();

  return <ResponseEditor isFetching={isFetching} json={responseCode} />;
};
