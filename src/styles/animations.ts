import { keyframes } from '@emotion/react';
import { Keyframes } from '@emotion/serialize';

/**
 * Easing.
 * @see http://matthewlein.com/ceaser/
 */
export const EASING = {
  easeInOut: 'ease-in-out',
  easeInOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
  easeOutCubic: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
};

/**
 * Fade In.
 */
export const fadeInAnimation: Keyframes = keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;
