import React, { HTMLAttributes } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { EASING } from '../../utils/animations';

export interface IdleProps extends HTMLAttributes<HTMLElement> {
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
export const Idle: React.VFC<IdleProps> = ({
  color,
  delay = 100,
  duration = 500,
  gap = '4px',
  range = '6px',
  size = '5px',
  ...props
}): JSX.Element => {
  const delegated = { color, delay, duration, gap, range, size, ...props };
  const qa = {
    'data-qa': 'idle',
  };
  return (
    <Container {...qa} {...delegated}>
      <Element />
      <Element />
      <Element />
    </Container>
  );
};

// TypeScript warning will be gone after this boi is resolved
// https://github.com/microsoft/typescript-styled-plugin/issues/137#issuecomment-848930098
const idle = keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`;

const Element = styled.div`
  animation: ${idle} var(--duration) ${EASING.easeInOut} var(--shift) infinite alternate;
  background: var(--color);
  border-radius: 50%;
  display: block;
  height: var(--size);
  opacity: var(--opacity);
  transform: translateY(var(--offset));
  width: var(--size);
  will-change: transform;

  &:nth-of-type(1) {
    --shift: calc(0 * var(--delay));
    --opacity: 1;
  }
  &:nth-of-type(2) {
    --shift: calc(1 * var(--delay));
    --opacity: 0.75;
  }
  &:nth-of-type(3) {
    --shift: calc(2 * var(--delay));
    --opacity: 0.5;
  }

  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }
`;

/**
 * TODO: Improve performance
 */
const Container = styled.div<IdleProps>`
  ${({ color }) => color && `--color: ${color}`};
  ${({ delay }) => `--delay: ${delay}ms`};
  ${({ duration }) => `--duration: ${duration}ms`};
  ${({ gap }) => `--gap: ${gap}`};
  ${({ range }) => `--range: ${range}`};
  ${({ size }) => `--size: ${size}`};

  display: inline-flex;
  gap: var(--gap);
`;
