/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, GroupBase, GroupProps } from 'react-select';

import { group } from '../../menu';

export const Group = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: GroupProps<Option, IsMulti, Group>
) => <components.Group css={group} {...props} />;
