import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

export * from './types';

import { graphiqlClient } from '@/shared/api';
import { prettifiedJSONContent, parseJSONStringToObject, parseErrorMessage } from '../lib';

const initialState = {
  queryCode: '',
  headerCode: '',
  variableCode: '',
  responseCode: '',
  isFetching: false,
  error: '',
};

const editorStore: TypeEditorStore = (set, get) => ({
  ...initialState,

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

    const errorMessage = parseErrorMessage(results);

    set({ isFetching: false, error: errorMessage });
  },

  setError: (value: string) => set({ error: value }),

  reset: () => {
    set({ ...initialState });
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
  error: string;
  setQueryCode: (value: string) => void;
  setHeaderCode: (value: string) => void;
  setVariableCode: (value: string) => void;
  setResponseCode: (value: string) => void;
  fetchData: () => Promise<void>;
  setError: (value: string) => void;
  reset: () => void;
}

type TypeEditorStore = StateCreator<IEditorState>;
