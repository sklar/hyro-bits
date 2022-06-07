/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { IndicatorsContainerProps, components, GroupBase } from 'react-select';

import { indicatorsContainer } from '../select.styles';

export const IndicatorsContainer = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: IndicatorsContainerProps<Option, IsMulti, Group>
) => <components.IndicatorsContainer css={indicatorsContainer} {...props} />;
