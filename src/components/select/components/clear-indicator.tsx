/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ClearIndicatorProps, components, GroupBase } from 'react-select';

import { Icon } from '../../icon';
import { indicator } from '../select.styles';

export const ClearIndicator = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => (
  <components.ClearIndicator css={indicator} {...props}>
    <Icon name="Times" size="xs" />
  </components.ClearIndicator>
);
