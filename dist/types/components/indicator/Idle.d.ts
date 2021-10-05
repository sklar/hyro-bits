import React, { HTMLAttributes } from 'react';
export interface IdleProps extends HTMLAttributes<HTMLDivElement> {
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
export declare const Idle: React.ForwardRefExoticComponent<IdleProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Idle.d.ts.map