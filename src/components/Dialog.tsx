/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes, ReactElement, useCallback, useEffect } from 'react';

import { colors, paragraph } from '../theme';
import { EASING } from '../utils/animations';
import { AlignmentFlexboxType, AlignmentPrimaryType, AlignmentTertiaryType } from '../utils/types';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { Flex } from './layout';
import { Text } from './Text';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Active
   */
  active?: boolean;
  /**
   * Backdrop
   */
  backdrop?: boolean;
  /**
   * Rejectable
   */
  rejectable?: boolean;
  /**
   * Size
   */
  size?: string;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * Header
   */
  header?: ReactElement;
  /**
   * Title
   */
  title?: string;

  /**
   * Body bleed (handling `overflow`)
   */
  bleed?: boolean;

  /**
   * Footer
   */
  footer?: ReactElement;
  /**
   * Footer alignment, primary axis
   */
  justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;

  /**
   * Event: Close
   */
  onClose: () => void;
}

/**
 * Dialog
 */
export const Dialog: React.FC<DialogProps> = ({
  active = false,
  backdrop = true,
  bleed = false,
  children,
  footer,
  header,
  justify = 'flex-end',
  onClose,
  rejectable = true,
  size,
  theme,
  title,
  ...props
}): JSX.Element => {
  const onKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (rejectable) {
      document.addEventListener('keyup', onKeyUp);
      return () => {
        document.removeEventListener('keyup', onKeyUp);
      };
    }
  }, [onClose, onKeyUp, rejectable]);

  return (
    <DialogWrapper
      data-active={active || null}
      data-bleed={bleed || null}
      data-foot={footer ? true : null}
      data-head={header || title ? true : null}
      data-theme={theme || null}
    >
      {backdrop && <Backdrop onClick={rejectable ? onClose : undefined} />}
      <DialogContainer style={{ ['--dialog-size' as string]: size }} {...props}>
        {(header || title) && (
          <header css={headerStyle}>
            {header ? (
              header
            ) : (
              <Text as="h1" clamp={1}>
                {title}
              </Text>
            )}
          </header>
        )}
        <Body>{children}</Body>
        {footer && (
          <Flex as="footer" css={footerStyle} justify={justify}>
            {footer}
          </Flex>
        )}
        {rejectable && <Control onClick={onClose} />}
      </DialogContainer>
    </DialogWrapper>
  );
};

// TypeScript warning will be gone after this boi is resolved
// https://github.com/microsoft/typescript-styled-plugin/issues/137#issuecomment-848930098
const backdropAnimation = keyframes`
  0% {
    --dialog-backdrop-alpha: 0;
  }
  100% {
    --dialog-backdrop-alpha: 0.5;
  }
`;

const dialogAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1.0);
  }
`;

const container = css`
  padding: calc(var(--dialog-indent) * 2) calc(var(--dialog-indent) * 3);
`;

const DialogWrapper = styled.div`
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
  --dialog-index: 10;
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

const Backdrop = styled.div`
  background-color: hsla(var(--dialog-backdrop-color) / var(--dialog-backdrop-alpha));
  inset: inherit;
  position: inherit;

  [data-active] & {
    animation: ${backdropAnimation} 2s ${EASING.easeOutCirc} both;
  }
`;

const DialogContainer = styled.section`
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
const headerStyle = css`
  ${container};

  padding-right: 40px;
`;

/**
 * Dialog body
 */
const Body = styled.div`
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

  & > :first-child {
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
const footerStyle = css`
  ${container};

  border-top: 1px solid var(--dialog-border-color);
  display: flex;
  gap: 8px;
`;

/**
 * Dialog control
 */
const controlStyle = css`
  --button-color: ${colors.TEXT_TERTIARY};

  position: absolute;
  right: calc(var(--dialog-indent) * 2);
  top: calc(var(--dialog-indent) * 1);
  z-index: calc(var(--dialog-index) + 1);

  &:is(:hover) {
    --button-color: ${colors.TEXT_PRIMARY};
  }
`;

const Control = (props: ButtonProps) => (
  <Button
    css={controlStyle}
    icon={<Icon name="Times" />}
    round
    synthetic
    variant="tertiary"
    {...props}
  />
);