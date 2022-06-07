import React__default, { HTMLAttributes, ReactElement } from 'react';
import { T as ThemeType } from './index-2e22dac1';

declare type StatusThemeType = Exclude<ThemeType, 'dark'>;
interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
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
declare const Status: React__default.FC<StatusProps>;

export { StatusThemeType as S, Status as a, StatusProps as b };
