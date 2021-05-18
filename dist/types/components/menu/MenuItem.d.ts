import React, { ElementType, HTMLAttributes } from 'react';
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
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
}
/**
 * Context menu item
 */
export declare const MenuItem: React.FC<MenuItemProps>;
//# sourceMappingURL=MenuItem.d.ts.map