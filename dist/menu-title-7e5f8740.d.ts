import * as React from 'react';
import React__default, { HTMLAttributes, ElementType } from 'react';
import * as _emotion_styled from '@emotion/styled';
import * as _emotion_react from '@emotion/react';
import { V as VariantType } from './index-2e22dac1';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Align items along primary axis
     */
    justify?: boolean;
    /**
     * Padding
     */
    padding?: boolean;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * Event: Close
     */
    onClose?: () => void;
}
/**
 * Context menu
 */
declare const Menu: React__default.ForwardRefExoticComponent<MenuProps & React__default.RefAttributes<HTMLDivElement>>;

declare const MenuDivider: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare const MenuGroup: React__default.FC<HTMLAttributes<HTMLDivElement>>;
interface MenuGroupTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Variant
     */
    variant?: VariantType;
}
declare const MenuGroupTitle: React__default.FC<MenuGroupTitleProps>;

interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Align along primary axis
     */
    justify?: boolean;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Context menu item
 */
declare const MenuItem: React__default.ForwardRefExoticComponent<MenuItemProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const MenuTitle: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

export { Menu as M, MenuProps as a, MenuDivider as b, MenuGroup as c, MenuGroupTitle as d, MenuItem as e, MenuItemProps as f, MenuTitle as g };
