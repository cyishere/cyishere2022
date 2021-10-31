export const FAMILIES = {
  main: `'Poppins', sans-serif;`,
  heading: `'Barlow', sans-serif;`,
  special: `'Aleo', serif`,
  logo: `'Aref Ruqaa', serif`,
  mono: "Menlo, Courier, Courier New, Andale Mono, monospace",
  chinese: `'Noto Serif SC', serif`,
};

export const FONT_SIZES = {
  base: `${16 / 16}rem`,
  md: `${18 / 16}rem`,
  lg: `${24 / 16}rem`,
  xl: `${28 / 16}rem`,
  xxl: `${32 / 16}rem`,
  xxxl: `${36 / 16}rem`,
  big: `${48 / 16}rem`,
};

export const WEIGHTS = {
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const COLORS = {
  white: "0deg 0% 100%",
  khakiLight: "0deg 0% 98%",
  purpleLight: "246deg 62.5% 96.9%",
  khaki: "47.4deg 95% 68.6%",
  cyan: "170.2deg 42.7% 72%",
  salmon: "1.3deg 87.3% 69.2%",
  purplePrimary: "248.4deg 74.2% 47.1%",
  textSecondary: "215.6deg 64.8% 17.8%",
  textPrimary: "240deg 2% 30%",
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};
