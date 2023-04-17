import "styled-components";

export type Colors = {
  base: {
    "100": string;
    "200": string;
  };
  text: {
    main: string;
    light: string;
  };
  accent: {
    main: string;
    dark: string;
  };
  primary: {
    main: string;
  };
  secondary: {
    main: string;
  };
  button: {
    bg: string;
    text: string;
  };
  "button-secondary": {
    bg: string;
    text: string;
  };
  info: {
    main: string;
  };
  warning: {
    main: string;
  };
  error: {
    main: string;
  };
  reverse: {
    main: string;
  };
};

export type ColorBase = Colors["base"];
export type ColorText = Colors["text"];
export type ColorAccent = Colors["accent"];
export type ColorPrimary = Colors["primary"];
export type ColorSecondary = Colors["secondary"];
export type ColorButton = Colors["button"];

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
  }
}
