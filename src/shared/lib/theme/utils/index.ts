export const a11yHeaderTextAlign = () => ({
  textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' },
  marginTop: { lg: '16px', md: '16px', sm: '12px', xs: '8px' },
  marginBottom: { lg: '16px', md: '16px', sm: '12px', xs: '8px' },
});

export const a11yHeader2TextAlign = () => ({
  textAlign: { lg: 'center', md: 'center', sm: 'center', xs: 'center' },
  marginTop: { lg: '40px', md: '40px', sm: '20px', xs: '12px' },
  marginBottom: { lg: '60px', md: '60px', sm: '40px', xs: '20px' },
});

export const a11yAboutUsWrapper = () => ({
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
