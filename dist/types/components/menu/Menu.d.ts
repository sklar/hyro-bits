import React, { HTMLAttributes } from 'react';
export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
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
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Menu.d.ts.map