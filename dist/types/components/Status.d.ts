import React, { HTMLAttributes, ReactElement } from 'react';
import { Theme } from '../utils/types';
export interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Icon
     */
    icon?: ReactElement;
    /**
     * Label
     */
    text?: string;
    /**
     * Theme
     */
    theme?: Exclude<Theme, 'dark'>;
}
/**
 * Status
 */
export declare const Status: React.FC<StatusProps>;
//# sourceMappingURL=Status.d.ts.map