import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { expolorerSevice } from '../services';
import { TypeDocsTypeInfo, TypeArrayParsedField, TypeParsedField } from './types';

const explorerStore: TypeExplorerStore = (set) => ({
  isOpen: false,
  content: '',
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
  toggleExplorer: () => set((state) => ({ isOpen: !state.isOpen })),
  setParsedSchema: (value: TypeArrayParsedField) => set({ parsedSchema: value }),
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => set({ docsContainers: [queryInfo] }),
  setFieldInfo: (fieldInfo: TypeParsedField | null) => set({ fieldInfo: fieldInfo }),
  fetchSchema: async () => {
    const schema = await expolorerSevice.loadDocumentation();
    set({ parsedSchema: schema.nodes, isLoaded: true });
  },
});

export const useExplorerStore = create<IExplorerState>()(
  devtools(explorerStore, { name: '@explorer-storage' })
);

interface IExplorerState {
  isOpen: boolean;
  content: string;
  isLoaded: boolean;
  error: string | null;
  parsedSchema: TypeArrayParsedField | [];
  docsContainers: TypeDocsTypeInfo[] | [];
  fieldInfo: TypeParsedField | null;
  selectedElements: ISelectedElements;
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  setFieldInfo: (fieldInfo: TypeParsedField | null) => void;
  toggleExplorer: () => void;
  setSelectedElements: (selectedElements: Partial<ISelectedElements>) => void;
  setParsedSchema: (value: TypeArrayParsedField) => void;
  fetchSchema: () => Promise<void>;
}

type TypeExplorerStore = StateCreator<IExplorerState>;

interface ISelectedElements {
  selectedQuery: string;
  selectedTypeDetails: string;
  selectedTypeArguments: string;
}
