import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
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
     * Children
     */
    children: ReactNode;
    /**
     * Columns
     */
    columns?: string;
    /**
     * Flow
     */
    flow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
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
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Grid.d.ts.map