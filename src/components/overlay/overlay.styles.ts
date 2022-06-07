import { css, keyframes } from '@emotion/react';

export const overlayAnimation = keyframes`
  0% {
    --overlay-alpha: 0%;
  }
  100% {
    --overlay-alpha: 50%;
  }
`;

export const overlay = css`
  @property --overlay-alpha {
    inherits: true;
    initial-value: 0%;
    syntax: '<percentage>';
  }

  --overlay-color: 0deg 0% 0%;
  --overlay-duration: 0.6s;
  --overlay-easing: linear;
  --overlay-index: ;

  background-color: hsl(var(--overlay-color) / var(--overlay-alpha));
  display: none;
  inset: 0;
  position: fixed;
  z-index: var(--overlay-index);

  &[data-active] {
    animation: ${overlayAnimation} var(--overlay-duration) var(--overlay-easing) both;
    display: block;
  }
`;
