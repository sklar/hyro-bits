import { css } from '@emotion/react';

import { colors } from '../../colors';
import { fadeInAnimation } from '../../styles';
import { paragraph } from '../../typography';

export const global = css`
  ${paragraph};

  --background-color: ${colors.TEXT_PRIMARY};
  --color: #e9effe;
  --index: 1;

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  --key-background-color: #e9effe;
  --key-font-weight: 600;
  --key-color: ${colors.TEXT_PRIMARY};
  --key-size: 24px;

  animation: ${fadeInAnimation} 0.2s 0.1s both;
  display: block;
  position: absolute;
  z-index: var(--index);

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
`;

export const tooltip = css`
  background-color: var(--background-color);
  border-radius: 6px;
  isolation: isolate;
  max-width: var(--size);
  padding: 8px 12px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`;

export const arrow = css`
  aspect-ratio: 1;
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`;

export const label = css`
  align-self: center;
`;

export const shortcut = css`
  align-items: center;
  display: inline-flex;
  gap: 4px;

  [data-label] + & {
    margin-left: 8px;
  }
`;

export const key = css`
  ${paragraph};

  --font-weight: var(--key-font-weight);

  background-color: var(--key-background-color);
  border-radius: 4px;
  display: inline-grid;
  height: var(--key-size);
  min-width: var(--key-size);
  padding-inline: 4px;
  place-items: center;
  text-transform: capitalize;
`;

export const separator = css`
  [data-icon] {
    --icon-size: 8px;
  }
`;
