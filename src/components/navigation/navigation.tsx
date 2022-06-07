import styled from '@emotion/styled';
import React, { ElementType, forwardRef, HTMLAttributes, ReactNode } from 'react';

import { navigation } from './navigation.styles';

export interface NavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';
}

export const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ as = 'nav', theme, ...props }, ref): JSX.Element => (
    <Container as={as} data-theme={theme || null} ref={ref} {...props} />
  )
);

export const Container = styled.nav`
  ${navigation};
`;
