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
  yellowLight: "60deg 38% 94%",
  purpleLight: "246deg 62.5% 96.9%",
  khaki: "47.4deg 95% 68.6%",
  cyan: "170.2deg 42.7% 72%",
  salmon: "1.3deg 87.3% 69.2%",
  purplePrimary: "248.4deg 74.2% 47.1%",
  textSecondary: "215.6deg 64.8% 17.8%",
  textPrimary: "240deg 2% 30%",
  black: "0deg 0% 0%",

  react: "192.9deg 95.1% 68.2%",
  html: "13deg 77.1% 52%",
  css: "205.3deg 79.3% 39.8%",
  javascript: "53.4deg 93.1% 54.3%",
  typescript: "211.4deg 60.3% 48.4%",
  gatsby: "270deg 50% 40%",
  apollo: "251.8deg 65.6% 32%",
  graphql: "319.5deg 100% 44.1%",
  prisma: "217.8deg 23.1% 22.9%",
  mongodb: "120.7deg 39.1% 45.7%",
  posgresql: "225deg 72.7% 56.9%",
  styled: "340.4deg 59.8% 64.9%",
  gsap: "80.6deg 98.1% 40.8%",
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};
