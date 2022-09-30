import React__default, { HTMLAttributes } from 'react';
import { S as SizeType } from './index-2e22dac1.js';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Color
     */
    color?: string;
    /**
     * Duration
     */
    duration?: number;
    /**
     * Size
     */
    size?: SizeType;
}
/**
 * Spinner indicator.
 */
declare const Spinner: React__default.ForwardRefExoticComponent<SpinnerProps & React__default.RefAttributes<HTMLDivElement>>;

export { Spinner as S, SpinnerProps as a };
