import { ReactElement, CSSProperties } from 'react';
import { GroupBase, Props } from 'react-select';
export { components as ReactSelectComponents, GroupBase as ReactSelectGroupBase, Props as ReactSelectProps } from 'react-select';
import { I as InternalHTMLAttributes, S as SizeType } from '../../index-2e22dac1.js';
import { AsyncProps } from 'react-select/async';
export { AsyncProps as ReactAsyncSelectProps } from 'react-select/async';
import * as _emotion_utils from '@emotion/utils';

interface AsyncSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CustomSelectProps, InternalHTMLAttributes, AsyncProps<Option, IsMulti, Group> {
}
declare const AsyncSelect: <Option extends unknown = {
    label: string;
    value: string;
}, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: AsyncSelectProps<Option, IsMulti, Group>) => JSX.Element;

interface SelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CustomSelectProps, InternalHTMLAttributes, Props<Option, IsMulti, Group> {
}
declare const Select: <Option extends unknown = {
    label: string;
    value: string;
}, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: SelectProps<Option, IsMulti, Group>) => JSX.Element;

/**
 * Container
 */
declare const container: _emotion_utils.SerializedStyles;
/**
 * Control
 */
declare const control: _emotion_utils.SerializedStyles;
/**
 * Values
 */
declare const valueContainer: _emotion_utils.SerializedStyles;
declare const multiValue: _emotion_utils.SerializedStyles;
declare const singleValue: _emotion_utils.SerializedStyles;
/**
 * Input
 */
declare const placeholder: _emotion_utils.SerializedStyles;
declare const input: _emotion_utils.SerializedStyles;
/**
 * Indicators
 */
declare const indicatorsContainer: _emotion_utils.SerializedStyles;
declare const indicator: _emotion_utils.SerializedStyles;
declare const loadingIndicator: _emotion_utils.SerializedStyles;
/**
 * Menu
 */
declare const menu: _emotion_utils.SerializedStyles;
declare const menuList: _emotion_utils.SerializedStyles;
/**
 * Message
 */
declare const message: _emotion_utils.SerializedStyles;
declare const components: {};

interface CustomSelectProps {
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
     * Menu position
     */
    menu?: 'absolute' | 'static';
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
declare module 'react-select/dist/declarations/src/Select' {
    interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> extends CustomSelectProps {
    }
}

export { AsyncSelect, AsyncSelectProps, CustomSelectProps, Select, SelectProps, components, container, control, indicator, indicatorsContainer, input, loadingIndicator, menu, menuList, message, multiValue, placeholder, singleValue, valueContainer };
