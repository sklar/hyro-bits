import React__default, { HTMLAttributes, ElementType, ReactNode, ReactElement } from 'react';
import { S as StatusThemeType } from './status-2f788194.js';

interface NavProps extends HTMLAttributes<HTMLElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
}
declare const Nav: React__default.ForwardRefExoticComponent<NavProps & React__default.RefAttributes<HTMLDivElement>>;

interface NavItemProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Label
     */
    text: string;
    /**
     * Icon
     */
    icon?: ReactElement;
    /**
     * Status
     */
    status?: StatusThemeType;
    /**
     * State: Active
     */
    active?: boolean;
}
declare const NavItem: React__default.ForwardRefExoticComponent<NavItemProps & React__default.RefAttributes<HTMLButtonElement>>;

export { Nav as N, NavProps as a, NavItem as b, NavItemProps as c };
