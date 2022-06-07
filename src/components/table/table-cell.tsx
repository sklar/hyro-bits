import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { AlignmentPrimaryType, DirectionType } from '../../types';
import { Flex } from '../flex';
import { Order } from '../order';
import { Text } from '../text';
import { td, th } from './table.styles';

type AlignmentType = 'inherit' | 'baseline' | 'bottom' | 'middle' | 'top';

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentType;
  /**
   * Children
   */
  children?: ReactNode;
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
export const Td = forwardRef<HTMLTableCellElement, TdProps>(
  ({ align, justify, numeric = 'normal', ...props }, ref): JSX.Element => (
    <TdContainer
      data-align={align || null}
      data-justify={justify || null}
      data-numeric={numeric || null}
      ref={ref}
      {...props}
    />
  )
);

const TdContainer = styled.td<TdProps>`
  ${td};

  ${({ size }) => size && `width: ${size};`}
`;

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentType;
  /**
   * Children
   */
  children?: ReactNode;
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
export const Th = forwardRef<HTMLTableCellElement, ThProps>(
  (
    { align, children, direction, icon, justify, onClick, sortable, ...props },
    ref
  ): JSX.Element => (
    <ThContainer data-align={align || null} data-justify={justify || null} ref={ref} {...props}>
      <Flex gap="4px" data-sortable={sortable || null} onClick={onClick}>
        {icon}
        <Text truncate>{children}</Text>
        {sortable && <Order direction={direction} />}
      </Flex>
    </ThContainer>
  )
);

const ThContainer = styled.th<ThProps>`
  ${th};

  ${({ size }) => size && `width: ${size};`}
`;
