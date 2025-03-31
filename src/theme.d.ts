// import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
      light: string;
      medium: string;
      dark: string;
      text: string;
    };
    fonts: {
      main: string;
      heading: string;
    };
    space: number[];
    radii: number[];
  }
}
