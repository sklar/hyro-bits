import React__default, { HTMLAttributes } from 'react';
import { T as ThemeType } from './index-2e22dac1';

declare type ToastTheme = Exclude<ThemeType, 'dark'>;
declare type ToastVariant = 'snackbar' | 'toast';
interface ToastProps extends HTMLAttributes<HTMLDivElement> {
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
declare const Toast: React__default.FC<ToastProps>;

export { Toast as T, ToastProps as a, ToastTheme as b, ToastVariant as c };
