import { prettifiedJSONContent } from '../lib';
import { useEditorStore } from '../model';

export const useResponseEditor = () => {
  const [isFetching, responseCode, error, setError, _setResponseCode] = useEditorStore((state) => [
    state.isFetching,
    state.responseCode,
    state.error,
    state.setError,
    state.setResponseCode,
  ]);

  const setResponseCode = (code: string) => {
    prettifiedJSONContent(code, (value: string) => _setResponseCode(value));
  };

  return { isFetching, responseCode, error, setError, setResponseCode };
};
