import React__default, { InputHTMLAttributes, ElementType, ReactElement } from 'react';
import { I as InternalHTMLAttributes, S as SizeType } from './index-2e22dac1.js';

interface InputProps extends InternalHTMLAttributes, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Render as HTML element
     */
    as?: ElementType<any>;
    /**
     * Affix (icons, labels, units)
     */
    affix?: string | Array<string | undefined> | ReactElement | ReactElement[];
    /**
     * Leader placeholder (buttons, icons)
     */
    leader?: ReactElement;
    /**
     * Trailer placeholder (buttons, icons)
     */
    trailer?: ReactElement;
    /**
     * Length (aka `width`)
     */
    length?: string;
    /**
     * Size
     */
    size?: Exclude<SizeType, 'xs' | 'xl'>;
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
 * Input
 */
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

export { Input as I, InputProps as a };
