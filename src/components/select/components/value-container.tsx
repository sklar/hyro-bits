/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ValueContainerProps, components, GroupBase } from 'react-select';

import { valueContainer } from '../select.styles';

export const ValueContainer = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
) => (
  <components.ValueContainer
    css={[
      valueContainer,
      props.selectProps.isMulti
        ? css`
            display: flex;
            flex-wrap: wrap;
          `
        : null,
    ]}
    {...props}
  />
);
