/** Components v1.4.0 */

import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useEffect, useState, useCallback, forwardRef } from 'react';
import { useCombinedRef } from '@spicy-hooks/core';
import RcSlider, { Range as Range$1 } from 'rc-slider';
import 'rc-slider/assets/index.css';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
    return (React.createElement(Container$9, Object.assign({}, delegated),
        React.createElement(Element, null),
        React.createElement(Element, null),
        React.createElement(Element, null)));
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
const Container$9 = styled.div `
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
        TEXT_TERTIARY: c.gray.cadet,
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

  text-decoration: none;
`;
const label = css `
  ${base$1};

  --color: #353b56;
  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;
const input = css `
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

const useEffectWithGuard = (effect) => {
    const mounted = useRef(false);
    const guard = () => mounted.current;
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    useEffect(() => {
        effect(guard);
    }, [effect]);
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
    const fetchIcon = useCallback((mountGuard) => __awaiter(void 0, void 0, void 0, function* () {
        import(`./icons/${paths[size]}/${name}`)
            .then((c) => {
            if (mountGuard())
                setComponent(c.default);
        })
            .catch((e) => {
            console.error(`${name} icon not found!`);
        });
    }), [name, size]);
    useEffectWithGuard(fetchIcon);
    if (!!Component) {
        return (React.createElement(Container$8, Object.assign({ "data-icon": name, "data-size": size }, props), Component));
    }
    else {
        return null;
    }
};
const Container$8 = styled.span `
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
    return (React.createElement(Container$7, Object.assign({ "data-direction": direction }, props),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null }),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null }),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null })));
};
const Container$7 = styled.div `
  --opacity-2: 0;
  --opacity-3: 0;
  --path: ;

  cursor: pointer;
  display: inline-grid;
  place-items: center;
  position: relative;

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
const Button = forwardRef((_a, ref) => {
    var { active, busy, children, disabled, href, icon, placement, round, size = 'md', synthetic, text, theme, toggle, type = 'button', variant = 'secondary' } = _a, props = __rest(_a, ["active", "busy", "children", "disabled", "href", "icon", "placement", "round", "size", "synthetic", "text", "theme", "toggle", "type", "variant"]);
    const [leader, trailer] = Array.isArray(icon) ? icon : [icon];
    const delegated = Object.assign({ size, variant }, props);
    return (React.createElement(Container$6, Object.assign({ as: href ? 'a' : 'button', "data-active": active || null, "data-busy": busy || null, "data-icon": (icon && !(text || children) && 'single') || (leader && trailer && 'both') || placement, "data-round": round || null, "data-synthetic": synthetic || null, "data-theme": theme || null, "data-toggle": toggle || null, disabled: busy || disabled, href: href, ref: ref, type: href ? undefined : type }, delegated),
        leader,
        text ? text : children,
        trailer,
        busy && (React.createElement(Idle, { style: { ['--color']: 'var(--button-color)', position: 'absolute' } }))));
});
const base = css `
  ${button};

  --button-background-color: ;
  --button-border-color: ;
  --button-border-size: 1px;
  --button-box-shadow: ;
  --button-color: ;
  --button-font-weight: 600;
  --button-gap: 8px;
  --button-icon-offset: ;
  --button-icon-rotation: 0;
  --button-icon-transform: ;
  --button-indent: ;
  --button-line-height: var(--button-size);
  --button-radius: 6px;
  --button-size: ;

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
modification['sm'] = css `
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;
modification['md'] = css `
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 32px;
`;
modification['primary'] = css `
  --button-background-color: ${colors.ELEMENT_PRIMARY};
  --button-border-color: ${colors.ELEMENT_PRIMARY};
  --button-color: ${colors.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-synthetic]) {
    --button-box-shadow: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy]) {
    --button-background-color: ${colors.ELEMENT_ACTIVE};
    --button-border-color: ${colors.ELEMENT_ACTIVE};
  }

  /* TODO: Themed states are not designed */
  &[data-theme='danger'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy]) {
      --button-background-color: ${colors.DANGER};
      --button-border-color: ${colors.DANGER};
    }
  }
  &[data-theme='success'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy]) {
      --button-background-color: ${colors.SUCCESS};
      --button-border-color: ${colors.SUCCESS};
    }
  }
`;
modification['secondary'] = css `
  --button-background-color: ${colors.ELEMENT_SECONDARY};
  --button-border-color: ${colors.ELEMENT_SECONDARY};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-synthetic]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-pressed]):not(:disabled, [data-busy], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy]) {
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

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-synthetic]) {
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy]) {
    --button-background-color: ${colors.ELEMENT_SECONDARY};
    --button-border-color: ${colors.ELEMENT_SECONDARY};
  }
  &:disabled:not([data-busy]) {
    --button-background-color: ${colors.TRANSPARENT};
    --button-border-color: ${colors.TRANSPARENT};
    --button-color: ${colors.ELEMENT_DISABLED};
  }

  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-synthetic]) {
      --button-background-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-border-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-color: ${colors.WHITE};
    }
    &:is(:focus):not(:disabled, [data-busy], [data-synthetic]),
    &:is(:hover, [data-hover]):not(:disabled, [data-busy]) {
      --button-background-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-color: ${colors.WHITE};
    }
    &:disabled:not([data-busy]) {
      --button-color: ${colors.DARK_ELEMENT_DISABLED};
    }
  }
`;
const Container$6 = styled.button `
  ${base};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: ${colors.TRANSPARENT};
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

  ${({ size }) => size && modification[size]};
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
`;

/**
 * Click outside guard
 * @see https://css-tricks.com/click-outside-detector/
 */
const ClickOutsideGuard = forwardRef((_a, ref) => {
    var { ignore, listen, onClickOutside } = _a, props = __rest(_a, ["ignore", "listen", "onClickOutside"]);
    const innerRef = useRef(null);
    const combinedRef = useCombinedRef(ref, innerRef);
    const onKeyUp = (event) => {
        if (event.key === 'Escape')
            onClickOutside();
        handleEvent(event);
    };
    const handleEvent = (event) => {
        if (innerRef.current && innerRef.current.contains(event.target))
            return;
        if (ignore && ignore.contains && ignore.contains(event.target)) {
            return;
        }
        onClickOutside();
    };
    useEffect(() => {
        if (listen && onClickOutside) {
            document.addEventListener('mousedown', handleEvent, false);
            document.addEventListener('touchend', handleEvent, false);
            document.addEventListener('keyup', onKeyUp);
            return () => {
                document.removeEventListener('mousedown', handleEvent, false);
                document.removeEventListener('touchend', handleEvent, false);
                document.removeEventListener('keyup', onKeyUp);
            };
        }
    });
    return React.createElement(Container$5, Object.assign({ ref: combinedRef }, props));
});
const Container$5 = styled.div `
  display: contents;
`;

/**
 * Powered by `rc-slider`. For whole API and examples visit https://slider-react-component.vercel.app
 */
const Range = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement(Range$1, Object.assign({}, props, { className: `purplex-slider${props.className ? ` ${props.className}` : ''}`, style: Object.assign({ ['--slider-color']: colors.ELEMENT_FOCUS, ['--slider-color-contrast']: colors.STROKE }, props.style) })));
};

/**
 * Powered by `rc-slider`. For whole API and examples visit https://slider-react-component.vercel.app <br/>
 * For range slider use `<Range>` component.
 */
const Slider = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement(RcSlider, Object.assign({}, props, { className: `purplex-slider${props.className ? ` ${props.className}` : ''}`, style: Object.assign({ ['--slider-color']: colors.ELEMENT_FOCUS, ['--slider-color-contrast']: colors.STROKE }, props.style) })));
};

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
 * Checkbox, Radio button or Toggle switch
 */
const Switch = forwardRef((_a, ref) => {
    var { as = 'label', children, disabled, label, theme, type = 'checkbox', appearance = type === 'radio' ? 'radio' : 'checkbox' } = _a, inputProps = __rest(_a, ["as", "children", "disabled", "label", "theme", "type", "appearance"]);
    const containerProps = Object.fromEntries(Object.entries(inputProps).filter(([key]) => ['className', 'data-hover', 'style'].includes(key)));
    return (React.createElement(Container$4, Object.assign({ as: as, "data-disabled": disabled || null, "data-label": label || null, "data-theme": theme || null }, containerProps),
        React.createElement("input", Object.assign({ ref: ref, type: type, disabled: disabled }, inputProps)),
        React.createElement(Indicator, { "data-appearance": appearance }),
        children,
        label && React.createElement(Label, null, label)));
});
/**
 * Note that [data-hover] are here only to help
 * better illustrate `:hover` state in the dedicated story.
 */
const Container$4 = styled.label `
  --switch-animation-duration: 0.2s;
  --switch-border-color: ${colors.STROKE};
  --switch-border-size: 1.5px;
  --switch-color: ${colors.STROKE};
  --switch-color-contrast: ${colors.WHITE};
  --switch-gap: 8px;
  --switch-radius: 4px;
  --switch-size: 16px;

  align-items: center;
  /* color: var(--switch-color); */
  cursor: pointer;
  display: inline-flex;
  gap: var(--switch-gap);
  max-width: 100%;
  position: relative;
  text-align: left;
  user-select: none;
  white-space: nowrap;

  input {
    height: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 0;
  }

  &[data-theme='dark'] {
    --switch-border-color: #969cac;
  }

  &:is(:focus-within, :hover, label:hover *, [data-hover]) {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-color: ${colors.ELEMENT_PRIMARY};

    &[data-theme='dark'] {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
    }
  }

  &[data-disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;
const Indicator = styled.span `
  background-color: var(--switch-color);
  border-radius: var(--switch-radius);
  box-shadow: inset 0 0 0 var(--switch-border-size) var(--switch-border-color);
  color: var(--switch-color);
  display: block;
  flex-shrink: 0;
  height: var(--switch-size);
  pointer-events: none;
  position: relative;
  width: var(--switch-size);

  /* Appearance: CHECKBOX */
  &[data-appearance='checkbox'] {
    --switch-indicator-angle: -45deg;
    --switch-indicator-opacity: 0;
    --switch-indicator-size: 9;
    --switch-indicator-x: -5;
    --switch-indicator-y: -1.5;

    background-color: var(--switch-color-contrast);
    transition: box-shadow var(--switch-animation-duration);

    &::after,
    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: calc(var(--switch-size) / 8);
      content: '';
      height: calc(var(--switch-size) / 16 * 2.5);
      left: 50%;
      opacity: var(--switch-indicator-opacity);
      position: absolute;
      top: 50%;
      transform: translate(
          calc(var(--switch-size) / var(--switch-indicator-x)),
          calc(var(--switch-size) / 16 * var(--switch-indicator-y))
        )
        rotate(var(--switch-indicator-angle));
      transition: opacity 0.1s var(--switch-animation-duration) linear;
      width: calc(var(--switch-size) / 16 * var(--switch-indicator-size));
      will-change: opacity, transform, width;
    }

    &::after {
      --switch-indicator-angle: 45deg;
      --switch-indicator-size: 6;
      --switch-indicator-x: -3;
      --switch-indicator-y: -0.5;
    }
  }

  input:checked ~ &[data-appearance='checkbox'] {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 2);
    --switch-color: ${colors.ELEMENT_PRIMARY};
    --switch-indicator-opacity: 1;

    [data-theme='dark'] & {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
      --switch-color: ${colors.ELEMENT_SECONDARY};
      --switch-color-contrast: ${colors.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: RADIO */
  &[data-appearance='radio']:before {
    background-color: var(--switch-color-contrast);
    border-radius: calc(var(--switch-radius) / 2);
    content: '';
    height: calc(100% - 2 * var(--switch-border-size));
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all var(--switch-animation-duration);
    width: calc(100% - 2 * var(--switch-border-size));
  }

  input:checked ~ &[data-appearance='radio'] {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 4);
    --switch-color: ${colors.ELEMENT_PRIMARY};

    [data-theme='dark'] & {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
      --switch-color: ${colors.ELEMENT_SECONDARY};
      --switch-color-contrast: ${colors.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: TOGGLE */
  &[data-appearance='toggle'] {
    --switch-border-size: 8px;
    --switch-color: ${colors.TERTIARY};
    --switch-indicator-indent: calc(var(--switch-size) / 8);

    border-radius: var(--switch-size);
    box-shadow: none;
    transition: background-color var(--switch-animation-duration);
    width: calc(var(--switch-size) * 2);

    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: 50%;
      content: '';
      height: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      left: var(--switch-indicator-indent);
      position: absolute;
      top: var(--switch-indicator-indent);
      transition: transform var(--switch-animation-duration);
      width: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      will-change: background-color, transform;
    }

    [data-theme='dark'] & {
      --switch-color: ${colors.DARK_ELEMENT_TERTIARY};
    }
  }

  input:checked ~ &[data-appearance='toggle'] {
    --switch-color: ${colors.ELEMENT_PRIMARY};

    &::before {
      transform: translateX(var(--switch-size));
    }

    [data-theme='dark'] & {
      --switch-color: ${colors.DARK_ELEMENT_FOCUS};
    }
  }
`;
const Label = styled.span `
  ${button};
  ${truncate};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;

/**
 * Flexbox wrapper.
 */
const Flex = (_a) => {
    var { align, as = 'div', block, direction, gap, justify, wrap } = _a, props = __rest(_a, ["align", "as", "block", "direction", "gap", "justify", "wrap"]);
    const delegated = Object.assign({ align, block, direction, gap, justify }, props);
    return React.createElement(Container$3, Object.assign({ as: as, "data-wrap": wrap || null }, delegated));
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
    var { align, as = 'div', block, columns, gap, justify, max = '1fr', min = '0px', sizing = 'auto-fit' } = _a, props = __rest(_a, ["align", "as", "block", "columns", "gap", "justify", "max", "min", "sizing"]);
    const delegated = Object.assign({ align, block, columns, gap, justify, max, min, sizing }, props);
    return React.createElement(Container$2, Object.assign({ as: as }, delegated));
};
const Container$2 = styled.div `
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'grid' : 'inline-grid'}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-items: ${justify}`};
  ${({ columns, max, min, sizing }) => `grid-template-columns: ${columns ? columns : `repeat(${sizing}, minmax(min(100%, ${min}), ${max}))`}`};
`;

/**
 * Spacer.
 */
const Spacer = styled.span `
  background: ${colors.STROKE};
  border-radius: 1000px;
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 2px;
`;

/**
 * Context menu
 */
const Menu = (_a) => {
    var { active, justify, padding, size, theme = 'light' } = _a, props = __rest(_a, ["active", "justify", "padding", "size", "theme"]);
    const delegated = Object.assign({}, props);
    return (React.createElement(MenuContainer, Object.assign({ "data-active": active || null, "data-justify": justify || null, "data-padding": padding || null, "data-theme": theme || null, style: { ['--size']: size } }, delegated)));
};
/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */
const MenuContainer = styled.section `
  --background-color: ${colors.WHITE};
  --border-color: ${colors.WHITE};
  --border-size: 2px;
  --box-shadow: #cbcedc;
  --gap: 4px;
  --indent: 8px;
  --radius: 6px;
  --size: ;

  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: 0 3px 9px var(--box-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: calc(1.5 * var(--indent)) var(--indent);
  position: relative;
  user-select: none;
  width: var(--size);
  z-index: 1;

  &[data-padding] {
    padding: calc(2 * var(--indent));
    padding-top: calc(1.5 * var(--indent));
  }

  &[data-theme='dark'] {
    --background-color: ${colors.DARK_BACKGROUND_PRIMARY};
    --border-color: ${colors.DARK_STROKE};
    --box-shadow: ${colors.BLACK};
  }
`;

const MenuDivider = styled.div `
  --color: ${colors.STROKE};
  --size: 2px;

  background-color: var(--color);
  border-radius: 1000px;
  height: var(--size);

  [data-theme='dark'] & {
    --color: ${colors.DARK_STROKE};
  }
`;

/**
 * Context menu item
 */
const MenuItem = (_a) => {
    var { active, as = 'button', disabled, justify, theme } = _a, props = __rest(_a, ["active", "as", "disabled", "justify", "theme"]);
    const delegated = Object.assign({}, props);
    return (React.createElement(MenuItemContainer, Object.assign({ as: as, "data-active": active || null, "data-disabled": disabled || null, "data-justify": justify || null, "data-theme": theme || null, disabled: as === 'button' ? !!disabled : undefined, type: as === 'button' ? 'button' : undefined }, delegated)));
};
const MenuItemContainer = styled.button `
  ${button};

  --background-color: ;
  --color: ;
  --gap: 8px;
  --indent: 8px;
  --radius: 6px;
  --size: 32px;

  align-items: center;
  background-color: var(--background-color);
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  gap: var(--gap);
  min-height: var(--size);
  outline: 0;
  padding: var(--indent);
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;

  &[data-justify],
  [data-justify] & {
    justify-content: space-between;

    & > :not([data-icon]) {
      flex: 1;
    }
  }

  .primary,
  .secondary {
    transition: color 0.2s;
  }
  .primary {
    color: var(--color, inherit);

    & + .secondary {
      margin-top: 2px;
    }
  }
  .secondary {
    ${paragraph};
    color: var(--color, inherit);

    --color: ${colors.ELEMENT_TERTIARY};
  }

  &:is(:active, [data-pressed]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
    --color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:focus, :hover, [data-hover]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
  }
  &:is([data-active]) {
    --color: ${colors.ELEMENT_PRIMARY};
  }

  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]) {
    .primary {
      --color: ${colors.ELEMENT_PRIMARY};
    }
    .secondary {
      --color: ${colors.TEXT_PRIMARY};
    }
  }

  &:is([data-disabled]) {
    cursor: default;
    pointer-events: none;

    &,
    .primary,
    .secondary {
      --color: ${colors.ELEMENT_TERTIARY};
    }
  }

  [data-theme='dark'] & {
    --color: ${colors.WHITE};

    &:is(:active, [data-pressed]) {
      --background-color: ${colors.DARK_ELEMENT_FOCUS};
    }
    &:is(:focus, :hover, [data-hover]) {
      --background-color: ${colors.DARK_ELEMENT_ACTIVE};
    }

    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]) {
      .primary,
      .secondary {
        --color: ${colors.WHITE};
      }
    }

    &:is([data-disabled]) {
      &,
      .primary,
      .secondary {
        --color: ${colors.DARK_ELEMENT_TERTIARY};
      }
    }
  }
`;

const MenuTitle = styled.h5 `
  ${h3};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${colors.WHITE};
  }
`;

/**
 * Text
 */
const Text = (_a) => {
    var { as = 'span', clamp, hyphens = 'manual', truncate, word = 'normal' } = _a, props = __rest(_a, ["as", "clamp", "hyphens", "truncate", "word"]);
    return (React.createElement(Container$1, Object.assign({ as: as, "data-as": as, "data-clamp": clamp || null, "data-hyphens": hyphens, "data-truncate": truncate || null, "data-word": word, style: { ['--lines']: clamp } }, props)));
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

  &[data-hyphens='auto'] {
    hyphens: auto;
  }
  &[data-hyphens='none'] {
    hyphens: none;
  }

  &[data-truncate] {
    ${truncate};
  }

  &[data-word='break'] {
    word-break: break-all;
  }
  &[data-word='keep'] {
    word-break: keep-all;
  }
`;

/**
 * Status
 */
const Status = (_a) => {
    var { children, icon, text, theme } = _a, props = __rest(_a, ["children", "icon", "text", "theme"]);
    const isBeacon = !(text || children);
    return (React.createElement(Container, Object.assign({ "data-beacon": isBeacon || null, "data-theme": theme || null }, props),
        icon,
        React.createElement(Text, { truncate: true }, text ? text : children)));
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
    --status-background-color: ${colors.TRANSPARENT};
    --status-indent: 0;
    --status-radius: 50%;
    --status-size: 16px;

    display: inline-grid;
    flex-grow: 0;
    place-items: center;
    position: relative;
    width: var(--status-size);

    &::after,
    &::before {
      border-radius: inherit;
      content: '';
      display: block;
      position: absolute;
    }
    &::after {
      background: var(--status-color-primary);
      height: calc(var(--status-size) / 8 * 3);
      width: calc(var(--status-size) / 8 * 3);
    }
    &::before {
      background: var(--status-color-secondary);
      height: calc(var(--status-size) / 8 * 5);
      width: calc(var(--status-size) / 8 * 5);
    }
  }
`;

/**
 * Navigation item
 */
const NavItem = forwardRef((_a, ref) => {
    var { active, href, icon = React.createElement(Icon, { name: "Chevron" }), status, text } = _a, props = __rest(_a, ["active", "href", "icon", "status", "text"]);
    return (React.createElement(NavItemContainer, Object.assign({ as: href ? 'a' : 'button', "data-active": active || null, "data-status": status || null, href: href, ref: ref, type: href ? undefined : 'button' }, props),
        status && React.createElement(Status, { theme: status || null }),
        React.createElement(Text, { "data-text": true, truncate: true }, text),
        icon));
});
const NavItemContainer = styled.a `
  ${button};

  --nav-item-background-color: #edf1f4;
  --nav-item-border-color: #c5d5e4;
  --nav-item-border-size: 1px;
  --nav-item-color: ;
  --nav-item-gap: 8px;
  --nav-item-indent: 8px;
  --nav-item-size: 56px;

  align-items: center;
  background-color: var(--nav-item-background-color);
  border: 0;
  border-bottom: var(--nav-item-border-size) solid var(--nav-item-border-color);
  color: var(--nav-item-color);
  cursor: pointer;
  display: flex;
  gap: var(--nav-item-gap);
  height: var(--nav-item-size);
  justify-content: space-between;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 0 var(--nav-item-indent);
  padding-left: calc(2 * var(--nav-item-indent));
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;

  &[data-active] {
    --nav-item-background-color: ${colors.ELEMENT_FOCUS};
    --nav-item-color: ${colors.WHITE};
  }
  &[data-status] {
    padding-left: var(--nav-item-indent);
  }

  [data-text] {
    flex: 1;
  }
`;
/**
 * Navigation
 */
const Nav = styled.nav `
  display: flex;
  flex-direction: column;
`;

/**
 * Table data cell
 */
const Td = (_a) => {
    var { align, justify, size } = _a, props = __rest(_a, ["align", "justify", "size"]);
    return (React.createElement(TdContainer, Object.assign({ "data-align": align || null, "data-justify": justify || null }, props)));
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
    return (React.createElement(ThContainer, Object.assign({ "data-align": align || null, "data-justify": justify || null }, props),
        React.createElement(Flex, { gap: "4px", "data-sortable": sortable || null, onClick: onClick },
            icon,
            React.createElement(Text, { truncate: true }, children),
            sortable && React.createElement(Order, { direction: direction }))));
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
 * Table row
 */
const Tr = (_a) => {
    var { mute } = _a, props = __rest(_a, ["mute"]);
    return (React.createElement(TrContainer, Object.assign({ "data-mute": mute || null }, props)));
};
const TrContainer = styled.tr `
  &[data-mute] {
    td,
    th {
      color: ${colors.TEXT_TERTIARY};
    }
  }
`;
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
    var { layout, sticky } = _a, props = __rest(_a, ["layout", "sticky"]);
    return (React.createElement(TableContainer, Object.assign({ "data-layout": layout || null, "data-sticky": sticky || null }, props)));
};
const TableContainer = styled.table `
  ${base$1};

  --background-color: ${colors.WHITE};
  --border-color: ${colors.STROKE};
  --border-size: 1px;
  --font-size: 14px;
  --font-weight: 600;
  --indent: 8px;
  --line-height: 16px;

  background-color: var(--background-color);
  border-collapse: collapse;
  border-spacing: 0;
  font-variant-numeric: tabular-nums;

  &[data-layout='fixed'] {
    table-layout: fixed;
  }

  &[data-sticky] {
    thead {
      &,
      & tr,
      & th {
        background: inherit;
      }
      th {
        position: sticky;
        top: 0;
        z-index: 2;

        &::after {
          border-bottom: var(--border-size) solid var(--border-color);
          content: '';
          inset: auto 0 calc(-1 * var(--border-size)) 0;
          position: absolute;
        }
      }
    }
  }

  ${({ size }) => `width: ${size !== null && size !== void 0 ? size : '100%'};`}

  tr {
    border-bottom: var(--border-size) solid var(--border-color);

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

export { Button, ClickOutsideGuard, Flex, Grid, Icon, Idle, Menu, MenuDivider, MenuItem, MenuTitle, Nav, NavItem, Order, Range, Slider, Spacer, Status, Switch, Table, Tbody, Td, Text, Th, Thead, Tr, TrContainer, base$1 as base, button, colors, h1, h2, h3, h4, h5, input, label, paragraph };
//# sourceMappingURL=index.js.map
