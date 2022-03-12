/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import ReactSelect, { GroupBase, Props as ReactSelectProps, StylesConfig } from 'react-select';

import { splitPropsByKeys } from '../../../utils';
import { InternalHTMLAttributes } from '../../../utils/types';
import {
  ClearIndicator,
  Control,
  DropdownIndicator,
  Group,
  GroupHeading,
  IndicatorsContainer,
  Input,
  LoadingIndicator,
  LoadingMessage,
  Menu,
  MenuList,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer,
} from './components';
import { components as defaultComponentsStyles } from './Select.styles';

export interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends InternalHTMLAttributes,
    ReactSelectProps<Option, IsMulti, Group> {}

export const Select = <
  Option extends unknown = { label: string; value: string },
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: SelectProps<Option, IsMulti, Group>
): JSX.Element => {
  const {
    active,
    busy,
    components,
    disabled,
    invalid,
    readonly,
    style,
    styles: customComponentsStyles,
    ...rest
  } = props;

  const [helpers] = splitPropsByKeys(props, ['data-hover', 'data-qa']);

  // These are passed to every component that we define;
  //  don't forget to add each of them to the Select module declaration
  const selectProps = {
    active,
    busy,
    disabled,
    helpers,
    invalid,
    readonly,
    style,
    ...rest,
  };

  // Drop default styling and provide custom styles
  const customStyles: StylesConfig<Option, IsMulti, Group> = {
    ...defaultComponentsStyles,
    ...customComponentsStyles,
  };

  return (
    <ReactSelect
      components={{
        ClearIndicator,
        Control,
        DropdownIndicator,
        Group,
        GroupHeading,
        IndicatorsContainer,
        IndicatorSeparator: () => null,
        Input,
        LoadingIndicator,
        LoadingMessage,
        Menu,
        MenuList,
        MultiValue,
        NoOptionsMessage,
        Option,
        Placeholder,
        SelectContainer,
        SingleValue,
        ValueContainer,
        ...components,
      }}
      isDisabled={readonly || disabled}
      isLoading={busy}
      menuIsOpen={active}
      styles={customStyles}
      {...selectProps}
    />
  );
};
