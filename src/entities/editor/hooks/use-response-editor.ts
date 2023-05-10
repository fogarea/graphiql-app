import { prettifiedJSONContent } from '../lib';
import { useEditorStore } from '../model';

export const useResponseEditor = () => {
  const [isFetching, responseCode, _setResponseCode] = useEditorStore((state) => [
    state.isFetching,
    state.responseCode,
    state.setResponseCode,
  ]);

  const setResponseCode = (code: string) => {
    prettifiedJSONContent(code, (value: string) => _setResponseCode(value));
  };

  return { isFetching, responseCode, setResponseCode };
};
