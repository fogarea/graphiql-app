import { ExplorerDrawer, useExplorer } from '@/entities/explorer';

export const ExplorerContainer = (): JSX.Element => {
  const { isOpen, content, handleToggleDocumentation } = useExplorer();

  return (
    <ExplorerDrawer open={isOpen} toggleDrawer={handleToggleDocumentation}>
      Some documentation here {content}
    </ExplorerDrawer>
  );
};
