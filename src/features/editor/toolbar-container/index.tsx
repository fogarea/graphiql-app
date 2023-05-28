import { useDrawer } from '@/entities/drawer';
import { EditorToolbar, useQueryEditor } from '@/entities/editor';
import { ExplorerToolbar } from '@/entities/explorer';

export const ToolbarContainer = ({ variant }: IToolbarContainerProps): JSX.Element => {
  const { isFetching, execQuery, prettifyQuery, copyQuery, cleanQuery } = useQueryEditor();
  const { toggleDrawer } = useDrawer();

  return (
    <>
      {(variant === 'editor' || variant === 'all') && (
        <EditorToolbar
          isFetching={isFetching}
          execQuery={execQuery}
          prettifyQuery={prettifyQuery}
          copyQuery={copyQuery}
          cleanQuery={cleanQuery}
        />
      )}
      {(variant === 'explorer' || variant === 'all') && (
        <ExplorerToolbar toggleDocumentation={() => toggleDrawer()} />
      )}
    </>
  );
};

interface IToolbarContainerProps {
  variant: 'editor' | 'explorer' | 'all';
}
