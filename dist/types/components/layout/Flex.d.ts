import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import { AlignmentFlexboxType, AlignmentPrimaryType, AlignmentSecondaryType, AlignmentTertiaryType } from '../../utils/types';
export interface FlexProps extends HTMLAttributes<HTMLElement> {
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
export declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Flex.d.ts.map