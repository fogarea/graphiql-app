import { create } from 'zustand';

export const useEditorStore = create<IEditorState>()((set) => ({
  queryCode: '',
  headerCode: '',
  variableCode: '',
  responseCode: '',
  setQueryCode: (code: string) => set(() => ({ queryCode: code })),
}));

interface IEditorState {
  queryCode: string;
  headerCode: string;
  variableCode: string;
  responseCode: string;
  setQueryCode: (code: string) => void;
}
