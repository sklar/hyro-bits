import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes } from 'react';

import { menu } from './menu.styles';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Align items along primary axis
   */
  justify?: boolean;
  /**
   * Padding
   */
  padding?: boolean;
  /**
   * Size
   */
  size?: string;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * State: Active
   */
  active?: boolean;

  /**
   * Event: Close
   */
  onClose?: () => void;
}

/**
 * Context menu
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ active, justify, padding, size, theme, ...props }, ref): JSX.Element => {
    const qa = {
      'data-qa': 'menu',
    };
    return (
      <Container
        data-active={active || null}
        data-justify={justify || null}
        data-padding={padding || null}
        data-theme={theme || null}
        ref={ref}
        style={{ ['--size' as string]: size }}
        {...qa}
        {...props}
      />
    );
  }
);

const Container = styled.section`
  ${menu};
`;
