/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, GroupBase, InputProps } from 'react-select';

import { input } from '../Select.styles';

export const Input = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: InputProps<Option, IsMulti, Group>
) => (
  <components.Input
    css={input}
    {...props}
    style={
      {
        /* Nuke the inline styles */
      }
    }
  />
);
