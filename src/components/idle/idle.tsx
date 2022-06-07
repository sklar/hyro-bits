import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes } from 'react';

import { element, idle } from './idle.styles';

export interface IdleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Color
   */
  color?: string;
  /**
   * Delay
   */
  delay?: number;
  /**
   * Duration
   */
  duration?: number;
  /**
   * Gap
   */
  gap?: string;
  /**
   * Range aka amplitude
   */
  range?: string;
  /**
   * Size
   */
  size?: string;
}

/**
 * Idle indicator.
 */
export const Idle = forwardRef<HTMLDivElement, IdleProps>(
  (
    {
      color = 'currentColor',
      delay = 100,
      duration = 500,
      gap = '4px',
      range = '6px',
      size = '5px',
      ...props
    },
    ref
  ): JSX.Element => {
    const delegated = { color, delay, duration, gap, range, size, ...props };
    const qa = {
      'data-qa': 'idle',
    };
    return (
      <Container ref={ref} {...qa} {...delegated}>
        <Element />
        <Element />
        <Element />
      </Container>
    );
  }
);

const Element = styled.div`
  ${element};
`;

const Container = styled.div<IdleProps>(
  ({ color, delay, duration, gap, range, size }) => css`
    --color: ${color};
    --delay: ${delay}ms;
    --duration: ${duration}ms;
    --gap: ${gap};
    --range: ${range};
    --size: ${size};

    ${idle};
  `
);
