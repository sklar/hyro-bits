import React, { ElementType, HTMLAttributes } from 'react';
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
export const Text: React.FC<TextProps> = ({
  as = 'span',
  clamp,
  hyphens = 'manual',
  truncate,
  word = 'normal',
  ...props
}): JSX.Element => {
  return (
    <Container
      as={as}
      data-clamp={clamp || null}
      data-hyphens={hyphens}
      data-truncate={truncate || null}
      data-word={word}
      style={{ ['--lines' as string]: clamp }}
      {...props}
    />
  );
};

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
