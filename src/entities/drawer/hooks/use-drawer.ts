import { useDrawerStore } from '../model/';

export const useDrawer = () => {
  const [isOpen, toggleDrawer] = useDrawerStore((state) => [state.isOpen, state.toggleDrawer]);

  return { isOpen, toggleDrawer };
};
