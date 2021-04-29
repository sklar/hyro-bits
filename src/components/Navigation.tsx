import styled from '@emotion/styled';
import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';

import { button, colors } from '../theme';
import { Icon } from './Icon';
import { Status, StatusThemeType } from './Status';
import { Text } from './Text';

export interface NavItemProps extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  /**
   * Label
   */
  text: string;
  /**
   * Href
   */
  href?: string;
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
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ active, href, icon = <Icon name="Chevron" />, status, text, ...props }, ref): JSX.Element => (
    <NavItemContainer
      as={href ? 'a' : 'button'}
      data-active={active || null}
      data-status={status || null}
      href={href}
      ref={ref}
      type={href ? undefined : 'button'}
      {...props}
    >
      {status && <Status theme={status || null} />}
      <Text data-text truncate>
        {text}
      </Text>
      {icon}
    </NavItemContainer>
  )
);

const NavItemContainer = styled.a`
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
`;

/**
 * Navigation
 */
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;
