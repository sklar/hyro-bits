import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { Idle as Indicator } from '../components/indicator';
import { button, colors } from '../theme';
import { SizeType, ThemeType, VariantType } from '../utils/types';

export interface ButtonProps extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
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
  icon?: ReactElement | ReactElement[];
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
  size?: Exclude<SizeType, 'xs' | 'xl'>;
  /**
   * Synthetic behaviour to prevent `:active` and `:focus` styles.
   */
  synthetic?: boolean;
  /**
   * Theme
   */
  theme?: Exclude<ThemeType, 'notice'>;
  /**
   * Toggle
   */
  toggle?: boolean;
  /**
   * Variant
   */
  variant?: VariantType;

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
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active,
      busy,
      children,
      disabled,
      href,
      icon,
      placement,
      round,
      size = 'md',
      synthetic,
      text,
      theme,
      toggle,
      type = 'button',
      variant = 'secondary',
      ...props
    },
    ref
  ): JSX.Element => {
    const [leader, trailer] = Array.isArray(icon) ? icon : [icon];
    const delegated = { size, variant, ...props };

    return (
      <Container
        as={href ? 'a' : 'button'}
        data-active={active || null}
        data-busy={busy || null}
        data-icon={
          (icon && !(text || children) && 'single') || (leader && trailer && 'both') || placement
        }
        data-round={round || null}
        data-synthetic={synthetic || null}
        data-theme={theme || null}
        data-toggle={toggle || null}
        disabled={busy || disabled}
        href={href}
        ref={ref}
        type={href ? undefined : type}
        {...delegated}
      >
        {leader}
        {text ? text : children}
        {trailer}
        {busy && (
          <Indicator
            style={{ ['--color' as string]: 'var(--button-color)', position: 'absolute' }}
          />
        )}
      </Container>
    );
  }
);

const base = css`
  ${button};

  --button-background-color: ;
  --button-border-color: ;
  --button-border-size: 1px;
  --button-box-shadow: ;
  --button-color: ;
  --button-font-weight: 600;
  --button-gap: 8px;
  --button-icon-offset: ;
  --button-icon-rotation: 0;
  --button-icon-transform: ;
  --button-indent: ;
  --button-line-height: var(--button-size);
  --button-radius: 6px;
  --button-size: ;

  align-items: center;
  background-color: var(--button-background-color);
  border: var(--button-border-size) solid var(--button-border-color);
  border-radius: var(--button-radius);
  box-shadow: 0 0 0 3px var(--button-box-shadow);
  color: var(--button-color);
  display: inline-flex;
  gap: var(--button-gap);
  height: var(--button-size);
  justify-content: center;
  margin: 0;
  min-width: var(--button-size);
  overflow: hidden;
  outline: 0;
  padding: 0 var(--button-indent);
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 1;

  [data-icon] {
    flex-shrink: 0;
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transform: var(--button-icon-transform);
    will-change: transform;
  }
`;

/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */

const modification: Record<string, {}> = {};

modification['sm'] = css`
  --button-icon-offset: 0px;
  --button-indent: 8px;
  --button-size: 30px;
`;

modification['md'] = css`
  --button-icon-offset: 4px;
  --button-indent: 14px;
  --button-size: 32px;
`;

modification['lg'] = css`
  --button-icon-offset: 0px;
  --button-indent: 12px;
  --button-size: 40px;
  --font-size: 15px;
`;

modification['primary'] = css`
  --button-background-color: ${colors.ELEMENT_PRIMARY};
  --button-border-color: ${colors.ELEMENT_PRIMARY};
  --button-color: ${colors.WHITE};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${colors.ELEMENT_ACTIVE};
    --button-border-color: ${colors.ELEMENT_ACTIVE};
  }

  /* TODO: Themed states are not designed */
  &[data-theme='danger'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.DANGER};
      --button-border-color: ${colors.DANGER};
    }
  }
  &[data-theme='success'] {
    &:is(*, #chucknorris):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.SUCCESS};
      --button-border-color: ${colors.SUCCESS};
    }
  }
`;

modification['secondary'] = css`
  --button-background-color: ${colors.ELEMENT_SECONDARY};
  --button-border-color: ${colors.ELEMENT_SECONDARY};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-box-shadow: #f6f8fd;
  }
  &:is(:active, :focus, :hover, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: #d8e1fc;
    --button-border-color: #d8e1fc;
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-color: ${colors.WHITE};
  }
`;

modification['tertiary'] = css`
  --button-background-color: ${colors.TRANSPARENT};
  --button-border-color: ${colors.TRANSPARENT};
  --button-color: ${colors.TEXT_PRIMARY};

  &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
    --button-color: ${colors.ELEMENT_PRIMARY};
  }
  &:is(:active, :focus, [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
  &:is(:hover, [data-active], [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
    --button-background-color: ${colors.ELEMENT_SECONDARY};
    --button-border-color: ${colors.ELEMENT_SECONDARY};
  }
  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${colors.TRANSPARENT};
    --button-border-color: ${colors.TRANSPARENT};
    --button-color: ${colors.ELEMENT_DISABLED};
  }

  [data-theme='dark'] &,
  &[data-theme='dark'] {
    &:is(:active, [data-active], [data-pressed]):not(:disabled, [data-busy], [data-disabled], [data-synthetic]) {
      --button-background-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-border-color: ${colors.DARK_ELEMENT_FOCUS};
      --button-color: ${colors.WHITE};
    }
    &:is(:focus):not(:disabled, [data-busy], [data-disabled], [data-synthetic]),
    &:is(:hover, [data-hover]):not(:disabled, [data-busy], [data-disabled]) {
      --button-background-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-border-color: ${colors.DARK_ELEMENT_ACTIVE};
      --button-color: ${colors.WHITE};
    }
    &:is(:disabled, [data-disabled]):not([data-busy]) {
      --button-color: ${colors.DARK_ELEMENT_DISABLED};
    }
  }
`;

const Container = styled.button<ButtonProps>`
  ${base};

  &[data-round] {
    --button-radius: 1000px;
  }

  &:not(:disabled, [data-busy], [data-disabled]) {
    cursor: pointer;
  }

  &[data-busy] {
    color: ${colors.TRANSPARENT};
  }

  &[data-toggle] {
    --button-icon-transform: rotateX(calc(var(--button-icon-rotation) * 180deg));

    &[data-active] {
      --button-icon-rotation: 1;
    }
  }

  &:is(:disabled, [data-disabled]):not([data-busy]) {
    --button-background-color: ${colors.ELEMENT_DISABLED};
    --button-border-color: ${colors.ELEMENT_DISABLED};
  }

  ${({ size }) => size && modification[size]};
  ${({ variant }) => variant && modification[variant]};

  &[data-icon='single'] {
    padding: 0;
    width: var(--button-size);
  }
  &[data-icon='both'],
  &[data-icon='left'] {
    padding-left: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='both'],
  &[data-icon='right'] {
    padding-right: calc(var(--button-indent) - var(--button-icon-offset));
  }
  &[data-icon='left'] {
    flex-direction: row;
  }
  &[data-icon='right'] {
    flex-direction: row-reverse;
  }
`;
