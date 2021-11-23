import React, { ElementType, InputHTMLAttributes, ReactElement } from 'react';
import { InternalHTMLAttributes, SizeType } from '../../utils';
export interface InputProps extends InternalHTMLAttributes, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map