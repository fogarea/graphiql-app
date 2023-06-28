export const a11yEditorEndpointFormControl = () => ({
  maxWidth: { lg: '100%', xs: 288 },
  minWidth: 80,
  my: 2,
});

export const a11yAboutUsWrapper = () => ({
  paddingTop: { lg: '60px', md: '60px', sm: '40px', xs: '40px' },
  marginBottom: { lg: '80px', md: '80px', sm: '40px', xs: '20px' },
  gap: { lg: 6, md: 4, sm: 2 },
});

export const a11yCodeEditorStyles = (attributes?: { [key: string]: string }) => ({
  style: {
    fontSize: 14,
    backgroundColor: '#fff',
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
