import { create } from 'zustand';

export const useEditorStore = create<IEditorState>()((set) => ({
  queryCode: '',
  headerCode: '',
  variableCode: '',
  responseCode: '',
  setQueryCode: (value: string) => set(() => ({ queryCode: value })),
  setHeaderCode: (value: string) => set(() => ({ headerCode: value })),
  setVariableCode: (value: string) => set(() => ({ variableCode: value })),
  setResponseCode: (value: string) => set(() => ({ responseCode: value })),
}));

interface IEditorState {
  queryCode: string;
  headerCode: string;
  variableCode: string;
  responseCode: string;
  setQueryCode: (value: string) => void;
  setHeaderCode: (value: string) => void;
  setVariableCode: (value: string) => void;
  setResponseCode: (value: string) => void;
}
