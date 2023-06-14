import { createGlobalStyle } from 'styled-components';
import {
  color,
  createColorProps,
  createCssProps,
  font,
  fontSize,
  fontWeight,
} from './helpers';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LOGO_COLORS, QUERIES } from './theme';

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
    /* Colors */
    ${({ theme }) => createColorProps(theme.colors)}

    --clr-react: hsl(${LOGO_COLORS.react});
    --clr-html: hsl(${LOGO_COLORS.html});
    --clr-css: hsl(${LOGO_COLORS.css});
    --clr-javascript: hsl(${LOGO_COLORS.javascript});
    --clr-typescript: hsl(${LOGO_COLORS.typescript});
    --clr-gatsby: hsl(${LOGO_COLORS.gatsby});
    --clr-apollo: hsl(${LOGO_COLORS.apollo});
    --clr-graphql: hsl(${LOGO_COLORS.graphql});
    --clr-prisma: hsl(${LOGO_COLORS.prisma});
    --clr-mongodb: hsl(${LOGO_COLORS.mongodb});
    --clr-posgresql: hsl(${LOGO_COLORS.posgresql});
    --clr-styled: hsl(${LOGO_COLORS.styled});
    --clr-gsap: hsl(${LOGO_COLORS.gsap});

    /* Font Weights */
    ${createCssProps(FONT_WEIGHTS, '--fw')}
    /* Font Sizes */
    ${createCssProps(FONT_SIZES, '--fs')}

    /* Font Families */
    ${createCssProps(FONTS, '--ff')}

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }
  
  body {
    font-family: ${font('main')};
    font-size: 18px;
    font-weight: ${fontWeight('normal')};
    line-height: 1.5;
    background-color: ${color('base.100')};
    color: ${color('text.main')};
  }

  #__next {
    isolation: isolate;
  }

  ::selection {
    color: ${color('base.100')};
    background-color: ${color('accent.dark')};
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
    color: ${color('accent.dark')};
  }

  h1, h2, h3, h4 {
    font-family: ${font('heading')};
    line-height: 1.2;
    color: ${color('text.main')};
    margin-top: 1.5em;
  }

  h1, h2 {
    font-weight: ${fontWeight('bold')};
  }

  h3, h4 {
    font-weight: ${fontWeight('semiBold')};
  }

  h1 {
    font-size: ${fontSize('xl')};
  }

  h3 {
    font-size: ${fontSize('lg')};
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
      font-size: ${fontSize('big')};
    }
  }

  em {
    --accent-color: ${color('secondary.main')};
    font-style: italic;
    color: var(--accent-color);
  }

  strong {
    font-weight: ${fontWeight('bold')};
  }

  article p code,
  article h2 code,
  article h3 code,
  article ul code,
  article ol code {
    font-family: ${font('mono')};
    background-color: ${color('button.bg')};
    color: ${color('button.text')};
    border-radius: 4px;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export default GlobalStyles;
