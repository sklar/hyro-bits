/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GroupBase, MultiValueProps } from 'react-select';

import { Icon } from '../../../Icon';
import { multiValue } from '../Select.styles';

export const MultiValue = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  removeProps,
}: MultiValueProps<Option, IsMulti, Group>) => (
  <div css={multiValue}>
    <span data-value>{children}</span>
    <span data-container {...removeProps}>
      <Icon name="Times" size="xs" />
    </span>
  </div>
);
