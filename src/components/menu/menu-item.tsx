import styled from '@emotion/styled';
import React, { ElementType, forwardRef, HTMLAttributes } from 'react';

import { item } from './menu.styles';

export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Align along primary axis
   */
  justify?: boolean;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';

  /**
   * State: Active
   */
  active?: boolean;
  /**
   * State: Disabled
   */
  disabled?: boolean;
}

/**
 * Context menu item
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ active, as = 'button', disabled, justify, theme, ...props }, ref): JSX.Element => {
    const qa = {
      'data-qa': 'menu-item',
    };
    return (
      <Container
        as={as}
        data-active={active || null}
        data-disabled={disabled || null}
        data-justify={justify || null}
        data-theme={theme || null}
        disabled={as === 'button' ? !!disabled : undefined}
        ref={ref}
        type={as === 'button' ? 'button' : undefined}
        {...qa}
        {...props}
      />
    );
  }
);

const Container = styled.button`
  ${item};
`;
