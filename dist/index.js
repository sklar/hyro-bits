/** Components v1.0.0 */

import { jsxs, jsx } from 'react/jsx-runtime';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Easing.
 * @see http://matthewlein.com/ceaser/
 */
const EASING = {
    easeInOut: 'ease-in-out',
    easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    easeOutCubic: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
};
/**
 * Fade In.
 */
keyframes `
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;

/**
 * Idle indicator.
 */
const Idle = (_a) => {
    var { color, delay = 100, duration = 500, gap = '4px', range = '6px', size = '5px' } = _a, props = __rest(_a, ["color", "delay", "duration", "gap", "range", "size"]);
    const delegated = Object.assign({ color, delay, duration, gap, range, size }, props);
    return (jsxs(Container$7, Object.assign({}, delegated, { children: [jsx(Element, {}, void 0),
            jsx(Element, {}, void 0),
            jsx(Element, {}, void 0)] }), void 0));
};
const idle = keyframes `
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`;
const Element = styled.div `
  animation: ${idle} var(--duration) ${EASING.easeInOut} var(--shift) infinite alternate;
  background: var(--color);
  border-radius: 50%;
  display: block;
  height: var(--size);
  opacity: var(--opacity);
  transform: translateY(var(--offset));
  width: var(--size);
  will-change: transform;

  &:nth-of-type(1) {
    --shift: calc(0 * var(--delay));
    --opacity: 1;
  }
  &:nth-of-type(2) {
    --shift: calc(1 * var(--delay));
    --opacity: 0.75;
  }
  &:nth-of-type(3) {
    --shift: calc(2 * var(--delay));
    --opacity: 0.5;
  }

  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }
`;
const Container$7 = styled.div `
  ${({ color }) => color && `--color: ${color}`};
  ${({ delay }) => `--delay: ${delay}ms`};
  ${({ duration }) => `--duration: ${duration}ms`};
  ${({ range }) => `--range: ${range}`};
  ${({ size }) => `--size: ${size}`};

  display: inline-flex;

  ${({ gap }) => `gap: ${gap}`};
`;

/**
 * Color palette.
 * @see http://veli.ee/colorpedia/
 */
const palette = {
    //
    black: '#000000',
    //
    blue: {
        denim: '#184ece',
        dodger: '#3370ff',
        ebony: '#1f222f',
        haiti: '#0f152e',
        hawkes: '#ecf1fe',
        oxford: '#3f485e',
        ribbon: '#004bff',
        ribbon1: '#1d61ff',
        science: '#0041dd',
        vulcan: '#131620',
    },
    //
    current: 'currentColor',
    //
    gray: {
        botticelli: '#dbe4ee',
        cadet: '#b4bac8',
        fiord: '#3b4463',
        geyser: '#ced4e2',
        porcelain: '#f6f7f8',
        trout: '#545864',
        waterloo: '#757c91',
    },
    //
    green: {
        caribbean: '#07d094',
    },
    //
    orange: {
        amber: '#ffbe0b',
    },
    //
    red: {
        radical: '#ff3b58',
    },
    //
    transparent: 'transparent',
    //
    white: '#ffffff',
};
/**
 * Accent colors.
 */
const accents = ((c) => {
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
const tokens = ((c) => {
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
        STROKE: c.gray.botticelli,
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
        DARK_STROKE: c.gray.fiord,
    };
})(palette);
const colors = Object.assign(Object.assign({ BLACK: palette.black, CURRENT: palette.current, TRANSPARENT: palette.transparent, WHITE: palette.white }, accents), tokens);
// export const colors = Object.keys(COLORS).reduce((acc, value: string) => {
//   return {
//     ...acc,
//     [value]: `var(--color-${value.toLowerCase().replace(/_/g, '-')}, ${COLORS[value]})`,
//   };
// }, {});

const base$1 = css `
  --color: ${colors.TEXT_PRIMARY};
  --font-family: 'Inter', sans-serif;
  --font-size: ;
  --font-weight: 400;
  --letter-spacing: ;
  --line-height: ;

  box-sizing: border-box;
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
`;
const heading = css `
  ${base$1};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`;
const h1 = css `
  ${heading};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`;
const h2 = css `
  ${heading};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`;
const h3 = css `
  ${heading};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`;
const h4 = css `
  ${heading};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`;
const h5 = css `
  ${h4};

  --font-weight: 600;
`;
const paragraph = css `
  ${base$1};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`;
const button = css `
  ${base$1};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;
css `
  ${base$1};

  --color: #353b56;
  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;
css `
  ${base$1};

  --font-size: 13px;
  --line-height: calc(16 / 13);
  --font-weight: 500;
`;

const Direction = {
    NONE: 'None',
    ASCENDING: 'Asc',
    DESCENDING: 'Desc',
};

const paths = {
    xs: 'mini',
    sm: 'bold',
    md: 'bold',
    lg: 'bold',
    xl: 'bold',
};
/**
 * Icon wrapper.
 */
const Icon = (_a) => {
    var { name, size = 'sm' } = _a, props = __rest(_a, ["name", "size"]);
    const [Component, setComponent] = useState();
    useEffect(() => {
        import(`./icons/${paths[size]}/${name}`)
            .then((c) => {
            setComponent(c.default);
        })
            .catch((e) => {
            console.error(`${name} icon not found!`);
        });
    }, [name, size]);
    if (!!Component) {
        return (jsx(Container$6, Object.assign({ "data-icon": name, "data-size": size }, props, { children: Component }), void 0));
    }
    else {
        return null;
    }
};
const Container$6 = styled.span `
  --icon-size: ;

  display: inline-block;
  flex-shrink: 0;
  height: var(--icon-size);
  width: var(--icon-size);

  svg {
    display: block;
  }

  &[data-size='xs'],
  &[data-size='sm'] {
    --icon-size: 16px;
  }
  &[data-size='md'] {
    --icon-size: 20px;
  }
  &[data-size='lg'] {
    --icon-size: 24px;
  }
  &[data-size='xl'] {
    --icon-size: 32px;
  }
`;

/**
 * Order indicator.
 */
const Order = (_a) => {
    var { direction, size = 'xs' } = _a, props = __rest(_a, ["direction", "size"]);
    return (jsxs(Container$5, Object.assign({ "data-direction": direction }, props, { children: [jsx(Icon, { name: "Sort", size: "xs", "data-size": size || null }, void 0),
            jsx(Icon, { name: "Sort", size: "xs", "data-size": size || null }, void 0),
            jsx(Icon, { name: "Sort", size: "xs", "data-size": size || null }, void 0)] }), void 0));
};
const Container$5 = styled.div `
  --opacity-2: 0;
  --opacity-3: 0;
  --path: ;

  cursor: pointer;
  display: inline-grid;
  place-items: center;

  [data-icon] {
    color: var(--color);

    &:nth-of-type(1) {
      --color: ${colors.ELEMENT_TERTIARY};
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      --color: ${colors.ELEMENT_PRIMARY};

      clip-path: polygon(var(--path));
      position: absolute;
      transition: opacity 0.4s;
    }
    &:nth-of-type(2) {
      --path: 0% 50%, 100% 50%, 100% 100%, 0% 100%;
      opacity: var(--opacity-2);
    }
    &:nth-of-type(3) {
      --path: 0% 0%, 100% 0%, 100% 50%, 0% 50%;
      opacity: var(--opacity-3);
    }
  }

  &[data-direction='${Direction.ASCENDING}'] {
    --opacity-2: 1;
  }
  &[data-direction='${Direction.DESCENDING}'] {
    --opacity-3: 1;
  }
`;

/**
 * Primary UI component for user interaction
 */
const Button = (_a) => {
    var { active, busy, children, disabled, href, icon, placement, round, text, theme, toggle, type = 'button', variant = 'secondary' } = _a, props = __rest(_a, ["active", "busy", "children", "disabled", "href", "icon", "placement", "round", "text", "theme", "toggle", "type", "variant"]);
    const [leader, trailer] = Array.isArray(icon) ? icon : [icon];
    // const delegated = { theme, variant, ...props };
    const delegated = Object.assign({ variant }, props);
    return (jsxs(Container$4, Object.assign({ as: href ? 'a' : 'button', "data-active": active || null, "data-busy": busy || null, "data-icon": (icon && !(text || children) && 'single') || (leader && trailer && 'both') || placement, "data-round": round || null, "data-theme": theme || null, "data-toggle": toggle || null, disabled: busy || disabled, href: href, type: type }, delegated, { children: [leader, text ? text : children, trailer, busy && (jsx(Idle, { style: { ['--color']: 'var(--button-color)', position: 'absolute' } }, void 0))] }), void 0));
};
const base = css `
  ${button};

  --button-background-color: ;
  --button-border-color: ;
  --button-border-size: 1px;
  --button-box-shadow: ;
  --button-color: ;
  --button-font-weight: 600;
  --button-gap: 8px;
  --button-icon-offset: 4px;
  --button-icon-rotation: 0;
  --button-icon-transform: ;
  --button-indent: 14px;
  --button-line-height: var(--button-size);
  --button-radius: 6px;
  --button-size: 32px;

  align-items: center;
  background-color: var(--button-background-color);
  border: var(--button-border-size) solid var(--button-border-color);
  border-radius: var(--button-radius);
  box-shadow: 0 0 0 3px var(--button-box-shadow);
  color: var(--button-color);
  display: inline-flex;
  gap: var(--button-gap);
  height: var(--button-size);
  justify-content: center;
  margin: 0;
  min-width: var(--button-size);
  overflow: hidden;
  outline: 0;
  padding: 0 var(--button-indent);
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 1;

  [data-icon] {
    flex-shrink: 0;
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transform: var(--button-icon-transform);
    will-change: transform;
  }
`;
/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */
const modification = {};
modification['primary'] = css `
  --button-background-color: ${colors.ELEMENT_PRIMARY};
  --button-border-color: ${colors.ELEMENT_PRIMARY};
  --button-color: ${colors.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy]) {
    --button-box-shadow: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --button-background-color: ${colors.ELEMENT_ACTIVE};
    --button-border-color: ${colors.ELEMENT_ACTIVE};
  }
`;
modification['secondary'] = css `
  --button-background-color: ${colors.ELEMENT_SECONDARY};
  --button-border-color: ${colors.ELEMENT_SECONDARY};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --button-background-color: #d8e1fc;
    --button-border-color: #d8e1fc;
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:disabled:not([data-busy]) {
    --button-color: ${colors.WHITE};
  }
`;
modification['tertiary'] = css `
  --button-background-color: ${colors.TRANSPARENT};
  --button-border-color: ${colors.TRANSPARENT};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy]) {
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --button-background-color: ${colors.ELEMENT_SECONDARY};
    --button-border-color: ${colors.ELEMENT_SECONDARY};
  }
  &:disabled:not([data-busy]) {
    --button-background-color: ${colors.TRANSPARENT};
    --button-border-color: ${colors.TRANSPARENT};
    --button-color: ${colors.ELEMENT_DISABLED};
  }

  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy]) {
      --button-background-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-border-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-color: ${colors.WHITE};
    }
    &:is(:focus, :hover, [data-hover]):not(:disabled, [data-busy]) {
      --button-background-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-color: ${colors.WHITE};
    }
    &:disabled:not([data-busy]) {
      --button-color: ${colors.DARK_ELEMENT_DISABLED};
    }
  }
`;
const Container$4 = styled.button `
  ${base};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: transparent;
  }

  &[data-toggle] {
    --button-icon-transform: rotateX(calc(var(--button-icon-rotation) * 180deg)) rotateZ(90deg);

    &[data-active] {
      --button-icon-rotation: 1;
    }
  }

  &:disabled:not([data-busy]) {
    --button-background-color: ${colors.ELEMENT_DISABLED};
    --button-border-color: ${colors.ELEMENT_DISABLED};
  }

  ${({ variant }) => variant && modification[variant]};

  &[data-icon='single'] {
    padding: 0;
    width: var(--button-size);
  }
  &[data-icon='both'],
  &[data-icon='left'] {
    padding-left: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='both'],
  &[data-icon='right'] {
    padding-right: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='left'] {
    flex-direction: row;
  }
  &[data-icon='right'] {
    flex-direction: row-reverse;
  }

  /* &[data-theme='danger'] {}
  &[data-theme='success'] {}
  &[data-theme='warning'] {} */
`;

/**
 * Flexbox wrapper.
 */
const Flex = (_a) => {
    var { align, block, direction, gap, justify, wrap } = _a, props = __rest(_a, ["align", "block", "direction", "gap", "justify", "wrap"]);
    const delegated = Object.assign({ align, block, direction, gap, justify }, props);
    return jsx(Container$3, Object.assign({ "data-wrap": wrap || null }, delegated), void 0);
};
const Container$3 = styled.div `
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'}`};
  ${({ direction }) => direction && direction !== 'row' && `flex-direction: ${direction}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};

  &[data-wrap] {
    flex-wrap: wrap;
  }
`;

/**
 * Grid wrapper
 */
const Grid = (_a) => {
    var { align, block, columns, gap, justify, max = '1fr', min = '0px', sizing = 'auto-fit' } = _a, props = __rest(_a, ["align", "block", "columns", "gap", "justify", "max", "min", "sizing"]);
    const delegated = Object.assign({ align, block, columns, gap, justify, max, min, sizing }, props);
    return jsx(Container$2, Object.assign({}, delegated), void 0);
};
const Container$2 = styled.div `
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'grid' : 'inline-grid'}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-items: ${justify}`};
  ${({ columns, max, min, sizing }) => `grid-template-columns: ${columns ? columns : `repeat(${sizing}, minmax(min(100%, ${min}), ${max}))`}`};
`;

const clamp = css `
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`;
const truncate = css `
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;

/**
 * Text
 */
const Text = (_a) => {
    var { as = 'span', clamp, truncate } = _a, props = __rest(_a, ["as", "clamp", "truncate"]);
    return (jsx(Container$1, Object.assign({ as: as, "data-as": as, "data-clamp": clamp || null, "data-truncate": truncate || null, style: { ['--lines']: clamp } }, props), void 0));
};
const Container$1 = styled.span `
  &[data-as='h1'] {
    ${h1};
  }
  &[data-as='h2'] {
    ${h2};
  }
  &[data-as='h3'] {
    ${h3};
  }
  &[data-as='h4'] {
    ${h4};
  }
  &[data-as='h5'] {
    ${h5};
  }
  &[data-as='p'] {
    ${paragraph};
  }

  &[data-clamp] {
    ${clamp};
  }
  &[data-truncate] {
    ${truncate};
  }
`;

/**
 * Status
 */
const Status = (_a) => {
    var { children, icon, text, theme } = _a, props = __rest(_a, ["children", "icon", "text", "theme"]);
    const isBeacon = !(text || children);
    return (jsxs(Container, Object.assign({ "data-beacon": isBeacon || null, "data-theme": theme || null }, props, { children: [icon, jsx(Text, Object.assign({ truncate: true }, { children: text ? text : children }), void 0)] }), void 0));
};
const Container = styled.span `
  ${base$1};

  --status-background-color: #e7ebf2;
  --status-color: #6a758d;
  --status-color-primary: #bbc7d8;
  --status-color-secondary: hsla(211, 36%, 82%, 0.4);
  --status-font-size: 12px;
  --status-font-weight: 600;
  --status-gap: 4px;
  --status-indent: 8px;
  --status-line-height: var(--status-size);
  --status-radius: 6px;
  --status-size: 24px;

  align-items: center;
  background-color: var(--status-background-color);
  border-radius: var(--status-radius);
  color: var(--status-color);
  display: inline-flex;
  font-size: var(--status-font-size);
  font-weight: var(--status-font-weight);
  gap: var(--status-gap);
  height: var(--status-size);
  padding: 0 var(--status-indent);
  user-select: none;
  white-space: nowrap;

  &[data-theme='notice'] {
    --status-background-color: #d4e5ff;
    --status-color: ${colors.PRIMARY};
    --status-color-primary: ${colors.NOTICE};
    --status-color-secondary: hsla(222, 100%, 56%, 0.4);
  }
  &[data-theme='success'] {
    --status-background-color: #d7efdc;
    --status-color: #058a40;
    --status-color-primary: ${colors.SUCCESS};
    --status-color-secondary: hsla(132, 66%, 70%, 0.4);
  }
  &[data-theme='warning'] {
    --status-background-color: #ffe7b8;
    --status-color: #b17400;
    --status-color-primary: ${colors.WARNING};
    --status-color-secondary: hsla(44, 100%, 52%, 0.4);
  }
  &[data-theme='danger'] {
    --status-background-color: #ffaab6;
    --status-color: #c1132d;
    --status-color-primary: ${colors.DANGER};
    --status-color-secondary: hsla(351, 100%, 62%, 0.4);
  }

  &[data-beacon] {
    --status-background-color: transparent;
    --status-indent: 0;
    --status-radius: 50%;
    --status-size: 16px;

    aspect-ratio: 1;
    display: inline-grid;
    flex-grow: 0;
    place-items: center;
    position: relative;

    &::after,
    &::before {
      aspect-ratio: inherit;
      border-radius: inherit;
      content: '';
      display: block;
      position: absolute;
    }
    &::after {
      background: var(--status-color-primary);
      height: calc(var(--status-size) / 8 * 3);
    }
    &::before {
      background: var(--status-color-secondary);
      height: calc(var(--status-size) / 8 * 5);
    }
  }
`;

/**
 * Table data cell
 */
const Td = (_a) => {
    var { align, justify, size } = _a, props = __rest(_a, ["align", "justify", "size"]);
    return (jsx(TdContainer, Object.assign({ "data-align": align || null, "data-justify": justify || null }, props), void 0));
};
const textAlign = css `
  &[data-justify='inherit'] {
    text-align: inherit;
  }
  &[data-justify='start'] {
    text-align: start;
  }
  &[data-justify='center'] {
    text-align: center;
  }
  &[data-justify='end'] {
    text-align: end;
  }
`;
const TdContainer = styled.td `
  ${textAlign};

  ${({ size }) => size && `width: ${size};`}

  &[data-align='baseline'] {
    vertical-align: baseline;
  }
  &[data-align='bottom'] {
    vertical-align: bottom;
  }
  &[data-align='middle'] {
    vertical-align: middle;
  }
  &[data-align='top'] {
    vertical-align: top;
  }
`;
/**
 * Table header cell
 */
const Th = (_a) => {
    var { align, children, direction, icon, justify, onClick, sortable } = _a, props = __rest(_a, ["align", "children", "direction", "icon", "justify", "onClick", "sortable"]);
    return (jsx(ThContainer, Object.assign({ "data-align": align || null, "data-justify": justify || null }, props, { children: jsxs(Flex, Object.assign({ gap: "4px", "data-sortable": sortable || null, onClick: onClick }, { children: [icon, jsx(Text, Object.assign({ truncate: true }, { children: children }), void 0),
                sortable && jsx(Order, { direction: direction }, void 0)] }), void 0) }), void 0));
};
const ThContainer = styled.th `
  ${textAlign};

  ${({ size }) => size && `width: ${size};`}

  [data-sortable] {
    cursor: pointer;
    user-select: none;
  }
  & > div {
    ${h5};
  }
`;
/**
 * Table spacer
 */
const Spacer = styled.div `
  background: ${colors.STROKE};
  border-radius: 1000px;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 2px;
`;
/**
 * Table row
 */
const Tr = styled.tr ``;
/**
 * Table head
 */
const Thead = styled.thead ``;
/**
 * Table body
 */
const Tbody = styled.tbody ``;
/**
 * Table
 */
const Table = (_a) => {
    var { layout } = _a, props = __rest(_a, ["layout"]);
    return (jsx(TableContainer, Object.assign({ "data-layout": layout || null }, props), void 0));
};
const TableContainer = styled.table `
  ${base$1};

  --background-color: ${colors.WHITE};
  --font-size: 14px;
  --font-weight: 600;
  --indent: 8px;
  --line-height: 16px;

  background-color: var(--background-color);
  border-collapse: collapse;
  border-spacing: 0;

  &[data-layout='fixed'] {
    table-layout: fixed;
  }

  ${({ size }) => `width: ${size !== null && size !== void 0 ? size : '100%'};`}

  tr {
    border-bottom: 1px solid ${colors.STROKE};

    th,
    td {
      height: calc(48px - 1px);

      &:first-of-type {
        padding-left: calc(2 * var(--indent));
      }
      &:last-of-type {
        padding-right: calc(2 * var(--indent));
      }
    }
  }

  th,
  td {
    padding: var(--indent);
    text-align: start;
  }
`;

export { Button, Flex, Grid, Icon, Idle, Order, Spacer, Status, Table, Tbody, Td, Text, Th, Thead, Tr };
//# sourceMappingURL=index.js.map
