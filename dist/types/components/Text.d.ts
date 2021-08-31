import React, { ElementType, HTMLAttributes } from 'react';
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
     * Hyphens
     */
    hyphens?: 'manual' | 'auto' | 'none';
    /**
     * White space
     */
    space?: 'normal' | 'nowrap' | 'pre';
    /**
     * Truuncate text
     */
    truncate?: boolean;
    /**
     * Word break
     */
    word?: 'normal' | 'break' | 'keep';
}
/**
 * Text
 */
export declare const Text: React.FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map