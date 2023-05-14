import { create } from 'zustand';
import { expoloreSevice } from '../services';

export const useExplorerStore = create<IExplorerState>()((set) => ({
  isOpen: false,
  content: '',
  isLoaded: false,
  error: null,
  toggleExplorer: () => set((state) => ({ isOpen: !state.isOpen })),
  fetchSchema: async () => {
    await expoloreSevice.loadDocumentation();
  },
}));

interface IExplorerState {
  isOpen: boolean;
  content: string;
  isLoaded: boolean;
  error: string | null;
  toggleExplorer: () => void;
  fetchSchema: () => Promise<void>;
}
