/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GroupBase, MenuProps } from 'react-select';

import { Menu as MenuDraft } from '../../menu';
import { menu as menuStyles } from '../select.styles';

export const Menu = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MenuProps<Option, IsMulti, Group>
) => {
  const {
    cx,
    innerProps,
    innerRef,
    placement,
    theme,
    selectProps: { menu = 'absolute', ...selectProps },
    ...rest
  } = props;
  const menuProps = {
    ...rest,
    selectProps,
  };
  return (
    <div {...innerProps}>
      <MenuDraft
        css={menuStyles}
        data-placement={placement}
        data-position={menu}
        ref={innerRef}
        {...menuProps}
      />
    </div>
  );
};
