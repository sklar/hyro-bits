/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PlaceholderProps, components, GroupBase } from 'react-select';

import { placeholder } from '../Select.styles';

export const Placeholder = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: PlaceholderProps<Option, IsMulti, Group>
) => <components.Placeholder css={placeholder} {...props} />;
