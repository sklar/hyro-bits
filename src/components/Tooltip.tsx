import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import RcTooltip from 'rc-tooltip';
import React, { ReactElement, useMemo } from 'react';

import { base, colors } from '../theme';
import { fadeIn } from '../utils/animations';

const CLASSNAME = 't00ltip';
const DELAY_ENTER = 0.4;
const DELAY_LEAVE = 0.1;
const SEPARATOR = '+';
const SUPER_KEY = 'super';
const SUPER_VALUE = navigator.platform.includes('Mac') ? '⌘' : 'Ctrl';

export interface TooltipProps {
  /**
   * Children
   */
  children?: ReactElement;
  /**
   * Content
   */
  content?: ReactElement;
  /**
   * Label
   */
  label?: string;
  /**
   * Shortcut
   */
  shortcut?: string;

  /**
   * Delay, onmouseenter
   */
  delayEnter?: number;
  /**
   * Delay, onmouseleave
   */
  delayLeave?: number;
  /**
   * Placement
   */
  placement?: 'bottom' | 'left' | 'right' | 'top';

  /**
   * Size aka max. width
   */
  size?: string;

  /**
   * State: Disabled
   */
  disabled?: boolean;
}

/**
 * Tooltip wrapper.
 * TOTO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delayEnter = DELAY_ENTER,
  delayLeave = DELAY_LEAVE,
  disabled,
  label,
  placement,
  shortcut = '',
  size = '192px',
  ...props
}): JSX.Element => {
  const shortcuts = useMemo(
    () =>
      shortcut
        .split(SEPARATOR)
        .map((key, i) => <Key key={`key-${i}`}>{key.replace(SUPER_KEY, SUPER_VALUE)}</Key>)
        .reduce((acc: JSX.Element[], key, i) => {
          return acc.length === 0 ? [key] : [...acc, <Separator key={`separator-${i}`} />, key];
        }, []),
    [shortcut]
  );

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <>
      <Global styles={globalStyle} />
      <RcTooltip
        arrowContent={<Arrow />}
        mouseEnterDelay={delayEnter}
        mouseLeaveDelay={delayLeave}
        overlay={
          <Container data-content={content || null} style={{ ['--size' as string]: size }}>
            {content ? (
              content
            ) : (
              <>
                {label && <Label data-label>{label}</Label>}
                {shortcut && <Shortcut>{shortcuts}</Shortcut>}
              </>
            )}
          </Container>
        }
        placement={placement}
        prefixCls={CLASSNAME}
        {...props}
      >
        {children}
      </RcTooltip>
    </>
  );
};

const globalStyle = css`
  .${CLASSNAME} {
    --background-color: #020511;

    --arrow-bottom: auto;
    --arrow-left: auto;
    --arrow-right: auto;
    --arrow-size: 16px;
    --arrow-top: auto;
    --arrow-translate-x: 0;
    --arrow-translate-y: 0;

    animation: ${fadeIn} 0.2s 0.1s both;
    display: block;
    position: absolute;
    pointer-events: none;
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
  }
`;

const Container = styled.div`
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

  &:not([data-content]) {
    display: inline-flex;
  }
`;

const Arrow = styled.div`
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  height: var(--arrow-size);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`;

const Label = styled.span``;

const Shortcut = styled.span`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`;

const Key = styled.kbd`
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

const Separator = styled.span`
  --separator-size: 8px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  height: var(--separator-size);
  width: var(--separator-size);
`;
