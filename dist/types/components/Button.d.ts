import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { Theme, Variant } from '../utils/types';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Children
     */
    children?: ReactNode;
    /**
     * Href
     */
    href?: string;
    /**
     * Label
     */
    text?: string;
    /**
     * Type
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * Icon
     */
    icon?: ReactElement | ReactElement[];
    /**
     * Icon placement.
     */
    placement?: 'left' | 'right';
    /**
     * Round
     */
    round?: boolean;
    /**
     * Theme
     */
    theme?: Exclude<Theme, 'notice'>;
    /**
     * Toggle
     */
    toggle?: boolean;
    /**
     * Variant
     */
    variant?: Variant;
    /**
     * State: Active
     */
    active?: boolean;
    /**
     * State: Busy
     */
    busy?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
    /**
     * Event: Click
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map