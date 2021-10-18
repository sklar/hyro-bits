import React, { ElementType, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
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
   * Children
   */
  children: ReactNode;
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
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ align, as = 'div', block, direction, gap, justify, wrap, ...props }, ref): JSX.Element => {
    const delegated = { align, block, direction, gap, justify, ...props };
    return <Container as={as} data-wrap={wrap || null} ref={ref} {...delegated} />;
  }
);

const Container = styled.div<FlexProps>(
  ({ align, block, direction, gap, justify }) => ({
    alignItems: align,
    display: `${block ? 'flex' : 'inline-flex'}`,
    flexDirection: direction,
    gap: gap,
    justifyContent: justify,
  }),
  css`
    &[data-wrap] {
      flex-wrap: wrap;
    }
  `
);
