/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { kebabCase } from 'case-anything';
import { CSSProperties, forwardRef, ReactElement } from 'react';
import ReactSelect, {
  components,
  GroupProps,
  GroupTypeBase,
  IndicatorContainerProps,
  IndicatorProps,
  InputProps,
  MultiValueProps,
  NamedProps,
  OptionTypeBase,
  PlaceholderProps,
  SingleValueProps,
  ValueContainerProps,
} from 'react-select';

import { colors, paragraph } from '../../theme';
import { SizeType } from '../../utils';
import { truncate } from '../../utils/helpers';
import { Icon } from '../Icon';
import { Idle } from '../indicator';
import { Menu, MenuItem } from '../menu';
import { menuGroup, menuGroupTitle } from '../menu/Menu.styles';
import { input, inputContainer } from './Input.styles';

/**
 * Container
 */
const containerStyle = css`
  position: relative;
`;

const SelectContainer = (props: any) => {
  const {
    selectProps: { style },
  } = props;
  return <components.SelectContainer css={[containerStyle, style]} {...props} />;
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

const Control = (props: any) => {
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
      <components.Control css={[controlStyle, { ['--input-length' as string]: length }]} {...rest}>
        {leader}
        {children}
      </components.Control>
    </div>
  );
};

/**
 * Values
 */
const valueContainerStyle = css`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 4px;
  overflow: hidden;
  padding-block: 4px;
`;

const ValueContainer = ({
  selectProps: { isMulti, ...selectProps },
  ...props
}: ValueContainerProps<any, any>) => (
  <components.ValueContainer
    css={[
      valueContainerStyle,
      isMulti
        ? css`
            flex-wrap: wrap;
          `
        : null,
    ]}
    selectProps={selectProps}
    {...props}
  />
);

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

  [data-icon] {
    cursor: pointer;
  }
`;
const MultiValue = (props: MultiValueProps<any, any>) => {
  const { children, removeProps } = props;
  return (
    <div css={multiValueStyle}>
      <span data-value>{children}</span>
      <Icon name="Times" size="xs" {...removeProps} />
    </div>
  );
};

const singleValueStyle = css`
  white-space: nowrap;
`;
const SingleValue = (props: SingleValueProps<any, any>) => (
  <components.SingleValue css={singleValueStyle} {...props} />
);

/**
 * Input
 */
const placeholderStyle = css`
  color: var(--input-placeholder-color);
  padding-left: 1px;
  position: absolute;
`;
const Placeholder = (props: PlaceholderProps<any, any>) => (
  <components.Placeholder css={placeholderStyle} {...props} />
);

const inputStyle = css`
  word-break: break-all;

  input {
    ${input};
  }
`;
const Input = (props: InputProps) => <components.Input css={inputStyle} {...props} />;

/**
 * Indicators
 */
const indicatorStyle = css`
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s;
`;

const indicatorsContainerStyle = css`
  align-items: center;
  display: flex;
  gap: 8px;
`;
const IndicatorsContainer = (props: IndicatorContainerProps<any, any>) => (
  <components.IndicatorsContainer css={indicatorsContainerStyle} {...props} />
);

const ClearIndicator = (props: IndicatorProps<any, any>) => {
  return (
    <components.ClearIndicator css={indicatorStyle} {...props}>
      <Icon name="Times" size="xs" />
    </components.ClearIndicator>
  );
};

const DropdownIndicator = (props: IndicatorProps<any, any>) => {
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
 * TODO: Implement MenuProps
 */
const menuStyle = css`
  --size: 100%;

  position: absolute;
`;
const MenuContainer = (props: any) => {
  const { cx, innerProps, innerRef, ...rest } = props;
  return <Menu css={menuStyle} ref={innerRef} {...innerProps} {...rest} />;
};

const Group = (props: GroupProps<any, any>) => <components.Group css={menuGroup} {...props} />;

const GroupHeading = (props: any) => <components.GroupHeading css={menuGroupTitle} {...props} />;

const menuListStyle = css`
  overflow-y: auto;
  position: relative;
`;
const MenuList = (props: any) => {
  const {
    selectProps: { maxMenuHeight },
    ...rest
  } = props;
  return <components.MenuList css={[menuListStyle, { maxHeight: maxMenuHeight }]} {...rest} />;
};

const Option = (props: any) => {
  const { cx, data, innerProps, innerRef, isDisabled, isFocused, isSelected, ...rest } = props;
  return (
    <MenuItem
      {...innerProps}
      {...rest}
      active={isSelected}
      as="div"
      data-hover={isFocused || null}
      disabled={isDisabled}
      ref={innerRef}
      data-qa={`select-option-${kebabCase(data.value)}`}
    />
  );
};

/**
 * Message
 */
const messageStyle = css`
  ${paragraph};
`;
const LoadingMessage = (props: any) => {
  return <components.LoadingMessage css={messageStyle} {...props} />;
};
const NoOptionsMessage = (props: any) => {
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
  'indicatorSeparator',
  'indicatorsContainer',
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

export interface SelectProps
  extends Omit<NamedProps<OptionTypeBase, boolean, GroupTypeBase<any>>, 'theme'> {
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

export const Select = forwardRef<HTMLElement, SelectProps>(
  (props, ref): JSX.Element => {
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
    const helpers = Object.fromEntries(
      Object.entries(props).filter(([key]) => ['data-hover', 'data-qa'].includes(key))
    );
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
    const customStyles = {
      ...noopStyles,
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
          IndicatorsContainer,
          IndicatorSeparator: () => null,
          Input,
          LoadingIndicator,
          LoadingMessage,
          Menu: MenuContainer,
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
        ref={ref as any}
        styles={customStyles}
        {...selectProps}
      />
    );
  }
);
