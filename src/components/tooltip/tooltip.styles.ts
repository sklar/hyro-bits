import { css } from '@emotion/react';

import { colors } from '../../colors';
import { fadeInAnimation } from '../../styles';
import { base } from '../../typography';

export const global = css`
  --background-color: #020511;

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  animation: ${fadeInAnimation} 0.2s 0.1s both;
  display: block;
  position: absolute;
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
`;

export const tooltip = css`
  ${base};

  --color: ${colors.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --line-height: calc(16 / 12);

  background-color: var(--background-color);
  border-radius: 6px;
  color: ${colors.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`;

export const arrow = css`
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  height: var(--arrow-size);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`;

export const label = css``;

export const shortcut = css`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`;

export const key = css`
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

export const separator = css`
  --separator-size: 8px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  height: var(--separator-size);
  width: var(--separator-size);
`;
