import { desaturate, lighten } from 'color2k';

type Color = Record<string, string>;

/**
 * Color palette.
 * @see http://veli.ee/colorpedia/
 */
const palette = {
  //
  black: '#000000', // hsl(0, 0%, 0%)
  //
  blue: {
    haiti: '#0f152e', // hsl(228, 51%, 12%) – text
    hawkes: '#ecf1fe', // hsl(223, 90%, 96%) – secondary
    ribbon: '#004bff', // +hsl(222, 100%, 50%) – primary
    wistful: '#a3acd6', // hsl(229, 38%, 74%)
  },
  //
  current: 'currentColor',
  //
  gray: {
    porcelain: '#f6f7f8', // hsl(210, 12%, 97%) – backgrounds
    botticelli: '#dbe4ee', // hsl(212, 36%, 90%) – dividers and strokes
  },
  //
  green: {
    caribbean: '#07d094', // hsl(162, 93%, 42%)
  },
  //
  orange: {
    amber: '#ffbe0b', // hsl(44, 100%, 52%)
  },
  //
  red: {
    radical: '#ff3b58', // hsl(351, 100%, 62%)
  },
  //
  transparent: 'transparent',
  //
  white: '#ffffff', // hsl(0, 0%, 100%)
};

/**
 * Accent colors.
 */
const accents = ((c): Color => {
  return {
    DANGER: c.red.radical,
    NOTICE: lighten(c.blue.ribbon, 0.06),
    SUCCESS: c.green.caribbean,
    WARNING: c.orange.amber,
  };
})(palette);

/**
 * Neutral colors.
 */
// const neutrals = ((c): Color => {
//   return {};
// })(palette);

/**
 * Token colors.
 */
const tokens = ((c): Color => {
  return {
    PRIMARY: c.blue.ribbon,
    SECONDARY: c.blue.hawkes,
    TERTIARY: lighten(desaturate(c.blue.ribbon, 0.85), 0.25),
    BACKGROUND_PRIMARY: c.white,
    BACKGROUND_SECONDARY: c.gray.porcelain,
    BUTTON_PRIMARY: c.blue.ribbon,
    BUTTON_INACTIVE: lighten(desaturate(c.blue.ribbon, 0.74), 0.35),
    TEXT_PRIMARY: c.blue.haiti,
    TEXT_SECONDARY: c.blue.hawkes,
  };
})(palette);

export const colors: Color = {
  BLACK: palette.black,
  CURRENT: palette.current,
  TRANSPARENT: palette.transparent,
  WHITE: palette.white,

  ...accents,
  // ...neutrals,
  ...tokens,
};

// export const colors = Object.keys(COLORS).reduce((acc, value: string) => {
//   return {
//     ...acc,
//     [value]: `var(--color-${value.toLowerCase().replace(/_/g, '-')}, ${COLORS[value]})`,
//   };
// }, {});
