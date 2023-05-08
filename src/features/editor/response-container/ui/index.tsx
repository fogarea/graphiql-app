import { ResponseEditor, useResponseEditor } from '@/entities/editor';

export const ResponseContainer = (): JSX.Element => {
  const { responseCode } = useResponseEditor();

  return <ResponseEditor json={responseCode} />;
};
