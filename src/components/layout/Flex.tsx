import React, { ElementType, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import {
  AlignmentFlexboxType,
  AlignmentPrimaryType,
  AlignmentSecondaryType,
  AlignmentTertiaryType,
} from '../../utils/types';

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  /**
   * Alignment, secondary axis
   */
  align?: AlignmentSecondaryType | AlignmentFlexboxType;
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Block or inline
   */
  block?: boolean;
  /**
   * Direction (default is `row`)
   */
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  /**
   * Gap
   */
  gap?: string;
  /**
   * Alignment, primary axis
   */
  justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;
  /**
   * Wrap (default is `no-wrap`)
   */
  wrap?: boolean;
}

/**
 * Flexbox wrapper.
 */
export const Flex: React.FC<FlexProps> = ({
  align,
  as = 'div',
  block,
  direction,
  gap,
  justify,
  wrap,
  ...props
}): JSX.Element => {
  const delegated = { align, block, direction, gap, justify, ...props };
  return <Container as={as} data-wrap={wrap || null} {...delegated} />;
};

/**
 * TODO: Improve performance
 */
const Container = styled.div<FlexProps>`
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'}`};
  ${({ direction }) => direction && direction !== 'row' && `flex-direction: ${direction}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};

  &[data-wrap] {
    flex-wrap: wrap;
  }
`;
