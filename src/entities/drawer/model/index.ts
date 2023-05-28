import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

const drawerStore: TypeDrawerStore = (set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
});

export const useDrawerStore = create<IDrawerState>()(
  devtools(drawerStore, { name: '@drawer-storage' })
);

interface IDrawerState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

type TypeDrawerStore = StateCreator<IDrawerState>;
