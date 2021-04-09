import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { colors } from '../../theme';
import { Direction } from '../../utils/constants';
import { DirectionType, SizeType } from '../../utils/types';
import { Icon } from '../Icon';

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
export const Order: React.VFC<OrderProps> = ({ direction, size = 'xs', ...props }): JSX.Element => (
  <Container data-direction={direction} {...props}>
    <Icon name="Sort" size="xs" data-size={size || null} />
    <Icon name="Sort" size="xs" data-size={size || null} />
    <Icon name="Sort" size="xs" data-size={size || null} />
  </Container>
);

const Container = styled.div`
  --opacity-2: 0;
  --opacity-3: 0;
  --path: ;

  cursor: pointer;
  display: inline-grid;
  place-items: center;

  [data-icon] {
    color: var(--color);

    &:nth-of-type(1) {
      --color: ${colors.ELEMENT_TERTIARY};
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      --color: ${colors.ELEMENT_PRIMARY};

      clip-path: polygon(var(--path));
      position: absolute;
      transition: opacity 0.4s;
    }
    &:nth-of-type(2) {
      --path: 0% 50%, 100% 50%, 100% 100%, 0% 100%;
      opacity: var(--opacity-2);
    }
    &:nth-of-type(3) {
      --path: 0% 0%, 100% 0%, 100% 50%, 0% 50%;
      opacity: var(--opacity-3);
    }
  }

  &[data-direction='${Direction.ASCENDING}'] {
    --opacity-2: 1;
  }
  &[data-direction='${Direction.DESCENDING}'] {
    --opacity-3: 1;
  }
`;
