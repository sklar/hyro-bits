import { css, keyframes } from '@emotion/react';

import { EASING } from '../../styles';

export const idleAnimation = keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`;

export const element = css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${idleAnimation} var(--duration) ${EASING.easeInOut} var(--shift) infinite alternate;
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
`;

export const idle = css`
  display: inline-flex;
  gap: var(--gap);
`;
