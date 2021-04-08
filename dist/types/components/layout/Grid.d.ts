import React, { HTMLAttributes } from 'react';
import { Alignment } from '../../utils/types';
export interface GridProps extends HTMLAttributes<HTMLElement> {
    align?: Alignment;
    block?: boolean;
    columns?: string;
    gap?: string;
    justify?: Alignment;
    max?: string;
    min?: string;
    sizing?: 'auto-fill' | 'auto-fit';
}
/**
 * Grid wrapper
 */
export declare const Grid: React.FC<GridProps>;
//# sourceMappingURL=Grid.d.ts.map