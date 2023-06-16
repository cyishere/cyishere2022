import { createGlobalStyle } from 'styled-components';

export const PrismMaterialLight = createGlobalStyle`
  /**
   * prism-material-light.css
   * https://github.com/PrismJS/prism-themes/blob/master/themes/prism-material-light.css
   */
  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #90a4ae;
    background: #fafafa;
    font-family: Roboto Mono, monospace;
    font-size: 1em;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #cceae7;
    color: #263238;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #cceae7;
    color: #263238;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    /* padding: 1.25em 1em; */
    padding: 1.25em 0;
  }

  code[class*="language-"] .code-line {
    padding-left: 1em;
    padding-right: 1em;
  }

  code[class*="language-"] .highlight-line {
    background-color: hsl(256deg 100% 96%);
    border-left: 3px solid hsl(256deg 100% 76%);
    display: block;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #f76d47;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #7c4dff;
  }

  .token.attr-name {
    color: #39adb5;
  }

  .token.attr-value {
    color: #f6a434;
  }

  .token.attribute {
    color: #f6a434;
  }

  .token.boolean {
    color: #7c4dff;
  }

  .token.builtin {
    color: #39adb5;
  }

  .token.cdata {
    color: #39adb5;
  }

  .token.char {
    color: #39adb5;
  }

  .token.class {
    color: #39adb5;
  }

  .token.class-name {
    color: #6182b8;
  }

  .token.comment {
    color: #aabfc9;
  }

  .token.constant {
    color: #7c4dff;
  }

  .token.deleted {
    color: #e53935;
  }

  .token.doctype {
    color: #aabfc9;
  }

  .token.entity {
    color: #e53935;
  }

  .token.function {
    color: #7c4dff;
  }

  .token.hexcode {
    color: #f76d47;
  }

  .token.id {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.important {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.inserted {
    color: #39adb5;
  }

  .token.keyword {
    color: #7c4dff;
  }

  .token.number {
    color: #f76d47;
  }

  .token.operator {
    color: #39adb5;
  }

  .token.prolog {
    color: #aabfc9;
  }

  .token.property {
    color: #39adb5;
  }

  .token.pseudo-class {
    color: #f6a434;
  }

  .token.pseudo-element {
    color: #f6a434;
  }

  .token.punctuation {
    color: #39adb5;
  }

  .token.regex {
    color: #6182b8;
  }

  .token.selector {
    color: #e53935;
  }

  .token.string {
    color: #f6a434;
  }

  .token.symbol {
    color: #7c4dff;
  }

  .token.tag {
    color: #e53935;
  }

  .token.unit {
    color: #f76d47;
  }

  .token.url {
    color: #e53935;
  }

  .token.variable {
    color: #e53935;
  }
`;

export const PrismLucario = createGlobalStyle`
  /**
   * Lucario Theme originally by Raphael Amorim [@raphamorim]
   * https://github.com/raphamorim/lucario
   *
   * Ported for PrismJS by Christopher Kapic [@christopher-kapic]
   */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #263E52;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #5c98cd;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #F05E5D;
  }

  .token.boolean,
  .token.number {
    color: #BC94F9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #FCFCD6;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #66D8EF;
  }

  .token.keyword {
    color: #6EB26E;
  }

  .token.regex,
  .token.important {
    color: #F05E5D;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  code[class*="language-"] .highlight-line {
    background-color: hsl(256deg 6.5% 21.58%);
    border-left: 3px solid hsl(256deg 34.45% 43.77%);
    display: block;
  }
`;
