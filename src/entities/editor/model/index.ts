import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { prettifiedJSONContent, parseJSONStringToObject } from '../lib';
import { graphiqlClient } from '@/shared/api';

const editorStore: TypeEditorStore = (set, get) => ({
  queryCode: '',
  headerCode: '',
  variableCode: '',
  responseCode: '',
  isFetching: false,
  setQueryCode: (value: string) => set({ queryCode: value }),
  setHeaderCode: (value: string) => set({ headerCode: value }),
  setVariableCode: (value: string) => set({ variableCode: value }),
  setResponseCode: (value: string) => set({ responseCode: value }),
  fetchData: async () => {
    set({ isFetching: true });

    const { queryCode, headerCode, variableCode } = get();

    const results = await graphiqlClient.request(
      queryCode,
      parseJSONStringToObject(headerCode),
      parseJSONStringToObject(variableCode)
    );

    prettifiedJSONContent(results, (value) => set({ responseCode: value }));

    set({ isFetching: false });
  },
});

export const useEditorStore = create<IEditorState>()(
  devtools(editorStore, { name: '@editor-store' })
);

interface IEditorState {
  queryCode: string;
  headerCode: string;
  variableCode: string;
  responseCode: string;
  isFetching: boolean;
  setQueryCode: (value: string) => void;
  setHeaderCode: (value: string) => void;
  setVariableCode: (value: string) => void;
  setResponseCode: (value: string) => void;
  fetchData: () => Promise<void>;
}

type TypeEditorStore = StateCreator<IEditorState>;
