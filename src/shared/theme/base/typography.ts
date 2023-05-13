export const remToPx = (value: string) => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = ({ sm, md, lg }: { sm: number; md: number; lg: number }) => {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
};

const FONT_PRIMARY = 'Poppins, sans-serif'; // Google Font

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 48 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h3: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
};
