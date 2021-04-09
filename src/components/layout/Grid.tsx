import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { AlignmentPrimaryType, AlignmentSecondaryType } from '../../utils/types';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  align?: AlignmentPrimaryType;
  block?: boolean;
  columns?: string;
  gap?: string;
  justify?: AlignmentSecondaryType;
  max?: string;
  min?: string;
  sizing?: 'auto-fill' | 'auto-fit';
}

/**
 * Grid wrapper
 */
export const Grid: React.FC<GridProps> = ({
  align,
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
  return <Container {...delegated} />;
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
