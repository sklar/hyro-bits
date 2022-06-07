import React__default, { HTMLAttributes, ElementType, ReactNode } from 'react';
import { A as AlignmentPrimaryType, c as AlignmentSecondaryType } from './index-2e22dac1';

interface GridProps extends HTMLAttributes<HTMLElement> {
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
declare const Grid: React__default.ForwardRefExoticComponent<GridProps & React__default.RefAttributes<HTMLDivElement>>;

export { Grid as G, GridProps as a };
