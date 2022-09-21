import React__default, { InputHTMLAttributes, ElementType } from 'react';
import { I as InternalHTMLAttributes } from './index-2e22dac1.js';

interface SwitchProps extends InternalHTMLAttributes, InputHTMLAttributes<HTMLInputElement> {
    /**
     * Appearance (`checkbox` as default)
     * No matter on type, appearance can be chosen manually
     */
    appearance?: 'checkbox' | 'radio' | 'toggle';
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Label
     */
    label?: string;
    /**
     * Synthetic behaviour to disable `:focus` styles.
     */
    synthetic?: boolean;
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
    /**
     * Type (`checkbox` as default)
     */
    type?: 'checkbox' | 'radio';
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Checkbox, Radio button or Toggle switch
 */
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

export { Switch as S, SwitchProps as a };
