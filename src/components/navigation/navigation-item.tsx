import styled from '@emotion/styled';
import { kebabCase } from 'case-anything';
import React, { ElementType, forwardRef, HTMLAttributes, ReactElement } from 'react';

import { Icon } from '../icon';
import { Status, StatusThemeType } from '../status';
import { Text } from '../text';
import { item } from './navigation.styles';

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
      <Container
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
      </Container>
    );
  }
);

const Container = styled.button`
  ${item};
`;
