import React__default, { HTMLAttributes, ElementType, ReactNode } from 'react';
import { c as AlignmentSecondaryType, b as AlignmentFlexboxType, A as AlignmentPrimaryType, a as AlignmentTertiaryType } from './index-2e22dac1.js';

interface FlexProps extends HTMLAttributes<HTMLElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentSecondaryType | AlignmentFlexboxType;
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
     * Direction (default is `row`)
     */
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    /**
     * Gap
     */
    gap?: string;
    /**
     * Alignment, primary axis
     */
    justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;
    /**
     * Wrap (default is `no-wrap`)
     */
    wrap?: boolean;
}
/**
 * Flexbox wrapper.
 */
declare const Flex: React__default.ForwardRefExoticComponent<FlexProps & React__default.RefAttributes<HTMLDivElement>>;

export { FlexProps as F, Flex as a };
