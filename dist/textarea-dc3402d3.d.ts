import * as React from 'react';
import { TextareaHTMLAttributes, ElementType } from 'react';
import { I as InternalHTMLAttributes } from './index-2e22dac1.js';

interface TextareaProps extends InternalHTMLAttributes, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Expandable
     */
    expandable?: boolean;
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
 */
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

export { Textarea as T, TextareaProps as a };
