import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS, SCREENS } from "./constants";

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
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${FONTS.main};
    font-size: ${FONTS.base};
    font-weight: ${FONTS.regular};
    line-height: 1.5;
    background-color: ${COLORS.khakiLight};
    color: ${COLORS.textPrimary};
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
    color: ${COLORS.purplePrimary};
  }

  h1, h2, h3, h4 {
    font-family: ${FONTS.heading};
    line-height: 1.2;
    color: ${COLORS.textSecondary};
    margin-top: 1.5em;
  }

  h1, h2 {
    font-weight: ${FONTS.bold};
  }

  h3, h4 {
    font-weight: ${FONTS.semiBold};
  }

  h1 {
    font-size: ${FONTS.xl};
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

  @media (min-width: ${SCREENS.sm}) {
    h1, h2 {
      font-size: ${FONTS.big};
    }
  }
`;

export default GlobalStyles;
