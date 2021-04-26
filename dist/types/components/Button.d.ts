import React, { ReactElement, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { PartialBy, ThemeType, VariantType } from '../utils/types';
export interface ButtonProps extends PartialBy<LinkProps, 'to'> {
    /**
     * Children
     */
    children?: ReactNode;
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
     * Synthetic behaviour to prevent `:active` and `:focus` styles.
     */
    synthetic?: boolean;
    /**
     * Theme
     */
    theme?: Exclude<ThemeType, 'notice'>;
    /**
     * Toggle
     */
    toggle?: boolean;
    /**
     * Variant
     */
    variant?: VariantType;
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map