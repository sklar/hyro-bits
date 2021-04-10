import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { colors } from '../theme';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  color?: string;
  indent?: string;
  resize?: 'both' | 'horizontal' | 'vertical' | 'none';
  size?: string;
}

export const Container: React.FC<ContainerProps> = ({ resize, ...props }): JSX.Element => {
  const delegated = { resize, ...props };
  return <Foo data-resize={resize || null} {...delegated} />;
};

const Foo = styled.div<ContainerProps>`
  background-color: var(--color, ${colors.TRANSPARENT});
  padding: var(--indent, 0);
  resize: var(--resize, none);
  width: var(--size, 100%);

  ${({ color }) => `--color: ${color}`};
  ${({ indent }) => `--indent: ${indent}`};
  ${({ resize }) => `--resize: ${resize}`};
  ${({ size }) => `--size: ${size}`};

  &[data-resize] {
    overflow: auto;
  }
`;
