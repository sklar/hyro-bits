import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ElementType, forwardRef, HTMLAttributes, ReactNode } from 'react';

import { AlignmentPrimaryType, AlignmentSecondaryType } from '../../types';

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
   * Children
   */
  children: ReactNode;
  /**
   * Columns
   */
  columns?: string;
  /**
   * Flow
   */
  flow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
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
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      align,
      as = 'div',
      block,
      columns,
      flow,
      gap,
      justify,
      max = '1fr',
      min = '0px',
      sizing = 'auto-fit',
      ...props
    },
    ref
  ): JSX.Element => {
    const delegated = { align, block, columns, gap, justify, max, min, sizing, ...props };
    return <Container as={as} ref={ref} {...delegated} />;
  }
);

const Container = styled.div<GridProps>(
  css`
    & > * {
      min-width: 0;
    }
  `,
  ({ align, block, columns, flow, gap, justify, max, min, sizing }) => ({
    alignItems: align,
    display: `${block ? 'grid' : 'inline-grid'}`,
    gap: gap,
    gridAutoFlow: flow,
    gridTemplateColumns: `${
      columns ? columns : `repeat(${sizing}, minmax(min(100%, ${min}), ${max}))`
    }`,
    justifyItems: justify,
  })
);
