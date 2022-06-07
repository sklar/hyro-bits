/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SingleValueProps, components, GroupBase } from 'react-select';

import { singleValue } from '../select.styles';

export const SingleValue = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: SingleValueProps<Option, IsMulti, Group>
) => <components.SingleValue css={singleValue} {...props} />;
