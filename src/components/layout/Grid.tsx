import React, { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Alignment } from 'utils/types';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  align?: Alignment;
  block?: boolean;
  children?: ReactNode;
  columns?: string;
  gap?: string;
  justify?: Alignment;
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
  children,
  columns,
  gap,
  justify,
  max = '1fr',
  min = '0px',
  sizing = 'auto-fit',
  ...props
}): JSX.Element => {
  const delegated = { align, block, columns, gap, justify, max, min, sizing, ...props };
  return <Element {...delegated}>{children}</Element>;
};

const Element = styled.div<GridProps>`
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'grid' : 'inline-grid'}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-items: ${justify}`};
  ${({ columns, max, min, sizing }) =>
    `grid-template-columns: ${
      columns ? columns : `repeat(${sizing}, minmax(min(100%, ${min}), ${max}))`
    }`};
`;
