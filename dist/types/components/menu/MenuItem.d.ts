import React, { HTMLAttributes } from 'react';
export interface MenuItemProps extends HTMLAttributes<HTMLButtonElement> {
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
     * Event: Click
     */
    onClick?: () => void;
}
/**
 * Context menu item
 */
export declare const MenuItem: React.FC<MenuItemProps>;
//# sourceMappingURL=MenuItem.d.ts.map