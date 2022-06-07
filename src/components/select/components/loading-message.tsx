/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, GroupBase, NoticeProps } from 'react-select';

import { message } from '../select.styles';

export const LoadingMessage = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: NoticeProps<Option, IsMulti, Group>
) => {
  return <components.LoadingMessage css={message} {...props} />;
};
