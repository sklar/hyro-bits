/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { HTMLAttributes } from 'react';
import { VariantType } from '../../utils/types';

import { menuGroup, menuGroupTitle } from './Menu.styles';

export const MenuGroup: React.FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => (
  <div css={menuGroup} data-menu="group" {...props} />
);

export interface MenuGroupTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Variant
   */
  variant?: VariantType;
}

export const MenuGroupTitle: React.FC<MenuGroupTitleProps> = ({
  children,
  variant,
  ...props
}): JSX.Element => (
  <h5 css={menuGroupTitle} data-variant={variant || null} {...props}>
    {children}
  </h5>
);
