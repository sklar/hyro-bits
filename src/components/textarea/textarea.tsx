/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { ElementType, forwardRef, TextareaHTMLAttributes } from 'react';

import { colors } from '../../colors';
import { InternalHTMLAttributes } from '../../types';
import { splitPropsByKeys } from '../../utils';
import { Idle as Indicator } from '../idle';
import { container, indicator, textarea } from './textarea.styles';

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
            css={indicator}
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
`;

const Element = styled.textarea`
  ${textarea};
`;
