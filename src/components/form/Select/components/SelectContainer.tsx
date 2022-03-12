/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { components, ContainerProps, GroupBase } from 'react-select';

import { container } from '../Select.styles';

export const SelectContainer = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ContainerProps<Option, IsMulti, Group>
) => {
  const {
    selectProps: { style },
  } = props;
  return (
    <components.SelectContainer css={[container, css(style ? { ...style } : {})]} {...props} />
  );
};
