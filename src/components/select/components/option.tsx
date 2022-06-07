/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { kebabCase } from 'case-anything';
import { useMemo } from 'react';
import { GroupBase, OptionProps } from 'react-select';

import { MenuItem } from '../../menu';

export const Option = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { cx, data, innerProps, innerRef, isDisabled, isFocused, isSelected, theme, ...rest } =
    props;
  const qa = useMemo(() => {
    const { value } = data as any;
    return value ? { 'data-qa': `select-option-${kebabCase(value)}` } : null;
  }, [data]);

  return (
    <div ref={innerRef} {...innerProps}>
      <MenuItem
        {...rest}
        {...qa}
        active={isSelected}
        as="div"
        data-hover={isFocused || null}
        disabled={isDisabled}
      />
    </div>
  );
};
