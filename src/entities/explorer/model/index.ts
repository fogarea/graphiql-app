import { create, StateCreator } from 'zustand';
import { expoloreSevice } from '../services';
import { devtools } from 'zustand/middleware';
import { TypeDocsTypeInfo, TypeArrayParsedField, TypeParsedField } from './types';

const explorerStore: TyoeExplorerStore = (set) => ({
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
  addDocsContainer: (queryInfo: TypeDocsTypeInfo) => {
    set((state) => ({ docsContainers: [...state.docsContainers, queryInfo] }));
  },
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => set({ docsContainers: [queryInfo] }),
  removeDocsContainer: () =>
    set((state) => ({ docsContainers: [...state.docsContainers.slice(0, 1)] })),
  setFieldInfo: (fieldInfo: TypeParsedField | null) => set({ fieldInfo: fieldInfo }),
  fetchSchema: async () => {
    const schema = await expoloreSevice.loadDocumentation();
    set({ parsedSchema: schema.nodes });
    set({ isLoaded: true });
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
  addDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  removeDocsContainer: () => void;
  setFieldInfo: (fieldInfo: TypeParsedField | null) => void;
  toggleExplorer: () => void;
  setSelectedElements: (selectedElements: Partial<ISelectedElements>) => void;
  setParsedSchema: (value: TypeArrayParsedField) => void;
  fetchSchema: () => Promise<void>;
}

type TyoeExplorerStore = StateCreator<IExplorerState>;

interface ISelectedElements {
  selectedQuery: string;
  selectedTypeDetails: string;
  selectedTypeArguments: string;
}
