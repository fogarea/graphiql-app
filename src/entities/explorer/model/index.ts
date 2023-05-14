import { create, StateCreator } from 'zustand';
import { ParserField } from 'graphql-js-tree';
import { expoloreSevice } from '../services';
import { devtools, persist } from 'zustand/middleware';

const explorerStore: TyoeExplorerStore = (set) => ({
  isOpen: false,
  content: '',
  isLoaded: false,
  error: null,
  parsedSchema: [],
  toggleExplorer: () => set((state) => ({ isOpen: !state.isOpen })),
  setParsedSchema: (value: ParserField[]) => set({ parsedSchema: value }),
  fetchSchema: async () => {
    const schema = await expoloreSevice.loadDocumentation();
    set({ parsedSchema: schema.nodes });
    set({ isLoaded: true });
  },
});

export const useExplorerStore = create<IExplorerState>()(
  devtools(
    persist(explorerStore, {
      name: '@explorer-storage',
    })
  )
);

interface IExplorerState {
  isOpen: boolean;
  content: string;
  isLoaded: boolean;
  error: string | null;
  parsedSchema: ParserField[] | [];
  toggleExplorer: () => void;
  setParsedSchema: (value: ParserField[]) => void;
  fetchSchema: () => Promise<void>;
}

type TyoeExplorerStore = StateCreator<IExplorerState>;
