/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

import { menuGroup, menuGroupTitle } from './Menu.styles';

export const MenuGroup: React.FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => (
  <div css={menuGroup} data-menu="group" {...props} />
);

export const MenuGroupTitle = styled.h5`
  ${menuGroupTitle};
`;
