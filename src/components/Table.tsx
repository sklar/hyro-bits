import React, { HTMLAttributes, ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { base, colors, h5 } from '../theme';
import { AlignmentPrimaryType, DirectionType } from '../utils/types';
import { Order } from './indicator';
import { Flex } from './layout';
import { Text } from './Text';

type AlignmentType = 'inherit' | 'baseline' | 'bottom' | 'middle' | 'top';

interface TdProps extends HTMLAttributes<HTMLTableDataCellElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentType;
  /**
   * Alignment, primary axis
   */
  justify?: AlignmentPrimaryType;
  /**
   * Numberic
   */
  numeric?: 'normal' | 'slashed-zero' | 'tabular-nums';
  /**
   * Size
   */
  size?: string;
}

/**
 * Table data cell
 */
export const Td: React.FC<TdProps> = ({
  align,
  justify,
  numeric = 'normal',
  size,
  ...props
}): JSX.Element => (
  <TdContainer
    data-align={align || null}
    data-justify={justify || null}
    data-numeric={numeric || null}
    {...props}
  />
);

const textAlign = css`
  &[data-justify='inherit'] {
    text-align: inherit;
  }
  &[data-justify='start'] {
    text-align: start;
  }
  &[data-justify='center'] {
    text-align: center;
  }
  &[data-justify='end'] {
    text-align: end;
  }

  &[data-numeric='slashed-zero'] {
    font-variant-numeric: slashed-zero;
  }
  &[data-numeric='tabular-nums'] {
    font-variant-numeric: tabular-nums;
  }
`;

const TdContainer = styled.td<TdProps>`
  ${textAlign};

  ${({ size }) => size && `width: ${size};`}

  &[data-align='baseline'] {
    vertical-align: baseline;
  }
  &[data-align='bottom'] {
    vertical-align: bottom;
  }
  &[data-align='middle'] {
    vertical-align: middle;
  }
  &[data-align='top'] {
    vertical-align: top;
  }
`;

interface ThProps extends HTMLAttributes<HTMLTableHeaderCellElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentType;
  /**
   * Order direction
   */
  direction?: DirectionType;
  /**
   * Icon
   */
  icon?: ReactElement;
  /**
   * Alignment, primary axis
   */
  justify?: AlignmentPrimaryType;
  /**
   * Size
   */
  size?: string;
  /**
   * Sortable
   */
  sortable?: boolean;

  /**
   * Event: Click
   */
  onClick?: () => void;
}

/**
 * Table header cell
 */
export const Th: React.FC<ThProps> = ({
  align,
  children,
  direction,
  icon,
  justify,
  onClick,
  sortable,
  ...props
}): JSX.Element => (
  <ThContainer data-align={align || null} data-justify={justify || null} {...props}>
    <Flex gap="4px" data-sortable={sortable || null} onClick={onClick}>
      {icon}
      <Text truncate>{children}</Text>
      {sortable && <Order direction={direction} />}
    </Flex>
  </ThContainer>
);

const ThContainer = styled.th<ThProps>`
  ${textAlign};

  ${({ size }) => size && `width: ${size};`}

  [data-sortable] {
    cursor: pointer;
    user-select: none;
  }
  & > div {
    ${h5};
  }
`;

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Muted
   */
  mute?: boolean;
}

/**
 * Table row
 */
export const Tr: React.FC<TrProps> = ({ mute, ...props }): JSX.Element => (
  <TrContainer data-mute={mute || null} {...props} />
);

export const TrContainer = styled.tr`
  &[data-mute] {
    td,
    th {
      color: ${colors.TEXT_TERTIARY};
    }
  }
`;

/**
 * Table head
 */
export const Thead = styled.thead``;

/**
 * Table body
 */
export const Tbody = styled.tbody``;

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
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
export const Table: React.FC<TableProps> = ({ layout, sticky, ...props }): JSX.Element => (
  <TableContainer data-layout={layout || null} data-sticky={sticky || null} {...props} />
);

const TableContainer = styled.table<TableProps>`
  ${base};

  --background-color: ${colors.WHITE};
  --border-color: ${colors.STROKE};
  --border-size: 1px;
  --font-size: 14px;
  --font-weight: 600;
  --indent: 8px;
  --line-height: 16px;

  background-color: var(--background-color);
  border-collapse: collapse;
  border-spacing: 0;

  &[data-layout='fixed'] {
    table-layout: fixed;
  }

  &[data-sticky] {
    thead {
      &,
      & tr,
      & th {
        background: inherit;
      }
      th {
        position: sticky;
        top: 0;
        z-index: 2;

        &::after {
          border-bottom: var(--border-size) solid var(--border-color);
          content: '';
          inset: auto 0 calc(-1 * var(--border-size)) 0;
          position: absolute;
        }
      }
    }
  }

  ${({ size }) => `width: ${size ?? '100%'};`}

  tr {
    border-bottom: var(--border-size) solid var(--border-color);

    th,
    td {
      height: calc(48px - 1px);

      &:first-of-type {
        padding-left: calc(2 * var(--indent));
      }
      &:last-of-type {
        padding-right: calc(2 * var(--indent));
      }
    }
  }

  th,
  td {
    padding: var(--indent);
    text-align: start;
  }
`;
