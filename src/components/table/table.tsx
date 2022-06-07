import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { table } from './table.styles';

/**
 * Table head
 */
export const Thead = forwardRef<HTMLTableSectionElement, { children: ReactNode }>(
  (props, ref): JSX.Element => <TheadContainer ref={ref} {...props} />
);

const TheadContainer = styled.thead``;

/**
 * Table body
 */
export const Tbody = forwardRef<HTMLTableSectionElement, { children: ReactNode }>(
  (props, ref): JSX.Element => <TbodyContainer ref={ref} {...props} />
);

const TbodyContainer = styled.tbody``;

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Layout
   */
  layout?: 'auto' | 'fixed';
  /**
   * Size
   */
  size?: string;
  /**
   * Sticky header
   */
  sticky?: boolean;
}

/**
 * Table
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ layout, sticky, ...props }, ref): JSX.Element => (
    <TableContainer
      data-layout={layout || null}
      data-sticky={sticky || null}
      ref={ref}
      {...props}
    />
  )
);

const TableContainer = styled.table<TableProps>`
  ${table};

  ${({ size }) => `width: ${size ?? '100%'};`}
`;
