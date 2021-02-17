type Color = Record<string, string>;

/**
 * Color palette.
 * @see http://veli.ee/colorpedia/
 */
const palette = {
  black: '#000000',
  blue: {
    dodger: '#3370ff', // hsl(222deg 100% 60%)
    haiti: '#0f152e',
    manatee: '#878a98',
    ribbon: '#004bff', // hsl(222deg 100% 50%)
    zumthor: '#eef5ff',
  },
  current: 'currentColor',
  gray: {
    alabaster: '#f8f8f8',
    alto: '#d0d0d0',
    dusty: '#979797',
    gallery: '#eeeeee',
  },
  green: {
    shamrock: '#27d388',
  },
  orange: {
    buckthorn: '#f79824',
  },
  red: {
    sunset: '#fc4444',
  },
  transparent: 'transparent',
  white: '#ffffff',
};

/**
 * Accent colors.
 */
const accents = ((c): Color => {
  return {
    DANGER: c.red.sunset,
    INFO: c.blue.dodger,
    SUCCESS: c.green.shamrock,
    WARNING: c.orange.buckthorn,
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
    SECONDARY: c.blue.dodger,
    BACKGROUND_PRIMARY: c.white,
    BACKGROUND_SECONDARY: c.gray.alabaster,
    BUTTON_PRIMARY: c.blue.ribbon,
    BUTTON_INACTIVE: c.gray.gallery,
    TEXT_PRIMARY: c.blue.haiti,
    TEXT_SECONDARY: c.blue.manatee,
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
