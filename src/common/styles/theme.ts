const colors = {
  white: '#FFFFFF',
  black: '#211708',
  gray: '#E5E8EB',
  red: '#F94248',
  orange100: '#FAF5F0',
  orange200: '#F5EBD9',
  orange300: '#F0DEC2',
  orange400: '#FF9900',
  orange500: '#B57D2E',
};

const themeColors = {
  primary: colors.orange500,
  secondary: colors.orange400,
  textPrimary: colors.black,
  textSecondary: colors.orange500,
  background: colors.orange100,
  border: colors.orange300,
  error: colors.red,
};

const typography = {
  title1: {
    bold: { fontSize: '1.75rem', lineHeight: 1.4, fontWeight: 700 }, // 28
    medium: { fontSize: '1.75rem', lineHeight: 1.4, fontWeight: 500 }, // 28
    regular: { fontSize: '1.75rem', lineHeight: 1.4, fontWeight: 400 }, // 28
  },
  title2: {
    bold: { fontSize: '1.375rem', lineHeight: 1.5, fontWeight: 700 }, // 22
    medium: { fontSize: '1.375rem', lineHeight: 1.5, fontWeight: 500 }, // 22
    regular: { fontSize: '1.375rem', lineHeight: 1.5, fontWeight: 400 }, // 22
  },
  title3: {
    bold: { fontSize: '1.125rem', lineHeight: 1.5, fontWeight: 700 }, // 18
    medium: { fontSize: '1.125rem', lineHeight: 1.5, fontWeight: 500 }, // 18
    regular: { fontSize: '1.125rem', lineHeight: 1.5, fontWeight: 400 }, // 18
  },
  body1: {
    bold: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 700 }, // 16
    medium: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 500 }, // 16
    regular: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 400 }, // 16
  },
  body2: {
    bold: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 700 }, // 14
    medium: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 500 }, // 14
    regular: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 400 }, // 14
  },
  caption: {
    bold: { fontSize: '0.813rem', lineHeight: 1.6, fontWeight: 700 }, // 13
    medium: { fontSize: '0.813rem', lineHeight: 1.6, fontWeight: 500 }, // 13
    regular: { fontSize: '0.813rem', lineHeight: 1.6, fontWeight: 400 }, // 13
  },
  label: {
    bold: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 700 }, // 14
    medium: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 500 }, // 14
    regular: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 400 }, // 14
  },
  nav: {
    bold: { fontSize: '0.75rem', lineHeight: 1.5, fontWeight: 700 }, // 12
    medium: { fontSize: '0.75rem', lineHeight: 1.5, fontWeight: 500 }, // 12
    regular: { fontSize: '0.75rem', lineHeight: 1.5, fontWeight: 400 }, // 12
  },
};

const theme = {
  colors,
  themeColors,
  typography,
};

export default theme;
