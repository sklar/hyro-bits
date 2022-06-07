import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { ElementType, forwardRef, InputHTMLAttributes } from 'react';

import { InternalHTMLAttributes } from '../../types';
import { splitPropsByKeys } from '../../utils';
import { container, indicator, label } from './switch.styles';

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

const Container = styled.label`
  ${container};
`;

const Indicator = styled.span`
  ${indicator};
`;

const Label = styled.span`
  ${label};
`;
