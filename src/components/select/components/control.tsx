/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { components, ControlProps, GroupBase } from 'react-select';

import { control } from '../select.styles';

export const Control = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ControlProps<Option, IsMulti, Group>
) => {
  const {
    children,
    selectProps: {
      active,
      busy,
      disabled,
      helpers,
      invalid,
      leader,
      length,
      readonly,
      size = 'md',
      theme,
    },
    ...rest
  } = props;
  const qa = {
    'data-qa': 'select',
  };

  return (
    <div
      data-active={active || null}
      data-busy={busy || null}
      data-disabled={disabled || null}
      data-invalid={invalid || null}
      data-readonly={readonly || null}
      data-size={size}
      data-theme={theme || null}
      {...qa}
      {...helpers}
    >
      <components.Control
        css={[control, { ['--input-length' as string]: length }]}
        {...rest}
        selectProps={props.selectProps}
      >
        {leader}
        {children}
      </components.Control>
    </div>
  );
};
