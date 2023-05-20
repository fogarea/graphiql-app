import { create, StateCreator } from 'zustand';
import { expoloreSevice } from '../services';
import { devtools } from 'zustand/middleware';
import { TypeDocsTypeInfo, TypeArrayParsedField } from './types';

const explorerStore: TyoeExplorerStore = (set) => ({
  isOpen: false,
  content: '',
  isLoaded: false,
  error: null,
  parsedSchema: [],
  docsContainers: [],
  selectedElement: '',
  toggleExplorer: () => set((state) => ({ isOpen: !state.isOpen })),
  setParsedSchema: (value: TypeArrayParsedField) => set({ parsedSchema: value }),
  addDocsContainer: (queryInfo: TypeDocsTypeInfo) => {
    set((state) => ({ docsContainers: [...state.docsContainers, queryInfo] }));
  },
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => set({ docsContainers: [queryInfo] }),
  removeDocsContainer: () =>
    set((state) => ({ docsContainers: [...state.docsContainers.slice(0, 1)] })),
  setSelectedElement: (selectedElement: string) => set({ selectedElement: selectedElement }),
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
  selectedElement: string;
  addDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  setDocsContainer: (queryInfo: TypeDocsTypeInfo) => void;
  removeDocsContainer: () => void;
  toggleExplorer: () => void;
  setSelectedElement: (selectedElement: string) => void;
  setParsedSchema: (value: TypeArrayParsedField) => void;
  fetchSchema: () => Promise<void>;
}

type TyoeExplorerStore = StateCreator<IExplorerState>;
