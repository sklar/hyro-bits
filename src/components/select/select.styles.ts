import { css } from '@emotion/react';

import { colors } from '../../colors';
import { truncate } from '../../styles';
import { paragraph } from '../../typography';
import { container as containerStyle, input as inputStyle } from '../input';

/**
 * Container
 */
export const container = css`
  position: relative;
`;

/**
 * Control
 */
export const control = css`
  ${containerStyle};

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

/**
 * Values
 */
export const valueContainer = css`
  align-items: center;
  display: grid;
  flex: 1;
  gap: 4px;
  overflow: hidden;
  padding-block: 4px;
`;

export const multiValue = css`
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
  transition: background-color 0.2s;
  user-select: none;

  [data-value] {
    ${truncate};
  }
  [data-container] {
    display: contents;
  }
  [data-icon] {
    cursor: pointer;
  }

  [data-disabled] & {
    background: ${colors.ELEMENT_DISABLED};
    padding-inline-end: 8px;

    [data-icon] {
      display: none;
    }
  }
`;

export const singleValue = css`
  grid-area: 1 / 1 / 2 / 3;
  max-width: 100%;
  white-space: nowrap;
`;

/**
 * Input
 */
export const placeholder = css`
  color: var(--input-placeholder-color);
  padding-left: 1px;
  position: absolute;
`;

export const input = css`
  display: inline-grid;
  flex: 1;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0 min-content;

  &::after {
    content: attr(data-value) ' ';
    font: inherit;
    grid-area: 1 / 2 / auto / auto;
    white-space: pre;
  }

  input {
    ${inputStyle};

    grid-area: 1 / 2 / auto / auto;
    width: max(100%, 2px);
  }
`;

/**
 * Indicators
 */
export const indicatorsContainer = css`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const indicator = css`
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s;
`;

export const loadingIndicator = css`
  --color: ${colors.ELEMENT_PRIMARY};
  --gap: 2px;
  --range: 4px;
  --size: 4px;
`;

/**
 * Menu
 */
export const menu = css`
  --index: 2;
  --size: 100%;

  &[data-placement='bottom'] {
    top: 100%;
  }
  &[data-placement='top'] {
    bottom: 100%;
  }

  &[data-position='absolute'] {
    position: absolute;
  }
  &[data-position='static'] {
    position: relative;
  }
`;

export const menuList = css`
  overflow-y: auto;
  position: relative;
`;

/**
 * Message
 */
export const message = css`
  ${paragraph};
`;

// Drop default styles
// const select = new Proxy({}, { get: (target, propKey) => () => {} });
export const components = [
  'clearIndicator',
  'container',
  'control',
  'dropdownIndicator',
  'group',
  'groupHeading',
  'indicatorsContainer',
  'indicatorSeparator',
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
  return { ...acc, [style]: () => {} };
}, {});
