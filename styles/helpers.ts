import {
  ColorAccent,
  ColorBase,
  ColorButton,
  ColorPrimary,
  ColorSecondary,
  ColorText,
} from "./styled";
import { cupcakeTheme, FONTS, FONT_SIZES, FONT_WEIGHTS } from "./theme";

export const createCssProps = (
  object:
    | typeof FONTS
    | typeof FONT_SIZES
    | typeof FONT_WEIGHTS
    | ColorBase
    | ColorText
    | ColorAccent
    | ColorPrimary
    | ColorSecondary
    | ColorButton,
  prefix: string
) => {
  return (
    Object.entries(object)
      .map(([key, value]) => {
        return `${prefix}-${key}: ${value}`;
      })
      .join(";") + ";"
  );
};

export const createColorProps = (colors: typeof cupcakeTheme.colors) => {
  return (
    Object.entries(colors)
      .map(([name, items]) => {
        return createCssProps(items, `--clr-${name}`);
      })
      .join(";") + ";"
  );
};

export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> =
  TValue extends any[]
    ? Text
    : TValue extends object
    ? `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;

type ColorName = RecursiveKeyOf<typeof cupcakeTheme["colors"]>;

/**
 * Create a CSS custom property string for a color.
 * @param n - The name of a color;
 * @returns A string which is also a CSS custom property for this color.
 */
export const color = (n: ColorName) => {
  const name = n.split(".")[0];
  const variation = n.split(".")[1];

  return `var(--clr-${name}-${variation})`;
};

/**
 * Create a CSS custom property string for a font-family.
 * @param key The name of a font-family express;
 * @returns A string which is also a CSS custom property for this font-family.
 */
export const font = (key: keyof typeof FONTS) => {
  return `var(--ff-${key})`;
};

/**
 * Create a CSS custom property string for a font-size.
 * @param key The name of a font-size express;
 * @returns A string which is also a CSS custom property for this font-size.
 */
export const fontSize = (key: keyof typeof FONT_SIZES) => {
  return `var(--fs-${key})`;
};

/**
 * Create a CSS custom property string for a font-weight.
 * @param key The name of a font-weight express;
 * @returns A string which is also a CSS custom property for this font-weight.
 */
export const fontWeight = (key: keyof typeof FONT_WEIGHTS) => {
  return `var(--fw-${key})`;
};
