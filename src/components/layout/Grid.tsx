import React, { ElementType, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { AlignmentPrimaryType, AlignmentSecondaryType } from '../../utils/types';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentPrimaryType;
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Block or inline
   */
  block?: boolean;
  /**
   * Columns
   */
  columns?: string;
  /**
   * Gap
   */
  gap?: string;
  /**
   * Alignment, primary axis
   */
  justify?: AlignmentSecondaryType;
  /**
   * Column, max
   */
  max?: string;
  /**
   * Column, min
   */
  min?: string;
  /**
   * Sizing
   */
  sizing?: 'auto-fill' | 'auto-fit';
}

/**
 * Grid wrapper
 */
export const Grid: React.FC<GridProps> = ({
  align,
  as = 'div',
  block,
  columns,
  gap,
  justify,
  max = '1fr',
  min = '0px',
  sizing = 'auto-fit',
  ...props
}): JSX.Element => {
  const delegated = { align, block, columns, gap, justify, max, min, sizing, ...props };
  return <Container as={as} {...delegated} />;
};

const Container = styled.div<GridProps>`
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'grid' : 'inline-grid'}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-items: ${justify}`};
  ${({ columns, max, min, sizing }) =>
    `grid-template-columns: ${
      columns ? columns : `repeat(${sizing}, minmax(min(100%, ${min}), ${max}))`
    }`};
`;
