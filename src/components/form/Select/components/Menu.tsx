/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GroupBase, MenuProps } from 'react-select';

import { Menu as MenuDraft } from '../../../menu';
import { menu } from '../Select.styles';

export const Menu = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MenuProps<Option, IsMulti, Group>
) => {
  const { cx, innerProps, innerRef, theme, ...rest } = props;
  return (
    <div ref={innerRef} {...innerProps}>
      <MenuDraft css={menu} {...rest} />
    </div>
  );
};
