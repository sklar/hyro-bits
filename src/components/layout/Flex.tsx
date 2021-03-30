import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { FlexAlignment } from '../../utils/types';

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  /**
   * Alignment, secondary axis
   */
  align?: FlexAlignment | 'baseline';
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
  justify?: FlexAlignment | 'space-between' | 'space-around' | 'space-evenly';
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
  block,
  direction,
  gap,
  justify,
  wrap,
  ...props
}): JSX.Element => {
  const delegated = { align, block, direction, gap, justify, ...props };
  return <Container data-wrap={wrap || null} {...delegated} />;
};

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
