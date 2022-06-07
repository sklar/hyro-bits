import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes } from 'react';

import { DirectionType, SizeType } from '../../types';
import { Icon } from '../icon';
import { order } from './order.styles';

export interface OrderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Direction
   */
  direction?: DirectionType;
  /**
   * Size
   */
  size?: SizeType;
}

/**
 * Order indicator.
 */
export const Order = forwardRef<HTMLDivElement, OrderProps>(
  ({ direction, size = 'xs', ...props }, ref): JSX.Element => (
    <Container data-direction={direction} ref={ref} {...props}>
      <Icon name="Sort" size="xs" data-size={size || null} />
      <Icon name="Sort" size="xs" data-size={size || null} />
      <Icon name="Sort" size="xs" data-size={size || null} />
    </Container>
  )
);

const Container = styled.div`
  ${order};
`;
