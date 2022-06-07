import React__default, { HTMLAttributes, ElementType } from 'react';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Direction
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Size
     */
    size?: string;
    /**
     * Space
     */
    space?: string;
}
/**
 * Divider.
 */
declare const Divider: React__default.ForwardRefExoticComponent<DividerProps & React__default.RefAttributes<HTMLDivElement>>;

export { Divider as D, DividerProps as a };
