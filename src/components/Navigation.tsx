import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { ElementType, forwardRef, HTMLAttributes, ReactElement } from 'react';

import { button, colors } from '../theme';
import { Icon } from './Icon';
import { Status, StatusThemeType } from './Status';
import { Text } from './Text';

export interface NavItemProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Label
   */
  text: string;
  /**
   * Icon
   */
  icon?: ReactElement;
  /**
   * Status
   */
  status?: StatusThemeType;

  /**
   * State: Active
   */
  active?: boolean;
}

/**
 * Navigation item
 */
export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  (
    {
      active,
      as = 'button',
      icon = <Icon name="ChevronRight" size="xs" />,
      status,
      text,
      ...props
    },
    ref
  ): JSX.Element => {
    const qa = {
      'data-qa': `nav-item-${text && kebabCase(text)}`,
    };
    return (
      <NavItemContainer
        as={as}
        data-active={active || null}
        data-status={status || null}
        ref={ref}
        type={as === 'button' ? 'button' : undefined}
        {...qa}
        {...props}
      >
        {status && <Status theme={status || null} />}
        <Text data-text truncate>
          {text}
        </Text>
        {icon}
      </NavItemContainer>
    );
  }
);

const NavItemContainer = styled.button`
  ${button};

  --nav-item-background-color: #edf1f4;
  --nav-item-border-color: #c5d5e4;
  --nav-item-border-size: 1px;
  --nav-item-color: ;
  --nav-item-gap: 8px;
  --nav-item-indent: 8px;
  --nav-item-size: 56px;

  align-items: center;
  background-color: var(--nav-item-background-color);
  border: 0;
  border-bottom: var(--nav-item-border-size) solid var(--nav-item-border-color);
  color: var(--nav-item-color);
  cursor: pointer;
  display: flex;
  gap: var(--nav-item-gap);
  height: var(--nav-item-size);
  justify-content: space-between;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 0 var(--nav-item-indent);
  padding-left: calc(2 * var(--nav-item-indent));
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, color;
  transition-timing-function: ease-in-out;

  &[data-active] {
    --nav-item-background-color: ${colors.ELEMENT_FOCUS};
    --nav-item-color: ${colors.WHITE};
  }
  &[data-status] {
    padding-left: var(--nav-item-indent);
  }

  [data-text] {
    flex: 1;
  }

  [data-theme='dark'] & {
    --nav-item-background-color: ${colors.DARK_BACKGROUND_SECONDARY};
    --nav-item-border-color: #4a5066;
    --nav-item-color: ${colors.WHITE};

    &[data-active] {
      --nav-item-background-color: ${colors.DARK_ELEMENT_FOCUS};
    }
  }
`;

/**
 * Navigation
 */
export interface NavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Render as HTML element
   */
  as?: ElementType<any>;
  /**
   * Theme
   */
  theme?: 'light' | 'dark';
}

/**
 * Navigation item
 */
export const Nav: React.FC<NavProps> = ({ as = 'nav', theme, ...props }): JSX.Element => (
  <NavContainer as={as} data-theme={theme || null} {...props} />
);

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;
