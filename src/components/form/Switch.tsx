import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { ElementType, forwardRef, InputHTMLAttributes } from 'react';

import { button, colors } from '../../theme';
import { InternalHTMLAttributes, splitPropsByKeys } from '../../utils';

export interface SwitchProps extends InternalHTMLAttributes, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Appearance (`checkbox` as default)
   * No matter on type, appearance can be chosen manually
   */
  appearance?: 'checkbox' | 'radio' | 'toggle';
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Label
   */
  label?: string;
  /**
   * Synthetic behaviour to disable `:focus` styles.
   */
  synthetic?: boolean;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';
  /**
   * Type (`checkbox` as default)
   */
  type?: 'checkbox' | 'radio';

  /**
   * State: Disabled
   */
  disabled?: boolean;
}

/**
 * Checkbox, Radio button or Toggle switch
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      as = 'label',
      children,
      className,
      disabled,
      label,
      style,
      synthetic,
      theme,
      type = 'checkbox',
      appearance = type === 'radio' ? 'radio' : 'checkbox',
      ...props
    },
    ref
  ): JSX.Element => {
    const [containerProps, inputProps] = splitPropsByKeys(props, ['data-hover']);
    const qa = {
      // prettier-ignore
      'data-qa': [
        'switch',
        `${appearance}`,
        ...(label ? [`${kebabCase(label)}`] : [])
      ].join('-'),
    };

    return (
      <Container
        {...containerProps}
        as={as}
        className={className}
        data-disabled={disabled || null}
        data-label={label || null}
        data-synthetic={synthetic || null}
        data-theme={theme || null}
        style={style}
      >
        <input ref={ref} type={type} disabled={disabled} {...qa} {...inputProps} />
        <Indicator data-appearance={appearance} />
        {children}
        {label && <Label>{label}</Label>}
      </Container>
    );
  }
);

/**
 * Note that [data-hover] are here only to help
 * better illustrate `:hover` state in the dedicated story.
 */
const Container = styled.label`
  --switch-animation-duration: 0.2s;
  --switch-border-color: ${colors.STROKE};
  --switch-border-size: 1.5px;
  --switch-color: ${colors.STROKE};
  --switch-color-contrast: ${colors.WHITE};
  --switch-gap: 8px;
  --switch-radius: 4px;
  --switch-size: 16px;

  align-items: flex-start;
  /* color: var(--switch-color); */
  cursor: pointer;
  display: inline-flex;
  gap: var(--switch-gap);
  max-width: 100%;
  position: relative;
  user-select: none;

  input {
    height: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 0;
  }

  &[data-theme='dark'] {
    --switch-border-color: #969cac;
  }

  &:is(:focus-within):not([data-synthetic]),
  &:is(:hover, label:hover *, [data-hover]) {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-color: ${colors.ELEMENT_PRIMARY};

    &[data-theme='dark'] {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
    }
  }

  &[data-disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const Indicator = styled.span`
  background-color: var(--switch-color);
  border-radius: var(--switch-radius);
  box-shadow: inset 0 0 0 var(--switch-border-size) var(--switch-border-color);
  color: var(--switch-color);
  display: block;
  flex-shrink: 0;
  height: var(--switch-size);
  pointer-events: none;
  position: relative;
  width: var(--switch-size);

  /* Appearance: CHECKBOX */
  &[data-appearance='checkbox'] {
    --switch-indicator-angle: -45deg;
    --switch-indicator-opacity: 0;
    --switch-indicator-size: 9;
    --switch-indicator-x: -5;
    --switch-indicator-y: -1.5;

    background-color: var(--switch-color-contrast);
    transition: box-shadow var(--switch-animation-duration);

    &::after,
    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: calc(var(--switch-size) / 8);
      content: '';
      height: calc(var(--switch-size) / 16 * 2.5);
      left: 50%;
      opacity: var(--switch-indicator-opacity);
      position: absolute;
      top: 50%;
      transform: translate(
          calc(var(--switch-size) / var(--switch-indicator-x)),
          calc(var(--switch-size) / 16 * var(--switch-indicator-y))
        )
        rotate(var(--switch-indicator-angle));
      transition: opacity 0.1s var(--switch-animation-duration) linear;
      width: calc(var(--switch-size) / 16 * var(--switch-indicator-size));
      will-change: opacity, transform, width;
    }

    &::after {
      --switch-indicator-angle: 45deg;
      --switch-indicator-size: 6;
      --switch-indicator-x: -3;
      --switch-indicator-y: -0.5;
    }
  }

  input:checked ~ &[data-appearance='checkbox'] {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 2);
    --switch-color: ${colors.ELEMENT_PRIMARY};
    --switch-indicator-opacity: 1;

    [data-theme='dark'] & {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
      --switch-color: ${colors.ELEMENT_SECONDARY};
      --switch-color-contrast: ${colors.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: RADIO */
  &[data-appearance='radio']:before {
    background-color: var(--switch-color-contrast);
    border-radius: calc(var(--switch-radius) / 2);
    content: '';
    height: calc(100% - 2 * var(--switch-border-size));
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all var(--switch-animation-duration);
    width: calc(100% - 2 * var(--switch-border-size));
  }

  input:checked ~ &[data-appearance='radio'] {
    --switch-border-color: ${colors.ELEMENT_PRIMARY};
    --switch-border-size: calc(var(--switch-size) / 4);
    --switch-color: ${colors.ELEMENT_PRIMARY};

    [data-theme='dark'] & {
      --switch-border-color: ${colors.ELEMENT_SECONDARY};
      --switch-color: ${colors.ELEMENT_SECONDARY};
      --switch-color-contrast: ${colors.DARK_ELEMENT_FOCUS};
    }
  }

  /* Appearance: TOGGLE */
  &[data-appearance='toggle'] {
    --switch-border-size: 8px;
    --switch-color: ${colors.TERTIARY};
    --switch-indicator-indent: calc(var(--switch-size) / 8);

    border-radius: var(--switch-size);
    box-shadow: none;
    transition: background-color var(--switch-animation-duration);
    width: calc(var(--switch-size) * 2);

    &::before {
      background-color: var(--switch-color-contrast);
      border-radius: 50%;
      content: '';
      height: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      left: var(--switch-indicator-indent);
      position: absolute;
      top: var(--switch-indicator-indent);
      transition: transform var(--switch-animation-duration);
      width: calc(var(--switch-size) - var(--switch-indicator-indent) * 2);
      will-change: background-color, transform;
    }

    [data-theme='dark'] & {
      --switch-color: ${colors.DARK_ELEMENT_TERTIARY};
    }
  }

  input:checked ~ &[data-appearance='toggle'] {
    --switch-color: ${colors.ELEMENT_PRIMARY};

    &::before {
      transform: translateX(var(--switch-size));
    }

    [data-theme='dark'] & {
      --switch-color: ${colors.DARK_ELEMENT_FOCUS};
    }
  }
`;

const Label = styled.span`
  ${button};

  --color: inherit;
  --font-size: inherit;
  --font-weight: inherit;
`;
