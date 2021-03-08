import { css } from '@emotion/react';
import { EASING } from './animations';

/**
 * Ripple effect.
 */
export const ripple = css`
  --effect-color: ;
  --use-effect: ;

  background: var(--effect-color);
  border-radius: 50%;
  content: '';
  display: block;
  flex: none;
  isolation: isolate;
  left: 0;
  opacity: calc(var(--use-effect) * 1);
  padding-top: 100%;
  pointer-events: none;
  position: absolute;
  right: 0;
  transform: scale(calc(1 - var(--use-effect) + 0.35));
  transition-duration: calc((1 - var(--use-effect)) * 1s), calc((1 - var(--use-effect)) * 0.5s);
  transition-property: opacity, transform;
  transition-timing-function: ${EASING.easeOutCubic};
`;
