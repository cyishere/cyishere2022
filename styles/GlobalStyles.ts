import { createGlobalStyle } from "styled-components";
import { COLORS, FAMILIES, FONT_SIZES, QUERIES, WEIGHTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* CUSTOM STYLES ========================= */
  html {
    --clr-white: hsl(${COLORS.white});
    --clr-khaki-light: hsl(${COLORS.khakiLight});
    --clr-yellow-light: hsl(${COLORS.yellowLight});
    --clr-purple-light: hsl(${COLORS.purpleLight});
    --clr-khaki: hsl(${COLORS.khaki});
    --clr-cyan: hsl(${COLORS.cyan});
    --clr-salmon: hsl(${COLORS.salmon});
    --clr-crimson: hsl(${COLORS.crimson});
    --clr-info: hsl(${COLORS.info});
    --clr-purple-primary: hsl(${COLORS.purplePrimary});
    --clr-purple-secondary: hsl(${COLORS.purplePrimary} / 0.5);
    --clr-text-light: hsl(${COLORS.textLight});
    --clr-text-secondary: hsl(${COLORS.textSecondary});
    --clr-text-primary: hsl(${COLORS.textPrimary});
    --clr-black: hsl(${COLORS.black});

    --clr-react: hsl(${COLORS.react});
    --clr-html: hsl(${COLORS.html});
    --clr-css: hsl(${COLORS.css});
    --clr-javascript: hsl(${COLORS.javascript});
    --clr-typescript: hsl(${COLORS.typescript});
    --clr-gatsby: hsl(${COLORS.gatsby});
    --clr-apollo: hsl(${COLORS.apollo});
    --clr-graphql: hsl(${COLORS.graphql});
    --clr-prisma: hsl(${COLORS.prisma});
    --clr-mongodb: hsl(${COLORS.mongodb});
    --clr-posgresql: hsl(${COLORS.posgresql});
    --clr-styled: hsl(${COLORS.styled});
    --clr-gsap: hsl(${COLORS.gsap});

    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-semi-bold: ${WEIGHTS.semiBold};
    --font-weight-bold: ${WEIGHTS.bold};

    --font-size-sm: ${FONT_SIZES.sm};
    --font-size-base: ${FONT_SIZES.base};
    --font-size-md: ${FONT_SIZES.md};
    --font-size-lg: ${FONT_SIZES.lg};
    --font-size-xl: ${FONT_SIZES.xl};
    --font-size-xxl: ${FONT_SIZES.xxl};
    --font-size-xxxl: ${FONT_SIZES.xxxl};
    --font-size-big: ${FONT_SIZES.big};

    --ff-main: ${FAMILIES.main};
    --ff-heading: ${FAMILIES.heading};
    --ff-special: ${FAMILIES.special};
    --ff-logo: ${FAMILIES.logo};
    --ff-chinese: ${FAMILIES.chinese};
    --ff-mono: ${FAMILIES.mono};

    font-size: 18px;
    scroll-behavior: smooth;
  }
  
    @media ${QUERIES.tabletAndSmaller} {
      html {
        font-size: 16px;
      }
    }

  body {
    font-family: var(--ff-main);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
    background-color: var(--clr-khaki-light);
    color: var(--clr-text-primary);
  }

  #__next {
    isolation: isolate;
  }

  ::selection {
    color: var(--clr-white);
    background-color: var(--clr-purple-primary);
  }

  :focus {
    outline: 2px dashed;
    outline-offset: 0.25rem;
  }

  main:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: var(--clr-purple-primary);
  }

  h1, h2, h3, h4 {
    font-family: var(--ff-heading);
    line-height: 1.2;
    color: var(--clr-text-secondary);
    margin-top: 1.5em;
  }

  h1, h2 {
    font-weight: var(--font-weight-bold);
  }

  h3, h4 {
    font-weight: var(--font-weight-semi-bold);
  }

  h1 {
    font-size: var(--font-size-xl);
  }

  h3 {
    font-size: var(--font-size-lg);
  }

  button {
    background: none;
    border: none;
  }

  .w-6 {
    width: 1.5rem;
  }

  .h-6 {
    height: 1.5rem;
  }

  @media ${QUERIES.tabletAndSmaller} {
    h1, h2 {
      font-size: var(--font-size-big);
    }
  }

  em {
    --accent-color: #e60067;
    font-style: italic;
    color: var(--accent-color);
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  article p code,
  article h2 code,
  article h3 code,
  article ul code,
  article ol code {
    font-family: var(--ff-mono);
    background-color: var(--clr-purple-light);
    color: var(--clr-crimson);
    border-radius: 4px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export default GlobalStyles;
