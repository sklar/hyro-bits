import styled from '@emotion/styled';
import React, { ElementType, forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import { colors } from '../../theme';
import { InternalHTMLAttributes, SizeType, splitPropsByKeys } from '../../utils';
import { truncate } from '../../utils/helpers';
import { Idle as Indicator } from '../indicator';
import { input, inputAffix, inputContainer } from './Input.styles';

export interface InputProps
  extends InternalHTMLAttributes,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;

  /**
   * Affix (icons, labels, units)
   */
  affix?: string | Array<string | undefined> | ReactElement | ReactElement[];
  /**
   * Leader placeholder (buttons, icons)
   */
  leader?: ReactElement;
  /**
   * Trailer placeholder (buttons, icons)
   */
  trailer?: ReactElement;

  /**
   * Length (aka `width`)
   */
  length?: string;
  /**
   * Size
   */
  size?: Exclude<SizeType, 'xs' | 'xl'>;
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
 * Input
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      active,
      affix,
      as = 'label',
      busy,
      className,
      disabled,
      invalid,
      leader,
      length,
      readonly,
      size = 'md',
      style,
      theme,
      trailer,
      ...props
    },
    ref
  ): JSX.Element => {
    const [prefix, suffix] = Array.isArray(affix) ? affix : [affix];
    const [containerProps, inputProps] = splitPropsByKeys(props, [
      'data-active',
      'data-hover',
      'data-invalid',
    ]);
    const qa = { 'data-qa': 'input' };

    return (
      <Container
        {...containerProps}
        as={as}
        className={className}
        data-active={active || null}
        data-busy={busy || null}
        data-disabled={disabled || null}
        data-invalid={invalid || null}
        data-readonly={readonly || null}
        data-size={size}
        data-theme={theme || null}
        style={{ ['--input-length' as string]: length, ...style }}
      >
        {prefix && <Prefix>{prefix}</Prefix>}
        {leader}
        <Element {...qa} {...inputProps} ref={ref} disabled={disabled} readOnly={readonly} />
        {busy && (
          <Indicator
            gap="2px"
            size="4px"
            style={{
              ['--color' as string]: colors.ELEMENT_PRIMARY,
            }}
          />
        )}
        {trailer}
        {suffix && <Suffix>{suffix}</Suffix>}
      </Container>
    );
  }
);

const Container = styled.label`
  --gap: 1px;

  ${inputContainer};

  button {
    --button-radius: 4px;
    --button-size: calc(var(--input-size) - 2 * (var(--input-border-size) + 2 * var(--gap)));

    flex-shrink: 0;
    margin-right: calc(2 * var(--gap) - 1 * var(--input-indent));
  }
`;

const Element = styled.input`
  ${input};
  ${truncate};
`;

const Prefix = styled.span`
  ${inputAffix};
`;

const Suffix = styled.span`
  ${inputAffix};
`;
