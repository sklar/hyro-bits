/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { HTMLAttributes } from 'react';

import { VariantType } from '../../types';
import { group, groupTitle } from './menu.styles';

export const MenuGroup: React.FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => (
  <div css={group} data-menu="group" {...props} />
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
  <h5 css={groupTitle} data-variant={variant || null} {...props}>
    {children}
  </h5>
);
