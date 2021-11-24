/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { kebabCase } from 'case-anything';
import { CSSProperties, ReactElement } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components,
  ContainerProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  GroupHeadingProps,
  GroupProps,
  InputProps,
  MenuProps,
  MultiValueProps,
  NoticeProps,
  OptionProps,
  Props as ReactSelectProps,
  StylesConfig,
} from 'react-select';

import { colors, paragraph } from '../../theme';
import { InternalHTMLAttributes, SizeType, splitPropsByKeys } from '../../utils';
import { truncate } from '../../utils/helpers';
import { Icon } from '../Icon';
import { Idle } from '../indicator';
import { Menu, MenuItem } from '../menu';
import { menuGroup, menuGroupTitle } from '../menu/Menu.styles';
import { input, inputContainer } from './Input.styles';

declare module 'react-select/dist/declarations/src/Select' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    /**
     * Internal styling helpers
     */
    helpers?: InternalHTMLAttributes;
    /**
     * Leader placeholder (buttons, icons)
     */
    leader?: ReactElement;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Size
     */
    size?: Exclude<SizeType, 'xs' | 'xl'>;
    /**
     * Style
     */
    style?: CSSProperties;

    /**
     * State: Active
     */
    active?: boolean;
    /**
     * State: Busy
     */
    busy?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
    /**
     * State: Invalid
     */
    invalid?: boolean;
    /**
     * State: Read-only
     */
    readonly?: boolean;
  }
}

/**
 * Container
 */
const containerStyle = css`
  position: relative;
`;

const SelectContainer = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ContainerProps<Option, IsMulti, Group>
) => {
  const {
    selectProps: { style },
  } = props;
  return <components.SelectContainer css={[containerStyle, { ...style }]} {...props} />;
};

/**
 * Control
 */
const controlStyle = css`
  ${inputContainer};

  *:is(:hover, [data-active], [data-hover]):not([data-disabled], [data-busy]) > & {
    --input-border-color: ${colors.ELEMENT_FOCUS};
  }
  *:is([data-invalid]):not([data-disabled], [data-busy]) > & {
    --input-border-color: ${colors.DANGER};
  }
  *:is([data-disabled], [data-busy]) > & {
    --input-color: ${colors.ELEMENT_DISABLED};
    pointer-events: none;
  }
  *:is([data-readonly]) > & {
    cursor: pointer;
  }

  [data-size='sm'] > & {
    --input-size: 30px;
  }
  [data-size='md'] > & {
    --input-size: 36px;
  }
  [data-size='lg'] > & {
    --font-size: 15px;
    --input-size: 40px;
  }

  /* [data-theme='dark'] & {} */
`;

const Control = <
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
        css={[controlStyle, { ['--input-length' as string]: length }]}
        {...rest}
        selectProps={props.selectProps}
      >
        {leader}
        {children}
      </components.Control>
    </div>
  );
};

/**
 * Values
 */
const multiValueStyle = css`
  align-items: center;
  background: ${colors.ELEMENT_FOCUS};
  border-radius: 6px;
  color: ${colors.WHITE};
  cursor: default;
  display: flex;
  font-weight: 600;
  gap: 4px;
  height: 24px;
  max-width: 100%;
  padding-inline: 8px 4px;
  user-select: none;

  [data-value] {
    ${truncate};
  }
  [data-container] {
    display: contents;
  }
  [data-icon] {
    cursor: pointer;
  }
`;

const MultiValue = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  removeProps,
}: MultiValueProps<Option, IsMulti, Group>) => (
  <div css={multiValueStyle}>
    <span data-value>{children}</span>
    <span data-container {...removeProps}>
      <Icon name="Times" size="xs" />
    </span>
  </div>
);

/**
 * Input
 */
const inputStyle = css`
  word-break: break-all;

  input {
    ${input};
  }
`;
const Input = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: InputProps<Option, IsMulti, Group>
) => <components.Input css={inputStyle} {...props} />;

/**
 * Indicators
 */
const indicatorStyle = css`
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s;
`;

const ClearIndicator = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => (
  <components.ClearIndicator css={indicatorStyle} {...props}>
    <Icon name="Times" size="xs" />
  </components.ClearIndicator>
);

const DropdownIndicator = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => {
  const {
    selectProps: { menuIsOpen },
  } = props;
  return (
    <components.DropdownIndicator
      css={[indicatorStyle, menuIsOpen ? { transform: 'rotateX(180deg)' } : undefined]}
      {...props}
    >
      <Icon name="ChevronDown" size="xs" />
    </components.DropdownIndicator>
  );
};

const loadingIndicatorStyle = css`
  --color: ${colors.ELEMENT_PRIMARY};
  --gap: 2px;
  --range: 4px;
  --size: 4px;
`;
const LoadingIndicator = () => <Idle css={loadingIndicatorStyle} />;

/**
 * Menu
 */
const menuStyle = css`
  --size: 100%;

  position: absolute;
`;

const MenuContainer = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MenuProps<Option, IsMulti, Group>
) => {
  const { cx, innerProps, innerRef, theme, ...rest } = props;
  return (
    <div {...innerProps}>
      <Menu css={menuStyle} {...rest} />
    </div>
  );
};

const Group = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: GroupProps<Option, IsMulti, Group>
) => <components.Group css={menuGroup} {...props} />;

const GroupHeading = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: GroupHeadingProps<Option, IsMulti, Group>
) => <components.GroupHeading css={menuGroupTitle} {...props} />;

const Option = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { cx, innerProps, innerRef, isDisabled, isFocused, isSelected, theme, ...rest } = props;
  // FIXME: Hilfeeee!
  // const [option] = rest.getValue();
  // const value = option instanceof Object && 'value' in option ? option.value : '';
  // const qa = {
  //   'data-qa': `select-option-${value && value !== '' ? kebabCase(value) : null}`,
  // };

  return (
    <div {...innerProps}>
      <MenuItem
        {...rest}
        // {...qa}
        active={isSelected}
        as="div"
        data-hover={isFocused || null}
        disabled={isDisabled}
      />
    </div>
  );
};

/**
 * Message
 */
const messageStyle = css`
  ${paragraph};
`;

const LoadingMessage = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: NoticeProps<Option, IsMulti, Group>
) => {
  return <components.LoadingMessage css={messageStyle} {...props} />;
};

const NoOptionsMessage = <
  Option extends unknown,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: NoticeProps<Option, IsMulti, Group>
) => {
  return <components.NoOptionsMessage css={messageStyle} {...props} />;
};

/**
 * Select
 */

// Drop default styles
// const noopStyles = new Proxy({}, { get: (target, propKey) => () => {} });
const noopStyles = [
  'clearIndicator',
  'container',
  'control',
  'dropdownIndicator',
  'group',
  'groupHeading',
  'indicatorsContainer',
  'indicatorSeparator',
  'input',
  'loadingIndicator',
  'loadingMessage',
  'menu',
  'menuList',
  'menuPortal',
  'multiValue',
  'multiValueLabel',
  'multiValueRemove',
  'noOptionsMessage',
  'option',
  'placeholder',
  'singleValue',
  'valueContainer',
].reduce((acc, style) => {
  return { ...acc, [style]: () => {} };
}, {});

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
    styles: componentStyles,
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
    ...noopStyles,
    indicatorsContainer: () => ({
      alignItems: 'center',
      display: 'flex',
      gap: 8,
    }),
    menuList: (_, { selectProps: { maxMenuHeight } }) => ({
      maxHeight: maxMenuHeight,
      overflowY: 'auto',
      position: 'relative',
    }),
    placeholder: () => ({
      color: 'var(--input-placeholder-color)',
      paddingLeft: 1,
      position: 'absolute',
    }),
    singleValue: () => ({ whiteSpace: 'nowrap' }),
    valueContainer: (_, { selectProps: { isMulti } }) => ({
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexWrap: isMulti ? 'wrap' : 'nowrap',
      gap: 4,
      overflow: 'hidden',
      paddingBlock: 4,
    }),
    ...componentStyles,
  };

  return (
    <ReactSelect
      components={{
        ClearIndicator,
        Control,
        DropdownIndicator,
        Group,
        GroupHeading,
        IndicatorSeparator: () => null,
        Input,
        LoadingIndicator,
        LoadingMessage,
        Menu: MenuContainer,
        MultiValue,
        NoOptionsMessage,
        Option,
        SelectContainer,
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
