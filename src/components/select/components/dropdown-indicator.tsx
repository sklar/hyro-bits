/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';

import { Icon } from '../../icon';
import { indicator } from '../select.styles';

export const DropdownIndicator = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => {
  const {
    selectProps: { menuIsOpen },
  } = props;
  return (
    <components.DropdownIndicator
      css={[indicator, menuIsOpen ? { transform: 'rotateX(180deg)' } : undefined]}
      {...props}
    >
      <Icon name="ChevronDown" size="xs" />
    </components.DropdownIndicator>
  );
};
