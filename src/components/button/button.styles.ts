import { css, SerializedStyles } from '@emotion/react';
import { adjustHue, darken, desaturate, lighten } from 'color2k';

import { colors } from '../../colors';
import { Size, Variant } from '../../constants';
import { button as buttonToken } from '../../typography';

const base = css`
  ${buttonToken};

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
  flex-shrink: 0;
  gap: var(--button-gap);
  height: var(--button-size);
  justify-content: center;
  margin: 0;
  min-width: var(--button-size);
  overflow: hidden;
  outline: 0;
  padding: 0 var(--button-indent);
  position: relative;
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

  &:is(*, #chucknorris) {
    text-decoration: none;
  }
`;

export const button = css`
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
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */
type Variants = Record<string, SerializedStyles>;

/**
 * Button sizes
 */
export const sizes: Variants = {};

sizes[Size.SMALL] = css`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;

sizes[Size.MEDIUM] = css`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 36px;
`;

sizes[Size.LARGE] = css`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;

export const variants: Variants = {};

/**
 * TODO: Themed mutations are not designed.
 * 🗣️ We can forget the `sythetic` (i.e. [data-synthetic]) for themed mutations.
 */
variants[Variant.PRIMARY] = css`
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

  &[data-theme='danger'] {
    --button-background-color: ${colors.DANGER};
    --button-border-color: ${colors.DANGER};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${darken(colors.DANGER, 0.16)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
  &[data-theme='success'] {
    --button-background-color: ${colors.SUCCESS};
    --button-border-color: ${colors.SUCCESS};
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${darken(colors.SUCCESS, 0.02)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
    }
  }
`;

variants[Variant.SECONDARY] = css`
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

  &[data-theme='danger'] {
    --_color: ${lighten(desaturate(adjustHue(colors.DANGER, 1), 0.1), 0.34)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${lighten(desaturate(adjustHue(colors.DANGER, 2), 0.2), 0.3)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${darken(desaturate(colors.DANGER, 0.4), 0.1)};
    }
  }
  &[data-theme='success'] {
    --_color: ${lighten(desaturate(adjustHue(colors.SUCCESS, 1), 0.6), 0.5)};
    --button-background-color: var(--_color);
    --button-border-color: var(--_color);
    &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy], [data-disabled]) {
      --_color: ${lighten(desaturate(adjustHue(colors.SUCCESS, 2), 0.4), 0.4)};
      --button-background-color: var(--_color);
      --button-border-color: var(--_color);
      --button-color: ${darken(desaturate(colors.SUCCESS, 0.4), 0.1)};
    }
  }
`;

variants[Variant.TERTIARY] = css`
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
