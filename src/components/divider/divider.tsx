import styled from '@emotion/styled';
import React, { ElementType, forwardRef, HTMLAttributes } from 'react';

import { divider } from './divider.styles';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Direction
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Size
   */
  size?: string;
  /**
   * Space
   */
  space?: string;
}

/**
 * Divider.
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { as = 'span', direction = 'vertical', size = '2px', space = '0', ...props },
    ref
  ): JSX.Element => {
    return (
      <Container
        {...props}
        as={as}
        data-divider={direction}
        ref={ref}
        style={{ ['--size' as string]: size, ['--space' as string]: space }}
      />
    );
  }
);

const Container = styled.span`
  ${divider};
`;
