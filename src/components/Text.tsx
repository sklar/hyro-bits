import React, { ElementType, forwardRef, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { clamp, truncate } from '../utils/helpers';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Clamp lines
   */
  clamp?: number;
  /**
   * Hyphens
   */
  hyphens?: 'manual' | 'auto' | 'none';
  /**
   * White space
   */
  space?: 'normal' | 'nowrap' | 'pre';
  /**
   * Truuncate text
   */
  truncate?: boolean;
  /**
   * Word break
   */
  word?: 'normal' | 'break' | 'keep';
}

/**
 * Text
 */
export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    { as = 'span', clamp, hyphens = 'manual', space, truncate, word = 'normal', ...props },
    ref
  ): JSX.Element => {
    const qa = {
      'data-qa': `text-${as}`,
    };
    return (
      <Container
        as={as}
        data-clamp={clamp || null}
        data-hyphens={hyphens}
        data-space={space || null}
        data-truncate={truncate || null}
        data-word={word}
        ref={ref}
        style={{ ['--lines' as string]: clamp }}
        {...qa}
        {...props}
      />
    );
  }
);

const Container = styled.span`
  &[data-clamp] {
    ${clamp};
  }

  &[data-hyphens='auto'] {
    hyphens: auto;
  }
  &[data-hyphens='none'] {
    hyphens: none;
  }

  &[data-space='normal'] {
    white-space: normal;
  }
  &[data-space='nowrap'] {
    white-space: nowrap;
  }
  &[data-space='pre'] {
    white-space: pre;
  }

  &[data-truncate] {
    ${truncate};
  }

  &[data-word='break'] {
    word-break: break-all;
  }
  &[data-word='keep'] {
    word-break: keep-all;
  }
`;
