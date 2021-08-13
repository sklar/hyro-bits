import React, { HTMLAttributes, ReactElement } from 'react';
import { AlignmentFlexboxType, AlignmentPrimaryType, AlignmentTertiaryType } from '../utils/types';
export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
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
export declare const Dialog: React.FC<DialogProps>;
//# sourceMappingURL=Dialog.d.ts.map