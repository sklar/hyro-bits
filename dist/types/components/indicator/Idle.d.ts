import React, { HTMLAttributes } from 'react';
export interface IdleProps extends HTMLAttributes<HTMLElement> {
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
export declare const Idle: React.VFC<IdleProps>;
//# sourceMappingURL=Idle.d.ts.map