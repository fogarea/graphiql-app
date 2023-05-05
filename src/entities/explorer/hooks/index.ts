import { useExplorerStore } from '../model';

export const useExplorer = () => {
  const [isOpen, content, toggleExplorer] = useExplorerStore((state) => [
    state.isOpen,
    state.content,
    state.toggleExplorer,
  ]);

  const handleToggleDocumentation = () => {
    toggleExplorer();

    console.log('handleToggleDocumentation');
  };

  return { isOpen, content, handleToggleDocumentation };
};
