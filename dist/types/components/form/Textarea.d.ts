import React, { ElementType, TextareaHTMLAttributes } from 'react';
import { InternalHTMLAttributes } from '../../utils';
export interface TextareaProps extends InternalHTMLAttributes, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Resize
     */
    resize?: 'both' | 'horizontal' | 'vertical' | 'none';
    /**
     * Theme
     */
    theme?: 'light' | 'dark';
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
     * State: Invalid
     */
    invalid?: boolean;
    /**
     * State: Read-only
     */
    readonly?: boolean;
}
/**
 * Textarea
 * TODO: Implement auto-grow feature
 */
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Textarea.d.ts.map