import React, { HTMLAttributes } from 'react';
import { AlignmentPrimaryType, AlignmentSecondaryType } from '../../utils/types';
export interface GridProps extends HTMLAttributes<HTMLElement> {
    align?: AlignmentPrimaryType;
    block?: boolean;
    columns?: string;
    gap?: string;
    justify?: AlignmentSecondaryType;
    max?: string;
    min?: string;
    sizing?: 'auto-fill' | 'auto-fit';
}
/**
 * Grid wrapper
 */
export declare const Grid: React.FC<GridProps>;
//# sourceMappingURL=Grid.d.ts.map