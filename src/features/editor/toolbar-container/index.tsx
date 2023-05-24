import { EditorToolbar, useQueryEditor } from '@/entities/editor';
import { ExplorerToolbar, useExplorer } from '@/entities/explorer';

export const ToolbarContainer = ({ variant }: IToolbarContainerProps): JSX.Element => {
  const { isFetching, execQuery, prettifyQuery, copyQuery, cleanQuery } = useQueryEditor();
  const { handleToggleDocumentation, isLoaded } = useExplorer();

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
        <ExplorerToolbar isDisabled={!isLoaded} toggleDocumentation={handleToggleDocumentation} />
      )}
    </>
  );
};

interface IToolbarContainerProps {
  variant: 'editor' | 'explorer' | 'all';
}
