/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { GroupBase, MenuProps } from 'react-select';

import { Menu as MenuDraft } from '../../../menu';
import { menu as menuStyles } from '../Select.styles';

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
    theme,
    selectProps: { menu = 'absolute', ...selectProps },
    ...rest
  } = props;
  const menuProps = {
    ...rest,
    selectProps,
  };
  return (
    <div ref={innerRef} {...innerProps}>
      <MenuDraft
        css={[
          menuStyles,
          css`
            position: ${menu};
          `,
        ]}
        {...menuProps}
      />
    </div>
  );
};
