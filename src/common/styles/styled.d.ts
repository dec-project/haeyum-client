import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      brown: string;
    };
    fontSizes: {
      xs: string;
      small: string;
      base: string;
      large: string;
    };
  }
}
