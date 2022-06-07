/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { MenuListProps, components, GroupBase } from 'react-select';

import { menuList } from '../select.styles';

export const MenuList = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MenuListProps<Option, IsMulti, Group>
) => (
  <components.MenuList
    css={[menuList, { maxHeight: props.selectProps.maxMenuHeight }]}
    {...props}
  />
);
