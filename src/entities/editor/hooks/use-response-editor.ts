import { prettifiedJSONContent } from '../lib';
import { useEditorStore } from '../model';

export const useResponseEditor = () => {
  const [responseCode, _setResponseCode] = useEditorStore((state) => [
    state.responseCode,
    state.setResponseCode,
  ]);

  const setResponseCode = (code: string) => {
    prettifiedJSONContent(code, (value: string) => _setResponseCode(value));
  };

  return { responseCode, setResponseCode };
};
