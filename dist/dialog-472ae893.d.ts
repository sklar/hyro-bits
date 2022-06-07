import React__default, { HTMLAttributes, ReactElement } from 'react';
import { A as AlignmentPrimaryType, a as AlignmentTertiaryType, b as AlignmentFlexboxType } from './index-2e22dac1';

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Active
     */
    active?: boolean;
    /**
     * Backdrop
     */
    backdrop?: boolean;
    /**
     * Z-index
     */
    index?: number;
    /**
     * Rejectable
     */
    rejectable?: boolean;
    /**
     * Size
     */
    size?: string;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * Header
     */
    header?: ReactElement;
    /**
     * Title
     */
    title?: string;
    /**
     * Body bleed (handling `overflow`)
     */
    bleed?: boolean;
    /**
     * Footer
     */
    footer?: ReactElement;
    /**
     * Footer alignment, primary axis
     */
    justify?: AlignmentPrimaryType | AlignmentTertiaryType | AlignmentFlexboxType;
    /**
     * Event: Close
     */
    onClose: () => void;
}
/**
 * Dialog
 */
declare const Dialog: React__default.FC<DialogProps>;

export { Dialog as D, DialogProps as a };
