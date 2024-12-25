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
  title1Bold: { fontSize: '1.75rem', lineHeight: 1.4, fontWeight: 700 }, // 28
  title2Bold: { fontSize: '1.375rem', lineHeight: 1.5, fontWeight: 700 }, // 22
  title3Bold: { fontSize: '1.125rem', lineHeight: 1.5, fontWeight: 700 }, // 18
  title4Bold: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 700 }, // 16

  subtitleMedium: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 500 }, // 16

  body1Regular: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 400 }, // 16
  body2Regular: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 400 }, // 14

  captionBold: { fontSize: '0.813rem', lineHeight: 1.6, fontWeight: 700 }, // 13

  labelBold: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 700 }, // 14
  labelMedium: { fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 500 }, // 14
  labelRegular: { fontSize: '0.813rem', lineHeight: 1.6, fontWeight: 400 }, // 13

  navMedium: { fontSize: '0.75rem', lineHeight: 1.5, fontWeight: 500 }, // 12
};

const theme = {
  colors,
  themeColors,
  typography,
};

export default theme;
