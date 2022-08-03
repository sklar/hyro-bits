import React__default, { HTMLAttributes, ElementType } from 'react';

declare type TruncateOptionType = {
    begin: number;
    end: number;
    limit: number;
};
interface TextProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Clamp lines
     */
    clamp?: number;
    /**
     * Content
     */
    content?: string;
    /**
     * Hyphens
     */
    hyphens?: 'manual' | 'auto' | 'none';
    /**
     * White space
     */
    space?: 'normal' | 'nowrap' | 'pre';
    /**
     * Truncate text
     */
    truncate?: boolean | Partial<TruncateOptionType>;
    /**
     * Wrap text
     */
    wrap?: 'normal' | 'all' | 'word';
}
/**
 * Text
 */
declare const Text: React__default.ForwardRefExoticComponent<TextProps & React__default.RefAttributes<HTMLDivElement>>;

export { Text as T, TextProps as a, TruncateOptionType as b };
