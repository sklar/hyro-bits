import React, { ElementType, HTMLAttributes } from 'react';
import { AlignmentPrimaryType, AlignmentSecondaryType } from '../../utils/types';
export interface GridProps extends HTMLAttributes<HTMLElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentPrimaryType;
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Block or inline
     */
    block?: boolean;
    /**
     * Columns
     */
    columns?: string;
    /**
     * Gap
     */
    gap?: string;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentSecondaryType;
    /**
     * Column, max
     */
    max?: string;
    /**
     * Column, min
     */
    min?: string;
    /**
     * Sizing
     */
    sizing?: 'auto-fill' | 'auto-fit';
}
/**
 * Grid wrapper
 */
export declare const Grid: React.FC<GridProps>;
//# sourceMappingURL=Grid.d.ts.map