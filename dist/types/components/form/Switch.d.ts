import React, { ElementType, InputHTMLAttributes } from 'react';
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
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
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map