import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      text: string;
      textSecondary: string;
      border: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
    };

    maxWidth: string;
  }
}