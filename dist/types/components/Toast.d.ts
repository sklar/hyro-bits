import React, { HTMLAttributes } from 'react';
import { ThemeType } from '../utils/types';
export declare type ToastTheme = Exclude<ThemeType, 'dark'>;
export declare type ToastVariant = 'snackbar' | 'toast';
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Text
     */
    text?: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Icon
     */
    icon?: boolean;
    /**
     * Close button
     */
    button?: boolean;
    /**
     * Closeable on click
     */
    closeable?: boolean;
    /**
     * Variant
     */
    variant?: ToastVariant;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: ToastTheme;
    /**
     * Event: Click
     */
    onClick?: () => void;
}
/**
 * Toast
 */
export declare const Toast: React.FC<ToastProps>;
//# sourceMappingURL=Toast.d.ts.map