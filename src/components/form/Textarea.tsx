import styled from '@emotion/styled';
import React, { ElementType, forwardRef, TextareaHTMLAttributes } from 'react';

import { colors } from '../../theme';
import { InternalHTMLAttributes, splitPropsByKeys } from '../../utils';
import { Idle as Indicator } from '../indicator';
import { inputContainer, input } from './Input.styles';

export interface TextareaProps
  extends InternalHTMLAttributes,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;

  /**
   * Expandable
   */
  expandable?: boolean;
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
      className,
      disabled,
      expandable,
      invalid,
      length,
      readonly,
      resize = 'vertical',
      style,
      theme,
      ...props
    },
    ref
  ): JSX.Element => {
    const [containerProps, textareaProps] = splitPropsByKeys(props, [
      'data-active',
      'data-hover',
      'data-invalid',
    ]);

    return (
      <Container
        {...containerProps}
        as={as}
        className={className}
        data-active={active || null}
        data-busy={busy || null}
        data-disabled={disabled || null}
        data-expandable={expandable || null}
        data-invalid={invalid || null}
        data-readonly={readonly || null}
        data-resize={resize}
        data-theme={theme || null}
        data-value={expandable ? textareaProps.value || textareaProps.defaultValue : ''}
        style={{ ['--input-length' as string]: length, ...style }}
      >
        <Element {...textareaProps} ref={ref} disabled={disabled} readOnly={readonly} />
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
  ${inputContainer};

  position: relative;
  padding-block: calc(0.8 * var(--input-indent));

  [data-indicator] {
    position: absolute;
  }

  &[data-expandable] {
    align-items: stretch;
    display: inline-grid;

    &::after {
      content: attr(data-value);
      min-width: 0;
      overflow: hidden;
      overflow-wrap: break-word;
      visibility: hidden;
      white-space: pre-wrap;
    }

    &::after,
    textarea,
    [data-indicator] {
      grid-area: 1 / 1 / -1 / -1;
    }

    [data-indicator] {
      align-self: center;
    }
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
