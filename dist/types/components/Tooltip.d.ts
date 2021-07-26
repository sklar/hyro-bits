import React, { ReactElement } from 'react';
export interface TooltipProps {
    /**
     * Children
     */
    children?: ReactElement;
    /**
     * Delay, onmouseenter
     */
    delayEnter?: number;
    /**
     * Delay, onmouseleave
     */
    delayLeave?: number;
    /**
     * Label
     */
    label?: string;
    /**
     * Placement
     */
    placement?: 'bottom' | 'left' | 'right' | 'top';
    /**
     * Shortcut
     */
    shortcut?: string;
    /**
     * Size aka max. width
     */
    size?: string;
    /**
     * State: Disabled
     */
    disabled?: boolean;
}
/**
 * Tooltip wrapper.
 * TOTO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map