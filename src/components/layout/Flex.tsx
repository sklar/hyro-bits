import React, { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

import { FlexAlignment } from 'utils/types';

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
   * Children
   */
  children?: ReactNode;
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
  block = false,
  children,
  direction,
  gap,
  justify,
  wrap,
  ...props
}): JSX.Element => {
  const delegated = { align, block, direction, gap, justify, ...props };
  return (
    <Element data-wrap={wrap || null} {...delegated}>
      {children}
    </Element>
  );
};

const Element = styled.div<FlexProps>`
  ${({ align }) => align && `align-items: ${align}`};
  ${({ block }) => `display: ${block ? 'flex' : 'inline-flex'}`};
  ${({ direction }) => direction && direction !== 'row' && `flex-direction: ${direction}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};

  &[data-wrap] {
    flex-wrap: wrap;
  }

  & > * {
    flex-shrink: 0;
  }
`;
