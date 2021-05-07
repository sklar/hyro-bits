import React, { ElementType, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { clamp, truncate } from '../utils/helpers';
import * as TOKENS from '../theme/typography';

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
      data-as={as}
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
  &[data-as='h1'] {
    ${TOKENS.h1};
  }
  &[data-as='h2'] {
    ${TOKENS.h2};
  }
  &[data-as='h3'] {
    ${TOKENS.h3};
  }
  &[data-as='h4'] {
    ${TOKENS.h4};
  }
  &[data-as='h5'] {
    ${TOKENS.h5};
  }
  &[data-as='p'] {
    ${TOKENS.paragraph};
  }

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
