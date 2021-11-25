import React, { ElementType, HTMLAttributes } from 'react';
export declare type TruncateOptionType = {
    begin: number;
    end: number;
};
export interface TextProps extends HTMLAttributes<HTMLDivElement> {
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
     * Word break
     */
    word?: 'normal' | 'break' | 'keep';
}
/**
 * Text
 */
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Text.d.ts.map