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
     * Truuncate text
     */
    truncate?: boolean;
}
/**
 * Text
 */
export declare const Text: React.FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map