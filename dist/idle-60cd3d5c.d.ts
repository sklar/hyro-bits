import React__default, { HTMLAttributes } from 'react';

interface IdleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Color
     */
    color?: string;
    /**
     * Delay
     */
    delay?: number;
    /**
     * Duration
     */
    duration?: number;
    /**
     * Gap
     */
    gap?: string;
    /**
     * Range aka amplitude
     */
    range?: string;
    /**
     * Size
     */
    size?: string;
}
/**
 * Idle indicator.
 */
declare const Idle: React__default.ForwardRefExoticComponent<IdleProps & React__default.RefAttributes<HTMLDivElement>>;

export { Idle as I, IdleProps as a };
