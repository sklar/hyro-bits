import React, { forwardRef, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { menu } from './Menu.styles';

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
    const delegated = { ...props };

    return (
      <MenuContainer
        data-active={active || null}
        data-justify={justify || null}
        data-padding={padding || null}
        data-theme={theme || null}
        ref={ref}
        style={{ ['--size' as string]: size }}
        {...delegated}
      />
    );
  }
);

/**
 * Note that [data-hover] and [data-pressed] are here only to help
 * better illustrate `:hover` and `:active` state in the dedicated story.
 */

const MenuContainer = styled.section`
  ${menu};
`;
