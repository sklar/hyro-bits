type Color = Record<string, string>;

/**
 * Color palette.
 * @see http://veli.ee/colorpedia/
 */
const palette = {
  //
  black: '#000000',
  //
  blue: {
    dodger: '#3370ff', // focus
    haiti: '#0f152e', // text
    hawkes: '#ecf1fe', // secondary
    ribbon: '#004bff', // primary
    ribbon1: '#1d61ff', // notice
    science: '#0041dd', // pressed
  },
  //
  current: 'currentColor',
  //
  gray: {
    cadet: '#b4bac8', // tertiary
    geyser: '#ced4e2', // disabled
    porcelain: '#f6f7f8', // backgrounds
    botticelli: '#dbe4ee', // dividers and strokes
  },
  //
  green: {
    caribbean: '#07d094', // success
  },
  //
  orange: {
    amber: '#ffbe0b', // warning
  },
  //
  red: {
    radical: '#ff3b58', // error
  },
  //
  transparent: 'transparent',
  //
  white: '#ffffff',
};

/**
 * Accent colors.
 */
const accents = ((c): Color => {
  return {
    DANGER: c.red.radical,
    NOTICE: c.blue.ribbon1,
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
    TERTIARY: c.gray.cadet,
    BACKGROUND_PRIMARY: c.white,
    BACKGROUND_SECONDARY: c.gray.porcelain,
    ELEMENT_PRIMARY: c.blue.ribbon,
    ELEMENT_SECONDARY: c.blue.hawkes,
    ELEMENT_TERTIARY: c.gray.cadet,
    ELEMENT_ACTIVE: c.blue.science,
    ELEMENT_DISABLED: c.gray.geyser,
    ELEMENT_FOCUS: c.blue.dodger,
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
