import styled from '@emotion/styled';
import React, { ElementType, forwardRef, TextareaHTMLAttributes } from 'react';

import { colors } from '../../theme';
import { Idle as Indicator } from '../indicator';
import { container, input } from './Input.styles';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;

  /**
   * Length (aka `width`)
   */
  length?: string;
  /**
   * Resize
   */
  resize?: 'both' | 'horizontal' | 'vertical' | 'none';
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

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
   * State: Invalid
   */
  invalid?: boolean;
  /**
   * State: Read-only
   */
  readonly?: boolean;
}

/**
 * Textarea
 * TODO: Implement auto-grow feature
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      active,
      as = 'label',
      busy,
      disabled,
      invalid,
      length,
      readonly,
      resize = 'vertical',
      theme,
      ...textareaProps
    },
    ref
  ): JSX.Element => {
    const { style, ...containerProps } = Object.fromEntries(
      Object.entries(textareaProps).filter(([key]) =>
        ['className', 'data-active', 'data-invalid', 'data-hover', 'style'].includes(key)
      )
    );
    return (
      <Container
        as={as}
        data-active={active || null}
        data-busy={busy || null}
        data-disabled={disabled || null}
        data-invalid={invalid || null}
        data-readonly={readonly || null}
        data-resize={resize}
        data-theme={theme || null}
        style={{ ['--input-length' as string]: length, ...style }}
        {...containerProps}
      >
        <Element ref={ref} disabled={disabled} readOnly={readonly} {...textareaProps} />
        {busy && (
          <Indicator
            gap="2px"
            size="4px"
            data-indicator
            style={{
              ['--color' as string]: colors.ELEMENT_PRIMARY,
            }}
          />
        )}
      </Container>
    );
  }
);

const Container = styled.label`
  ${container};

  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  [data-indicator] {
    position: absolute;
  }
`;

const Element = styled.textarea`
  ${input};

  width: 100%;

  [data-resize='both'] & {
    resize: both;
  }
  [data-resize='horizontal'] & {
    resize: horizontal;
  }
  [data-resize='vertical'] & {
    resize: vertical;
  }
  [data-resize='none'] & {
    resize: none;
  }
`;
