import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Idle as Indicator } from 'components/indicator';
import { ElementSize, ElementVariant } from 'utils/constants';
import { ripple } from 'utils/effects';

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
   * Effect
   */
  effect?: boolean;
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
   * Size
   */
  size?: `${ElementSize}`;
  /**
   * Toggle
   */
  toggle?: boolean;
  /**
   * Variant
   */
  variant?: `${ElementVariant}`;

  /**
   * State: Active
   */
  isActive?: boolean;
  /**
   * State: Busy
   */
  isBusy?: boolean;
  /**
   * State: Disabled
   */
  isDisabled?: boolean;

  /**
   * Event: Click
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  effect = true,
  href,
  icon,
  isActive,
  isBusy,
  isDisabled,
  placement = 'left',
  round,
  size = 'md',
  text,
  toggle,
  type = 'button',
  variant = 'secondary',
  ...props
}): JSX.Element => {
  const delegated = { size, variant, ...props };
  return (
    <Element
      as={href ? 'a' : 'button'}
      data-active={isActive || null}
      data-busy={isBusy || null}
      data-effect={effect || null}
      data-icon={(icon && !(text || children) && true) || placement}
      data-round={round || null}
      data-toggle={toggle || null}
      disabled={isBusy || isDisabled}
      href={href}
      type={type}
      {...delegated}
    >
      {icon && icon}
      {text ? text : children}
      {isBusy && <Indicator style={{ position: 'absolute' }} />}
    </Element>
  );
};

const button = css`
  --background-color: #eee;
  --border-color: #eee;
  --border-size: 1px;
  --color: #0f152e;
  --font-family: 'Inter', sans-serif;
  --font-weight: 500;
  --icon-size: 16px;
  --radius: 4px;

  --set-icon: 0;
  --use-effect: 0;

  align-items: center;
  background-color: var(--background-color);
  border: var(--border-size) solid var(--border-color);
  border-radius: var(--radius);
  box-sizing: border-box;
  color: var(--color);
  display: inline-flex;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  gap: var(--gap);
  height: var(--size);
  justify-content: center;
  line-height: var(--size);
  margin: 0;
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
    transform: rotateX(calc(var(--set-icon) * 180deg));
    will-change: transform;
  }
`;

const modification: Record<string, {}> = {};

modification['primary'] = css`
  --background-color: #004bff;
  --border-color: #004bff;
  --color: #fff;
`;

modification['secondary'] = css`
  --background-color: #fff;
  --border-color: #004bff;
  --color: #004bff;

  &:disabled:not([data-busy]) {
    --background-color: #fff;
  }
`;

modification['tertiary'] = css`
  --background-color: #eee;
  --border-color: #eee;
  --color: #0f152e;
`;

modification['sm'] = css`
  --font-size: 10px;
  --gap: 3px;
  --indent: 8px;
  --size: 23px;
`;
modification['md'] = css`
  --font-size: 12px;
  --gap: 5px;
  --indent: 10px;
  --size: 30px;
`;
modification['lg'] = css`
  --font-size: 13px;
  --gap: 8px;
  --indent: 12px;
  --size: 36px;
`;

const Element = styled.button<ButtonProps>`
  ${button};

  &[data-round] {
    --radius: 100px;
  }

  &[data-toggle][data-active] {
    --set-icon: 1;
  }

  &:not(:disabled, [data-busy]) {
    cursor: pointer;

    &[data-effect] {
      --effect-color: #004bff;

      &::before {
        ${ripple};
        z-index: -1;
      }
    }
  }

  &:active {
    --use-effect: 1;
  }

  &[data-active],
  &:not(:disabled, [data-busy]):hover {
    --background-color: #3370ff;
    --border-color: #3370ff;
    --color: #fff;
  }

  &[data-busy] {
    color: transparent;
  }

  &:disabled:not([data-busy]) {
    --background-color: #eee;
    --border-color: #eee;
    --color: #bcbcbc;
  }

  ${({ size }) => size && modification[size]};
  ${({ variant }) => variant && modification[variant]};

  &[data-icon='true'] {
    padding: 0;
    width: var(--size);
  }
  &[data-icon='right'] {
    svg {
      order: 2;
    }
  }
`;
