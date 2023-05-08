export const a11yHeaderTextAlign = () => ({
  textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' },
  marginTop: { lg: '16px', md: '16px', sm: '12px', xs: '8px' },
  marginBottom: { lg: '16px', md: '16px', sm: '12px', xs: '8px' },
});

export const a11yCodeEditorStyles = (attributes?: { [key: string]: string }) => ({
  style: {
    fontSize: 14,
    backgroundColor: '#fff', // Default value
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
    height: '100%',
    width: '100%',
    overflow: 'auto',
    ...attributes,
  },
});

export const a11yColumnHeight = () => ({
  xs: 360,
  sm: 360,
  md: 580,
});
