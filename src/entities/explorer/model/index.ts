import { create } from 'zustand';

export const useExplorerStore = create<IExplorerState>()((set) => ({
  isOpen: false,
  content: '',
  isLoading: false,
  error: null,
  toggleExplorer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

interface IExplorerState {
  isOpen: boolean;
  content: string;
  isLoading: boolean;
  error: string | null;
  toggleExplorer: () => void;
}
