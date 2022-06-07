/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, GroupBase, GroupHeadingProps } from 'react-select';

import { groupTitle } from '../../menu';

export const GroupHeading = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: GroupHeadingProps<Option, IsMulti, Group>
) => <components.GroupHeading css={groupTitle} data-variant="primary" {...props} />;
