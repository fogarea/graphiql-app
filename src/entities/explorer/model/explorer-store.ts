import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TypeDocsTypeInfo, TypeArrayParsedField, TypeParsedField } from './types';

const initialState = {
  isLoaded: false,
  error: null,
  parsedSchema: [],
  docsContainers: [],
  fieldInfo: null,
  selectedElements: {
    selectedQuery: '',
    selectedTypeArguments: '',
    selectedTypeDetails: '',
  },
};

const explorerStore: TypeExplorerStore = (set) => ({
  isLoaded: false,
  error: null,
  parsedSchema: [],
  docsContainers: [],
  fieldInfo: null,
  selectedElements: {
    selectedQuery: '',
    selectedTypeArguments: '',
    selectedTypeDetails: '',
  },
  setSelectedElements: (updatedElements) =>
    set((state) => ({
      selectedElements: {
        ...state.selectedElements,
        ...updatedElements,
      },
    })),
  setParsedSchema: (parsedSchema: TypeArrayParsedField) => set({ parsedSchema: parsedSchema }),
  resetParsedSchema: () =>
    set({ ...initialState, selectedElements: { ...initialState.selectedElements } }),
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => set({ docsContainers: [queryInfo] }),
  setFieldInfo: (fieldInfo: TypeParsedField | null) => set({ fieldInfo: fieldInfo }),
});

export const useExplorerStore = create<IExplorerState>()(
  devtools(explorerStore, { name: '@explorer-storage' })
);

interface IExplorerState {
  isLoaded: boolean;
  error: string | null;
  parsedSchema: TypeArrayParsedField | [];
  docsContainers: TypeDocsTypeInfo[] | [];
  fieldInfo: TypeParsedField | null;
  selectedElements: ISelectedElements;
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  setFieldInfo: (fieldInfo: TypeParsedField | null) => void;
  setSelectedElements: (selectedElements: Partial<ISelectedElements>) => void;
  setParsedSchema: (parsedSchema: TypeArrayParsedField) => void;
  resetParsedSchema: () => void;
}

type TypeExplorerStore = StateCreator<IExplorerState>;

interface ISelectedElements {
  selectedQuery: string;
  selectedTypeDetails: string;
  selectedTypeArguments: string;
}
