/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { kebabCase } from 'case-anything';
import React, { ElementType, forwardRef, ReactElement, ReactNode } from 'react';

import { Idle as Indicator } from '../components/indicator';
import { PolymorphicComponentProps, PolymorphicRef } from '../utils/polymorphic';
import { SizeType, ThemeType, VariantType } from '../utils/types';
import { button, sizes, variants } from './Button.styles';

export interface SharedButtonProps {
  /**
   * Children
   */
  children?: ReactNode;
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

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = <C extends ElementType = 'button'>(props: ButtonProps<C>) => ReactElement;

/**
 * Button
 */
export const Button = forwardRef(
  <C extends ElementType = 'button'>(
    {
      active,
      as,
      busy,
      children,
      disabled,
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
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [leader, trailer] = Array.isArray(icon) ? icon : [icon];
    const isButton = as === undefined || as === 'button';
    const qa = {
      // prettier-ignore
      'data-qa': [
        `${isButton ? 'button' : 'link'}`,
        ...(text ? [`${kebabCase(text)}`] : []),
      ].join('-'),
    };

    const Element = as || 'button';

    return (
      <Element
        css={[button, sizes[size], variants[variant]]}
        data-active={active || null}
        data-busy={busy || null}
        data-icon={
          (icon && !(text || children) && 'single') || (leader && trailer && 'both') || placement
        }
        data-round={round || null}
        data-synthetic={synthetic || null}
        data-theme={theme || null}
        data-toggle={toggle || null}
        disabled={isButton && (busy || disabled) ? true : undefined}
        ref={ref}
        type={isButton ? type : undefined}
        {...qa}
        {...props}
      >
        {leader}
        {text ? text : children}
        {trailer}
        {busy && (
          <Indicator
            style={{ ['--color' as string]: 'var(--button-color)', position: 'absolute' }}
          />
        )}
      </Element>
    );
  }
) as ButtonComponent;
