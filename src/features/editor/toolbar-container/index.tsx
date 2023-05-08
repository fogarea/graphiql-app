import { EditorToolbar, useQueryEditor } from '@/entities/editor';
import { ExplorerToolbar, useExplorer } from '@/entities/explorer';

export const ToolbarContainer = ({ variant }: IToolbarContainerProps): JSX.Element => {
  const { execQuery, prettifyQuery, copyQuery, cleanQuery } = useQueryEditor();
  const { handleToggleDocumentation } = useExplorer();

  return (
    <>
      {(variant === 'editor' || variant === 'all') && (
        <EditorToolbar
          execQuery={execQuery}
          prettifyQuery={prettifyQuery}
          copyQuery={copyQuery}
          cleanQuery={cleanQuery}
        />
      )}
      {(variant === 'explorer' || variant === 'all') && (
        <ExplorerToolbar toggleDocumentation={handleToggleDocumentation} />
      )}
    </>
  );
};

interface IToolbarContainerProps {
  variant: 'editor' | 'explorer' | 'all';
}
