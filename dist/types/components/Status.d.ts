import React, { HTMLAttributes, ReactElement } from 'react';
import { ThemeType } from '../utils/types';
export declare type StatusThemeType = Exclude<ThemeType, 'dark'>;
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
    theme?: StatusThemeType;
}
/**
 * Status
 */
export declare const Status: React.FC<StatusProps>;
//# sourceMappingURL=Status.d.ts.map