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
    denim: '#184ece', // focus [dark]
    dodger: '#3370ff', // focus
    ebony: '#1f222f', // background / secondary [dark]
    haiti: '#0f152e', // text
    hawkes: '#ecf1fe', // secondary
    oxford: '#3f485e', // active aka selection [dark]
    ribbon: '#004bff', // primary
    ribbon1: '#1d61ff', // notice
    science: '#0041dd', // pressed
    vulcan: '#131620', // background / primary [dark]
  },
  //
  current: 'currentColor',
  //
  gray: {
    botticelli: '#dbe4ee', // dividers and strokes
    cadet: '#b4bac8', // tertiary
    geyser: '#ced4e2', // disabled
    porcelain: '#f6f7f8', // background / secondary
    trout: '#545864', // disabled [dark]
    waterloo: '#757c91', // tertiary [dark]
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
  white: '#ffffff', // background / primary
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

    // Darth Vader
    DARK_TERTIARY: c.gray.waterloo,
    DARK_ELEMENT_TERTIARY: c.gray.waterloo,
    DARK_BACKGROUND_PRIMARY: c.blue.vulcan,
    DARK_BACKGROUND_SECONDARY: c.blue.ebony,
    DARK_ELEMENT_ACTIVE: c.blue.oxford,
    DARK_ELEMENT_DISABLED: c.gray.trout,
    DARK_ELEMENT_FOCUS: c.blue.denim,
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
