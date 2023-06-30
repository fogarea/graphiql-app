import { useEditorStore } from '../model';

export const useEndpoint = () => {
  const [endpoint, setEndpoint] = useEditorStore((state) => [state.endpoint, state.setEndpoint]);

  return {
    endpoint,
    setEndpoint,
  };
};
