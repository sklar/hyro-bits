import React, { HTMLAttributes } from 'react';
import { AlignmentPrimaryType, AlignmentSecondaryType, AlignmentTertiaryType } from '../../utils/types';
export interface FlexProps extends HTMLAttributes<HTMLElement> {
    /**
     * Alignment, secondary axis
     */
    align?: AlignmentSecondaryType;
    /**
     * Block or inline
     */
    block?: boolean;
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
    justify?: AlignmentPrimaryType | AlignmentTertiaryType;
    /**
     * Wrap (default is `no-wrap`)
     */
    wrap?: boolean;
}
/**
 * Flexbox wrapper.
 */
export declare const Flex: React.FC<FlexProps>;
//# sourceMappingURL=Flex.d.ts.map