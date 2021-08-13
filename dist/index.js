/** Components v2.1.0 */

import { keyframes, css, jsx, Global } from '@emotion/react';
import styled from '@emotion/styled';
import React, { createElement, useState, useEffect, forwardRef, useRef, useCallback, useMemo, Fragment } from 'react';
import { useCombinedRef, useDependantState, useUpdatedRef } from '@spicy-hooks/core';
import { transparentize } from 'color2k';
import RcSlider, { Range as Range$1 } from 'rc-slider';
import ReactSelect, { components } from 'react-select';
import RcTooltip from 'rc-tooltip';

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
const fadeIn = keyframes `
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;

/**
 * Idle indicator.
 */
const Idle = (_a) => {
    var { color, delay = 100, duration = 500, gap = '4px', range = '6px', size = '5px' } = _a, props = __rest(_a, ["color", "delay", "duration", "gap", "range", "size"]);
    const delegated = Object.assign({ color, delay, duration, gap, range, size }, props);
    return (React.createElement(Container$c, Object.assign({}, delegated),
        React.createElement(Element$2, null),
        React.createElement(Element$2, null),
        React.createElement(Element$2, null)));
};
// TypeScript warning will be gone after this boi is resolved
// https://github.com/microsoft/typescript-styled-plugin/issues/137#issuecomment-848930098
const idle = keyframes `
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`;
const Element$2 = styled.div `
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
const Container$c = styled.div `
  ${({ color }) => color && `--color: ${color}`};
  ${({ delay }) => `--delay: ${delay}ms`};
  ${({ duration }) => `--duration: ${duration}ms`};
  ${({ gap }) => `--gap: ${gap}`};
  ${({ range }) => `--range: ${range}`};
  ${({ size }) => `--size: ${size}`};

  display: inline-flex;
  gap: var(--gap);
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

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`;
const input$2 = css `
  ${base$1};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;

const Direction = {
    NONE: 'None',
    ASCENDING: 'Asc',
    DESCENDING: 'Desc',
};
const Size = {
    XSMALL: 'xs',
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg',
    XLARGE: 'xl',
};

function SvgAlignBottom() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.273 14.455H.727a.727.727 0 100 1.454h14.546a.727.727 0 000-1.454zM8.728 6.364a1 1 0 011-1h2.363a1 1 0 011 1v6a1 1 0 01-1 1H9.728a1 1 0 01-1-1v-6zM2.91 2a1 1 0 011-1h2.363a1 1 0 011 1v10.364a1 1 0 01-1 1H3.909a1 1 0 01-1-1V2z" })));
}

function SvgAlignCenter() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.273 8.364H9.09a.182.182 0 01-.182-.182v-.727a.182.182 0 01.182-.182h2a1.09 1.09 0 001.09-1.091V4a1.09 1.09 0 00-1.09-1.09h-2a.182.182 0 01-.182-.183v-2a.727.727 0 10-1.455 0v2a.182.182 0 01-.181.182h-2A1.09 1.09 0 004.182 4v2.182a1.09 1.09 0 001.09 1.09h2a.182.182 0 01.182.183v.727a.182.182 0 01-.181.182H3.09A1.09 1.09 0 002 9.454v2.182a1.091 1.091 0 001.09 1.091h4.183a.182.182 0 01.181.182v2.364a.727.727 0 001.455 0v-2.364a.182.182 0 01.182-.182h4.182a1.091 1.091 0 001.09-1.09V9.454a1.09 1.09 0 00-1.09-1.091z" })));
}

function SvgAlignDistributeHorizontally() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M2 1.1a.9.9 0 01.9.9v12a.9.9 0 01-1.8 0V2a.9.9 0 01.9-.9zM14 1.1a.9.9 0 01.9.9v12a.9.9 0 01-1.8 0V2a.9.9 0 01.9-.9z", clipRule: "evenodd" }),
        createElement("rect", { width: 4, height: 8, x: 6, y: 4, fill: "currentColor", rx: 1 })));
}

function SvgAlignDistributeVertically() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.1 14a.9.9 0 01.9-.9h12a.9.9 0 010 1.8H2a.9.9 0 01-.9-.9zM1.1 2a.9.9 0 01.9-.9h12a.9.9 0 010 1.8H2a.9.9 0 01-.9-.9z", clipRule: "evenodd" }),
        createElement("rect", { width: 4, height: 8, x: 4, y: 10, fill: "currentColor", rx: 1, transform: "rotate(-90 4 10)" })));
}

function SvgAlignLeft() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M1.727 0A.727.727 0 001 .727v14.546a.727.727 0 101.455 0V.727A.727.727 0 001.727 0zM3.546 3.909a1 1 0 011-1h6a1 1 0 011 1v2.364a1 1 0 01-1 1h-6a1 1 0 01-1-1V3.909zM3.546 9.727a1 1 0 011-1h10.363a1 1 0 011 1v2.364a1 1 0 01-1 1H4.546a1 1 0 01-1-1V9.727z" })));
}

function SvgAlignMiddle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M16 8.182a.727.727 0 00-.727-.727h-2a.182.182 0 01-.182-.182v-2a1.09 1.09 0 00-1.09-1.091H9.817a1.09 1.09 0 00-1.09 1.09v2a.182.182 0 01-.182.183h-.728a.182.182 0 01-.182-.182V3.09A1.09 1.09 0 006.546 2H4.364a1.09 1.09 0 00-1.091 1.09v4.183a.182.182 0 01-.182.182H.727a.727.727 0 100 1.454h2.364a.182.182 0 01.182.182v4.182a1.09 1.09 0 001.09 1.09h2.183a1.09 1.09 0 001.09-1.09V9.09a.182.182 0 01.182-.182h.728a.182.182 0 01.181.182v2a1.091 1.091 0 001.091 1.09H12a1.09 1.09 0 001.091-1.09v-2a.182.182 0 01.182-.182h2A.727.727 0 0016 8.182z" })));
}

function SvgAlignRight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.182 0a.727.727 0 00-.727.727v14.546a.727.727 0 101.454 0V.727A.727.727 0 0015.182 0zM5.364 3.91a1 1 0 011-1h6a1 1 0 011 1v2.363a1 1 0 01-1 1h-6a1 1 0 01-1-1V3.909zM1 9.727a1 1 0 011-1h10.364a1 1 0 011 1v2.364a1 1 0 01-1 1H2a1 1 0 01-1-1V9.727z" })));
}

function SvgAlignTop() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.273 1H.727a.727.727 0 100 1.455h14.546a.727.727 0 000-1.455zM8.728 4.546a1 1 0 011-1h2.363a1 1 0 011 1v6a1 1 0 01-1 1H9.728a1 1 0 01-1-1v-6zM2.91 4.546a1 1 0 011-1h2.363a1 1 0 011 1v10.363a1 1 0 01-1 1H3.909a1 1 0 01-1-1V4.546z" })));
}

function SvgArrowAltLeft() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2.335 7.192l4-4A1.143 1.143 0 018.285 4v2.571a.286.286 0 00.286.286h4.286a1.143 1.143 0 010 2.286H8.571a.286.286 0 00-.285.286V12a1.143 1.143 0 01-1.951.808l-4-4a1.143 1.143 0 010-1.616z" })));
}

function SvgArrowAltRight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.665 7.192l-4-4A1.143 1.143 0 007.715 4v2.571a.286.286 0 01-.286.286H3.143a1.143 1.143 0 100 2.286h4.286a.286.286 0 01.285.286V12a1.143 1.143 0 001.951.808l4-4a1.143 1.143 0 000-1.616z" })));
}

function SvgArrowBackward() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11.752 5.452c-1.849-1.088-4.39-.938-7.03.402a.134.134 0 01-.155-.025L2.964 4.232A.8.8 0 001.6 4.8v6.294a.533.533 0 00.533.533h6.29a.8.8 0 00.565-1.366L7.655 8.928a.133.133 0 01.033-.213c1.518-.777 3.124-.907 4.252-.301.913.486 1.393 1.413 1.393 2.679a.534.534 0 001.067 0c0-2.632-.94-4.636-2.648-5.641z" })));
}

function SvgArrowForward() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M4.248 5.452c1.849-1.088 4.39-.938 7.03.402a.134.134 0 00.155-.025l1.603-1.597A.8.8 0 0114.4 4.8v6.294a.533.533 0 01-.533.533h-6.29a.8.8 0 01-.565-1.366l1.333-1.333a.133.133 0 00-.033-.213c-1.518-.777-3.124-.907-4.252-.301-.913.486-1.393 1.413-1.393 2.679a.534.534 0 01-1.067 0c0-2.632.94-4.636 2.648-5.641z" })));
}

function SvgArrowFromRight$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M5.907 4.37a.781.781 0 00-.866.184L2.235 7.419A.822.822 0 002 8a.839.839 0 00.235.58l2.806 2.866a.8.8 0 00.567.24.76.76 0 00.305-.063.805.805 0 00.354-.3.835.835 0 00.134-.451V5.128a.836.836 0 00-.135-.456.805.805 0 00-.359-.302zM10.002 0a.987.987 0 00-.708.3 1.04 1.04 0 00-.293.726v13.948c0 .272.106.533.293.726a.99.99 0 00.707.3.99.99 0 00.708-.3 1.04 1.04 0 00.293-.726V1.026A1.048 1.048 0 0010.709.3a.999.999 0 00-.707-.3z" })));
}

function SvgArrowLeft() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.372 1.336a1.37 1.37 0 01.105 1.876L4.535 6.671h10.193C15.43 6.67 16 7.266 16 8s-.57 1.33-1.272 1.33H4.535l2.942 3.458a1.37 1.37 0 01-.105 1.876 1.234 1.234 0 01-1.796-.11L0 8l5.576-6.554a1.234 1.234 0 011.796-.11z", clipRule: "evenodd" })));
}

function SvgArrowReplay() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M.234 3.435l3.2-3.2A.8.8 0 014.8.8v2h4.8a6.4 6.4 0 010 12.8h-4a1.2 1.2 0 110-2.4h4a4 4 0 100-8H4.8v2a.8.8 0 01-1.366.566l-3.2-3.2a.8.8 0 010-1.131z" })));
}

function SvgBackground$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.169 15.236a.826.826 0 010-1.168l.899-.9a.826.826 0 111.168 1.17l-.899.898a.826.826 0 01-1.168 0zM.764 2.831a.826.826 0 010-1.168l.899-.9a.826.826 0 011.168 1.17l-.898.898a.826.826 0 01-1.169 0zM8.854 15.416a.826.826 0 010-1.169l5.393-5.393a.826.826 0 111.169 1.169l-5.393 5.393a.826.826 0 01-1.169 0zM.584 7.146a.826.826 0 010-1.169L5.977.584a.826.826 0 111.169 1.169L1.753 7.146a.826.826 0 01-1.169 0zM4.989 15.146a.826.826 0 010-1.169l8.988-8.988a.826.826 0 111.169 1.168l-8.989 8.989a.826.826 0 01-1.168 0zM.854 11.011a.826.826 0 010-1.168L9.843.853a.826.826 0 011.168 1.17L2.022 11.01a.826.826 0 01-1.168 0zM1.124 14.876a.826.826 0 010-1.168L13.708 1.124a.826.826 0 111.168 1.168L2.292 14.876a.826.826 0 01-1.168 0z", clipRule: "evenodd" })));
}

function SvgBackspace() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.48 3.5H4.56a1.528 1.528 0 00-1.076.439l-3.04 3a1.49 1.49 0 000 2.121l3.04 3a1.508 1.508 0 001.075.44h9.921c.403 0 .79-.158 1.075-.44A1.49 1.49 0 0016 11V5c0-.398-.16-.78-.445-1.06a1.53 1.53 0 00-1.075-.44zM7.358 7.03a.75.75 0 01-.231-.533.742.742 0 01.222-.537.76.76 0 01.544-.22.768.768 0 01.54.23l.804.792a.254.254 0 00.276.054.254.254 0 00.082-.054l.803-.792a.76.76 0 01.54-.23.768.768 0 01.543.22.75.75 0 01.223.537.743.743 0 01-.232.533l-.803.793a.25.25 0 00-.055.273.25.25 0 00.055.081l.803.793a.749.749 0 01.176.824.75.75 0 01-.416.41.768.768 0 01-.834-.174l-.803-.793a.257.257 0 00-.358 0l-.804.793a.765.765 0 01-1.065-.009.745.745 0 01-.01-1.051l.804-.793a.25.25 0 00.055-.273.25.25 0 00-.055-.081l-.804-.793z" })));
}

function SvgBackward() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M.74 9.314l4.777 3.721a1.442 1.442 0 001.612.13c.253-.142.466-.357.614-.623a1.8 1.8 0 00.227-.88V9.937l3.977 3.097a1.443 1.443 0 001.611.13c.254-.142.466-.357.615-.623a1.8 1.8 0 00.227-.88V3.824c0-.31-.079-.615-.227-.88a1.613 1.613 0 00-.614-.622 1.443 1.443 0 00-1.61.127L7.97 5.548V3.825c0-.31-.078-.615-.226-.88a1.613 1.613 0 00-.615-.622 1.443 1.443 0 00-1.61.127L.742 6.173c-.23.179-.417.414-.546.687A2.072 2.072 0 000 7.743c0 .308.067.61.196.883.13.274.316.51.546.688H.74z" })));
}

function SvgBars() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 16" },
        createElement("path", { fill: "currentColor", d: "M14.861 3.597H1.147c-.303 0-.594-.11-.808-.307a1.009 1.009 0 01-.335-.743c0-.278.12-.545.335-.742.214-.197.505-.308.808-.308H14.86c.303 0 .594.111.808.308.214.197.335.464.335.742 0 .279-.12.546-.335.743a1.196 1.196 0 01-.808.307zM14.861 9.312H1.147c-.303 0-.594-.111-.808-.308a1.009 1.009 0 01-.335-.742c0-.279.12-.546.335-.743.214-.197.505-.307.808-.307H14.86c.303 0 .594.11.808.307.214.197.335.464.335.743 0 .278-.12.545-.335.742a1.196 1.196 0 01-.808.308zM14.861 15.026H1.147c-.303 0-.594-.11-.808-.307a1.009 1.009 0 01-.335-.743c0-.279.12-.546.335-.742.214-.197.505-.308.808-.308H14.86c.303 0 .594.11.808.308.214.197.335.463.335.742 0 .278-.12.546-.335.742a1.196 1.196 0 01-.808.308z" })));
}

function SvgBook() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.764 2.835a.745.745 0 00-.551-.165l-9.128.995a.724.724 0 01-.478-.206.647.647 0 01-.194-.46c0-.208 0-.523.842-.68 1.169-.217 7.65-.987 7.716-.992a.715.715 0 00.46-.256.64.64 0 00-.123-.927.736.736 0 00-.514-.14C11.53.036 5.2.785 3.982 1.01 2.26 1.331 2.002 2.394 2.002 3v10.333c-.012.353.054.705.192 1.033.138.328.345.626.61.876.264.25.58.446.927.576.348.13.72.192 1.093.182.071 0 8.558-1.006 8.558-1.006a.719.719 0 00.441-.22.646.646 0 00.177-.44V3.331a.636.636 0 00-.062-.273.67.67 0 00-.174-.224z" })));
}

function SvgCalendar() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M4.87 7h-.696a.711.711 0 00-.492.195.653.653 0 00-.204.472c0 .176.073.346.204.471a.71.71 0 00.492.195h.695a.71.71 0 00.492-.195.653.653 0 00.204-.471.653.653 0 00-.204-.472A.711.711 0 004.87 7zM8.348 7h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.472c0 .176.073.346.203.471s.308.195.492.195h.696c.184 0 .361-.07.492-.195a.653.653 0 00.204-.471.653.653 0 00-.204-.472A.711.711 0 008.348 7zM11.826 7h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.472c0 .176.073.346.204.471a.71.71 0 00.491.195h.696c.185 0 .361-.07.492-.195a.653.653 0 00.204-.471.653.653 0 00-.204-.472.711.711 0 00-.492-.195zM4.87 9.667h-.696a.711.711 0 00-.492.195.653.653 0 00-.204.471c0 .177.073.347.204.472a.71.71 0 00.492.195h.695a.71.71 0 00.492-.195.653.653 0 00.204-.472.653.653 0 00-.204-.471.711.711 0 00-.492-.195zM8.348 9.667h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.471c0 .177.073.347.203.472s.308.195.492.195h.696c.184 0 .361-.07.492-.195a.653.653 0 00.204-.472.653.653 0 00-.204-.471.711.711 0 00-.492-.195zM11.826 9.667h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.471c0 .177.073.347.204.472a.71.71 0 00.491.195h.696c.185 0 .361-.07.492-.195a.653.653 0 00.204-.472.653.653 0 00-.204-.471.711.711 0 00-.492-.195zM4.87 12.333h-.696a.711.711 0 00-.492.195.653.653 0 00-.204.472.65.65 0 00.204.471.71.71 0 00.492.196h.695c.185 0 .362-.07.492-.196A.653.653 0 005.565 13a.653.653 0 00-.204-.472.711.711 0 00-.492-.195zM8.348 12.333h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.472c0 .177.073.346.203.471s.308.196.492.196h.696a.71.71 0 00.492-.196.653.653 0 00.204-.471.653.653 0 00-.204-.472.711.711 0 00-.492-.195zM11.826 12.333h-.696a.711.711 0 00-.492.195.653.653 0 00-.203.472.65.65 0 00.204.471.71.71 0 00.491.196h.696c.185 0 .361-.07.492-.196a.653.653 0 00.204-.471.653.653 0 00-.204-.472.711.711 0 00-.492-.195z" }),
        createElement("path", { fill: "currentColor", d: "M14.609 2h-1.913a.178.178 0 01-.123-.049.163.163 0 01-.051-.118V.667a.653.653 0 00-.204-.472.711.711 0 00-.492-.195.711.711 0 00-.492.195.653.653 0 00-.204.472v3.166a.49.49 0 01-.152.354.533.533 0 01-.738 0 .49.49 0 01-.153-.354v-1.5a.327.327 0 00-.102-.235A.356.356 0 009.74 2H5.391a.178.178 0 01-.122-.049.163.163 0 01-.052-.117V.667a.653.653 0 00-.203-.472A.711.711 0 004.522 0a.711.711 0 00-.492.195.653.653 0 00-.204.472v3.166a.49.49 0 01-.153.354.533.533 0 01-.738 0 .49.49 0 01-.152-.354v-1.5a.326.326 0 00-.102-.235A.356.356 0 002.435 2H1.39c-.369 0-.723.14-.983.39-.261.25-.408.59-.408.943v11.334c0 .353.147.692.408.943.26.25.614.39.983.39h13.22c.369 0 .723-.14.983-.39.261-.25.408-.59.408-.943V3.333c0-.353-.147-.692-.408-.942A1.42 1.42 0 0014.61 2zm0 12.333a.326.326 0 01-.102.236.356.356 0 01-.246.098H1.739a.356.356 0 01-.246-.098.326.326 0 01-.102-.236v-8c0-.088.037-.173.102-.235A.356.356 0 011.74 6h12.522c.092 0 .18.035.246.098a.326.326 0 01.102.235v8z" })));
}

function SvgClick$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.95 9.853L9.395 8.637V5a1.3 1.3 0 00-.41-.943 1.436 1.436 0 00-.99-.39c-.371 0-.727.14-.99.39-.262.25-.41.59-.41.943v5.64l-.578-.758a1.077 1.077 0 00-.376-.276 1.127 1.127 0 00-.464-.096l-.693.013c-.179 0-.355.044-.51.128a1.012 1.012 0 00-.378.352.95.95 0 00-.021.972l2.614 4.516a.998.998 0 00.377.372c.158.09.34.137.524.137h4.47c.213-.002.42-.067.592-.185a.99.99 0 00.373-.474l1.063-4.454a.921.921 0 00-.148-.656.996.996 0 00-.49-.378z" }),
        createElement("path", { fill: "currentColor", d: "M3.87 7.933a.698.698 0 00.219-.155.66.66 0 00.179-.481.641.641 0 00-.067-.252A3.797 3.797 0 013.8 5.333c0-1.06.442-2.078 1.23-2.828A4.308 4.308 0 018 1.333c1.113 0 2.181.422 2.97 1.172a3.906 3.906 0 011.23 2.828 3.798 3.798 0 01-.405 1.714.638.638 0 00-.025.509.68.68 0 00.36.377.75.75 0 00.532.021.706.706 0 00.4-.336c.356-.714.54-1.494.537-2.285 0-1.414-.59-2.77-1.64-3.77A5.744 5.744 0 007.999 0 5.746 5.746 0 004.04 1.562 5.208 5.208 0 002.4 5.333a5.077 5.077 0 00.54 2.287.69.69 0 00.397.34.733.733 0 00.533-.027z" })));
}

function SvgClock() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm3.467 11.48a.678.678 0 01-.942.042l-3.306-3.03A.667.667 0 017 8V4.333a.667.667 0 011.333 0v3.374l3.09 2.832a.666.666 0 01.044.942z" })));
}

function SvgClone() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M10 11.333A1.333 1.333 0 0011.333 10V1.333A1.333 1.333 0 0010 0H1.333A1.333 1.333 0 000 1.333V10a1.333 1.333 0 001.333 1.333H10zM1.333 1.667a.333.333 0 01.334-.334h8a.333.333 0 01.333.334v8a.333.333 0 01-.334.333h-8a.333.333 0 01-.333-.334v-8z" }),
        createElement("path", { fill: "currentColor", d: "M16 6.334a1.666 1.666 0 00-1.667-1.667h-1.216a.682.682 0 00-.784.657V11A1.333 1.333 0 0111 12.333H5.334a.666.666 0 00-.667.667v1.333A1.667 1.667 0 006.334 16h8A1.668 1.668 0 0016 14.333v-8z" })));
}

function SvgCog$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.948 6.508l-.845-.3a.917.917 0 01-.52-1.257l.384-.809a1.584 1.584 0 00-2.11-2.11l-.808.385a.917.917 0 01-1.257-.521l-.3-.844a1.584 1.584 0 00-2.984 0l-.3.844a.917.917 0 01-1.257.52l-.808-.384a1.584 1.584 0 00-2.11 2.11l.383.81a.917.917 0 01-.52 1.257l-.844.3a1.583 1.583 0 000 2.983l.844.3a.916.916 0 01.52 1.257l-.384.809a1.584 1.584 0 002.11 2.11l.81-.384a.915.915 0 011.256.52l.3.844a1.584 1.584 0 002.984 0l.3-.844a.916.916 0 011.257-.52l.809.384a1.584 1.584 0 002.11-2.11l-.384-.81a.915.915 0 01.52-1.256l.844-.3a1.583 1.583 0 000-2.984zM8 11.19a3.286 3.286 0 01-2.96-1.963 3.209 3.209 0 011.733-4.188 3.245 3.245 0 014.187 1.734 3.21 3.21 0 01-1.733 4.187c-.39.16-.807.238-1.227.23z" })));
}

function SvgCommentLines() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M0 3.055C0 2.25.651 1.6 1.455 1.6h13.09C15.35 1.6 16 2.251 16 3.055v8.727c0 .803-.651 1.454-1.454 1.454h-4.473l-1.164.932a1.455 1.455 0 01-1.818 0l-1.164-.932H1.455A1.455 1.455 0 010 11.782V3.055zm14.546 0H1.455v8.727h4.472c.33 0 .65.112.908.319L8 13.032l1.165-.931a1.45 1.45 0 01.908-.32h4.473V3.056z", clipRule: "evenodd" }),
        createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, d: "M4.364 8.873h7.272M4.364 5.964h7.272" })));
}

function SvgCursor() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.542 5.513L3.534 1.68a1.456 1.456 0 00-1.853 1.854l3.83 11.011a.971.971 0 00.917.654h.018a.96.96 0 00.902-.662l1.914-5.273 5.26-1.91a.97.97 0 00.02-1.846v.004z" })));
}

function SvgDesert() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M0 3.667a3.667 3.667 0 107.333 0 3.667 3.667 0 00-7.333 0zM6.494 14.287a.168.168 0 00-.047-.244L4.68 12.964a.167.167 0 00-.149-.013L.105 14.698a.168.168 0 00-.105.155v.814A.333.333 0 00.333 16h4.792a.165.165 0 00.134-.067l1.235-1.646zM11.42 13.147a.166.166 0 00-.21-.083l-3.519 1.333a.172.172 0 00-.074.056l-.959 1.28a.166.166 0 00.133.267h5.734a.166.166 0 00.15-.239l-1.255-2.614zM3.229 12.39a.166.166 0 00.025-.297l-2.294-1.4a.166.166 0 00-.087-.026h-.54A.333.333 0 000 11v2.42a.167.167 0 00.228.154l3-1.183zM12.462 12.59a.166.166 0 00-.091.227l1.484 3.088a.168.168 0 00.15.095h1.662a.333.333 0 00.333-.333v-4.178a.167.167 0 00-.226-.156l-3.312 1.256zM11.608 11.763a.166.166 0 00.157.022l2.121-.805a.163.163 0 00.046-.276.162.162 0 00-.103-.037.162.162 0 01-.162-.162V6.848a.164.164 0 01.07-.133l1.914-1.368a.834.834 0 00-.969-1.357l-.749.536a.166.166 0 01-.263-.133v-1.06a.835.835 0 00-1.67 0V6.13a.167.167 0 01-.277.126l-1.008-.882a.833.833 0 10-1.097 1.254l2.325 2.035a.167.167 0 01.057.125V10.5a.167.167 0 01-.167.167h-1.22a.167.167 0 00-.098.301l1.093.795zM7.315 13.4a.17.17 0 00.146.014l2.814-1.067a.165.165 0 00.095-.22.167.167 0 00-.055-.07l-1.871-1.36a.165.165 0 00-.099-.03H3.43a.166.166 0 00-.154.227.166.166 0 00.068.081L7.315 13.4z" })));
}

function SvgDocument() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M5.4 8.667h5.423a.319.319 0 00.273-.15.339.339 0 00.026-.317l-.943-2.249a.655.655 0 00-.505-.283.636.636 0 00-.526.239L8.166 7.2a.16.16 0 01-.227.03l-1.026-.8a.636.636 0 00-.828.138l-.96 1.59a.34.34 0 00.11.463c.05.03.107.046.165.047zM5.142 3.667c0 .265.103.52.286.707.182.187.43.293.689.293a.963.963 0 00.69-.293 1.017 1.017 0 00-.001-1.414.963.963 0 00-.689-.293.963.963 0 00-.69.293 1.013 1.013 0 00-.285.707zM11.25 9.667h-6.5a.642.642 0 00-.46.195.675.675 0 000 .943.642.642 0 00.46.195h6.5c.172 0 .338-.07.46-.195a.675.675 0 000-.943.642.642 0 00-.46-.195zM11.25 11.667h-6.5a.642.642 0 00-.46.195.675.675 0 000 .943.642.642 0 00.46.195h6.5c.172 0 .338-.07.46-.195a.675.675 0 000-.943.642.642 0 00-.46-.195z" }),
        createElement("path", { fill: "currentColor", d: "M14.31 3.805L10.79.195A.642.642 0 0010.33 0H2.8c-.345 0-.675.14-.92.39-.243.25-.38.59-.38.943v13.334c0 .353.137.692.38.943.245.25.575.39.92.39h10.4c.345 0 .675-.14.92-.39.243-.25.38-.59.38-.943V4.276a.675.675 0 00-.19-.471zM13.2 14.333a.337.337 0 01-.095.236.32.32 0 01-.23.098h-9.75a.321.321 0 01-.23-.098.338.338 0 01-.095-.236V1.667c0-.089.034-.174.095-.236a.32.32 0 01.23-.098h6.802a.32.32 0 01.23.098l2.948 3.024a.34.34 0 01.095.235v9.643z" })));
}

function SvgDoorOpen() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 16" },
        createElement("path", { fill: "currentColor", d: "M14.094 1H8.937V.333a.325.325 0 00-.128-.26.348.348 0 00-.29-.065L2.332 1.34a.345.345 0 00-.194.117.327.327 0 00-.076.209v12.666c0 .076.027.15.076.209.05.059.118.1.194.117l6.187 1.333a.354.354 0 00.29-.066.335.335 0 00.128-.26V15h5.157c.182 0 .357-.07.486-.195a.656.656 0 00.201-.472V1.667a.656.656 0 00-.201-.472.698.698 0 00-.486-.195zM7.219 8.333c0 .198-.06.391-.174.556a1.025 1.025 0 01-.463.368 1.061 1.061 0 01-1.124-.217.972.972 0 01-.224-1.09c.079-.182.21-.338.38-.448a1.054 1.054 0 011.303.124.985.985 0 01.302.707zm5.843 5.333h-3.78a.35.35 0 01-.244-.097.328.328 0 01-.1-.236V2.667c0-.089.036-.174.1-.236a.35.35 0 01.243-.098h3.781a.35.35 0 01.243.098.325.325 0 01.101.236v10.666a.328.328 0 01-.1.236.35.35 0 01-.244.097z" })));
}

function SvgDrop() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8.561.298a.69.69 0 00-1.122 0c-.048.074-4.772 7.525-4.772 10.36a5.333 5.333 0 1010.666 0C13.333 7.823 8.61.371 8.561.297zM8 14.158a3.504 3.504 0 01-3.5-3.5.5.5 0 011 0 2.504 2.504 0 002.5 2.5.5.5 0 110 1z" })));
}

function SvgEllipsisHorizontal() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("circle", { cx: 1.6, cy: 8, r: 1.6, fill: "currentColor" }),
        createElement("circle", { cx: 8, cy: 8, r: 1.6, fill: "currentColor" }),
        createElement("circle", { cx: 14.4, cy: 8, r: 1.6, fill: "currentColor" })));
}

function SvgEllipsisVertical$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("circle", { cx: 8, cy: 14.4, r: 1.6, fill: "currentColor", transform: "rotate(-90 8 14.4)" }),
        createElement("circle", { cx: 8, cy: 8, r: 1.6, fill: "currentColor", transform: "rotate(-90 8 8)" }),
        createElement("circle", { cx: 8, cy: 1.6, r: 1.6, fill: "currentColor", transform: "rotate(-90 8 1.6)" })));
}

function SvgExclamationTriangle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.055 12.578l-5.93-11.11A1.255 1.255 0 008.656.98a1.288 1.288 0 00-1.314 0c-.198.117-.36.286-.467.487l-5.93 11.11A1.225 1.225 0 00.983 13.8a1.27 1.27 0 001.086.6h11.862a1.27 1.27 0 001.086-.6 1.228 1.228 0 00.038-1.223zm-7.69-7.206c0-.165.067-.324.186-.44a.64.64 0 01.898 0 .616.616 0 01.185.44v3.734a.616.616 0 01-.185.44.64.64 0 01-.898 0 .617.617 0 01-.186-.44V5.372zm.667 7.164h-.018a.98.98 0 01-.67-.267.943.943 0 01-.296-.648.903.903 0 01.256-.665.935.935 0 01.663-.287h.018c.25 0 .49.095.67.265.18.17.287.402.297.648a.902.902 0 01-.255.667.936.936 0 01-.665.287z" })));
}

function SvgEyeSlash$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.62 7.424a14.259 14.259 0 00-2.926-2.45l2.722-2.719a.681.681 0 10-.962-.962l-.012.012a.5.5 0 01-.118.198l-13.27 13.27c-.006.005-.013.007-.018.012a.68.68 0 001.11.74l2.821-2.821a7.662 7.662 0 002.933.639h.205c2.896 0 5.777-2.03 7.52-3.947a1.478 1.478 0 00-.005-1.972zm-4.686 1.851a3.117 3.117 0 01-2.042 2.061 2.926 2.926 0 01-2.11-.13.172.172 0 01-.046-.276l3.784-3.783a.172.172 0 01.277.045c.3.654.349 1.396.137 2.083zM5.014 9.364a.166.166 0 00.042-.163 2.937 2.937 0 01-.12-.79A3.062 3.062 0 017.998 5.35c.268.003.533.042.79.118a.166.166 0 00.163-.043l1.321-1.321a.173.173 0 00-.068-.287 7.087 7.087 0 00-2.206-.339C5.072 3.437 2.146 5.485.385 7.424A1.463 1.463 0 00.38 9.397c.704.77 1.488 1.461 2.34 2.062a.174.174 0 00.222-.02l2.072-2.075z" })));
}

function SvgEye$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.624 7.322C13.86 5.382 10.934 3.33 8 3.372c-2.935-.043-5.86 2.01-7.624 3.95a1.475 1.475 0 000 1.966c1.743 1.92 4.627 3.954 7.516 3.954h.206c2.899 0 5.782-2.034 7.528-3.954a1.475 1.475 0 00-.002-1.966zm-10.692.985a3.068 3.068 0 116.135 0 3.068 3.068 0 01-6.135 0z" }),
        createElement("path", { fill: "currentColor", d: "M6.666 8.306a1.334 1.334 0 102.667 0 1.334 1.334 0 00-2.667 0z" })));
}

function SvgFilter$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.93.368A.667.667 0 0015.332 0H.667a.667.667 0 00-.534 1.067L6 8.949v5.718A1.343 1.343 0 007.333 16c.289 0 .57-.093.8-.267l1.334-1A1.338 1.338 0 0010 13.667V8.949l5.867-7.882a.666.666 0 00.062-.699zM3.61 1.467l2.626 3.5a.333.333 0 01.067.2V6a.333.333 0 01-.6.2l-3.29-4.333a.333.333 0 01.266-.534h.667a.333.333 0 01.264.134z" })));
}

function SvgFlash$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.3 5.6a.866.866 0 00-.322-.334.887.887 0 00-.45-.123h-3.492a.294.294 0 01-.205-.084.283.283 0 01-.085-.202v-4a.847.847 0 00-.17-.508.888.888 0 00-.989-.302.871.871 0 00-.433.324l-6.4 9.143a.847.847 0 00.268 1.22.89.89 0 00.45.123h3.492c.077 0 .15.03.205.084a.283.283 0 01.086.202v4c0 .183.06.361.17.508a.874.874 0 00.702.349.883.883 0 00.72-.371l6.4-9.143A.851.851 0 0014.3 5.6z" })));
}

function SvgForward() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.26 9.578L10.482 13.3a1.442 1.442 0 01-1.612.13 1.613 1.613 0 01-.614-.623 1.806 1.806 0 01-.227-.881v-1.723L4.054 13.3a1.442 1.442 0 01-1.612.13 1.613 1.613 0 01-.615-.623 1.806 1.806 0 01-.227-.881V4.09c0-.31.079-.615.227-.88.148-.265.36-.48.614-.623a1.443 1.443 0 011.61.128L8.03 5.813V4.09c0-.31.078-.615.227-.88.148-.265.36-.48.614-.623a1.443 1.443 0 011.61.128l4.777 3.723c.23.178.417.414.546.687.129.273.196.576.196.883 0 .307-.067.61-.196.883a1.891 1.891 0 01-.546.687h.002z" })));
}

function SvgGamepad$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M.667 1.333h3a1 1 0 011 1v1a.667.667 0 101.333 0v-1A2.333 2.333 0 003.667 0h-3a.667.667 0 100 1.333zM13 5H3a3 3 0 00-3 3v6.613a1.37 1.37 0 00.41.983c.264.26.62.406.99.404h.02c1.299-.017 1.498-.4 2.794-2.907l.482-.93a1.68 1.68 0 011.444-.83h3.72a1.667 1.667 0 011.43.81c.213.409.4.774.568 1.098C13.062 15.576 13.279 16 14.573 16a1.421 1.421 0 001.01-.417 1.401 1.401 0 00.417-.996V8a3 3 0 00-3-3zM4.833 9h-.5A.333.333 0 004 9.333v.5a.5.5 0 01-1 0v-.5A.333.333 0 002.667 9h-.5a.5.5 0 010-1h.5A.333.333 0 003 7.667v-.5a.5.5 0 011 0v.5A.333.333 0 004.333 8h.5a.5.5 0 010 1zm5.834 0a.667.667 0 110-1.333.667.667 0 010 1.333zm1.666 1.333a.667.667 0 110-1.333.667.667 0 010 1.333zm0-2.666a.666.666 0 110-1.333.666.666 0 010 1.333zM14 9a.667.667 0 110-1.333A.667.667 0 0114 9z" })));
}

function SvgGlobeCursor$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M5.783 11.845a.167.167 0 01.098-.227.666.666 0 00-.216-1.29h-.267a.167.167 0 01-.162-.134A10.073 10.073 0 015 7.995a10.15 10.15 0 01.17-1.865.167.167 0 01.163-.134h5.334a.166.166 0 01.163.134c.05.263.092.533.12.827a.667.667 0 101.326-.126 10.372 10.372 0 00-.082-.645.168.168 0 01.096-.177.167.167 0 01.07-.015h1.87a.166.166 0 01.16.118c.086.287.153.58.2.875a.666.666 0 001.317-.2A7.994 7.994 0 0010.203.31a8.005 8.005 0 00-8.271 2.476 7.993 7.993 0 006.066 13.206.656.656 0 00.642-.54c.199-1.014-1.518-.669-2.857-3.606zm-1.92-1.712a.168.168 0 01-.164.2h-1.82a.168.168 0 01-.157-.11 6.583 6.583 0 01-.118-4.107.167.167 0 01.16-.12h1.87a.167.167 0 01.166.192 12.008 12.008 0 00.063 3.945zM5.814 4.67a.167.167 0 01-.154-.23 6.7 6.7 0 012.243-2.928.166.166 0 01.193 0 6.73 6.73 0 012.24 2.921.167.167 0 01-.153.23l-4.369.007zm7.791-.257a.167.167 0 01-.14.257h-1.508a.167.167 0 01-.158-.114 8.764 8.764 0 00-1.162-2.32.167.167 0 01.208-.248 6.772 6.772 0 012.76 2.419v.006zm-8.45-2.434a.167.167 0 01.207.246A8.78 8.78 0 004.198 4.55a.166.166 0 01-.158.115H2.532a.167.167 0 01-.14-.257A6.693 6.693 0 015.154 1.98zM2.62 11.925a.166.166 0 01.133-.267h1.394a.167.167 0 01.156.11 8.572 8.572 0 001.056 1.998.167.167 0 01-.208.247 6.697 6.697 0 01-2.53-2.088H2.62z" }),
        createElement("path", { fill: "currentColor", d: "M15.573 11.192L9.235 8.434a.688.688 0 00-.884.887l2.757 6.33a.584.584 0 00.542.349.719.719 0 00.667-.502l.714-2.3a.168.168 0 01.112-.11l2.276-.69a.715.715 0 00.49-.532.589.589 0 00-.336-.674z" })));
}

function SvgGlobeDownload$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.201 14.583a.335.335 0 00-.227-.146A6.68 6.68 0 015 13.807v-.862a1.631 1.631 0 01.595-1.266c.47-.392.809-.918.967-1.507a2.942 2.942 0 00-.079-1.783 2.974 2.974 0 00-1.097-1.416 3.02 3.02 0 00-1.72-.538H1.512A6.565 6.565 0 012.96 3.604a6.655 6.655 0 012.617-1.832 6.717 6.717 0 016.183.703H9.5c-.487 0-.953.19-1.297.531a1.806 1.806 0 000 2.568c.344.34.81.531 1.296.531a1.72 1.72 0 011.015.34.34.34 0 00.255.06 5.345 5.345 0 012.592.197 5.3 5.3 0 012.185 1.396A.263.263 0 0016 7.92a7.86 7.86 0 00-1.135-4.067A7.966 7.966 0 0011.78.941a8.066 8.066 0 00-8.206.38A7.945 7.945 0 00.781 4.508a7.852 7.852 0 00.768 8.098 7.988 7.988 0 003.345 2.615L5 15.27v-.013a8.03 8.03 0 003 .583.132.132 0 00.121-.082.128.128 0 00-.033-.142 5.332 5.332 0 01-.887-1.034z" }),
        createElement("path", { fill: "currentColor", d: "M11.666 7.419c-.857 0-1.695.251-2.407.723a4.3 4.3 0 00-1.596 1.925 4.251 4.251 0 00-.247 2.48c.167.832.58 1.596 1.186 2.196a4.347 4.347 0 002.22 1.175c.84.165 1.711.08 2.503-.245a4.324 4.324 0 001.945-1.58 4.26 4.26 0 00.73-2.384 4.274 4.274 0 00-1.27-3.033 4.36 4.36 0 00-3.064-1.257zm1.594 4.826l-1.333 1.65a.334.334 0 01-.26.123.34.34 0 01-.261-.123l-1.334-1.65a.331.331 0 01.261-.533h.5a.335.335 0 00.312-.205.326.326 0 00.024-.128v-1.65a.503.503 0 011 0v1.65a.328.328 0 00.208.309.336.336 0 00.13.024h.5a.34.34 0 01.294.188.33.33 0 01-.034.345h-.007z" })));
}

function SvgGlobeRefresh$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.179 12.472a.68.68 0 00-.51.032.659.659 0 00-.337.375 2.668 2.668 0 01-.745 1.117c-.34.305-.754.52-1.203.626a2.78 2.78 0 01-1.361-.024 2.74 2.74 0 01-1.18-.665.327.327 0 01-.103-.233.322.322 0 01.098-.234l1.032-1.01a.326.326 0 00.072-.356.33.33 0 00-.307-.202H7.667a.337.337 0 00-.236.095.323.323 0 00-.098.231v2.912c0 .065.02.128.056.182a.332.332 0 00.342.139.335.335 0 00.17-.09l.528-.517a.338.338 0 01.47 0 4.076 4.076 0 001.754 1.002 4.14 4.14 0 002.03.043 4.083 4.083 0 001.797-.927 3.969 3.969 0 001.114-1.664.641.641 0 00-.19-.704.672.672 0 00-.225-.128z" }),
        createElement("path", { fill: "currentColor", d: "M5.963 15.416a.3.3 0 00.34-.152c.02-.04.03-.083.03-.127v-.733a.323.323 0 00-.066-.196.334.334 0 00-.172-.118A6.73 6.73 0 015 13.666v-.852a1.615 1.615 0 01.595-1.252c.472-.388.81-.909.97-1.492.159-.582.131-1.2-.08-1.766A2.948 2.948 0 005.388 6.9a3.043 3.043 0 00-1.72-.531H1.51a6.475 6.475 0 011.449-2.804 6.656 6.656 0 012.618-1.813 6.78 6.78 0 016.184.697H9.5a1.849 1.849 0 00-1.226.563 1.78 1.78 0 00-.5 1.233c0 .459.18.9.5 1.234.32.334.759.535 1.226.563a1.758 1.758 0 011.258.547 5.07 5.07 0 013.687.82.222.222 0 00.279-.024 1.327 1.327 0 01.943-.383.26.26 0 00.192-.087.25.25 0 00.06-.198 7.76 7.76 0 00-1.622-3.715 7.988 7.988 0 00-3.295-2.43 8.152 8.152 0 00-4.091-.5 8.088 8.088 0 00-3.802 1.564 7.86 7.86 0 00-2.503 3.21 7.697 7.697 0 00-.539 4.007 7.756 7.756 0 001.568 3.737 7.981 7.981 0 003.26 2.475l.105.052v-.014c.314.124.636.228.963.312z" }),
        createElement("path", { fill: "currentColor", d: "M16 8.313a.323.323 0 00-.206-.302.34.34 0 00-.363.07l-.566.555a.338.338 0 01-.468.004 4.084 4.084 0 00-1.757-.99 4.144 4.144 0 00-2.026-.035 4.091 4.091 0 00-1.791.928 3.976 3.976 0 00-1.112 1.661.642.642 0 00.033.5.662.662 0 00.383.33c.167.056.35.045.51-.032a.658.658 0 00.336-.375c.148-.426.402-.808.74-1.112a2.744 2.744 0 011.195-.626 2.78 2.78 0 011.354.015c.443.117.85.341 1.18.652a.325.325 0 01.08.36.325.325 0 01-.073.107l-.99.97a.326.326 0 00-.071.355.336.336 0 00.307.202h2.972a.337.337 0 00.235-.096.325.325 0 00.098-.23V8.313z" })));
}

function SvgGraduationCap() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.666 4.836l-7.468-2.8a.563.563 0 00-.394 0l-7.468 2.8a.528.528 0 00-.247.19.484.484 0 00-.089.288v3.93c0 .2.084.393.234.535.15.141.354.221.566.221.213 0 .416-.08.566-.221a.735.735 0 00.234-.535V6.907c0-.081.021-.16.06-.232a.514.514 0 01.166-.18.552.552 0 01.485-.063l5.51 1.837a.535.535 0 00.354 0l7.468-2.489a.532.532 0 00.256-.18.486.486 0 00.011-.575.53.53 0 00-.248-.19h.004z" }),
        createElement("path", { fill: "currentColor", d: "M12.259 8.03L8.182 9.404c-.12.04-.25.04-.37 0L3.74 8.03a.583.583 0 00-.506.067.537.537 0 00-.172.189.508.508 0 00-.062.243v2.642c0 .11.036.216.102.305.067.09.16.157.27.193l3.334 1.12c.837.281 1.75.281 2.588 0l3.335-1.12a.553.553 0 00.269-.193.51.51 0 00.102-.305V8.53a.507.507 0 00-.062-.243.538.538 0 00-.172-.189.572.572 0 00-.506-.067h-.001z" })));
}

function SvgGrid() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("rect", { width: 7.467, height: 7.467, fill: "currentColor", rx: 2 }),
        createElement("rect", { width: 7.467, height: 7.467, y: 8.533, fill: "currentColor", rx: 2 }),
        createElement("rect", { width: 7.467, height: 7.467, x: 8.533, y: 8.533, fill: "currentColor", rx: 2 }),
        createElement("rect", { width: 7.467, height: 7.467, x: 8.533, fill: "currentColor", rx: 2 })));
}

function SvgGroupAdd$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.468 3.353a.17.17 0 00.17-.17v-.51a.51.51 0 00-.51-.511H5.277l-.123-.052-.914-.946A1.192 1.192 0 003.382.8H1.386A1.387 1.387 0 000 2.186v8.657a1.19 1.19 0 001.191 1.191h.17a.17.17 0 00.17-.17V5.396a2.043 2.043 0 012.043-2.043h10.894z" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.915 4.545h10.894A1.193 1.193 0 0116 5.736v8.17a1.193 1.193 0 01-1.191 1.192H3.915a1.192 1.192 0 01-1.192-1.192v-8.17a1.193 1.193 0 011.192-1.191zm5.719 2.587c.395 0 .715.32.715.715v1.43h1.43a.715.715 0 010 1.43h-1.43v1.43a.715.715 0 01-1.43 0v-1.43H7.49a.715.715 0 110-1.43h1.43v-1.43c0-.395.32-.715.715-.715z", clipRule: "evenodd" })));
}

function SvgHand() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.471 4.357a1.186 1.186 0 00-1.072-.162.168.168 0 00-.116.158v3.28a.333.333 0 11-.666 0V3.3a1.17 1.17 0 00-1.551-1.105.167.167 0 00-.116.158v4.28a.333.333 0 01-.667 0V1.967A1.168 1.168 0 008.117.8c-.134 0-.267.023-.392.071a.166.166 0 00-.108.156v5.606a.333.333 0 01-.667 0V3.3a1.167 1.167 0 00-2.333 0v6.667a.169.169 0 01-.122.162.164.164 0 01-.182-.067l-1.414-1.98a1.157 1.157 0 10-1.885 1.34l3.647 5.146a2.17 2.17 0 001.769.91h3.357a4.172 4.172 0 004.163-4.166V5.3a1.172 1.172 0 00-.479-.943z" })));
}

function SvgHeartbeatSquare() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.25 1H2.75A1.75 1.75 0 001 2.75v10.5A1.75 1.75 0 002.75 15h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM2.75 2.167h10.5a.583.583 0 01.583.583v5.56H12.29c-.392 0-.532-.239-.88-1.185-.061-.167-.124-.34-.195-.515a.875.875 0 00-1.663.121l-.924 3.85-1.523-7.423a.88.88 0 00-.855-.7.875.875 0 00-.859.7 137.94 137.94 0 00-.46 2.323c-.506 2.657-.608 2.832-1.088 2.832H2.167V2.75a.583.583 0 01.583-.583zm10.5 11.666H2.75a.583.583 0 01-.583-.583V9.476h1.676c1.517 0 1.724-1.109 2.235-3.78.055-.276.172-.897.172-.897l1.498 7.304a.87.87 0 00.842.7h.015a.87.87 0 00.853-.674l1.01-4.204c.313.792.746 1.551 1.824 1.551h1.541v3.774a.583.583 0 01-.583.583z" })));
}

function SvgImage$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M.857 11.8a.837.837 0 01-.606-.264A.923.923 0 010 10.9V3.1c0-.557.212-1.09.586-1.484A1.955 1.955 0 012 1h10.286c.227 0 .445.095.606.264.16.168.25.397.25.636s-.09.468-.25.636a.837.837 0 01-.606.264H2a.279.279 0 00-.202.088.308.308 0 00-.084.212v7.8c0 .239-.09.468-.25.636a.837.837 0 01-.607.264z" }),
        createElement("path", { fill: "currentColor", d: "M14.571 4H4.857c-.378 0-.742.159-1.01.44A1.541 1.541 0 003.43 5.5v8.4c0 .398.15.779.419 1.06.268.281.63.44 1.01.44h9.713c.38 0 .742-.159 1.01-.44s.418-.662.419-1.06V5.5c0-.398-.151-.779-.42-1.06A1.397 1.397 0 0014.572 4zM14 5.8c.076 0 .149.032.202.088a.308.308 0 01.084.212v6.3l-2.997-2.947a2.298 2.298 0 00-1.575-.633c-.58 0-1.142.226-1.575.633L5.143 12.4V6.1c0-.08.03-.156.084-.212a.279.279 0 01.202-.088H14z" })));
}

function SvgImages() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8.533 5.466A.582.582 0 007.4 5.441L6.333 7.777a.167.167 0 01-.28.037l-.728-.876a.775.775 0 00-1.311.102L2.357 9.8a.333.333 0 00.286.504h7.332a.334.334 0 00.31-.457l-1.752-4.38zM2.643 3.666a1.333 1.333 0 102.666 0 1.333 1.333 0 00-2.666 0z" }),
        createElement("path", { fill: "currentColor", d: "M11.333 12.666a1.334 1.334 0 001.333-1.333v-10A1.333 1.333 0 0011.333 0h-10A1.333 1.333 0 000 1.333v10a1.333 1.333 0 001.333 1.333h10zm-10-11a.333.333 0 01.334-.333h9.332a.333.333 0 01.334.334v9.332a.333.333 0 01-.334.334H1.667a.333.333 0 01-.334-.334V1.667z" }),
        createElement("path", { fill: "currentColor", d: "M15.994 6.156a1.334 1.334 0 00-1.208-1.448l-.667-.06A.666.666 0 1014 5.976l.334.029a.333.333 0 01.301.363l-.726 7.964a.333.333 0 01-.362.302l-8.962-.816a.667.667 0 10-.118 1.327l9.294.85a1.335 1.335 0 001.45-1.208l.784-8.63z" })));
}

function SvgKeyboard() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.6 5.062H5v-.81a.611.611 0 01.37-.562.59.59 0 01.23-.046h4.8c.69 0 1.35-.277 1.837-.77A2.652 2.652 0 0013 1.012a1.02 1.02 0 00-.293-.716.994.994 0 00-1.414 0 1.02 1.02 0 00-.293.716.61.61 0 01-.175.428.595.595 0 01-.422.178h-4.8a2.572 2.572 0 00-1.84.769A2.636 2.636 0 003 4.248v.81h-.6a2.374 2.374 0 00-1.698.714A2.433 2.433 0 000 7.492v6.077c0 .645.253 1.263.703 1.72.45.455 1.06.711 1.697.711h11.2c.636 0 1.247-.256 1.697-.712.45-.456.703-1.074.703-1.719V7.493a2.458 2.458 0 00-.703-1.719 2.399 2.399 0 00-1.697-.712zm-11 8.507a.991.991 0 01-.556-.17 1.025 1.025 0 01-.152-1.558.996.996 0 011.09-.22c.183.077.34.206.45.373a1.022 1.022 0 01-.125 1.279.993.993 0 01-.707.296zm0-4.05a.991.991 0 01-.556-.171 1.025 1.025 0 01-.152-1.558.996.996 0 011.09-.22c.183.077.34.206.45.373a1.022 1.022 0 01-.125 1.279.994.994 0 01-.707.296zm7.2-2.026c.198 0 .391.06.556.17a1.025 1.025 0 01.151 1.558.996.996 0 01-1.09.22 1.003 1.003 0 01-.448-.373 1.022 1.022 0 01.124-1.279.994.994 0 01.707-.296zm-3.6 0c.198 0 .391.06.556.17a1.025 1.025 0 01.152 1.558.996.996 0 01-1.09.22 1.003 1.003 0 01-.45-.373 1.022 1.022 0 01.125-1.279.994.994 0 01.707-.296zm4 6.076H5.8a.993.993 0 01-.707-.296 1.02 1.02 0 010-1.432.994.994 0 01.707-.297h4.4c.265 0 .52.107.707.296a1.02 1.02 0 010 1.433.993.993 0 01-.707.296zm3.2 0a.991.991 0 01-.556-.17 1.025 1.025 0 01-.152-1.558.996.996 0 011.09-.22c.183.077.34.206.45.373a1.021 1.021 0 01-.125 1.279.993.993 0 01-.707.296zm0-4.05a.991.991 0 01-.556-.171 1.025 1.025 0 01-.152-1.558.996.996 0 011.09-.22c.183.077.34.206.45.373a1.022 1.022 0 01-.125 1.279.994.994 0 01-.707.296z" })));
}

function SvgLamp() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M10.463 14.703H9.13a.338.338 0 01-.236-.095.32.32 0 01-.097-.23v-2.917a.32.32 0 00-.098-.23.338.338 0 00-.236-.094h-.666a.338.338 0 00-.236.095.32.32 0 00-.098.23v2.917a.32.32 0 01-.097.23.338.338 0 01-.236.094H5.797a.676.676 0 00-.472.19.64.64 0 000 .917c.125.122.295.19.472.19h4.667a.676.676 0 00.47-.19.64.64 0 000-.917.676.676 0 00-.47-.19z" }),
        createElement("path", { fill: "currentColor", d: "M12.507 2.01a.322.322 0 00-.113-.197.339.339 0 00-.216-.078H9.13a.338.338 0 01-.236-.095.32.32 0 01-.097-.23v-.324a.64.64 0 00-.195-.458.676.676 0 00-.943 0 .64.64 0 00-.196.458v.325a.32.32 0 01-.097.229.338.338 0 01-.236.095H4.083a.339.339 0 00-.217.078c-.06.05-.1.12-.113.197l-1.23 7.78a.316.316 0 00.076.261.332.332 0 00.253.113h6.945a.34.34 0 01.236.095.32.32 0 01.097.23v.972c0 .172.07.337.195.458a.676.676 0 00.943 0 .64.64 0 00.195-.458v-.973a.32.32 0 01.098-.229.338.338 0 01.236-.095h1.611a.342.342 0 00.253-.113.32.32 0 00.077-.26L12.507 2.01z" })));
}

function SvgLockAlt() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.983 6.333h-.5V4.5a4.5 4.5 0 10-9 0v1.833h-.5A1.333 1.333 0 001.65 7.667v7A1.333 1.333 0 002.983 16h10a1.333 1.333 0 001.334-1.333v-7a1.333 1.333 0 00-1.334-1.334zm-6.333 4a1.333 1.333 0 112 1.149V13a.667.667 0 11-1.333 0v-1.518a1.33 1.33 0 01-.667-1.149zM5.15 4.5a2.833 2.833 0 115.667 0V6a.333.333 0 01-.334.333h-5A.333.333 0 015.15 6V4.5z" })));
}

function SvgLockOpenAlt() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M3.016 6.333h.5V4.5a4.5 4.5 0 018.812-1.293.832.832 0 01-.883 1.068.833.833 0 01-.714-.59 2.834 2.834 0 00-5.548.815V6a.333.333 0 00.333.333h7.5a1.333 1.333 0 011.334 1.333v7A1.334 1.334 0 0113.017 16h-10a1.334 1.334 0 01-1.334-1.333v-7a1.333 1.333 0 011.333-1.334zm6.334 4a1.333 1.333 0 10-2 1.149V13a.667.667 0 101.333 0v-1.518a1.33 1.33 0 00.667-1.149z" })));
}

function SvgLockOpen$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.842 1.902a1.94 1.94 0 00-1.94 1.94v2.891a.951.951 0 01-1.902 0V3.842a3.842 3.842 0 117.684 0v2.175a.951.951 0 01-1.902 0V3.842a1.94 1.94 0 00-1.94-1.94z", clipRule: "evenodd" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.61 14.217a6.086 6.086 0 118.607-8.607 6.086 6.086 0 01-8.607 8.607zm5.28-5.242a.951.951 0 00-1.902 0v1.928a.951.951 0 001.902 0V8.975z", clipRule: "evenodd" })));
}

function SvgLock$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 17" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 2.823A2.388 2.388 0 005.613 5.21v1.67a.937.937 0 01-1.875 0V5.21a4.262 4.262 0 018.524 0v1.67a.937.937 0 11-1.875 0V5.21A2.387 2.387 0 008 2.823z", clipRule: "evenodd" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.757 15.128a6 6 0 118.486-8.485 6 6 0 01-8.486 8.485zm5.18-5.168a.937.937 0 00-1.874 0v1.9a.937.937 0 101.875 0v-1.9z", clipRule: "evenodd" })));
}

function SvgManStar() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M4.667 6.667a3.334 3.334 0 100-6.667 3.334 3.334 0 000 6.667zM2.733 2.838a.333.333 0 01.494-.2c.725.45 1.56.69 2.413.695.207 0 .415-.016.62-.047a.333.333 0 01.378.377 2 2 0 01-3.971-.33c0-.167.022-.333.066-.495z" }),
        createElement("path", { fill: "currentColor", d: "M6.47 10.127A1.827 1.827 0 018.173 9a.28.28 0 00.2-.476 4.98 4.98 0 00-8.36 2.048.333.333 0 00.32.428H6.01a.333.333 0 00.333-.312c.011-.192.054-.382.127-.56zM13.825 15.885a.849.849 0 001.004-.11.837.837 0 00.21-.967l-.816-1.874a.165.165 0 01.042-.19l1.476-1.316a.84.84 0 00.2-.918.821.821 0 00-.78-.51h-1.667a.167.167 0 01-.153-.1l-.897-2.078-.008-.018a.862.862 0 00-1.545.018L9.994 9.9a.166.166 0 01-.153.1H8.174a.82.82 0 00-.777.507.848.848 0 00.213.934l1.462 1.303a.166.166 0 01.042.19l-.816 1.874a.837.837 0 00.21.968.857.857 0 001.004.11l2.074-1.168a.167.167 0 01.164 0l2.075 1.168z" })));
}

function SvgMapMarkerInfo() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 0C4.14 0 1 2.841 1 6.333c0 3.833 4.867 8.191 6.36 9.435a1 1 0 001.28 0C10.134 14.523 15 10.164 15 6.333 15 2.841 11.86 0 8 0zm0 2a1 1 0 110 2 1 1 0 010-2zm2.5 8.167a.667.667 0 01-.667.666H7.167a.666.666 0 110-1.333H7.5a.333.333 0 00.333-.333V6.5a.333.333 0 00-.333-.333h-.333a.667.667 0 110-1.334h.666a1.333 1.333 0 011.334 1.334v3A.333.333 0 009.5 9.5h.333a.667.667 0 01.667.667z" })));
}

function SvgMapMarkerShine() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 16" },
        createElement("path", { fill: "currentColor", d: "M9 4a4.789 4.789 0 00-4.767 5.013c0 2.96 3.04 5.767 4.347 6.834A.627.627 0 009 16a.615.615 0 00.42-.153c1.307-1.067 4.347-3.874 4.347-6.834A4.788 4.788 0 009 4zm0 7a2.333 2.333 0 110-4.666A2.333 2.333 0 019 11zM3.876 4.333L2.209 3.59a.834.834 0 10-.752 1.487l1.667.744a.833.833 0 10.752-1.488zM5.883 3.123a.833.833 0 001.562-.579l-.83-2a.833.833 0 00-1.563.58l.83 2zM16.91 3.957a.833.833 0 00-1.12-.366l-1.666.742a.833.833 0 10.753 1.487l1.666-.743a.833.833 0 00.367-1.12zM11.046 3.615a.831.831 0 001.071-.492l.831-2a.833.833 0 00-1.563-.579l-.83 2a.832.832 0 00.491 1.07z" })));
}

function SvgMicrophone() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.833 10.828c.796 0 1.558-.307 2.12-.853a2.868 2.868 0 00.88-2.056V3.394c0-.772-.316-1.512-.878-2.057A3.048 3.048 0 007.833.485c-.795 0-1.558.306-2.121.852a2.865 2.865 0 00-.879 2.057v4.525c.001.771.318 1.51.88 2.056a3.052 3.052 0 002.12.853z" }),
        createElement("path", { fill: "currentColor", d: "M12.5 5.657a.677.677 0 00-.471.189.637.637 0 00-.196.457V7.92a3.82 3.82 0 01-1.171 2.743 4.065 4.065 0 01-2.829 1.136 4.064 4.064 0 01-2.828-1.136A3.82 3.82 0 013.833 7.92V6.303a.637.637 0 00-.195-.457.677.677 0 00-.943 0 .637.637 0 00-.195.457V7.92a5.089 5.089 0 001.289 3.367 5.388 5.388 0 003.236 1.745c.04.006.076.026.101.055.026.03.04.066.04.105v2.163c0 .171.07.335.196.457a.677.677 0 00.943 0 .637.637 0 00.195-.457V13.19c0-.039.014-.076.04-.105a.168.168 0 01.101-.055 5.388 5.388 0 003.237-1.745 5.089 5.089 0 001.289-3.367V6.303a.637.637 0 00-.196-.457.677.677 0 00-.471-.19z" })));
}

function SvgMinusSquare$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm1.571 6.7a1.3 1.3 0 000 2.6h6.858a1.3 1.3 0 000-2.6H4.57z", clipRule: "evenodd" })));
}

function SvgMobileWifi() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.833 7.65v4.683a.667.667 0 01-.666.667H2.5a.667.667 0 01-.667-.667V5a.667.667 0 01.667-.667h3.237a.164.164 0 00.163-.186 6.127 6.127 0 01-.052-1.302.165.165 0 00-.163-.178H2.167A1.667 1.667 0 00.5 4.333v10A1.667 1.667 0 002.167 16H7.5a1.668 1.668 0 001.667-1.667V8.161a.162.162 0 00-.107-.152 5 5 0 01-.966-.494.166.166 0 00-.26.135zM9.667 5.843a1.167 1.167 0 102.333 0 1.167 1.167 0 00-2.333 0zM14.914 1.428a6.545 6.545 0 00-8.161 0 .666.666 0 10.828 1.045 5.217 5.217 0 016.505 0 .675.675 0 00.933-.109.667.667 0 00-.105-.936z" }),
        createElement("path", { fill: "currentColor", d: "M13.264 3.31a3.748 3.748 0 00-4.862 0 .667.667 0 00-.077.94.678.678 0 00.939.077 2.391 2.391 0 013.138 0 .668.668 0 10.862-1.016z" })));
}

function SvgMusic$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.267 1.5A1.501 1.501 0 0012.2.11l-6 2.455a1.494 1.494 0 00-.933 1.388v6.545a.166.166 0 01-.167.167h-.833a2.667 2.667 0 000 5.333 2.734 2.734 0 002.666-2.667v-6.16a.165.165 0 01.104-.155l5.333-2.182a.167.167 0 01.23.154v2.847a.167.167 0 01-.167.166H11.6a2.667 2.667 0 000 5.334 2.733 2.733 0 002.667-2.667V1.5zM7.163 5.165a.167.167 0 01-.23-.154V4.29a.333.333 0 01.208-.309l5-2.046a.333.333 0 01.459.309v.584a.166.166 0 01-.103.154L7.163 5.166z" })));
}

function SvgPageNext() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.882 4.226a.666.666 0 00-.334-.204.705.705 0 00-.398.014.657.657 0 00-.318.225.588.588 0 00-.12.354v2.46a.15.15 0 01-.05.11.173.173 0 01-.117.046h-6.76a.173.173 0 01-.117-.046.15.15 0 01-.049-.11V4.923c0-.204-.087-.4-.241-.544a.856.856 0 00-.584-.225.856.856 0 00-.583.225.744.744 0 00-.241.544v6.156c0 .204.087.4.241.544a.856.856 0 00.583.225.856.856 0 00.584-.225.744.744 0 00.241-.544V8.925a.15.15 0 01.049-.11.173.173 0 01.118-.046h6.76c.043 0 .086.017.117.046a.15.15 0 01.049.11v2.46c0 .127.042.25.12.354.079.104.19.182.318.225a.707.707 0 00.398.014.666.666 0 00.334-.204l2.97-3.384A.59.59 0 0016 8a.59.59 0 00-.149-.39l-2.969-3.384zM1.65 11.077V4.92a.724.724 0 00-.055-.301.766.766 0 00-.178-.258.83.83 0 00-.27-.172.877.877 0 00-.913.172.766.766 0 00-.178.258.724.724 0 00-.055.3v6.157a.724.724 0 00.055.301c.04.096.1.183.178.257a.829.829 0 00.27.173.876.876 0 00.913-.173.766.766 0 00.178-.257.724.724 0 00.056-.301z" })));
}

function SvgPagePrevious() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M3.118 11.774c.086.099.203.17.334.204.131.034.27.029.399-.014a.658.658 0 00.317-.225.588.588 0 00.12-.355v-2.46a.15.15 0 01.05-.11.173.173 0 01.117-.045h6.76c.044 0 .086.017.118.046a.15.15 0 01.048.11v2.152c0 .204.087.4.242.544a.855.855 0 00.583.225.855.855 0 00.583-.225.744.744 0 00.242-.544V4.92c0-.204-.087-.4-.242-.544a.856.856 0 00-.583-.225.856.856 0 00-.583.225.744.744 0 00-.242.544v2.154a.15.15 0 01-.048.11.173.173 0 01-.118.046h-6.76a.173.173 0 01-.117-.046.15.15 0 01-.05-.11v-2.46a.588.588 0 00-.12-.354.657.657 0 00-.317-.225.705.705 0 00-.399-.014.666.666 0 00-.334.204L.15 7.61A.59.59 0 000 8c0 .142.053.28.15.39l2.968 3.384zM14.35 4.923v6.156a.723.723 0 00.056.301c.04.096.1.184.177.258a.828.828 0 00.27.172.876.876 0 00.914-.172.766.766 0 00.177-.258.722.722 0 00.056-.3V4.922a.722.722 0 00-.056-.301.765.765 0 00-.177-.257.83.83 0 00-.27-.173.877.877 0 00-.914.173.765.765 0 00-.177.257.723.723 0 00-.056.301z" })));
}

function SvgPaintRoller() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.333 1.667H14.5a.166.166 0 00-.167.166v1A.167.167 0 0014.5 3h.833a.666.666 0 100-1.333zM2 1.667a2 2 0 00-2 2V5a2 2 0 002 2h5.333A.667.667 0 018 7.667v.216a.167.167 0 00.2.164c.308-.063.625-.063.933 0a.167.167 0 00.2-.164v-.216a2 2 0 00-2-2H2A.667.667 0 011.333 5V3.667A.667.667 0 012 3h.167a.167.167 0 00.166-.167v-1a.167.167 0 00-.166-.166H2z" }),
        createElement("path", { fill: "currentColor", d: "M3 0h10.667v4.667H3V0zM7 10.333V15a1 1 0 001 1h1.333a1 1 0 001-1v-4.667a1.667 1.667 0 00-3.333 0z" })));
}

function SvgParachuteBox() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.997 5.84c-.44-1.666-1.466-3.147-2.916-4.206A8.63 8.63 0 008 0a8.63 8.63 0 00-5.082 1.634C1.468 2.694.442 4.174.003 5.841a1.28 1.28 0 00.08.537c.066.172.168.33.3.465l3.675 2.855a.168.168 0 01.061.094.16.16 0 01-.014.11.923.923 0 00-.107.431v2.743c0 .034.01.067.03.095a.18.18 0 00.083.063.195.195 0 00.199-.037l3.836-3.575a.167.167 0 00.05-.088.16.16 0 00-.01-.098.173.173 0 00-.068-.076.192.192 0 00-.102-.029H5.837a.17.17 0 01-.074-.017.157.157 0 01-.057-.047.6.6 0 00-.11-.114L2.777 6.966a.17.17 0 01-.059-.087.159.159 0 01.005-.102.172.172 0 01.066-.081.194.194 0 01.105-.03H13.11c.037 0 .074.01.104.03.031.02.054.048.067.08a.159.159 0 01.005.103.17.17 0 01-.058.086c-.803.629-2.608 2.05-2.929 2.322a.19.19 0 01-.123.044h-.132a.194.194 0 00-.13.05L4.05 14.848a.166.166 0 00-.054.12V15c0 .265.114.52.315.707.202.187.475.293.76.293h1.52a.19.19 0 00.13-.05l5.097-4.746a.167.167 0 00.053-.12v-.748a.904.904 0 00-.08-.366.16.16 0 01-.008-.105.168.168 0 01.06-.09l3.773-2.923c.133-.136.236-.295.302-.47.065-.173.092-.358.079-.541zM8.498 15.707a.167.167 0 00-.05.087.16.16 0 00.01.098.173.173 0 00.068.077.2.2 0 00.102.028h2.17c.285 0 .557-.105.758-.292a.968.968 0 00.316-.705v-2.024a.162.162 0 00-.03-.095.18.18 0 00-.082-.063.196.196 0 00-.106-.01.187.187 0 00-.093.047l-3.063 2.852z" })));
}

function SvgPause() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2 4.5A2.5 2.5 0 014.5 2h.333a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5H4.5A2.5 2.5 0 012 11.5v-7zM8.667 4.5a2.5 2.5 0 012.5-2.5h.333A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-.333a2.5 2.5 0 01-2.5-2.5v-7z" })));
}

function SvgPenDraw$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.424 14.23H.857a.856.856 0 100 1.714h12.567a.856.856 0 100-1.714zM15.493 1.698L14.28.485a1.755 1.755 0 00-2.423 0L4.194 8.15a.572.572 0 00-.158.305l-.609 3.435a.572.572 0 00.67.664l3.434-.606a.571.571 0 00.305-.159l7.662-7.665a1.715 1.715 0 000-2.424l-.005-.002z" })));
}

function SvgPenWrite() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.24.372a1.509 1.509 0 00-1.623.076.599.599 0 00-.11-.098l-.22-.126A1.676 1.676 0 0011 .838l-1.882 3.26a.667.667 0 101.155.667l1.881-3.261a.343.343 0 01.467-.126l.217.127-4.131 7.168a.756.756 0 00.277 1.033l1.31.756a.757.757 0 001.034-.277l4.47-7.745A1.511 1.511 0 0015.24.372zM10.389 11.298l-2.055-1.185a.334.334 0 00-.499.261l-.233 2.777a.333.333 0 00.345.36.337.337 0 00.176-.06l2.287-1.591a.334.334 0 00-.024-.562h.003zM6.507 14.466A4.11 4.11 0 014.197 14a4.433 4.433 0 00-1.573-.44 3.613 3.613 0 00-2.426.929.667.667 0 10.938.948 2.258 2.258 0 011.488-.543c.372.062.733.176 1.071.34a6.389 6.389 0 002.384.611c.243 0 .485-.026.722-.079a.665.665 0 00.398-1.034.667.667 0 00-.691-.266h-.001z" })));
}

function SvgPlayCircle$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm3.219 8.596l-4.921 2.46a.666.666 0 01-.965-.596V5.539a.667.667 0 01.964-.597L11.22 7.4a.666.666 0 010 1.195v.001z" })));
}

function SvgPlay() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.484 6.42L6.866 1.708A2.442 2.442 0 004.28 1.54a2.544 2.544 0 00-1.328 2.254v9.427a2.548 2.548 0 001.328 2.255 2.442 2.442 0 002.586-.167l6.618-4.714a2.576 2.576 0 00.782-3.258 2.576 2.576 0 00-.782-.915z" })));
}

function SvgPlusCircle$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M0 8a8 8 0 108-8 8.009 8.009 0 00-8 8zm3.478-.348a.696.696 0 01.696-.695h2.609a.174.174 0 00.174-.174v-2.61a.696.696 0 01.695-.695h.696a.696.696 0 01.695.696v2.609a.174.174 0 00.174.174h2.61a.696.696 0 01.695.695v.696a.696.696 0 01-.696.695H9.217a.174.174 0 00-.174.174v2.61a.696.696 0 01-.695.695h-.696a.696.696 0 01-.695-.696V9.217a.174.174 0 00-.174-.174h-2.61a.696.696 0 01-.695-.695v-.696z" })));
}

function SvgPlusSquare$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12 0H4a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4zm-.571 9.143H9.143v2.286a1.143 1.143 0 11-2.286 0V9.143H4.571a1.143 1.143 0 110-2.286h2.286V4.571a1.143 1.143 0 112.286 0v2.286h2.286a1.143 1.143 0 110 2.286z" })));
}

function SvgPreview() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.213 6.923A7.58 7.58 0 008 4a7.58 7.58 0 00-5.213 2.923 1.62 1.62 0 000 2.109A7.501 7.501 0 008 12a7.5 7.5 0 005.213-2.968 1.62 1.62 0 000-2.109zm-1.44 1.307A5.726 5.726 0 018 10.4a5.726 5.726 0 01-3.765-2.17.398.398 0 010-.536A5.827 5.827 0 018 5.6a5.827 5.827 0 013.758 2.094.398.398 0 01.007.536h.008z" }),
        createElement("path", { fill: "currentColor", d: "M6.8 8a1.2 1.2 0 102.4 0 1.2 1.2 0 00-2.4 0zM1.2 5.477a1.2 1.2 0 01-1.2-1.2v-1.97A2.31 2.31 0 012.307 0h1.97a1.2 1.2 0 010 2.4H2.728a.402.402 0 00-.4.42L2.4 4.276a1.2 1.2 0 01-1.2 1.2zM14.8 5.477a1.2 1.2 0 01-1.2-1.2V2.728a.403.403 0 00-.42-.4l-1.457.072a1.2 1.2 0 110-2.4h1.97A2.31 2.31 0 0116 2.307v1.97a1.2 1.2 0 01-1.2 1.2zM4.277 16h-1.97A2.31 2.31 0 010 13.693v-1.97a1.2 1.2 0 112.4 0v1.557a.402.402 0 00.42.4l1.457-.08a1.2 1.2 0 110 2.4zM13.693 16h-1.97a1.2 1.2 0 110-2.4h1.557a.404.404 0 00.4-.42l-.08-1.457a1.2 1.2 0 112.4 0v1.97A2.31 2.31 0 0113.693 16z" })));
}

function SvgProjector() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M16 11.4V6.733a1 1 0 00-1-1h-.17a.166.166 0 00-.166.172v.162a4.667 4.667 0 01-9.333 0v-.162a.166.166 0 00-.162-.172H1a1 1 0 00-1 1V11.4a1 1 0 001 1h14a1 1 0 001-1zM2.333 9.567a.5.5 0 11-1 0V7.9a.5.5 0 011 0v1.667zm2 0a.5.5 0 11-1 0V7.9a.5.5 0 011 0v1.667zM1 13.733a.667.667 0 101.333 0v-.5a.166.166 0 00-.166-.166h-1a.165.165 0 00-.154.102.166.166 0 00-.013.064v.5zM13.667 13.733a.667.667 0 101.333 0v-.5a.167.167 0 00-.167-.166h-1a.164.164 0 00-.118.048.166.166 0 00-.048.118v.5z" }),
        createElement("path", { fill: "currentColor", d: "M10 9.733A3.667 3.667 0 1010 2.4a3.667 3.667 0 000 7.333zm0-6A2.333 2.333 0 1110 8.4a2.333 2.333 0 010-4.667z" })));
}

function SvgSave() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M16 2.4A2.4 2.4 0 0013.6 0H6.262a2.418 2.418 0 00-1.696.702L.702 4.566A2.384 2.384 0 000 6.262V13.6A2.4 2.4 0 002.4 16h11.2a2.4 2.4 0 002.4-2.4V2.4zm-6.4 0a.8.8 0 011.6 0V4a.8.8 0 01-1.6 0V2.4zm3.2 10.8a.4.4 0 01-.4.4H3.6a.4.4 0 01-.4-.4V8.8A.8.8 0 014 8h8a.8.8 0 01.8.8v4.4z" })));
}

function SvgSearch$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M15.61 13.731l-3.095-3.096a6.84 6.84 0 00-1.348-9.084A6.83 6.83 0 00.008 6.503 6.84 6.84 0 005.832 13.6a6.83 6.83 0 004.799-1.08l3.095 3.096a1.349 1.349 0 001.884 0 1.334 1.334 0 000-1.885zM6.84 2.008a4.828 4.828 0 014.462 2.983 4.835 4.835 0 01-3.52 6.59 4.828 4.828 0 01-4.96-2.055A4.835 4.835 0 016.84 2.008z" })));
}

function SvgShare() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11.644 2.17a.465.465 0 00-.24-.156.435.435 0 00-.278.02.48.48 0 00-.22.187.542.542 0 00-.083.29V4.3a.267.267 0 01-.069.18.226.226 0 01-.166.076H5.534c-1.466 0-2.871.632-3.909 1.756C.588 7.436.003 8.962 0 10.552a6.235 6.235 0 00.867 3.212.486.486 0 00.2.19.437.437 0 00.502-.077.517.517 0 00.145-.24c.252-.854.746-1.6 1.412-2.13a3.708 3.708 0 012.295-.822h5.167a.22.22 0 01.09.02.233.233 0 01.077.056.258.258 0 01.068.181v1.788c0 .104.029.205.083.29a.48.48 0 00.22.188.436.436 0 00.278.02.465.465 0 00.24-.155l4.235-5.11A.536.536 0 0016 7.622a.536.536 0 00-.12-.342l-4.236-5.11z" })));
}

function SvgStickyNote() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.667 0H1.333A1.333 1.333 0 000 1.333v13.334A1.333 1.333 0 001.333 16h9.334c.177 0 .346-.07.471-.195l4.667-4.667a.667.667 0 00.195-.471V1.333A1.334 1.334 0 0014.667 0zM1.333 1.667a.333.333 0 01.334-.334h12.666a.333.333 0 01.334.334V10a.333.333 0 01-.334.333h-2.666a1.333 1.333 0 00-1.334 1.334v2.666a.333.333 0 01-.333.334H1.667a.333.333 0 01-.334-.334V1.667z" })));
}

function SvgStopCircle$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 16a8 8 0 10-8-8 8.009 8.009 0 008 8zM5 6a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1V6z" })));
}

function SvgTextBold() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.375 7.427A4.388 4.388 0 009.2 0h-4a2.803 2.803 0 00-2.8 2.8v10.557a2.72 2.72 0 002.8 2.64h3.999a5.016 5.016 0 005.198-4.8 4.659 4.659 0 00-2.022-3.77zM4.8 2.8a.4.4 0 01.4-.4h4a2 2 0 010 4h-4a.4.4 0 01-.4-.4V2.8zm4.4 10.798h-4c-.24 0-.4-.144-.4-.24v-4.16a.4.4 0 01.4-.4h4a2.625 2.625 0 012.799 2.4 2.625 2.625 0 01-2.8 2.399z" })));
}

function SvgTextCenter() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.103 11.368H3.898c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744c0-.28.108-.547.3-.745.193-.197.454-.308.726-.308h8.205c.272 0 .533.111.725.308a1.071 1.071 0 010 1.489 1.013 1.013 0 01-.725.308zM14.974 16H1.026c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.546.3-.744.193-.197.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308zM14.974 6.737H1.026c-.272 0-.533-.111-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.547.3-.744.193-.198.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308zM12.103 2.105H3.898c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744c0-.28.108-.547.3-.745C3.365.111 3.626 0 3.898 0h8.205c.272 0 .533.11.725.308.192.198.3.465.3.745 0 .279-.108.547-.3.744a1.013 1.013 0 01-.725.308z" })));
}

function SvgTextItalic() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M16 1.143c0-.303-.122-.594-.338-.808A1.16 1.16 0 0014.846 0H6.192c-.306 0-.6.12-.816.335a1.137 1.137 0 000 1.616c.217.214.51.335.816.335h2.615a.292.292 0 01.233.119.285.285 0 01.04.257L5.426 13.519a.286.286 0 01-.272.195h-3c-.306 0-.6.12-.816.335a1.137 1.137 0 000 1.616c.216.215.51.335.816.335h8.654c.306 0 .6-.12.816-.335a1.138 1.138 0 000-1.616 1.16 1.16 0 00-.816-.335H8.193a.292.292 0 01-.233-.119.285.285 0 01-.04-.257l3.654-10.857a.286.286 0 01.272-.195h3c.306 0 .6-.12.816-.335.216-.214.338-.505.338-.808z" })));
}

function SvgTextLeft() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.103 2.105H1.026c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744C0 .773.108.506.3.308.493.111.754 0 1.026 0h11.077c.272 0 .533.11.725.308.192.198.3.465.3.745 0 .279-.108.547-.3.744a1.012 1.012 0 01-.725.308zM14.974 6.737H1.026c-.272 0-.533-.111-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.547.3-.744.193-.198.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308zM12.103 11.368H1.026c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744c0-.28.108-.547.3-.745.193-.197.454-.308.726-.308h11.077c.272 0 .533.111.725.308a1.071 1.071 0 010 1.489 1.012 1.012 0 01-.725.308zM14.974 16H1.026c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.546.3-.744.193-.197.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308z" })));
}

function SvgTextRight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.974 6.737H1.026c-.272 0-.533-.111-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.547.3-.744.193-.198.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308zM14.974 2.105H3.898c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744c0-.28.108-.547.3-.745C3.365.111 3.626 0 3.898 0h11.076c.272 0 .533.11.726.308.192.198.3.465.3.745 0 .279-.108.547-.3.744a1.013 1.013 0 01-.726.308zM14.974 11.368H3.898c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.744c0-.28.108-.547.3-.745.193-.197.454-.308.726-.308h11.076c.272 0 .533.111.726.308a1.071 1.071 0 010 1.489 1.013 1.013 0 01-.726.308zM14.974 16H1.026c-.272 0-.533-.11-.726-.308a1.067 1.067 0 01-.3-.745c0-.279.108-.546.3-.744.193-.197.454-.308.726-.308h13.948c.272 0 .533.11.726.308.192.197.3.465.3.744 0 .28-.108.547-.3.745a1.012 1.012 0 01-.726.308z" })));
}

function SvgTextStyle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.714 13.714H2.286a1.143 1.143 0 100 2.286h11.428a1.143 1.143 0 100-2.286zM2.345 11.879a1.143 1.143 0 001.534-.51l.958-1.91a.571.571 0 01.51-.316h5.305a.572.572 0 01.511.315l.958 1.911a1.146 1.146 0 001.888.233 1.145 1.145 0 00.155-1.261L9.459.962A1.584 1.584 0 008 0a1.559 1.559 0 00-1.43.9l-4.735 9.445a1.143 1.143 0 00.51 1.534zm5.399-8.222a.285.285 0 01.512-.002l1.396 2.788a.285.285 0 01-.256.414H6.602a.286.286 0 01-.256-.414l1.398-2.786z" })));
}

function SvgTextUnderline() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14 16H2a1.23 1.23 0 01-.849-.335 1.116 1.116 0 01-.351-.808c0-.303.126-.594.351-.808.225-.214.53-.335.849-.335h12c.318 0 .623.12.848.335.225.214.352.505.352.808 0 .303-.127.594-.351.808A1.23 1.23 0 0114 16zM8 12a6.162 6.162 0 01-4.24-1.676C2.634 9.254 2.001 7.801 2 6.286V1.143c0-.303.126-.594.351-.808C2.576.12 2.881 0 3.2 0c.318 0 .623.12.848.335.225.214.352.505.352.808v5.143c0 .909.38 1.781 1.054 2.424A3.693 3.693 0 008 9.714c.955 0 1.87-.36 2.545-1.004A3.348 3.348 0 0011.6 6.286V1.143c0-.303.126-.594.351-.808.225-.215.53-.335.849-.335.318 0 .623.12.848.335.225.214.352.505.352.808v5.143c-.002 1.515-.635 2.967-1.76 4.038A6.162 6.162 0 018 12z" })));
}

function SvgText$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.58.8H2.42c-.43.001-.84.152-1.144.421A1.358 1.358 0 00.8 2.233v1.234c0 .216.097.424.27.577a.988.988 0 00.653.239c.245 0 .48-.086.653-.239a.771.771 0 00.27-.577v-.871c0-.044.02-.085.054-.116a.198.198 0 01.13-.048h4.062c.05 0 .096.018.13.048.035.03.055.072.055.116v11.608c0 .044-.02.085-.054.116a.198.198 0 01-.13.048H5.558a.988.988 0 00-.653.239.771.771 0 00-.27.577c0 .216.097.424.27.577a.988.988 0 00.653.239h4.882c.245 0 .48-.086.653-.239a.772.772 0 00.27-.577.771.771 0 00-.27-.577.988.988 0 00-.653-.24H9.108a.198.198 0 01-.13-.047.154.154 0 01-.055-.116V2.596c0-.044.02-.085.054-.116a.198.198 0 01.13-.048h4.062c.05 0 .096.018.13.048.035.03.055.072.055.116v.87c0 .217.097.425.27.578a.988.988 0 00.653.239c.245 0 .48-.086.653-.239a.771.771 0 00.27-.577V2.233a1.358 1.358 0 00-.476-1.012A1.738 1.738 0 0013.58.8z" })));
}

function SvgThumbsUp() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.335 8.097a1.611 1.611 0 00-.226-1.371 1.499 1.499 0 00-.524-.46 1.431 1.431 0 00-.667-.166H9.911a.651.651 0 01-.326-.087.686.686 0 01-.244-.241.724.724 0 01-.038-.678l.77-1.683a1.42 1.42 0 00-.226-1.299 1.337 1.337 0 00-.48-.387 1.28 1.28 0 00-1.182.041 1.36 1.36 0 00-.454.42L5.095 6.085a.685.685 0 01-.24.218.653.653 0 01-.31.08.245.245 0 00-.177.076.267.267 0 00-.073.184v6.364a.29.29 0 00.04.149c.028.045.066.08.112.104 1.993 1.007 2.656 1.14 4.28 1.14.187 0 1.25-.011 1.64-.011 1.443 0 2.404-.875 2.94-2.688l1.024-3.583.005-.02zM3.486 6.381h-.014a.853.853 0 00-.274-.503.789.789 0 00-.52-.2h-.809c-.071 0-.14.03-.19.083a.288.288 0 00-.079.198v7.875a.29.29 0 00.079.2c.05.052.119.082.19.082h.809c.214 0 .42-.09.572-.248a.863.863 0 00.236-.596v-6.89z" })));
}

function SvgTimesCircle$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("circle", { cx: 8, cy: 8, r: 8, fill: "currentColor" }),
        createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M11.417 4.583a1 1 0 010 1.414l-5.42 5.42a1 1 0 01-1.414-1.414l5.42-5.42a1 1 0 011.414 0z", clipRule: "evenodd" }),
        createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M11.417 11.417a1 1 0 01-1.414 0l-5.42-5.42a1 1 0 011.414-1.414l5.42 5.42a1 1 0 010 1.414z", clipRule: "evenodd" })));
}

function SvgTimes$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("mask", { id: "times_svg__a", width: 16, height: 16, x: 0, y: 0, maskUnits: "userSpaceOnUse" },
            createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })),
        createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2.2, mask: "url(#times_svg__a)" },
            createElement("path", { d: "M2.95 2.95l9.9 9.9M12.85 2.95l-9.9 9.9" }))));
}

function SvgTransition$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M.606.075a.982.982 0 011.071.213l12.358 12.358V3.354l-3.937 3.937-1.39-1.39L14.324.289A.983.983 0 0116 .982v14.036a.983.983 0 01-1.677.694L1.965 3.354v9.292l3.937-3.937 1.39 1.39-5.615 5.613A.982.982 0 010 15.018V.982C0 .585.24.227.606.075z", clipRule: "evenodd" })));
}

function SvgTrash$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.667 7.09H3.333a.751.751 0 00-.582.267.819.819 0 00-.195.632l.777 7.29c.021.2.113.383.256.516a.76.76 0 00.522.205h7.778a.76.76 0 00.522-.205.822.822 0 00.256-.516l.777-7.29a.84.84 0 00-.195-.632.751.751 0 00-.582-.268zM13.833 3.04h-1.75a.381.381 0 01-.275-.12.414.414 0 01-.114-.286v-.81a1.86 1.86 0 00-.513-1.289A1.718 1.718 0 009.944 0H6.056c-.465 0-.91.193-1.238.535a1.865 1.865 0 00-.512 1.29v.81c0 .107-.041.21-.114.286a.381.381 0 01-.275.118h-1.75c-.31 0-.606.128-.825.356a1.241 1.241 0 00-.342.86c0 .322.123.63.342.859.218.227.515.355.825.355h11.666c.31 0 .607-.128.825-.355.22-.228.342-.537.342-.86a1.24 1.24 0 00-.342-.859 1.144 1.144 0 00-.825-.356zM6.25 2.43c0-.107.041-.21.114-.286a.381.381 0 01.275-.119H9.36c.103 0 .202.043.275.119a.414.414 0 01.114.286v.204c0 .108-.041.21-.114.287a.381.381 0 01-.275.118H6.64a.381.381 0 01-.275-.118.414.414 0 01-.114-.287V2.43z" })));
}

function SvgTv() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M16 3.9a1.502 1.502 0 00-1.5-1.5h-13A1.502 1.502 0 000 3.9v7.333a1.502 1.502 0 001.5 1.5h.204a.167.167 0 01.167.17c0 .029-.01.058-.024.083l-.396.658a.834.834 0 001.43.858l.964-1.607a.333.333 0 01.288-.162h7.734a.333.333 0 01.286.162l.964 1.607a.833.833 0 001.43-.858l-.396-.658a.167.167 0 01.06-.23.167.167 0 01.084-.023h.204a1.502 1.502 0 001.501-1.5V3.9zm-1.667 6.833a.333.333 0 01-.333.334H2a.333.333 0 01-.333-.334V4.4A.333.333 0 012 4.067h12a.333.333 0 01.333.333v6.333z" })));
}

function SvgUndo() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.8 2.74h-.375V1.237a.75.75 0 00-1.276-.53L3.515 3.34a.75.75 0 000 1.061L6.15 7.024a.75.75 0 00.812.162.75.75 0 00.464-.694v-1.5H7.8A4.129 4.129 0 113.672 9.12a1.126 1.126 0 10-2.252 0A6.38 6.38 0 107.8 2.74z" })));
}

function SvgUserPlus() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2.4 3.943a3.143 3.143 0 106.286 0 3.143 3.143 0 00-6.286 0zM9.714 14.343a.286.286 0 00-.285-.286 2.57 2.57 0 01-1.1-4.896.287.287 0 00.039-.495 5.153 5.153 0 00-2.406-.87A5.43 5.43 0 000 13.2v.857A1.143 1.143 0 001.143 15.2h8.343a.285.285 0 00.28-.343 2.627 2.627 0 01-.052-.514z" }),
        createElement("path", { fill: "currentColor", d: "M16 11.486a.857.857 0 00-.857-.857h-1.714a.285.285 0 01-.286-.286V8.629a.857.857 0 10-1.714 0v1.714a.286.286 0 01-.286.286H9.429a.857.857 0 000 1.714h1.714a.286.286 0 01.286.286v1.714a.857.857 0 001.714 0v-1.714a.285.285 0 01.286-.286h1.714a.857.857 0 00.857-.857z" })));
}

function SvgUsers() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12 9.667c-.605 0-1.203.138-1.746.405a.333.333 0 00-.137.474c.577.938.883 2.019.883 3.12a.333.333 0 00.333.334h4.334a.333.333 0 00.333-.333 4 4 0 00-4-4zM9.463 6.833a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM1.833 5.167a3.167 3.167 0 106.334 0 3.167 3.167 0 00-6.334 0z" }),
        createElement("path", { fill: "currentColor", d: "M10 13.667a5 5 0 10-10 0A.333.333 0 00.333 14h9.334a.333.333 0 00.333-.333z" })));
}

function SvgVideoCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm3.667 9.815a.333.333 0 01-.514.28l-1.229-.796a.167.167 0 00-.257.14v.894a.333.333 0 01-.334.334H4.667a.333.333 0 01-.334-.334V5.667a.333.333 0 01.334-.334h4.666a.333.333 0 01.334.334v.894a.167.167 0 00.257.14l1.229-.796a.333.333 0 01.514.28v3.63z" })));
}

function SvgVideo$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M14.757 4.411a1.029 1.029 0 00-.948-.118l-.026.011-2.183.964v-.754a1.543 1.543 0 00-1.543-1.543H2.343A1.543 1.543 0 00.8 4.514v7.2a1.543 1.543 0 001.543 1.543h7.714a1.543 1.543 0 001.543-1.543v-.754l2.21.975a1.028 1.028 0 001.39-.963V5.257a1.03 1.03 0 00-.443-.846z" })));
}

function SvgVolumeMute$1() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.635 2c-.33 0-.65.114-.913.325L3.424 5.002H1.997a1.95 1.95 0 00-1.411.616A2.16 2.16 0 000 7.103v1.801c0 .557.211 1.091.586 1.485a1.95 1.95 0 001.411.616h1.427l3.31 2.676a1.43 1.43 0 001.565.157c.249-.13.458-.33.605-.578.147-.248.226-.534.227-.826V3.573c0-.417-.158-.817-.439-1.112A1.46 1.46 0 007.635 2zM14.622 8.004l1.105-1.165a.927.927 0 00.23-.63.924.924 0 00-.25-.62.836.836 0 00-.59-.264.833.833 0 00-.6.241L13.412 6.73l-1.107-1.164a.832.832 0 00-.6-.241.836.836 0 00-.59.263.924.924 0 00-.25.621.927.927 0 00.23.63L12.2 8.004l-1.106 1.164a.901.901 0 00-.199.293.941.941 0 00.177 1.003.854.854 0 00.285.198.818.818 0 00.669-.012c.105-.05.2-.12.277-.209l1.108-1.163 1.107 1.163a.86.86 0 00.278.209.82.82 0 00.953-.186.941.941 0 00-.022-1.296l-1.105-1.164z" })));
}

function SvgVolume() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.668 2.875c-.31 0-.612.102-.858.29l-3.098 2.39h-1.34A1.878 1.878 0 00.496 7.431v1.608a1.878 1.878 0 001.876 1.876h1.34l3.109 2.388a1.403 1.403 0 002.25-1.113V4.28a1.405 1.405 0 00-1.403-1.405zM13.36 3.1a.805.805 0 10-1.133 1.14 5.623 5.623 0 010 7.99.803.803 0 00.56 1.384.806.806 0 00.573-.243 7.232 7.232 0 000-10.272z" }),
        createElement("path", { fill: "currentColor", d: "M11.585 5.976a.805.805 0 00-1.326.91 2.374 2.374 0 010 2.697.804.804 0 101.326.91 3.984 3.984 0 000-4.517z" })));
}

var BOLD = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AlignBottom: SvgAlignBottom,
    AlignCenter: SvgAlignCenter,
    AlignDistributeHorizontally: SvgAlignDistributeHorizontally,
    AlignDistributeVertically: SvgAlignDistributeVertically,
    AlignLeft: SvgAlignLeft,
    AlignMiddle: SvgAlignMiddle,
    AlignRight: SvgAlignRight,
    AlignTop: SvgAlignTop,
    ArrowAltLeft: SvgArrowAltLeft,
    ArrowAltRight: SvgArrowAltRight,
    ArrowBackward: SvgArrowBackward,
    ArrowForward: SvgArrowForward,
    ArrowFromRight: SvgArrowFromRight$1,
    ArrowLeft: SvgArrowLeft,
    ArrowReplay: SvgArrowReplay,
    Background: SvgBackground$1,
    Backspace: SvgBackspace,
    Backward: SvgBackward,
    Bars: SvgBars,
    Book: SvgBook,
    Calendar: SvgCalendar,
    Click: SvgClick$1,
    Clock: SvgClock,
    Clone: SvgClone,
    Cog: SvgCog$1,
    CommentLines: SvgCommentLines,
    Cursor: SvgCursor,
    Desert: SvgDesert,
    Document: SvgDocument,
    DoorOpen: SvgDoorOpen,
    Drop: SvgDrop,
    EllipsisHorizontal: SvgEllipsisHorizontal,
    EllipsisVertical: SvgEllipsisVertical$1,
    ExclamationTriangle: SvgExclamationTriangle,
    EyeSlash: SvgEyeSlash$1,
    Eye: SvgEye$1,
    Filter: SvgFilter$1,
    Flash: SvgFlash$1,
    Forward: SvgForward,
    Gamepad: SvgGamepad$1,
    GlobeCursor: SvgGlobeCursor$1,
    GlobeDownload: SvgGlobeDownload$1,
    GlobeRefresh: SvgGlobeRefresh$1,
    GraduationCap: SvgGraduationCap,
    Grid: SvgGrid,
    GroupAdd: SvgGroupAdd$1,
    Hand: SvgHand,
    HeartbeatSquare: SvgHeartbeatSquare,
    Image: SvgImage$1,
    Images: SvgImages,
    Keyboard: SvgKeyboard,
    Lamp: SvgLamp,
    LockAlt: SvgLockAlt,
    LockOpenAlt: SvgLockOpenAlt,
    LockOpen: SvgLockOpen$1,
    Lock: SvgLock$1,
    ManStar: SvgManStar,
    MapMarkerInfo: SvgMapMarkerInfo,
    MapMarkerShine: SvgMapMarkerShine,
    Microphone: SvgMicrophone,
    MinusSquare: SvgMinusSquare$1,
    MobileWifi: SvgMobileWifi,
    Music: SvgMusic$1,
    PageNext: SvgPageNext,
    PagePrevious: SvgPagePrevious,
    PaintRoller: SvgPaintRoller,
    ParachuteBox: SvgParachuteBox,
    Pause: SvgPause,
    PenDraw: SvgPenDraw$1,
    PenWrite: SvgPenWrite,
    PlayCircle: SvgPlayCircle$1,
    Play: SvgPlay,
    PlusCircle: SvgPlusCircle$1,
    PlusSquare: SvgPlusSquare$1,
    Preview: SvgPreview,
    Projector: SvgProjector,
    Save: SvgSave,
    Search: SvgSearch$1,
    Share: SvgShare,
    StickyNote: SvgStickyNote,
    StopCircle: SvgStopCircle$1,
    TextBold: SvgTextBold,
    TextCenter: SvgTextCenter,
    TextItalic: SvgTextItalic,
    TextLeft: SvgTextLeft,
    TextRight: SvgTextRight,
    TextStyle: SvgTextStyle,
    TextUnderline: SvgTextUnderline,
    Text: SvgText$1,
    ThumbsUp: SvgThumbsUp,
    TimesCircle: SvgTimesCircle$1,
    Times: SvgTimes$1,
    Transition: SvgTransition$1,
    Trash: SvgTrash$1,
    Tv: SvgTv,
    Undo: SvgUndo,
    UserPlus: SvgUserPlus,
    Users: SvgUsers,
    VideoCircle: SvgVideoCircle,
    Video: SvgVideo$1,
    VolumeMute: SvgVolumeMute$1,
    Volume: SvgVolume
});

function SvgArrowFromRight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M6.055 5.278a.586.586 0 00-.649.137l-2.105 2.15A.617.617 0 003.125 8a.63.63 0 00.176.436l2.105 2.149a.599.599 0 00.425.18.58.58 0 00.495-.273c.065-.1.1-.218.1-.338V5.846a.627.627 0 00-.101-.342.604.604 0 00-.27-.226zM9.126 2a.74.74 0 00-.53.225.78.78 0 00-.22.544v10.462c0 .204.08.4.22.544a.74.74 0 001.06 0 .78.78 0 00.22-.544V2.769a.786.786 0 00-.22-.544.749.749 0 00-.53-.225z" })));
}

function SvgAxisX() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.758 12.376L9.31 8.508l3.447-3.884a.972.972 0 00-.097-1.38.984.984 0 00-1.378.08L7.996 7.033 4.709 3.325a.983.983 0 00-1.378-.08.97.97 0 00-.08 1.38l3.446 3.883-3.446 3.868a.97.97 0 00.08 1.38.983.983 0 001.378-.08l3.287-3.708 3.287 3.707a.984.984 0 001.378.08.972.972 0 00.097-1.38z" })));
}

function SvgAxisY() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.541 3.154c-.481-.289-1.112-.16-1.411.289L8.008 8.224 4.869 3.443c-.299-.45-.93-.578-1.395-.289a.951.951 0 00-.315 1.348l3.836 5.76v2.76c0 .545.448.978 1.013.978.548 0 1.013-.433 1.013-.979v-2.76l3.82-5.76a.96.96 0 00-.3-1.347z" })));
}

function SvgBackground() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.877 13.427a.62.62 0 010-.876l.674-.675a.62.62 0 01.876.877l-.674.674a.62.62 0 01-.877 0zM2.573 4.123a.62.62 0 010-.876l.674-.674a.62.62 0 11.877.876l-.675.675a.62.62 0 01-.876 0zM8.64 13.562a.62.62 0 010-.877l4.045-4.045a.62.62 0 01.877.877l-4.045 4.045a.62.62 0 01-.876 0zM2.438 7.36a.62.62 0 010-.877l4.045-4.045a.62.62 0 11.877.877L3.314 7.359a.62.62 0 01-.877 0zM5.742 13.36a.62.62 0 010-.877l6.741-6.741a.62.62 0 01.877.876L6.618 13.36a.62.62 0 01-.876 0zM2.64 10.258a.62.62 0 010-.876L9.382 2.64a.62.62 0 01.876.877l-6.741 6.741a.62.62 0 01-.877 0zM2.843 13.157a.62.62 0 010-.876l9.438-9.438a.62.62 0 01.876.876L3.72 13.157a.62.62 0 01-.876 0z", clipRule: "evenodd" })));
}

function SvgChevronDown() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.061 6.119a1.298 1.298 0 00-1.828-.166L7.95 7.856 5.666 5.953a1.298 1.298 0 00-1.661 1.994l3.945 3.287 3.945-3.287c.55-.46.625-1.277.166-1.828z", clipRule: "evenodd" })));
}

function SvgChevronRight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.968 3.808a1.25 1.25 0 00-.16 1.76l1.833 2.2-1.833 2.2a1.25 1.25 0 001.92 1.6l3.167-3.8-3.167-3.8a1.25 1.25 0 00-1.76-.16z", clipRule: "evenodd" })));
}

function SvgClick() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11.713 9.39l-2.667-.912V5.75c0-.265-.11-.52-.307-.707a1.077 1.077 0 00-.743-.293c-.278 0-.545.105-.742.293a.977.977 0 00-.307.707v4.23l-.434-.569a.807.807 0 00-.282-.206.845.845 0 00-.348-.072l-.52.009a.805.805 0 00-.383.096.759.759 0 00-.283.264.712.712 0 00-.016.73l1.96 3.386a.749.749 0 00.283.28.797.797 0 00.393.102h3.354a.801.801 0 00.443-.139.742.742 0 00.28-.356l.797-3.34a.69.69 0 00-.11-.492.747.747 0 00-.368-.284z" }),
        createElement("path", { fill: "currentColor", d: "M4.902 7.95a.524.524 0 00.27-.284.478.478 0 00-.021-.383c-.2-.4-.303-.84-.301-1.283 0-.796.332-1.559.922-2.121A3.231 3.231 0 018 3a3.23 3.23 0 012.227.879A2.93 2.93 0 0111.149 6c.002.445-.102.884-.303 1.285a.479.479 0 00-.019.382.51.51 0 00.27.283c.126.054.27.06.4.015a.53.53 0 00.3-.252c.267-.535.404-1.12.402-1.713 0-1.06-.442-2.078-1.23-2.828A4.308 4.308 0 008 2a4.308 4.308 0 00-2.97 1.172A3.906 3.906 0 003.8 6a3.8 3.8 0 00.405 1.715.52.52 0 00.298.255c.13.044.274.037.4-.02z" })));
}

function SvgCog() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.211 6.881l-.633-.225a.687.687 0 01-.39-.943l.288-.606a1.188 1.188 0 00-1.582-1.583l-.607.289a.688.688 0 01-.943-.391l-.225-.633a1.188 1.188 0 00-2.238 0l-.225.633a.688.688 0 01-.942.39l-.607-.288a1.188 1.188 0 00-1.583 1.583l.288.606a.687.687 0 01-.39.943l-.633.225a1.188 1.188 0 000 2.238l.633.225a.687.687 0 01.39.943l-.288.606a1.188 1.188 0 001.583 1.583l.607-.288a.686.686 0 01.942.39l.225.633a1.188 1.188 0 002.238 0l.225-.633a.687.687 0 01.943-.39l.607.288a1.188 1.188 0 001.582-1.583l-.288-.606a.686.686 0 01.39-.943l.633-.225a1.187 1.187 0 000-2.238zm-5.21 3.511A2.465 2.465 0 015.78 8.92a2.407 2.407 0 011.3-3.14 2.434 2.434 0 013.14 1.3 2.407 2.407 0 01-1.3 3.14 2.28 2.28 0 01-.92.172z" })));
}

function SvgEllipsisVertical() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("circle", { cx: 8, cy: 12.8, r: 1.2, fill: "currentColor", transform: "rotate(-90 8 12.8)" }),
        createElement("circle", { cx: 8, cy: 8, r: 1.2, fill: "currentColor", transform: "rotate(-90 8 8)" }),
        createElement("circle", { cx: 8, cy: 3.2, r: 1.2, fill: "currentColor", transform: "rotate(-90 8 3.2)" })));
}

function SvgEyeSlash() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.715 7.297a10.598 10.598 0 00-2.194-1.758l2.041-1.95a.488.488 0 00.156-.347.472.472 0 00-.15-.349.512.512 0 00-.365-.143.53.53 0 00-.362.149l-.01.009a.358.358 0 01-.088.142L2.79 12.568c-.004.004-.01.005-.013.009a.468.468 0 00-.016.328.49.49 0 00.205.263.528.528 0 00.643-.06l2.116-2.024a5.97 5.97 0 002.2.458h.153c2.173 0 4.333-1.456 5.64-2.83.182-.196.283-.448.282-.709 0-.26-.102-.513-.285-.706zM10.2 8.625c-.11.346-.308.662-.575.92a2.364 2.364 0 01-.956.558 2.287 2.287 0 01-1.582-.093.128.128 0 01-.047-.037.12.12 0 01-.02-.112.123.123 0 01.032-.05L9.89 7.098a.13.13 0 01.113-.035.124.124 0 01.095.068c.225.469.261 1 .102 1.494zM5.76 8.688a.114.114 0 00.031-.117 2.022 2.022 0 01-.089-.566c0-.583.242-1.141.673-1.553a2.351 2.351 0 011.624-.644c.2.002.4.03.592.085a.13.13 0 00.122-.03l.991-.948a.119.119 0 00.004-.172.13.13 0 00-.055-.034 5.538 5.538 0 00-1.654-.243c-2.195-.028-4.39 1.44-5.71 2.83A1.025 1.025 0 002 8.005c0 .262.101.514.285.708a10.691 10.691 0 001.755 1.48.135.135 0 00.167-.015l1.553-1.49z" })));
}

function SvgEye() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.718 7.197C12.395 5.742 10.2 4.203 8 4.234c-2.201-.031-4.395 1.508-5.718 2.963a1.106 1.106 0 000 1.475c1.307 1.44 3.47 2.965 5.637 2.965h.154c2.175 0 4.337-1.525 5.646-2.966a1.105 1.105 0 00-.001-1.474zm-8.02.739a2.3 2.3 0 114.602 0 2.3 2.3 0 01-4.601 0z" }),
        createElement("path", { fill: "currentColor", d: "M7 7.936a1 1 0 102 0 1 1 0 00-2 0z" })));
}

function SvgFilter() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.947 2.276A.5.5 0 0013.5 2h-11a.5.5 0 00-.4.8l4.4 5.911V13a1.007 1.007 0 001 1 1 1 0 00.6-.2l1-.75a1.004 1.004 0 00.4-.8V8.711L13.9 2.8a.5.5 0 00.047-.524zM4.709 3.1l1.969 2.625a.25.25 0 01.05.15V6.5a.25.25 0 01-.45.15L3.81 3.4a.25.25 0 01.2-.4h.5a.25.25 0 01.199.1z" })));
}

function SvgFlash() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.725 6.2a.665.665 0 00-.58-.343H9.527a.22.22 0 01-.154-.063.212.212 0 01-.064-.151v-3a.635.635 0 00-.127-.381.666.666 0 00-1.066.017l-4.8 6.857a.635.635 0 00.2.914c.102.06.22.093.339.093h2.618a.22.22 0 01.154.063.21.21 0 01.064.151v3c0 .137.045.271.127.382a.655.655 0 00.528.261.661.661 0 00.539-.279l4.8-6.857a.638.638 0 00.04-.664z" })));
}

function SvgFolderOpen() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.881 7.069a.522.522 0 00-.404-.19H7.061a.522.522 0 01-.512-.418l-.145-.73a.522.522 0 00-.512-.417h-3.37a.522.522 0 00-.511.627l1.356 6.782a.522.522 0 00.512.417h8.555a.522.522 0 00.512-.417l1.043-5.217a.522.522 0 00-.108-.437zM4.609 4.791a.522.522 0 00.521-.522v-.887a.26.26 0 01.261-.26h6.26a.26.26 0 01.262.26v2.452a.522.522 0 001.043 0V3.122a1.044 1.044 0 00-1.043-1.044H5.13a1.043 1.043 0 00-1.043 1.044v1.147a.522.522 0 00.522.522z" })));
}

function SvgFolder() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.8 4.8H7.2a.4.4 0 01-.32-.16l-.72-.96a1.206 1.206 0 00-.96-.48h-2A1.2 1.2 0 002 4.4v7.2a1.2 1.2 0 001.2 1.2h9.6a1.2 1.2 0 001.2-1.2V6a1.2 1.2 0 00-1.2-1.2z" })));
}

function SvgGamepad() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2.5 3h2.25a.75.75 0 01.75.75v.75a.5.5 0 001 0v-.75A1.75 1.75 0 004.75 2H2.5a.5.5 0 100 1zM11.75 5.75h-7.5A2.25 2.25 0 002 8v4.96a1.028 1.028 0 00.308.737c.197.195.464.304.742.303h.015c.974-.013 1.124-.3 2.095-2.18l.362-.697a1.26 1.26 0 011.083-.623h2.79a1.251 1.251 0 011.072.607c.16.307.3.58.426.824C11.796 13.681 11.96 14 12.93 14A1.066 1.066 0 0014 12.94V8a2.25 2.25 0 00-2.25-2.25zm-6.125 3H5.25A.25.25 0 005 9v.375a.375.375 0 11-.75 0V9A.25.25 0 004 8.75h-.375a.375.375 0 010-.75H4a.25.25 0 00.25-.25v-.375a.375.375 0 11.75 0v.375a.25.25 0 00.25.25h.375a.375.375 0 010 .75zm4.375 0a.5.5 0 110-1 .5.5 0 010 1zm1.25 1a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1zm1.25 1a.5.5 0 110-1 .5.5 0 010 1z" })));
}

function SvgGlobeCursor() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M6.337 10.884a.125.125 0 01.074-.17.5.5 0 00-.162-.969h-.2a.125.125 0 01-.122-.1 7.555 7.555 0 01-.176-1.649 7.553 7.553 0 01.127-1.399.125.125 0 01.123-.1h4a.124.124 0 01.122.1c.038.198.07.4.09.62a.5.5 0 10.995-.093 7.779 7.779 0 00-.061-.484.126.126 0 01.124-.145h1.402a.125.125 0 01.12.09c.065.214.115.433.15.655a.5.5 0 00.988-.15 5.995 5.995 0 00-4.278-4.858 6.003 6.003 0 00-7.595 4.93 5.993 5.993 0 002.702 5.882c.967.62 2.09.949 3.238.949a.493.493 0 00.482-.405c.15-.76-1.138-.502-2.143-2.704zM4.897 9.6a.126.126 0 01-.123.15H3.41a.126.126 0 01-.118-.083 4.937 4.937 0 01-.088-3.08.125.125 0 01.12-.09h1.403a.126.126 0 01.124.144A8.926 8.926 0 004.897 9.6zm1.464-4.098a.125.125 0 01-.116-.172 5.025 5.025 0 011.682-2.196.125.125 0 01.145 0 5.047 5.047 0 011.68 2.191.125.125 0 01-.115.173l-3.276.004zm5.843-.192a.124.124 0 01.005.127.125.125 0 01-.11.065h-1.131a.125.125 0 01-.119-.085 6.574 6.574 0 00-.871-1.74.125.125 0 01.156-.186 5.079 5.079 0 012.07 1.814v.005zM5.866 3.484a.125.125 0 01.155.185 6.585 6.585 0 00-.873 1.743.124.124 0 01-.118.086H3.899a.125.125 0 01-.105-.192 5.02 5.02 0 012.072-1.822zm-1.9 7.46a.125.125 0 01.1-.2H5.11a.124.124 0 01.117.081c.197.533.463 1.037.792 1.5a.125.125 0 01-.156.185 5.023 5.023 0 01-1.897-1.566h-.001z" }),
        createElement("path", { fill: "currentColor", d: "M13.68 10.394L8.926 8.326a.516.516 0 00-.663.664l2.068 4.748a.437.437 0 00.407.262.54.54 0 00.5-.376l.536-1.725a.127.127 0 01.083-.083l1.707-.517a.538.538 0 00.368-.4.442.442 0 00-.252-.505z" })));
}

function SvgGlobeDownload() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.401 12.937a.252.252 0 00-.17-.11 5.012 5.012 0 01-1.481-.472v-.646a1.224 1.224 0 01.446-.95 2.205 2.205 0 00.666-2.467A2.23 2.23 0 006.04 7.23a2.265 2.265 0 00-1.29-.404H3.135A4.924 4.924 0 014.22 4.703a4.991 4.991 0 011.964-1.374 5.038 5.038 0 014.636.527H9.125c-.365 0-.714.143-.972.399a1.355 1.355 0 000 1.925c.258.256.607.399.972.399.275.002.542.091.761.254a.254.254 0 00.191.045 4.009 4.009 0 011.944.149 3.975 3.975 0 011.64 1.046A.198.198 0 0014 7.94a5.896 5.896 0 00-.851-3.05 5.975 5.975 0 00-2.313-2.184 6.05 6.05 0 00-6.155.285 5.958 5.958 0 00-2.095 2.39 5.889 5.889 0 00.576 6.073 5.99 5.99 0 002.508 1.961l.08.039v-.01A6.025 6.025 0 008 13.88a.1.1 0 00.09-.062.096.096 0 00-.024-.107 4.002 4.002 0 01-.665-.775z" }),
        createElement("path", { fill: "currentColor", d: "M10.75 7.564c-.643 0-1.272.189-1.806.542a3.225 3.225 0 00-1.197 1.445 3.188 3.188 0 00.705 3.507 3.28 3.28 0 003.542.697 3.244 3.244 0 001.459-1.186A3.194 3.194 0 0014 10.781a3.206 3.206 0 00-.953-2.274 3.27 3.27 0 00-2.297-.943zm1.195 3.62l-1 1.238a.253.253 0 01-.39 0l-1-1.238a.249.249 0 01.195-.4h.375a.253.253 0 00.234-.154.246.246 0 00.018-.096V9.296a.37.37 0 01.11-.262.377.377 0 01.64.262v1.238a.246.246 0 00.156.232c.03.012.064.018.097.018h.375a.253.253 0 01.22.141.247.247 0 01-.025.259h-.005z" })));
}

function SvgGlobeRefresh() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.384 11.354a.51.51 0 00-.382.024.494.494 0 00-.253.281 2 2 0 01-.559.838 2.085 2.085 0 01-1.924.451 2.055 2.055 0 01-.884-.498.245.245 0 01-.077-.175.242.242 0 01.074-.175l.774-.758a.244.244 0 00.053-.267.255.255 0 00-.23-.152H7.75a.253.253 0 00-.177.072.243.243 0 00-.073.173v2.184a.242.242 0 00.154.227.254.254 0 00.272-.053l.396-.388a.253.253 0 01.352 0c.366.356.82.614 1.316.751.496.137 1.02.148 1.523.032a3.063 3.063 0 001.347-.695c.382-.34.67-.77.835-1.248a.482.482 0 00-.142-.527.504.504 0 00-.169-.097z" }),
        createElement("path", { fill: "currentColor", d: "M6.472 13.562a.226.226 0 00.255-.114.214.214 0 00.023-.095v-.55a.242.242 0 00-.05-.147.25.25 0 00-.129-.088 5.05 5.05 0 01-.821-.318v-.64a1.202 1.202 0 01.446-.939 2.2 2.2 0 00.727-1.118c.12-.437.1-.9-.059-1.325a2.211 2.211 0 00-.824-1.052 2.282 2.282 0 00-1.29-.399H3.133a4.856 4.856 0 011.086-2.102 4.992 4.992 0 011.964-1.36 5.085 5.085 0 014.637.522H9.125c-.35.021-.68.172-.92.423a1.334 1.334 0 000 1.85c.24.25.57.401.92.422a1.318 1.318 0 01.943.41 3.843 3.843 0 012.765.615.166.166 0 00.21-.018.996.996 0 01.707-.287.195.195 0 00.144-.065.185.185 0 00.045-.149 5.82 5.82 0 00-1.216-2.786 5.99 5.99 0 00-2.471-1.822 6.113 6.113 0 00-3.069-.375 6.066 6.066 0 00-2.851 1.172 5.896 5.896 0 00-1.878 2.409c-.4.95-.54 1.985-.404 3.004a5.817 5.817 0 001.177 2.803A5.987 5.987 0 005.67 13.3l.079.039v-.01c.235.092.477.17.722.233z" }),
        createElement("path", { fill: "currentColor", d: "M14 8.235a.25.25 0 00-.299-.24.253.253 0 00-.128.066l-.424.416a.253.253 0 01-.351.003 3.062 3.062 0 00-1.318-.742 3.108 3.108 0 00-1.52-.027c-.5.117-.962.357-1.343.697-.38.34-.667.768-.833 1.245a.481.481 0 00.024.375.497.497 0 00.287.248.51.51 0 00.382-.024.493.493 0 00.253-.282 2 2 0 01.555-.834 2.085 2.085 0 011.912-.458c.332.088.636.256.885.49a.245.245 0 01.06.268.246.246 0 01-.055.081l-.743.727a.244.244 0 00-.053.267.254.254 0 00.23.151h2.229c.066 0 .13-.025.177-.071a.243.243 0 00.073-.173V8.235z" })));
}

function SvgGroupAdd() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.475 4.059a.144.144 0 00.144-.144v-.432a.432.432 0 00-.432-.433H5.695l-.104-.043-.773-.8a1.009 1.009 0 00-.726-.31h-1.69a1.174 1.174 0 00-1.174 1.174v7.327a1.008 1.008 0 001.009 1.009h.144a.144.144 0 00.144-.144V5.788a1.729 1.729 0 011.729-1.729h9.22z" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.542 5.067h9.221a1.01 1.01 0 011.008 1.009v6.916A1.01 1.01 0 0113.764 14h-9.22a1.01 1.01 0 01-1.01-1.008V6.075a1.01 1.01 0 011.01-1.009zm4.841 2.19c.334 0 .605.271.605.606v1.21h1.21a.605.605 0 010 1.21h-1.21v1.21a.605.605 0 11-1.21 0v-1.21h-1.21a.605.605 0 110-1.21h1.21v-1.21c0-.335.27-.605.605-.605z", clipRule: "evenodd" })));
}

function SvgHeight() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11.943 3.016c-.59 0-1.058.436-1.058.985v3.683h-5.77V3.985c0-.533-.486-.985-1.058-.985C3.468 3 3 3.452 3 3.985V13c0 .549.468.985 1.057.985.572 0 1.058-.436 1.058-.986V9.655h5.77v3.36c0 .533.468.985 1.058.985.572 0 1.057-.452 1.057-.985V4c0-.549-.485-.985-1.057-.985z" })));
}

function SvgImage() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2.643 11.1a.628.628 0 01-.455-.198.693.693 0 01-.188-.477v-5.85c0-.418.159-.818.44-1.113A1.466 1.466 0 013.5 3h7.714c.17 0 .334.071.455.198a.695.695 0 010 .954.628.628 0 01-.455.198H3.5a.21.21 0 00-.152.066.23.23 0 00-.062.159v5.85c0 .179-.068.35-.189.477a.628.628 0 01-.454.198z" }),
        createElement("path", { fill: "currentColor", d: "M12.929 5.25H5.643c-.284 0-.556.12-.757.33-.201.21-.314.497-.315.795v6.3c0 .298.114.584.315.795.2.21.473.33.757.33h7.286c.284 0 .556-.12.757-.33.2-.21.313-.497.314-.795v-6.3c0-.298-.114-.584-.314-.795a1.05 1.05 0 00-.757-.33zM12.5 6.6a.21.21 0 01.152.066c.04.042.062.1.062.159v4.725l-2.247-2.21a1.723 1.723 0 00-1.181-.475c-.436 0-.857.17-1.181.475l-2.248 2.21V6.825a.23.23 0 01.063-.16.21.21 0 01.151-.065H12.5z" })));
}

function SvgLockOpen() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.725 3.265a1.46 1.46 0 00-1.46 1.46V6.9a.716.716 0 01-1.432 0V4.725a2.891 2.891 0 115.783 0V6.36a.716.716 0 01-1.431 0V4.725a1.46 1.46 0 00-1.46-1.46z", clipRule: "evenodd" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.18 12.658a4.58 4.58 0 116.478-6.477 4.58 4.58 0 01-6.477 6.477zm3.974-3.945a.716.716 0 10-1.431 0v1.45a.716.716 0 101.431 0v-1.45z", clipRule: "evenodd" })));
}

function SvgLock() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 3.265a1.823 1.823 0 00-1.823 1.822v1.274a.716.716 0 01-1.43 0V5.087a3.254 3.254 0 116.507 0v1.274a.716.716 0 11-1.431 0V5.087A1.823 1.823 0 008 3.265z", clipRule: "evenodd" }),
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.761 12.658a4.58 4.58 0 116.478-6.477 4.58 4.58 0 01-6.478 6.477zm3.955-3.945a.716.716 0 00-1.432 0v1.45a.716.716 0 101.432 0v-1.45z", clipRule: "evenodd" })));
}

function SvgMinusSquare() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M5 2a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3H5zm.25 5a1 1 0 000 2h5.5a1 1 0 100-2h-5.5z", clipRule: "evenodd" })));
}

function SvgMoon() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.445 10.351a.524.524 0 00-.522-.29c-.088.01-.17.01-.255.01a4.54 4.54 0 01-2.35-.654 4.593 4.593 0 01-1.682-1.78 4.645 4.645 0 01.227-4.735.58.58 0 00.02-.605.546.546 0 00-.53-.295 5.678 5.678 0 00-2.736.885 5.743 5.743 0 00-1.964 2.117 5.804 5.804 0 00.06 5.612 5.74 5.74 0 002.007 2.075 5.676 5.676 0 007.705-1.736.58.58 0 00.02-.604z" })));
}

function SvgMusic() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13 2.8a1.2 1.2 0 00-1.653-1.111l-4.8 1.964a1.195 1.195 0 00-.747 1.11v5.236a.133.133 0 01-.133.133H5A2.133 2.133 0 005 14.4a2.187 2.187 0 002.133-2.133v-4.93a.132.132 0 01.083-.122l4.267-1.746a.133.133 0 01.184.123V7.87a.133.133 0 01-.134.133h-.666a2.133 2.133 0 100 4.266A2.186 2.186 0 0013 10.136V2.8zM7.317 5.732a.133.133 0 01-.184-.124v-.577a.267.267 0 01.166-.247l4-1.637a.267.267 0 01.368.247v.467a.133.133 0 01-.083.123L7.317 5.733z" })));
}

function SvgPenDraw() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.068 12.71H2.643a.642.642 0 00-.643.645.647.647 0 00.643.645h9.425a.641.641 0 00.642-.645.647.647 0 00-.642-.645zM13.62 3.278l-.91-.913a1.314 1.314 0 00-1.817 0l-5.748 5.77a.43.43 0 00-.118.229l-.457 2.585a.431.431 0 00.503.5l2.575-.457a.428.428 0 00.229-.119l5.747-5.77a1.293 1.293 0 000-1.824l-.005-.001z" })));
}

function SvgPlayCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 2a6 6 0 106 6 6.006 6.006 0 00-6-6zm2.414 6.447l-3.69 1.845A.5.5 0 016 9.845V6.154a.5.5 0 01.723-.447l3.692 1.843a.5.5 0 01-.001.897z" })));
}

function SvgPlusCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M2 8a6 6 0 106-6 6.007 6.007 0 00-6 6zm2.609-.26a.522.522 0 01.521-.523h1.957a.13.13 0 00.13-.13V5.13a.522.522 0 01.522-.521h.522a.522.522 0 01.522.521v1.957a.13.13 0 00.13.13h1.957a.522.522 0 01.521.522v.522a.522.522 0 01-.521.522H8.913a.13.13 0 00-.13.13v1.957a.522.522 0 01-.522.521h-.522a.522.522 0 01-.522-.521V8.913a.13.13 0 00-.13-.13H5.13a.522.522 0 01-.521-.522v-.522z" })));
}

function SvgPlusSquare() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11 2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3zm-.429 6.857H8.857v1.714a.857.857 0 11-1.714 0V8.857H5.429a.857.857 0 110-1.714h1.714V5.429a.857.857 0 111.714 0v1.714h1.714a.857.857 0 110 1.714z" })));
}

function SvgPlus() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.636 3.636a1.636 1.636 0 10-3.272 0v2.728H3.636a1.636 1.636 0 100 3.272h2.728v2.728a1.636 1.636 0 103.272 0V9.636h2.728a1.636 1.636 0 100-3.272H9.636V3.636z", clipRule: "evenodd" })));
}

function SvgQuestionCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 1a7 7 0 107 7 7.007 7.007 0 00-7-7zm0 11.083a.875.875 0 110-1.75.875.875 0 010 1.75zm.933-3.546a.583.583 0 00-.35.535.583.583 0 11-1.166 0 1.75 1.75 0 011.05-1.605A1.167 1.167 0 106.833 6.4a.583.583 0 01-1.166 0 2.333 2.333 0 113.266 2.138z" })));
}

function SvgSearch() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.707 12.298l-2.32-2.322a5.13 5.13 0 00-1.011-6.813 5.123 5.123 0 00-8.37 3.714A5.13 5.13 0 006.374 12.2a5.123 5.123 0 003.6-.81l2.32 2.322a1.011 1.011 0 001.413 0 1 1 0 000-1.414zM7.13 3.506a3.621 3.621 0 013.554 4.332 3.625 3.625 0 01-4.94 2.642A3.624 3.624 0 014.57 4.569c.68-.68 1.6-1.062 2.56-1.063z" })));
}

function SvgSort() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M10.934 8.835a.479.479 0 00-.188-.163.58.58 0 00-.258-.06H5.511a.58.58 0 00-.257.06.48.48 0 00-.188.163.388.388 0 00.008.44l2.488 3.514c.046.065.11.118.187.155a.581.581 0 00.502 0 .485.485 0 00.187-.155l2.488-3.513a.388.388 0 00.008-.44zM5.066 7.165a.48.48 0 00.187.163.58.58 0 00.259.06h4.977c.09 0 .18-.021.257-.06a.48.48 0 00.188-.163.388.388 0 00-.008-.44L8.438 3.21a.485.485 0 00-.187-.155.58.58 0 00-.502 0 .485.485 0 00-.187.155L5.074 6.724a.388.388 0 00-.008.44z" })));
}

function SvgStopCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M8 14a6 6 0 10-6-6 6.006 6.006 0 006 6zM5.75 6.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3z" })));
}

function SvgText() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M12.09 2H3.28c-.34 0-.665.12-.905.332-.24.212-.374.5-.375.8v.973c0 .171.077.335.213.456a.78.78 0 00.516.189.78.78 0 00.515-.189.609.609 0 00.213-.456v-.687c0-.035.016-.067.043-.091a.156.156 0 01.103-.038H6.81c.038 0 .075.013.103.038a.122.122 0 01.042.09v9.165a.122.122 0 01-.042.091.156.156 0 01-.103.038H5.757a.78.78 0 00-.515.189.609.609 0 00-.214.456c0 .17.077.334.214.455a.78.78 0 00.515.189h3.855a.78.78 0 00.515-.189.61.61 0 00.213-.455.609.609 0 00-.213-.456.78.78 0 00-.515-.189H8.559a.156.156 0 01-.103-.037.122.122 0 01-.043-.092V3.418c0-.035.015-.067.043-.091a.156.156 0 01.103-.038h3.206a.15.15 0 01.103.038.122.122 0 01.043.09v.688c0 .171.077.335.213.456a.78.78 0 00.516.189.78.78 0 00.515-.189.61.61 0 00.213-.456v-.973c0-.3-.135-.588-.375-.8A1.372 1.372 0 0012.089 2z" })));
}

function SvgTimesCircle() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("circle", { cx: 8, cy: 8, r: 6, fill: "currentColor" }),
        createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10.405 5.595a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 01-1.06-1.06l3.75-3.75a.75.75 0 011.06 0z", clipRule: "evenodd" }),
        createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10.405 10.405a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l3.75 3.75a.75.75 0 010 1.06z", clipRule: "evenodd" })));
}

function SvgTimes() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("mask", { id: "times_svg__a", width: 16, height: 16, x: 0, y: 0, maskUnits: "userSpaceOnUse" },
            createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })),
        createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, mask: "url(#times_svg__a)" },
            createElement("path", { d: "M4.991 4.991l5.817 5.817M10.808 4.991L4.99 10.808" }))));
}

function SvgTransition() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.455 2.056a.737.737 0 01.803.16l9.268 9.268V4.516L9.574 7.468 8.532 6.426l4.21-4.21a.737.737 0 011.258.52v10.527a.737.737 0 01-1.258.521L3.474 4.516v6.968l2.952-2.952 1.042 1.042-4.21 4.21A.737.737 0 012 13.264V2.736c0-.298.18-.567.455-.68z", clipRule: "evenodd" })));
}

function SvgTrash() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M11.572 7.317H4.714c-.08 0-.16.017-.234.052a.574.574 0 00-.194.149.618.618 0 00-.143.474l.571 5.467c.016.15.083.287.188.387.106.1.243.155.384.154H11a.552.552 0 00.383-.154.622.622 0 00.189-.387l.571-5.467A.644.644 0 0012 7.518a.574.574 0 00-.194-.15.543.543 0 00-.234-.05zM12.429 4.28h-1.286a.277.277 0 01-.202-.09.314.314 0 01-.084-.214v-.608c0-.362-.136-.71-.377-.966A1.25 1.25 0 009.571 2H6.715a1.25 1.25 0 00-.909.402 1.414 1.414 0 00-.376.966v.608c0 .08-.03.157-.084.214a.277.277 0 01-.202.09H3.857a.832.832 0 00-.606.266.941.941 0 00-.251.645c0 .241.09.473.251.644.16.171.379.267.606.267h8.572a.832.832 0 00.606-.267.941.941 0 00.25-.644.941.941 0 00-.25-.645.832.832 0 00-.606-.267zm-5.572-.457c0-.081.03-.158.084-.215a.277.277 0 01.202-.09h2c.076 0 .148.033.202.09a.314.314 0 01.084.215v.153c0 .08-.03.157-.084.214a.277.277 0 01-.202.09h-2a.277.277 0 01-.202-.09.314.314 0 01-.084-.214v-.153z" })));
}

function SvgVideo() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M13.63 5.029a.857.857 0 00-.789-.099l-.022.01L11 5.742v-.629A1.286 1.286 0 009.714 3.83H3.286A1.286 1.286 0 002 5.114v6A1.286 1.286 0 003.286 12.4h6.428A1.286 1.286 0 0011 11.114v-.628l1.841.813A.858.858 0 0014 10.496V5.732a.857.857 0 00-.37-.704z" })));
}

function SvgVolumeMute() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", d: "M7.727 3c-.248 0-.489.086-.685.244L4.568 5.251h-1.07c-.397 0-.778.167-1.059.462A1.62 1.62 0 002 6.827v1.351c0 .418.158.818.44 1.114.28.295.66.462 1.058.462h1.07L7.05 11.76a1.073 1.073 0 001.174.118c.187-.097.344-.247.454-.433.11-.186.17-.4.17-.62V4.18c0-.313-.118-.613-.329-.834A1.095 1.095 0 007.727 3zM12.966 7.503l.83-.874a.696.696 0 00.172-.472.693.693 0 00-.188-.466.627.627 0 00-.443-.197.625.625 0 00-.449.18l-.83.873-.83-.872a.625.625 0 00-.45-.181.627.627 0 00-.442.197.693.693 0 00-.188.466.696.696 0 00.172.472l.83.874-.83.873a.677.677 0 00-.204.483.707.707 0 00.188.489.64.64 0 00.465.198.616.616 0 00.459-.215l.83-.873.83.873c.06.066.13.12.209.156a.616.616 0 00.715-.139.68.68 0 00.188-.49.705.705 0 00-.204-.482l-.83-.873z" })));
}

function SvgWidth() {
    return (createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16" },
        createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.828 12.473a.96.96 0 01-.46.476.931.931 0 01-1.269-.428L1.102 6.368A.931.931 0 011.531 5.1a.944.944 0 011.268.428l2.157 4.408 2.14-4.408A.944.944 0 017.997 5a.944.944 0 01.901.527l2.157 4.408 2.14-4.408a.944.944 0 011.269-.428.95.95 0 01.444 1.268l-2.981 6.105a.96.96 0 01-.46.476.931.931 0 01-1.269-.428L8.004 8.016l-2.176 4.457z", clipRule: "evenodd" })));
}

var MINI = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ArrowFromRight: SvgArrowFromRight,
    AxisX: SvgAxisX,
    AxisY: SvgAxisY,
    Background: SvgBackground,
    ChevronDown: SvgChevronDown,
    ChevronRight: SvgChevronRight,
    Click: SvgClick,
    Cog: SvgCog,
    EllipsisVertical: SvgEllipsisVertical,
    EyeSlash: SvgEyeSlash,
    Eye: SvgEye,
    Filter: SvgFilter,
    Flash: SvgFlash,
    FolderOpen: SvgFolderOpen,
    Folder: SvgFolder,
    Gamepad: SvgGamepad,
    GlobeCursor: SvgGlobeCursor,
    GlobeDownload: SvgGlobeDownload,
    GlobeRefresh: SvgGlobeRefresh,
    GroupAdd: SvgGroupAdd,
    Height: SvgHeight,
    Image: SvgImage,
    LockOpen: SvgLockOpen,
    Lock: SvgLock,
    MinusSquare: SvgMinusSquare,
    Moon: SvgMoon,
    Music: SvgMusic,
    PenDraw: SvgPenDraw,
    PlayCircle: SvgPlayCircle,
    PlusCircle: SvgPlusCircle,
    PlusSquare: SvgPlusSquare,
    Plus: SvgPlus,
    QuestionCircle: SvgQuestionCircle,
    Search: SvgSearch,
    Sort: SvgSort,
    StopCircle: SvgStopCircle,
    Text: SvgText,
    TimesCircle: SvgTimesCircle,
    Times: SvgTimes,
    Transition: SvgTransition,
    Trash: SvgTrash,
    Video: SvgVideo,
    VolumeMute: SvgVolumeMute,
    Width: SvgWidth
});

const isBold = (name) => name in BOLD;
const isMini = (name) => name in MINI;
/**
 * Icon wrapper.
 */
const Icon = (_a) => {
    var { name, size = 'sm' } = _a, props = __rest(_a, ["name", "size"]);
    const [Component, setComponent] = useState();
    useEffect(() => {
        if (size === Size.XSMALL && isMini(name)) {
            setComponent(MINI[name]);
        }
        else if (isBold(name)) {
            setComponent(BOLD[name]);
        }
        else {
            console.error(`${name} icon not found!`);
        }
    }, [name, size]);
    return (React.createElement(Container$b, Object.assign({ "data-icon": name, "data-size": size }, props), Component));
};
const Container$b = styled.span `
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
    return (React.createElement(Container$a, Object.assign({ "data-direction": direction }, props),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null }),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null }),
        React.createElement(Icon, { name: "Sort", size: "xs", "data-size": size || null })));
};
const Container$a = styled.div `
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
    var { active, as, busy, children, disabled, href, icon, placement, round, size = 'md', synthetic, text, theme, toggle, type = 'button', variant = 'secondary' } = _a, props = __rest(_a, ["active", "as", "busy", "children", "disabled", "href", "icon", "placement", "round", "size", "synthetic", "text", "theme", "toggle", "type", "variant"]);
    const [leader, trailer] = Array.isArray(icon) ? icon : [icon];
    const delegated = Object.assign({ size, variant }, props);
    return (React.createElement(Container$9, Object.assign({ as: as !== null && as !== void 0 ? as : (href ? 'a' : 'button'), "data-active": active || null, "data-busy": busy || null, "data-icon": (icon && !(text || children) && 'single') || (leader && trailer && 'both') || placement, "data-round": round || null, "data-synthetic": synthetic || null, "data-theme": theme || null, "data-toggle": toggle || null, disabled: busy || disabled, href: href, ref: ref, type: href ? undefined : type }, delegated),
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
modification['lg'] = css `
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;
modification['primary'] = css `
  --button-background-color: ${colors.ELEMENT_PRIMARY};
  --button-border-color: ${colors.ELEMENT_PRIMARY};
  --button-color: ${colors.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${colors.ELEMENT_ACTIVE};
    --button-border-color: ${colors.ELEMENT_ACTIVE};
  }

  /* TODO: Themed states are not designed */
  &[data-theme='danger'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.DANGER};
      --button-border-color: ${colors.DANGER};
    }
  }
  &[data-theme='success'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.SUCCESS};
      --button-border-color: ${colors.SUCCESS};
    }
  }
`;
modification['secondary'] = css `
  --button-background-color: ${colors.ELEMENT_SECONDARY};
  --button-border-color: ${colors.ELEMENT_SECONDARY};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: #d8e1fc;
    --button-border-color: #d8e1fc;
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-color: ${colors.WHITE};
  }
`;
modification['tertiary'] = css `
  --button-background-color: ${colors.TRANSPARENT};
  --button-border-color: ${colors.TRANSPARENT};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${colors.ELEMENT_SECONDARY};
    --button-border-color: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${colors.TRANSPARENT};
    --button-border-color: ${colors.TRANSPARENT};
    --button-color: ${colors.ELEMENT_DISABLED};
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
      --button-background-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-border-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-color: ${colors.WHITE};
    }
    &:is(:focus):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
    &:is(:hover, [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-color: ${colors.WHITE};
    }
    &:is(:disabled, [data-disabled]):not([data-busy]) {
      --button-color: ${colors.DARK_ELEMENT_DISABLED};
    }
  }
`;
const Container$9 = styled.button `
  ${base};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy], [data-disabled]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: ${colors.TRANSPARENT};
  }

  &[data-toggle] {
    --button-icon-transform: rotateX(calc(var(--button-icon-rotation) * 180deg));

    &[data-active] {
      --button-icon-rotation: 1;
    }
  }

  &:is(:disabled, [data-disabled]):not([data-busy]) {
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
    return React.createElement(Container$8, Object.assign({ ref: combinedRef }, props));
});
const Container$8 = styled.div `
  display: contents;
`;

// @see https://github.com/emotion-js/emotion/issues/1105#issuecomment-557726922
const EMOTION_DISABLE_SSR = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';

/**
 * Flexbox wrapper.
 */
const Flex = (_a) => {
    var { align, as = 'div', block, direction, gap, justify, wrap } = _a, props = __rest(_a, ["align", "as", "block", "direction", "gap", "justify", "wrap"]);
    const delegated = Object.assign({ align, block, direction, gap, justify }, props);
    return React.createElement(Container$7, Object.assign({ as: as, "data-wrap": wrap || null }, delegated));
};
const Container$7 = styled.div `
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
    var { align, as = 'div', block, columns, flow, gap, justify, max = '1fr', min = '0px', sizing = 'auto-fit' } = _a, props = __rest(_a, ["align", "as", "block", "columns", "flow", "gap", "justify", "max", "min", "sizing"]);
    const delegated = Object.assign({ align, block, columns, gap, justify, max, min, sizing }, props);
    return React.createElement(Container$6, Object.assign({ as: as }, delegated));
};
const Container$6 = styled.div `
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'grid' : 'inline-grid'}`};
  ${({ flow }) => flow && `grid-auto-flow: ${flow}`};
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
    var { as = 'span', clamp, hyphens = 'manual', truncate, word = 'normal' } = _a, props = __rest(_a, ["as", "clamp", "hyphens", "truncate", "word"]);
    return (React.createElement(Container$5, Object.assign({ as: as, "data-clamp": clamp || null, "data-hyphens": hyphens, "data-truncate": truncate || null, "data-word": word, style: { ['--lines']: clamp } }, props)));
};
const Container$5 = styled.span `
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
 * Dialog
 */
const Dialog = (_a) => {
    var { active = false, backdrop = true, bleed = false, children, footer, header, index = 10, justify = 'flex-end', onClose, rejectable = true, size, theme, title } = _a, props = __rest(_a, ["active", "backdrop", "bleed", "children", "footer", "header", "index", "justify", "onClose", "rejectable", "size", "theme", "title"]);
    const onKeyUp = useCallback((event) => {
        if (event.key === 'Escape')
            onClose();
    }, [onClose]);
    useEffect(() => {
        if (rejectable) {
            document.addEventListener('keyup', onKeyUp);
            return () => {
                document.removeEventListener('keyup', onKeyUp);
            };
        }
    }, [onClose, onKeyUp, rejectable]);
    return (jsx(DialogWrapper, { "data-active": active || null, "data-bleed": bleed || null, "data-foot": footer ? true : null, "data-head": header || title ? true : null, "data-theme": theme || null, style: { ['--dialog-index']: index } },
        backdrop && jsx(Backdrop, { "data-dialog": "backdrop", onClick: rejectable ? onClose : undefined }),
        jsx(DialogContainer, Object.assign({}, props, { style: { ['--dialog-size']: size } }),
            (header || title) && (jsx("header", { css: headerStyle, "data-dialog": "header" }, header ? (header) : (jsx(Text, { as: "h1", clamp: 1, css: titleStyle }, title)))),
            jsx(Body, { "data-dialog": "body" }, children),
            footer && (jsx(Flex, { as: "footer", css: footerStyle, "data-dialog": "footer", justify: justify }, footer)),
            rejectable && jsx(Control$1, { "data-dialog": "control", onClick: onClose }))));
};
// TypeScript warning will be gone after this boi is resolved
// https://github.com/microsoft/typescript-styled-plugin/issues/137#issuecomment-848930098
const backdropAnimation = keyframes `
  0% {
    --dialog-backdrop-alpha: 0;
  }
  100% {
    --dialog-backdrop-alpha: 0.5;
  }
`;
const dialogAnimation = keyframes `
  0% {
    opacity: 0.5;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1.0);
  }
`;
const container = css `
  padding: calc(var(--dialog-indent) * 2) calc(var(--dialog-indent) * 3);
`;
const DialogWrapper = styled.div `
  @property --dialog-backdrop-alpha {
    inherits: true;
    initial-value: 0;
    syntax: '<number>';
  }

  ${paragraph};

  --dialog-background-color: 0 0% 100%;
  --dialog-border-color: ${colors.STROKE};
  --dialog-border-radius: 6px;
  --dialog-border-size: 1px;
  --dialog-box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  --dialog-indent: 8px;
  --dialog-index: ;
  --dialog-size: 600px;

  --dialog-backdrop-aplha: 0;
  --dialog-backdrop-color: 0 0% 0%;

  --dialog-body-shadow-color: 0 0% 0%;

  display: none;
  inset: 0;
  place-items: center;
  padding: calc(var(--dialog-indent) * 3);
  position: fixed;
  user-select: none;
  z-index: var(--dialog-index);

  &[data-active] {
    display: grid;
  }
`;
const Backdrop = styled.div `
  background-color: hsla(var(--dialog-backdrop-color) / var(--dialog-backdrop-alpha));
  inset: inherit;
  position: inherit;

  [data-active] & {
    animation: ${backdropAnimation} 2s ${EASING.easeOutCirc} both;
  }
`;
const DialogContainer = styled.section `
  background-color: hsl(var(--dialog-background-color));
  border-radius: var(--dialog-border-radius);
  box-shadow: var(--dialog-box-shadow);
  display: inline-grid;
  grid-template-rows: 1fr;
  max-height: 80vh;
  min-height: 200px;
  padding-bottom: calc(var(--dialog-indent) * 4);
  padding-top: calc(var(--dialog-indent) * 5);
  position: relative;
  width: min(calc(100% - var(--dialog-indent) * 2), var(--dialog-size));

  [data-active] & {
    animation: ${dialogAnimation} 0.3s ${EASING.easeOutCirc} both;
  }

  [data-head] & {
    grid-template-rows: auto 1fr;
    padding-top: 0;
  }
  [data-foot] & {
    grid-template-rows: 1fr auto;
    padding-bottom: 0;
  }
  [data-head][data-foot] & {
    grid-template-rows: auto 1fr auto;
  }
`;
/**
 * Dialog header
 */
const headerStyle = css `
  ${container};

  padding-right: 40px;
`;
const titleStyle = css `
  &:is(*, #chucknorris) {
    ${h1};
  }
`;
/**
 * Dialog body
 */
const Body = styled.div `
  ${container};

  /* Scroll shadows https://css-scroll-shadows.vercel.app */
  background: linear-gradient(
      hsl(var(--dialog-background-color)) 33%,
      hsla(var(--dialog-background-color) / 0)
    ),
    linear-gradient(
        hsla(var(--dialog-background-color) / 0),
        hsl(var(--dialog-background-color)) 66%
      )
      0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      hsla(var(--dialog-body-shadow-color) / 0.125),
      hsla(var(--dialog-body-shadow-color) / 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        hsla(var(--dialog-body-shadow-color) / 0.125),
        hsla(var(--dialog-body-shadow-color) / 0)
      )
      0 100%;
  background-attachment: local, local, scroll, scroll;
  background-repeat: no-repeat;
  background-size: 100% 30px, 100% 30px, 100% 10px, 100% 10px;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior-y: none;
  padding-top: calc(var(--dialog-indent) * 0.5);
  position: relative;
  user-select: text;
  z-index: calc(var(--dialog-index) + 1);

  & > :first-child ${EMOTION_DISABLE_SSR} {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }

  [data-bleed] & {
    overflow-y: visible;
  }
`;
/**
 * Dialog footer
 */
const footerStyle = css `
  ${container};

  border-top: 1px solid var(--dialog-border-color);
  display: flex;
  gap: 8px;
`;
/**
 * Dialog control
 */
const controlStyle$1 = css `
  --button-color: ${colors.TEXT_TERTIARY};

  position: absolute;
  right: calc(var(--dialog-indent) * 2);
  top: calc(var(--dialog-indent) * 1);
  z-index: calc(var(--dialog-index) + 1);

  &:is(:hover) {
    --button-color: ${colors.TEXT_PRIMARY};
  }
`;
const Control$1 = (props) => (jsx(Button, Object.assign({ css: controlStyle$1, icon: jsx(Icon, { name: "Times" }), round: true, synthetic: true, variant: "tertiary" }, props)));

/**
 * Field label
 */
const FieldLabel = (props) => (jsx(Flex, Object.assign({ as: "label", css: labelStyle, gap: "4px" }, props)));
const labelStyle = css `
  ${label};

  margin-bottom: var(--field-indent);
`;
const FieldText = (_a) => {
    var { secondary } = _a, props = __rest(_a, ["secondary"]);
    return (jsx(FieldTextContainer, Object.assign({ "data-secondary": secondary || null }, props)));
};
const FieldTextContainer = styled.div `
  ${base$1};

  --font-size: 14px;
  --font-weight: 500;
  --letter-spacing: -0.01em;
  --line-height: calc(18 / 14);

  &[data-secondary] {
    --color: ${colors.TEXT_TERTIARY};
    --font-size: 13px;
    --line-height: calc(16 / 13);
  }
`;
const iconName = (theme) => {
    const names = {
        danger: 'TimesCircle',
        notice: 'MapMarkerInfo',
        success: 'ThumbsUp',
    };
    return names[theme];
};
const FieldMessage = (_a) => {
    var { children, theme = 'danger' } = _a, props = __rest(_a, ["children", "theme"]);
    return (jsx(Flex, Object.assign({ css: messageStyle$1, "data-theme": theme || null, gap: "8px" }, props),
        theme && jsx(Icon, { name: iconName(theme) }),
        children));
};
const messageStyle$1 = css `
  ${base$1};

  --font-size: 13px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 13);

  margin-top: var(--field-indent);

  &[data-theme='danger'] {
    color: ${colors.DANGER};
  }
  &[data-theme='notice'] {
    color: ${colors.NOTICE};
  }
  &[data-theme='success'] {
    color: ${colors.SUCCESS};
  }
`;
const Field = (props) => (jsx(Flex, Object.assign({ block: true, css: fieldStyle, direction: "column", gap: "8px" }, props)));
const fieldStyle = css `
  --field-indent: 0;

  flex: 1;
  padding-block: 12px;
`;

/**
 * Input container
 */
const inputContainer = css `
  ${input$2};

  --input-background-color: ${colors.WHITE};
  --input-border-color: ${transparentize('#c8d7fc', 0.6)};
  --input-border-size: 2px;
  --input-color: ;
  --input-gap: 8px;
  --input-indent: 10px;
  --input-length: 100%;
  --input-line-height: var(--input-size);
  --input-placeholder-color: ${colors.TEXT_TERTIARY};
  --input-radius: 6px;
  --input-size: ;

  align-items: center;
  background-clip: padding-box;
  background-color: var(--input-background-color);
  border: var(--input-border-size) solid var(--input-border-color);
  border-radius: var(--input-radius);
  color: var(--input-color);
  display: flex;
  gap: var(--input-gap);
  min-height: var(--input-size);
  margin: 0;
  min-width: var(--input-size);
  outline: 0;
  padding-inline: var(--input-indent);
  transition-duration: 0.2s;
  transition-property: border-color, width;
  transition-timing-function: ease-in-out;
  width: var(--input-length);
  will-change: border-color, width;

  &:is(:active, :focus-within, :hover, [data-active], [data-hover]):not([data-disabled], [data-busy]) {
    --input-border-color: ${colors.ELEMENT_FOCUS};
  }
  &:is([data-invalid]):not([data-disabled], [data-busy]) {
    --input-border-color: ${colors.DANGER};
  }
  &:is([data-disabled], [data-busy]) {
    --input-color: ${colors.ELEMENT_DISABLED};
    pointer-events: none;
  }
  &:is([data-readonly]) {
    cursor: pointer;
  }

  &[data-size='sm'] {
    --input-size: 30px;
  }
  &[data-size='md'] {
    --input-size: 36px;
  }
  &[data-size='lg'] {
    --font-size: 15px;
    --input-size: 40px;
  }

  /* [data-theme='dark'] &,
  &[data-theme='dark'] {} */
`;
/**
 * Input
 */
const input$1 = css `
  background-color: ${colors.TRANSPARENT};
  border: none;
  color: currentColor;
  font: inherit;
  min-width: 0;
  outline: 0;
  padding: 0;

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-search-cancel-button {
    appearance: none;
    display: none;
  }

  &[readonly] {
    pointer-events: none;
  }
`;
/**
 * Input affix
 */
const inputAffix = css `
  align-items: center;
  display: inline-flex;
  color: ${colors.TEXT_TERTIARY};
  margin-inline: calc(-0.5 * var(--input-gap));
`;

/**
 * Input
 */
const Input$1 = forwardRef((_a, ref) => {
    var { active, affix, as = 'label', busy, className, disabled, invalid, leader, length, readonly, size = 'md', theme, trailer } = _a, inputProps = __rest(_a, ["active", "affix", "as", "busy", "className", "disabled", "invalid", "leader", "length", "readonly", "size", "theme", "trailer"]);
    const [prefix, suffix] = Array.isArray(affix) ? affix : [affix];
    const _b = Object.fromEntries(Object.entries(inputProps).filter(([key]) => ['data-active', 'data-invalid', 'data-hover', 'style'].includes(key))), { style } = _b, containerProps = __rest(_b, ["style"]);
    return (React.createElement(Container$4, Object.assign({ as: as, className: className, "data-active": active || null, "data-busy": busy || null, "data-disabled": disabled || null, "data-invalid": invalid || null, "data-readonly": readonly || null, "data-size": size, "data-theme": theme || null, style: Object.assign({ ['--input-length']: length }, style) }, containerProps),
        prefix && React.createElement(Prefix, null, prefix),
        leader,
        React.createElement(Element$1, Object.assign({ ref: ref, disabled: disabled, readOnly: readonly }, inputProps)),
        busy && (React.createElement(Idle, { gap: "2px", size: "4px", style: {
                ['--color']: colors.ELEMENT_PRIMARY,
            } })),
        trailer,
        suffix && React.createElement(Suffix, null, suffix)));
});
const Container$4 = styled.label `
  --gap: 1px;

  ${inputContainer};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`;
const Element$1 = styled.input `
  ${input$1};
  ${truncate};
`;
const Prefix = styled.span `
  ${inputAffix};
`;
const Suffix = styled.span `
  ${inputAffix};
`;

function countDecimals(number) {
    if (Math.floor(number) === number) {
        return 0;
    }
    return number.toString().split('.')[1].length || 0;
}
function roundToDecimal(number, decimals) {
    return Number(number.toFixed(decimals));
}
function parseValue(rawValue, minValue, maxValue, decimals) {
    const value = parseFloat(rawValue);
    if (isNaN(value)) {
        return null;
    }
    const roundedValue = roundToDecimal(value, decimals);
    if (roundedValue < minValue || roundedValue > maxValue || countDecimals(value) > decimals) {
        return null;
    }
    return roundedValue;
}
function useNumberInput({ decimals = 0, format = (arg) => arg, max = Infinity, min = -Infinity, onBlur, onChange, onChangeValue, step = 1, value, }) {
    const [interimInputValue, setInterimInputValue] = useDependantState(() => format(value != null ? String(value) : ''), [value]);
    const valueRef = useUpdatedRef(value);
    const handleInputBlur = useCallback((event) => {
        var _a;
        setInterimInputValue(format(String((_a = valueRef.current) !== null && _a !== void 0 ? _a : '')));
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [format, onBlur, setInterimInputValue, valueRef]);
    const handleInputChange = useCallback((event) => {
        const rawValue = event.target.value;
        setInterimInputValue(rawValue);
        const value = parseValue(rawValue, min, max, decimals);
        if (value != null) {
            onChangeValue(value);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [decimals, max, min, onChange, onChangeValue, setInterimInputValue]);
    const handleInputFocus = useCallback((event) => {
        event.target.select();
    }, []);
    const handleKeyDown = useCallback((event) => {
        const { key, target, shiftKey } = event;
        const value = parseValue(target.value, min, max, decimals);
        const diff = shiftKey ? step * 10 : step;
        if (value == null)
            return;
        if (key === 'ArrowDown') {
            event.preventDefault();
            onChangeValue(roundToDecimal(Math.max(value - diff, min), decimals));
        }
        if (key === 'ArrowUp') {
            event.preventDefault();
            onChangeValue(roundToDecimal(Math.min(value + diff, max), decimals));
        }
    }, [decimals, max, min, onChangeValue, step]);
    const handleIncrement = useCallback(() => {
        const value = valueRef.current;
        if (value == null)
            return;
        onChangeValue(roundToDecimal(Math.min(value + step, max), decimals));
    }, [decimals, max, onChangeValue, step, valueRef]);
    const handleDecrement = useCallback(() => {
        const value = valueRef.current;
        if (value == null)
            return;
        onChangeValue(roundToDecimal(Math.max(value - step, min), decimals));
    }, [decimals, min, onChangeValue, step, valueRef]);
    const isInterimValueValid = useMemo(() => parseValue(interimInputValue, min, max, decimals) != null, [decimals, interimInputValue, max, min]);
    return {
        handleDecrement,
        handleIncrement,
        handleInputBlur,
        handleInputChange,
        handleInputFocus,
        handleKeyDown,
        interimInputValue,
        isInterimValueValid,
    };
}

/**
 * Number input
 */
const NumberInput = forwardRef((_a, ref) => {
    var { controls = false, decimals, format, max = Infinity, min = -Infinity, onBlur, onChange, onChangeValue, step, value } = _a, rest = __rest(_a, ["controls", "decimals", "format", "max", "min", "onBlur", "onChange", "onChangeValue", "step", "value"]);
    const { handleDecrement, handleIncrement, handleInputBlur, handleInputChange, handleInputFocus, handleKeyDown, interimInputValue, isInterimValueValid, } = useNumberInput({
        decimals,
        format,
        max,
        min,
        onBlur,
        onChange,
        onChangeValue,
        step,
        value,
    });
    return (jsx(Input$1, Object.assign({ ref: ref, type: format ? 'text' : 'number', value: interimInputValue, min: min, max: max, invalid: !isInterimValueValid, css: input, trailer: jsx(Fragment, null, controls && (jsx(Controls, null,
            jsx(Button, { icon: jsx(Icon, { name: "ChevronDown", size: "xs" }), synthetic: true, tabIndex: -1, disabled: value >= max, onClick: handleIncrement }),
            jsx(Button, { icon: jsx(Icon, { name: "ChevronDown", size: "xs" }), synthetic: true, tabIndex: -1, disabled: value <= min, onClick: handleDecrement })))), onBlur: handleInputBlur, onChange: handleInputChange, onFocus: handleInputFocus, onKeyDown: handleKeyDown }, rest)));
});
const input = css `
  input {
    font-variant-numeric: tabular-nums;
    text-align: right;
  }
`;
const Controls = styled.div `
  --gap: 1px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  height: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

  button {
    --button-radius: 2px;

    border-bottom-right-radius: calc(2 * var(--button-radius));
    flex: 1;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));

    &:first-of-type {
      transform: rotateX(180deg);
    }
  }
`;

/**
 * `safeguard` comments mark overrides needed if the original RC Slider styles are linked.
 */
/** Dot */
const dot = css `
  background-color: var(--slider-dot-color);
  border: var(--slider-border-size) solid var(--slider-dot-border-color);
  border-radius: 50%;
  cursor: pointer;
  height: var(--slider-dot-size);
  margin: 0 !important; /* safeguard */
  position: absolute;
  transform: translate(var(--slider-dx), var(--slider-dy));
  width: var(--slider-dot-size);

  &:is([class*='active']) {
    --slider-dot-border-color: var(--slider-color-primary);
  }

  [data-direction='horizontal'] & {
    --slider-dx: -50%;

    bottom: auto; /* safeguard */

    &:is([class*='reverse']) {
      --slider-dx: 50%;
    }
  }

  [data-direction='vertical'] & {
    --slider-dy: 50%;

    left: auto; /* safeguard */

    &:is([class*='reverse']) {
      --slider-dy: -50%;
    }
  }
`;
/** Handle */
const handle = css `
  background-color: var(--slider-handle-color);
  border: var(--slider-border-size) solid var(--slider-handle-border-color);
  border-color: var(--slider-handle-border-color) !important; /* safeguard */
  border-radius: 50%;
  cursor: grab;
  height: var(--slider-handle-size);
  margin: 0; /* safeguard */
  outline: none;
  transform: translate(var(--slider-dx), var(--slider-dy)) !important; /* safeguard */
  transition: border-color 0.2s;
  width: var(--slider-handle-size);

  [data-hover] &,
  &:is(:active, :focus, :hover, [class*='dragging'], [class*='focused'], [class*='hover']) {
    --slider-handle-border-color: var(--slider-color-primary);
    box-shadow: none; /* safeguard */
  }
  &:is(:active) {
    cursor: grabbing;
  }

  [data-direction='horizontal'] & {
    --slider-dx: -50%;

    touch-action: pan-x;
  }
  [data-direction='horizontal'][data-reverse] & {
    --slider-dx: 50%;
  }

  [data-direction='vertical'] & {
    --slider-dy: 50%;

    touch-action: pan-y;
  }
  [data-direction='vertical'][data-reverse] & {
    --slider-dy: -50%;
  }
`;
/** Mark */
const mark = css `
  [class*='text'] {
    ${paragraph};

    cursor: pointer;
    margin: 0 !important; /* safeguard */
    position: absolute;
    transform: translate(var(--slider-mark-dx), var(--slider-mark-dy)) !important; /* safeguard */
  }

  [data-direction='horizontal'] & {
    &:not([class*='text']) {
      left: 0;
      top: calc(var(--slider-size) + var(--slider-mark-indent));
      width: 100%;
    }

    [class*='text'] {
      --slider-mark-dx: -50%;
      --slider-mark-dy: 0;

      &:first-of-type {
        --slider-mark-dx: 0;
      }
      &:last-of-type {
        --slider-mark-dx: -100%;
      }
    }
  }
  [data-direction='horizontal'][data-reverse] & {
    [class*='text'] {
      --slider-mark-dx: 50%;

      &:first-of-type {
        --slider-mark-dx: 0;
      }
      &:last-of-type {
        --slider-mark-dx: 100%;
      }
    }
  }

  [data-direction='vertical'] & {
    &:not([class*='text']) {
      height: 100%;
      left: calc(var(--slider-size) + var(--slider-mark-indent));
      top: 0;
    }

    [class*='text'] {
      --slider-mark-dx: 0;
      --slider-mark-dy: 50%;

      &:first-of-type {
        --slider-mark-dy: 0;
      }
      &:last-of-type {
        --slider-mark-dy: 100%;
      }
    }
  }
  [data-direction='vertical'][data-reverse] & {
    [class*='text'] {
      --slider-mark-dy: -50%;

      &:first-of-type {
        --slider-mark-dy: 0;
      }
      &:last-of-type {
        --slider-mark-dy: -100%;
      }
    }
  }
`;
/** Rail */
const rail = css `
  background-color: var(--slider-rail-color);
  border-radius: inherit;

  [data-direction='horizontal'] & {
    height: var(--slider-rail-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-rail-size);
  }
`;
/** Step */
const step = css `
  [data-direction='horizontal'] & {
    height: var(--slider-dot-size);
    width: 100%;
  }
  [data-direction='vertical'] & {
    height: 100%;
    width: var(--slider-dot-size);
  }
`;
/** Track */
const track = css `
  background-color: var(--slider-track-color);
  border-radius: inherit;
  left: auto; /* safeguard */

  [data-direction='horizontal'] & {
    height: var(--slider-track-size);
  }
  [data-direction='vertical'] & {
    width: var(--slider-track-size);
  }
`;
/** Slider */
const slider = css `
  align-items: center;
  background: none;
  border-radius: var(--slider-border-radius);
  display: flex;
  height: inherit;
  padding: 0;
  position: relative;
  touch-action: none;
  width: inherit;

  &,
  & * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  & > * {
    position: absolute;
  }

  [class*='dot'] {
    ${dot};
  }
  [class*='handle'] {
    ${handle};
  }
  [class*='mark'] {
    ${mark};
  }
  [class*='rail'] {
    ${rail};
  }
  [class*='step'] {
    ${step};
  }
  [class*='track'] {
    ${track};
  }

  [data-direction='vertical'] & {
    flex-direction: column;
  }

  /** State: Disabled */
  &[class*='disabled'] {
    filter: grayscale(90%);
    opacity: 0.5;
    pointer-events: none;
  }
`;
/** Wrapper */
const sliderWrapper = css `
  --slider-border-radius: 1000px;
  --slider-border-size: 2px;
  --slider-color-primary: ${colors.ELEMENT_FOCUS};
  --slider-color-secondary: ${colors.STROKE};
  --slider-dx: 0;
  --slider-dy: 0;
  --slider-size: 16px;

  --slider-dot-border-color: var(--slider-color-secondary);
  --slider-dot-color: ${colors.WHITE};
  --slider-dot-size: calc(0.5 * var(--slider-size));

  --slider-handle-border-color: var(--slider-color-secondary);
  --slider-handle-color: ${colors.WHITE};
  --slider-handle-size: var(--slider-size);

  --slider-mark-dx: ;
  --slider-mark-dy: ;
  --slider-mark-indent: 4px;

  --slider-rail-color: var(--slider-color-secondary);
  --slider-rail-size: 4px;

  --slider-track-color: var(--slider-color-primary);
  --slider-track-size: var(--slider-rail-size);

  &[data-direction='horizontal'] {
    height: var(--slider-size);
    width: 100%;
  }
  &[data-direction='vertical'] {
    height: 100%;
    width: var(--slider-size);
  }

  &[data-bleed='false'] {
    &[data-direction='horizontal'] {
      padding-left: calc(0.5 * var(--slider-size));
      padding-right: calc(0.5 * var(--slider-size));
    }
    &[data-direction='vertical'] {
      padding-bottom: calc(0.5 * var(--slider-size));
      padding-top: calc(0.5 * var(--slider-size));
    }
  }
`;

/**
 * Styled RC Slider wrapper
 * @see https://slider.react-component.now.sh/
 */
const Range = (_a) => {
    var { bleed = true, reverse, theme, vertical } = _a, rangeProps = __rest(_a, ["bleed", "reverse", "theme", "vertical"]);
    const containerProps = Object.fromEntries(Object.entries(rangeProps).filter(([key]) => ['className', 'data-hover', 'data-qa'].includes(key)));
    return (jsx("div", Object.assign({}, containerProps, { css: sliderWrapper, "data-bleed": bleed, "data-direction": vertical ? 'vertical' : 'horizontal', "data-reverse": reverse || null, "data-theme": theme || null }),
        jsx(Range$1, Object.assign({}, rangeProps, { css: slider, reverse: reverse, vertical: vertical }))));
};

/**
 * Menu
 */
const menu = css `
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
  user-select: none;
  width: var(--size);
  z-index: 1;

  &[data-padding] {
    padding: calc(2 * var(--indent));
    padding-top: calc(1.5 * var(--indent));
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    --background-color: ${colors.DARK_BACKGROUND_PRIMARY};
    --border-color: ${colors.DARK_STROKE};
    --box-shadow: ${colors.BLACK};
  }
`;
/**
 * Menu group
 */
const menuGroup = css `
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & + & {
    margin-top: var(--gap);
  }
`;
/**
 * Menu group title
 */
const menuGroupTitle = css `
  ${h3};

  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--indent);
  padding-bottom: calc(0.5 * var(--indent));

  [data-theme='dark'] & {
    --color: ${colors.WHITE};
  }
`;
/**
 * Menu item
 */
const menuItem = css `
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

  [data-menu='group'] & {
    padding-left: calc(3 * var(--indent));
  }

  &:is(:active, [data-pressed]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
    --color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:focus-visible, :hover, [data-hover]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
  }
  &:is([data-active]) {
    --color: ${colors.ELEMENT_PRIMARY};
  }

  &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
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
    &:is(:focus-visible, :hover, [data-hover]) {
      --background-color: ${colors.DARK_ELEMENT_ACTIVE};
    }

    &:is(:active, :focus-visible, :hover, [data-active], [data-hover], [data-pressed]) {
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
/**
 * Menu title
 */
const menuTitle = css `
  ${h3};

  margin-bottom: 12px;
  margin-top: 8px;

  [data-theme='dark'] & {
    --color: ${colors.WHITE};
  }
`;
/**
 * Menu divider
 */
const menuDivider = css `
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
 * Context menu
 */
const Menu = forwardRef((_a, ref) => {
    var { active, justify, padding, size, theme } = _a, props = __rest(_a, ["active", "justify", "padding", "size", "theme"]);
    const delegated = Object.assign({}, props);
    return (React.createElement(MenuContainer$1, Object.assign({ "data-active": active || null, "data-justify": justify || null, "data-padding": padding || null, "data-theme": theme || null, ref: ref, style: { ['--size']: size } }, delegated)));
});
/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */
const MenuContainer$1 = styled.section `
  ${menu};
`;

const MenuDivider = styled.div `
  ${menuDivider};
`;

/** @jsxRuntime classic */
const MenuGroup = (props) => (jsx("div", Object.assign({ css: menuGroup, "data-menu": "group" }, props)));
const MenuGroupTitle = styled.h5 `
  ${menuGroupTitle};
`;

/**
 * Context menu item
 */
const MenuItem = forwardRef((_a, ref) => {
    var { active, as = 'button', disabled, justify, theme } = _a, props = __rest(_a, ["active", "as", "disabled", "justify", "theme"]);
    const delegated = Object.assign({}, props);
    return (React.createElement(MenuItemContainer, Object.assign({ as: as, "data-active": active || null, "data-disabled": disabled || null, "data-justify": justify || null, "data-theme": theme || null, disabled: as === 'button' ? !!disabled : undefined, ref: ref, type: as === 'button' ? 'button' : undefined }, delegated)));
});
const MenuItemContainer = styled.button `
  ${menuItem};
`;

const MenuTitle = styled.h5 `
  ${menuTitle};
`;

/**
 * Container
 */
const containerStyle = css `
  position: relative;
`;
const SelectContainer = (props) => {
    const { selectProps: { style }, } = props;
    return jsx(components.SelectContainer, Object.assign({ css: [containerStyle, style] }, props));
};
/**
 * Control
 */
const controlStyle = css `
  ${inputContainer};

  *:is(:hover, [data-active], [data-hover]):not([data-disabled], [data-busy]) > & {
    --input-border-color: ${colors.ELEMENT_FOCUS};
  }
  *:is([data-invalid]):not([data-disabled], [data-busy]) > & {
    --input-border-color: ${colors.DANGER};
  }
  *:is([data-disabled], [data-busy]) > & {
    --input-color: ${colors.ELEMENT_DISABLED};
    pointer-events: none;
  }
  *:is([data-readonly]) > & {
    cursor: pointer;
  }

  [data-size='sm'] > & {
    --input-size: 30px;
  }
  [data-size='md'] > & {
    --input-size: 36px;
  }
  [data-size='lg'] > & {
    --font-size: 15px;
    --input-size: 40px;
  }

  /* [data-theme='dark'] & {} */
`;
const Control = (props) => {
    const { children, selectProps: { active, busy, disabled, helpers, invalid, leader, length, readonly, size = 'md', theme, } } = props, rest = __rest(props, ["children", "selectProps"]);
    return (jsx("div", Object.assign({ "data-active": active || null, "data-busy": busy || null, "data-disabled": disabled || null, "data-invalid": invalid || null, "data-readonly": readonly || null, "data-size": size, "data-theme": theme || null }, helpers),
        jsx(components.Control, Object.assign({ css: [controlStyle, { ['--input-length']: length }] }, rest),
            leader,
            children)));
};
/**
 * Values
 */
const valueContainerStyle = css `
  align-items: center;
  display: flex;
  flex: 1;
  gap: 4px;
  overflow: hidden;
  padding-block: 4px;
`;
const ValueContainer = (_a) => {
    var _b = _a.selectProps, { isMulti } = _b, selectProps = __rest(_b, ["isMulti"]), props = __rest(_a, ["selectProps"]);
    return (jsx(components.ValueContainer, Object.assign({ css: [
            valueContainerStyle,
            isMulti
                ? css `
            flex-wrap: wrap;
          `
                : null,
        ], selectProps: selectProps }, props)));
};
const multiValueStyle = css `
  align-items: center;
  background: ${colors.ELEMENT_FOCUS};
  border-radius: 6px;
  color: ${colors.WHITE};
  cursor: default;
  display: flex;
  font-weight: 600;
  gap: 4px;
  height: 24px;
  max-width: 100%;
  padding-inline: 8px 4px;
  user-select: none;

  [data-value] {
    ${truncate};
  }

  [data-icon] {
    cursor: pointer;
  }
`;
const MultiValue = (props) => {
    const { children, removeProps } = props;
    return (jsx("div", { css: multiValueStyle },
        jsx("span", { "data-value": true }, children),
        jsx(Icon, Object.assign({ name: "Times", size: "xs" }, removeProps))));
};
const singleValueStyle = css `
  white-space: nowrap;
`;
const SingleValue = (props) => (jsx(components.SingleValue, Object.assign({ css: singleValueStyle }, props)));
/**
 * Input
 */
const placeholderStyle = css `
  color: var(--input-placeholder-color);
  padding-left: 1px;
  position: absolute;
`;
const Placeholder = (props) => (jsx(components.Placeholder, Object.assign({ css: placeholderStyle }, props)));
const inputStyle = css `
  word-break: break-all;

  input {
    ${input$1};
  }
`;
const Input = (props) => jsx(components.Input, Object.assign({ css: inputStyle }, props));
/**
 * Indicators
 */
const indicatorStyle = css `
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s;
`;
const indicatorsContainerStyle = css `
  align-items: center;
  display: flex;
  gap: 8px;
`;
const IndicatorsContainer = (props) => (jsx(components.IndicatorsContainer, Object.assign({ css: indicatorsContainerStyle }, props)));
const ClearIndicator = (props) => {
    return (jsx(components.ClearIndicator, Object.assign({ css: indicatorStyle }, props),
        jsx(Icon, { name: "Times", size: "xs" })));
};
const DropdownIndicator = (props) => {
    const { selectProps: { menuIsOpen }, } = props;
    return (jsx(components.DropdownIndicator, Object.assign({ css: [indicatorStyle, menuIsOpen ? { transform: 'rotateX(180deg)' } : undefined] }, props),
        jsx(Icon, { name: "ChevronDown", size: "xs" })));
};
const loadingIndicatorStyle = css `
  --color: ${colors.ELEMENT_PRIMARY};
  --gap: 2px;
  --range: 4px;
  --size: 4px;
`;
const LoadingIndicator = () => jsx(Idle, { css: loadingIndicatorStyle });
/**
 * Menu
 * TODO: Implement MenuProps
 */
const menuStyle = css `
  --size: 100%;

  position: absolute;
`;
const MenuContainer = (props) => {
    const { cx, innerProps, innerRef } = props, rest = __rest(props, ["cx", "innerProps", "innerRef"]);
    return jsx(Menu, Object.assign({ css: menuStyle, ref: innerRef }, innerProps, rest));
};
const Group = (props) => jsx(components.Group, Object.assign({ css: menuGroup }, props));
const GroupHeading = (props) => jsx(components.GroupHeading, Object.assign({ css: menuGroupTitle }, props));
const menuListStyle = css `
  overflow-y: auto;
  position: relative;
`;
const MenuList = (props) => {
    const { selectProps: { maxMenuHeight } } = props, rest = __rest(props, ["selectProps"]);
    return jsx(components.MenuList, Object.assign({ css: [menuListStyle, { maxHeight: maxMenuHeight }] }, rest));
};
const Option = (props) => {
    const { cx, innerProps, innerRef, isDisabled, isFocused, isSelected } = props, rest = __rest(props, ["cx", "innerProps", "innerRef", "isDisabled", "isFocused", "isSelected"]);
    return (jsx(MenuItem, Object.assign({ active: isSelected, as: "div", "data-hover": isFocused || null, disabled: isDisabled, ref: innerRef }, innerProps, rest)));
};
/**
 * Message
 */
const messageStyle = css `
  ${paragraph};
`;
const LoadingMessage = (props) => {
    return jsx(components.LoadingMessage, Object.assign({ css: messageStyle }, props));
};
const NoOptionsMessage = (props) => {
    return jsx(components.NoOptionsMessage, Object.assign({ css: messageStyle }, props));
};
/**
 * Select
 */
// Drop default styles
// const noopStyles = new Proxy({}, { get: (target, propKey) => () => {} });
const noopStyles = [
    'clearIndicator',
    'container',
    'control',
    'dropdownIndicator',
    'group',
    'groupHeading',
    'indicatorSeparator',
    'indicatorsContainer',
    'input',
    'loadingIndicator',
    'loadingMessage',
    'menu',
    'menuList',
    'menuPortal',
    'multiValue',
    'multiValueLabel',
    'multiValueRemove',
    'noOptionsMessage',
    'option',
    'placeholder',
    'singleValue',
    'valueContainer',
].reduce((acc, style) => {
    return Object.assign(Object.assign({}, acc), { [style]: () => { } });
}, {});
const Select = forwardRef((props, ref) => {
    const { active, busy, components, disabled, invalid, readonly, style, styles: componentStyles } = props, rest = __rest(props, ["active", "busy", "components", "disabled", "invalid", "readonly", "style", "styles"]);
    const helpers = Object.fromEntries(Object.entries(props).filter(([key]) => ['data-hover', 'data-qa'].includes(key)));
    const selectProps = Object.assign({ active,
        busy,
        disabled,
        helpers,
        invalid,
        readonly,
        style }, rest);
    const customStyles = Object.assign(Object.assign({}, noopStyles), componentStyles);
    return (jsx(ReactSelect, Object.assign({ components: Object.assign({ ClearIndicator,
            Control,
            DropdownIndicator,
            Group,
            GroupHeading,
            IndicatorsContainer, IndicatorSeparator: () => null, Input,
            LoadingIndicator,
            LoadingMessage, Menu: MenuContainer, MenuList,
            MultiValue,
            NoOptionsMessage,
            Option,
            Placeholder,
            SelectContainer,
            SingleValue,
            ValueContainer }, components), isDisabled: readonly || disabled, isLoading: busy, menuIsOpen: active, ref: ref, styles: customStyles }, selectProps)));
});

/**
 * Styled RC Slider wrapper
 * @see https://slider.react-component.now.sh/
 */
const Slider = (_a) => {
    var { bleed = true, reverse, theme, vertical } = _a, sliderProps = __rest(_a, ["bleed", "reverse", "theme", "vertical"]);
    const containerProps = Object.fromEntries(Object.entries(sliderProps).filter(([key]) => ['className', 'data-hover', 'data-qa'].includes(key)));
    return (jsx("div", Object.assign({}, containerProps, { css: sliderWrapper, "data-bleed": bleed, "data-direction": vertical ? 'vertical' : 'horizontal', "data-reverse": reverse || null, "data-theme": theme || null }),
        jsx(RcSlider, Object.assign({}, sliderProps, { css: slider, reverse: reverse, vertical: vertical }))));
};

/**
 * Checkbox, Radio button or Toggle switch
 */
const Switch = forwardRef((_a, ref) => {
    var { as = 'label', children, disabled, label, theme, type = 'checkbox', appearance = type === 'radio' ? 'radio' : 'checkbox' } = _a, inputProps = __rest(_a, ["as", "children", "disabled", "label", "theme", "type", "appearance"]);
    const containerProps = Object.fromEntries(Object.entries(inputProps).filter(([key]) => ['className', 'data-hover', 'style'].includes(key)));
    return (React.createElement(Container$3, Object.assign({ as: as, "data-disabled": disabled || null, "data-label": label || null, "data-theme": theme || null }, containerProps),
        React.createElement("input", Object.assign({ ref: ref, type: type, disabled: disabled }, inputProps)),
        React.createElement(Indicator, { "data-appearance": appearance }),
        children,
        label && React.createElement(Label$1, null, label)));
});
/**
 * Note that [data-hover] are here only to help
 * better illustrate `:hover` state in the dedicated story.
 */
const Container$3 = styled.label `
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
const Label$1 = styled.span `
  ${button};
  ${truncate};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;

/**
 * Textarea
 * TODO: Implement auto-grow feature
 */
const Textarea = forwardRef((_a, ref) => {
    var { active, as = 'label', busy, disabled, invalid, length, readonly, resize = 'vertical', theme } = _a, textareaProps = __rest(_a, ["active", "as", "busy", "disabled", "invalid", "length", "readonly", "resize", "theme"]);
    const _b = Object.fromEntries(Object.entries(textareaProps).filter(([key]) => ['className', 'data-active', 'data-invalid', 'data-hover', 'style'].includes(key))), { style } = _b, containerProps = __rest(_b, ["style"]);
    return (React.createElement(Container$2, Object.assign({ as: as, "data-active": active || null, "data-busy": busy || null, "data-disabled": disabled || null, "data-invalid": invalid || null, "data-readonly": readonly || null, "data-resize": resize, "data-theme": theme || null, style: Object.assign({ ['--input-length']: length }, style) }, containerProps),
        React.createElement(Element, Object.assign({ ref: ref, disabled: disabled, readOnly: readonly }, textareaProps)),
        busy && (React.createElement(Idle, { gap: "2px", size: "4px", "data-indicator": true, style: {
                ['--color']: colors.ELEMENT_PRIMARY,
            } }))));
});
const Container$2 = styled.label `
  ${inputContainer};

  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  [data-indicator] {
    position: absolute;
  }
`;
const Element = styled.textarea `
  ${input$1};

  width: 100%;

  [data-resize='both'] & {
    resize: both;
  }
  [data-resize='horizontal'] & {
    resize: horizontal;
  }
  [data-resize='vertical'] & {
    resize: vertical;
  }
  [data-resize='none'] & {
    resize: none;
  }
`;

/**
 * Status
 */
const Status = (_a) => {
    var { children, icon, text, theme } = _a, props = __rest(_a, ["children", "icon", "text", "theme"]);
    const isBeacon = !(text || children);
    return (React.createElement(Container$1, Object.assign({ "data-beacon": isBeacon || null, "data-theme": theme || null }, props),
        icon,
        React.createElement(Text, { truncate: true }, text ? text : children)));
};
const Container$1 = styled.span `
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
    var { active, as = 'button', icon = React.createElement(Icon, { name: "ChevronRight", size: "xs" }), status, text } = _a, props = __rest(_a, ["active", "as", "icon", "status", "text"]);
    return (React.createElement(NavItemContainer, Object.assign({ as: as, "data-active": active || null, "data-status": status || null, ref: ref, type: as === 'button' ? 'button' : undefined }, props),
        status && React.createElement(Status, { theme: status || null }),
        React.createElement(Text, { "data-text": true, truncate: true }, text),
        icon));
});
const NavItemContainer = styled.button `
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

  [data-theme='dark'] & {
    --nav-item-background-color: ${colors.DARK_BACKGROUND_SECONDARY};
    --nav-item-border-color: #4a5066;
    --nav-item-color: ${colors.WHITE};

    &[data-active] {
      --nav-item-background-color: ${colors.DARK_ELEMENT_FOCUS};
    }
  }
`;
/**
 * Navigation item
 */
const Nav = (_a) => {
    var { as = 'nav', theme } = _a, props = __rest(_a, ["as", "theme"]);
    return (React.createElement(NavContainer, Object.assign({ as: as, "data-theme": theme || null }, props)));
};
const NavContainer = styled.nav `
  display: flex;
  flex-direction: column;
`;

/**
 * Table data cell
 */
const Td = (_a) => {
    var { align, justify, numeric = 'normal', size } = _a, props = __rest(_a, ["align", "justify", "numeric", "size"]);
    return (React.createElement(TdContainer, Object.assign({ "data-align": align || null, "data-justify": justify || null, "data-numeric": numeric || null }, props)));
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

  &[data-numeric='slashed-zero'] {
    font-variant-numeric: slashed-zero;
  }
  &[data-numeric='tabular-nums'] {
    font-variant-numeric: tabular-nums;
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

const CLASSNAME = 't00ltip';
const DELAY_ENTER = 0.4;
const DELAY_LEAVE = 0.1;
const SEPARATOR = '+';
const SUPER_KEY = 'super';
const SUPER_VALUE = navigator.platform.includes('Mac') ? '⌘' : 'Ctrl';
/**
 * Tooltip wrapper.
 * TOTO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
const Tooltip = (_a) => {
    var { children, delayEnter = DELAY_ENTER, delayLeave = DELAY_LEAVE, disabled, label, placement, shortcut = '', size = '192px' } = _a, props = __rest(_a, ["children", "delayEnter", "delayLeave", "disabled", "label", "placement", "shortcut", "size"]);
    const shortcuts = useMemo(() => shortcut
        .split(SEPARATOR)
        .map((key, i) => React.createElement(Key, { key: `key-${i}` }, key.replace(SUPER_KEY, SUPER_VALUE)))
        .reduce((acc, key, i) => {
        return acc.length === 0 ? [key] : [...acc, React.createElement(Separator, { key: `separator-${i}` }), key];
    }, []), [shortcut]);
    if (disabled) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Global, { styles: globalStyle }),
        React.createElement(RcTooltip, Object.assign({ arrowContent: React.createElement(Arrow, null), mouseEnterDelay: delayEnter, mouseLeaveDelay: delayLeave, overlay: React.createElement(Container, { style: { ['--size']: size } },
                label && React.createElement(Label, { "data-label": true }, label),
                shortcut && React.createElement(Shortcut, null, shortcuts)), placement: placement, prefixCls: CLASSNAME }, props), children)));
};
const globalStyle = css `
  .${CLASSNAME} {
    --background-color: #020511;

    --arrow-bottom: auto;
    --arrow-left: auto;
    --arrow-right: auto;
    --arrow-size: 16px;
    --arrow-top: auto;
    --arrow-translate-x: 0;
    --arrow-translate-y: 0;

    animation: ${fadeIn} 0.2s 0.1s both;
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 1;

    &[class*='hidden'] {
      display: none;
    }

    &[class*='bottom'] {
      --arrow-top: 0;
      --arrow-translate-y: -2px;
    }
    &[class*='bottom'],
    &[class*='top'] {
      --arrow-left: 50%;
      --arrow-translate-x: -50%;
    }
    &[class*='top'] {
      --arrow-bottom: 0;
      --arrow-translate-y: 2px;
    }
    &[class*='left'] {
      --arrow-right: 0;
      --arrow-translate-x: 2px;
    }
    &[class*='left'],
    &[class*='right'] {
      --arrow-top: 50%;
      --arrow-translate-y: -50%;
    }
    &[class*='right'] {
      --arrow-left: 0;
      --arrow-translate-x: -2px;
    }
  }
`;
const Container = styled.div `
  ${base$1};

  --color: ${colors.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --line-height: calc(16 / 12);

  background-color: var(--background-color);
  border-radius: 6px;
  color: ${colors.WHITE};
  display: inline-flex;
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;
`;
const Arrow = styled.div `
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  height: var(--arrow-size);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`;
const Label = styled.span ``;
const Shortcut = styled.span `
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`;
const Key = styled.kbd `
  --arrow-size: 24px;

  background-color: #50525a;
  border-radius: 4px;
  display: inline-grid;
  font-family: inherit;
  font-weight: 700;
  height: var(--arrow-size);
  min-width: var(--arrow-size);
  padding-inline: 6px;
  place-items: center;
  text-transform: capitalize;
`;
const Separator = styled.span `
  --separator-size: 8px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  height: var(--separator-size);
  width: var(--separator-size);
`;

export { Button, ClickOutsideGuard, Dialog, EMOTION_DISABLE_SSR, Field, FieldLabel, FieldMessage, FieldText, Flex, Grid, Icon, Idle, Input$1 as Input, Menu, MenuDivider, MenuGroup, MenuGroupTitle, MenuItem, MenuTitle, Nav, NavContainer, NavItem, NumberInput, Order, Range, Select, Slider, Spacer, Status, Switch, Table, Tbody, Td, Text, Textarea, Th, Thead, Tooltip, Tr, TrContainer, base$1 as base, button, colors, h1, h2, h3, h4, h5, input$2 as input, label, paragraph };
//# sourceMappingURL=index.js.map
