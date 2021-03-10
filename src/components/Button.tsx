import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Idle as Indicator } from '../components/indicator';
import { colors } from '../theme';
import { Variant } from '../utils/types';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Href
   */
  href?: string;
  /**
   * Label
   */
  text?: string;
  /**
   * Type
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * Icon
   */
  icon?: ReactElement;
  /**
   * Icon placement.
   */
  placement?: 'left' | 'right';
  /**
   * Round
   */
  round?: boolean;
  /**
   * Theme
   */
  // theme?: Exclude<Theme, 'notice'>;
  /**
   * Toggle
   */
  toggle?: boolean;
  /**
   * Variant
   */
  variant?: Variant;

  /**
   * State: Active
   */
  active?: boolean;
  /**
   * State: Busy
   */
  busy?: boolean;
  /**
   * State: Disabled
   */
  disabled?: boolean;

  /**
   * Event: Click
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  active,
  busy,
  children,
  disabled,
  href,
  icon,
  placement,
  round,
  text,
  // theme,
  toggle,
  type = 'button',
  variant = 'secondary',
  ...props
}): JSX.Element => {
  // const delegated = { theme, variant, ...props };
  const delegated = { variant, ...props };
  return (
    <Element
      as={href ? 'a' : 'button'}
      data-active={active || null}
      data-busy={busy || null}
      data-icon={(icon && !(text || children) && true) || placement}
      data-round={round || null}
      // data-theme={theme || null}
      data-toggle={toggle || null}
      disabled={busy || disabled}
      href={href}
      type={type}
      {...delegated}
    >
      {icon && icon}
      {text ? text : children}
      {busy && <Indicator style={{ position: 'absolute' }} />}
    </Element>
  );
};

const button = css`
  --background-color: ;
  --border-color: ;
  --border-size: 1px;
  --box-shadow: ;
  --color: ;
  --font-family: 'Inter', sans-serif;
  --font-size: 14px;
  --font-weight: 600;
  --gap: 8px;
  --icon-offset: 4px;
  --icon-size: 16px;
  --icon-rotation: 0;
  --icon-transform: ;
  --indent: 14px;
  --radius: 6px;
  --size: 32px;

  align-items: center;
  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: 0 0 0 3px var(--box-shadow);
  box-sizing: border-box;
  color: var(--color);
  display: inline-flex;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  gap: var(--gap);
  height: var(--size);
  justify-content: center;
  letter-spacing: -0.01em;
  line-height: var(--size);
  margin: 0;
  min-width: var(--size);
  overflow: hidden;
  outline: 0;
  padding: 0 var(--indent);
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 1;

  svg {
    flex-shrink: 0;
    height: var(--icon-size);
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transform: var(--icon-transform);
    will-change: transform;
  }
`;

/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */

const modification: Record<string, {}> = {};

modification['primary'] = css`
  --background-color: ${colors.ELEMENT_PRIMARY};
  --border-color: ${colors.ELEMENT_PRIMARY};
  --color: ${colors.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy]) {
    --box-shadow: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --background-color: ${colors.ELEMENT_ACTIVE};
    --border-color: ${colors.ELEMENT_ACTIVE};
  }
`;

modification['secondary'] = css`
  --background-color: ${colors.ELEMENT_SECONDARY};
  --border-color: ${colors.ELEMENT_SECONDARY};
  --color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy]) {
    --box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --background-color: #d8e1fc;
    --border-color: #d8e1fc;
    --color: ${colors.ELEMENT_PRIMARY};
  }
  &:disabled:not([data-busy]) {
    --color: ${colors.WHITE};
  }
`;

modification['tertiary'] = css`
  --background-color: ${colors.TRANSPARENT};
  --border-color: ${colors.TRANSPARENT};
  --color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy]) {
    --color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, :hover, [data-active], [data-hover], [data-pressed]):not(:disabled, [data-busy]) {
    --background-color: ${colors.ELEMENT_SECONDARY};
    --border-color: ${colors.ELEMENT_SECONDARY};
  }
  &:disabled:not([data-busy]) {
    --background-color: ${colors.TRANSPARENT};
    --border-color: ${colors.TRANSPARENT};
    --color: ${colors.ELEMENT_DISABLED};
  }
`;

const Element = styled.button<ButtonProps>`
  ${button};

  &[data-round] {
    --radius: 1000px;
  }

  &:not(:disabled, [data-busy]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: transparent;
  }

  &[data-toggle] {
    --icon-transform: rotateX(calc(var(--icon-rotation) * 180deg)) rotateZ(90deg);

    &[data-active] {
      --icon-rotation: 1;
    }
  }

  &:disabled:not([data-busy]) {
    --background-color: ${colors.ELEMENT_DISABLED};
    --border-color: ${colors.ELEMENT_DISABLED};
  }

  ${({ variant }) => variant && modification[variant]};

  &[data-icon='true'] {
    padding: 0;
    width: var(--size);
  }
  &[data-icon='left'] {
    padding-left: calc(var(--indent) - var(--icon-offset));
  }
  &[data-icon='right'] {
    padding-right: calc(var(--indent) - var(--icon-offset));
    svg {
      order: 2;
    }
  }

  /* &[data-theme='danger'] {}
  &[data-theme='success'] {}
  &[data-theme='warning'] {} */
`;
