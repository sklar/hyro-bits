/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, GroupBase, GroupHeadingProps } from 'react-select';

import { menuGroupTitle } from '../../../menu/Menu.styles';

export const GroupHeading = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: GroupHeadingProps<Option, IsMulti, Group>
) => <components.GroupHeading css={menuGroupTitle} data-variant="primary" {...props} />;
