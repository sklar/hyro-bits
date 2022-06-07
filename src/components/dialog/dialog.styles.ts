import { css, keyframes } from '@emotion/react';

import { colors } from '../../colors';
import { EASING } from '../../styles';
import { h1, paragraph } from '../../typography';
import { EMOTION_DISABLE_SSR } from '../../utils';
import { overlay, overlayAnimation } from '../overlay';

const container = css`
  padding: calc(var(--dialog-indent) * 2) calc(var(--dialog-indent) * 3);
`;

/**
 * Backdrop
 */
export const backdrop = css`
  ${overlay};

  display: block;

  [data-active] & {
    animation: ${overlayAnimation} 2s ${EASING.easeOutCirc} both;
  }
`;

/**
 * Dialog wrapper
 */
export const wrapper = css`
  ${paragraph};

  --dialog-background-color: 0deg 0% 100%;
  --dialog-border-color: ${colors.STROKE};
  --dialog-border-radius: 6px;
  --dialog-border-size: 1px;
  --dialog-box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  --dialog-indent: 8px;
  --dialog-index: ;
  --dialog-size: 600px;

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

/**
 * Dialog
 */
export const dialogAnimation = keyframes`
 0% {
   opacity: 0.5;
   transform: scale(0.95);
 }
 100% {
   opacity: 1;
   transform: scale(1.0);
 }
`;

export const dialog = css`
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
export const header = css`
  ${container};

  padding-right: 40px;
`;

/**
 * Dialog title
 */
export const title = css`
  &:is(*, #chucknorris) {
    ${h1};
  }
`;

/**
 * Dialog body
 */
export const body = css`
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
export const footer = css`
  ${container};

  border-top: 1px solid var(--dialog-border-color);
  display: flex;
  gap: 8px;
`;

/**
 * Dialog control
 */
export const control = css`
  --button-color: ${colors.TEXT_TERTIARY};

  position: absolute;
  right: calc(var(--dialog-indent) * 2);
  top: calc(var(--dialog-indent) * 1);
  z-index: calc(var(--dialog-index) + 1);

  &:is(:hover) {
    --button-color: ${colors.TEXT_PRIMARY};
  }
`;
