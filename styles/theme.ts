import { DefaultTheme } from 'styled-components';

export const FONTS = {
  main: `'Poppins', sans-serif;`,
  heading: `'Barlow', sans-serif;`,
  special: `'Aleo', serif`,
  logo: `'Aref Ruqaa', serif`,
  mono: "'IBM Plex Mono', monospace",
  chinese: `'Noto Serif SC', serif`,
};

export const FONT_SIZES = {
  sm: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  md: `${18 / 16}rem`,
  lg: `${24 / 16}rem`,
  xl: `${28 / 16}rem`,
  xxl: `${32 / 16}rem`,
  xxxl: `${36 / 16}rem`,
  big: `${48 / 16}rem`,
};

export const FONT_WEIGHTS = {
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1024,
  desktopMax: 1200,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  desktopAndSmaller: `(max-width: ${BREAKPOINTS.desktopMax / 16}rem)`,
};

export const LOGO_COLORS = {
  react: '192.9deg 95.1% 68.2%',
  html: '13deg 77.1% 52%',
  css: '205.3deg 79.3% 39.8%',
  javascript: '53.4deg 93.1% 54.3%',
  typescript: '211.4deg 60.3% 48.4%',
  gatsby: '270deg 50% 40%',
  apollo: '251.8deg 65.6% 32%',
  graphql: '319.5deg 100% 44.1%',
  prisma: '217.8deg 23.1% 22.9%',
  mongodb: '120.7deg 39.1% 45.7%',
  posgresql: '225deg 72.7% 56.9%',
  styled: '340.4deg 59.8% 64.9%',
  gsap: '80.6deg 98.1% 40.8%',
};

export const cupcakeTheme: DefaultTheme = {
  colors: {
    base: {
      '100': '#FAF7F5',
      '200': '#fbf4e9',
      // '200': '#EFEAE6',
    },
    text: {
      main: '#291334',
      light: 'hsl(280 46% 14% / 0.7)',
    },
    accent: {
      main: '#65C3C8',
      dark: '#3FACB1',
    },
    primary: {
      main: '#EF9FBC',
    },
    secondary: {
      main: '#EEAF3A',
    },
    button: {
      bg: 'var(--clr-text-main)',
      text: '#DFAFF8',
    },
    'button-secondary': {
      bg: 'var(--clr-text-main)',
      text: '#DFAFF8',
    },
    info: {
      main: '#39bff8',
    },
    warning: {
      main: '#fabd22',
    },
    error: {
      main: '#f87272',
    },
    reverse: {
      main: '#fff',
    },
  },
};

export const draculaTheme: DefaultTheme = {
  colors: {
    base: {
      '100': '#272A36',
      '200': '#21222C',
    },
    text: {
      main: '#F8F8F2',
      light: '#C2CBF4',
    },
    accent: {
      main: '#FF79C6',
      dark: '#FF2EA6',
    },
    primary: {
      main: '#BD93F9',
    },
    secondary: {
      main: '#FFB86C',
    },
    button: {
      bg: '#414558',
      text: 'var(--clr-text-light)',
    },
    'button-secondary': {
      bg: 'var(--clr-text-main)',
      text: 'var(--clr-base-100)',
    },
    info: {
      main: '#8ae9fd',
    },
    warning: {
      main: '#f1fa8c',
    },
    error: {
      main: '#ff5555',
    },
    reverse: {
      main: 'var(--clr-button-bg)',
    },
  },
};
