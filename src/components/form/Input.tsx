import styled from '@emotion/styled';
import React, { ElementType, forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import { colors } from '../../theme';
import { truncate } from '../../utils/helpers';
import { SizeType } from '../../utils/types';
import { Idle as Indicator } from '../indicator';
import { affix, container, input } from './Input.styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
      disabled,
      invalid,
      leader,
      length,
      readonly,
      size = 'md',
      theme,
      trailer,
      ...inputProps
    },
    ref
  ): JSX.Element => {
    const [prefix, suffix] = Array.isArray(affix) ? affix : [affix];
    const { style, ...containerProps } = Object.fromEntries(
      Object.entries(inputProps).filter(([key]) =>
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
        data-size={size}
        data-theme={theme || null}
        style={{ ['--input-length' as string]: length, ...style }}
        {...containerProps}
      >
        {prefix && <Prefix>{prefix}</Prefix>}
        {leader}
        <Element ref={ref} disabled={disabled} readOnly={readonly} {...inputProps} />
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

  ${container};

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
  ${affix};
`;

const Suffix = styled.span`
  ${affix};
`;
