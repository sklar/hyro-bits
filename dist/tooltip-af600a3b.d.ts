import React__default, { ReactElement } from 'react';

interface TooltipProps {
    /**
     * Children
     */
    children?: ReactElement;
    /**
     * Content
     */
    content?: ReactElement;
    /**
     * Label
     */
    label?: string;
    /**
     * Shortcut
     */
    shortcut?: string;
    /**
     * Delay, onmouseenter
     */
    delayEnter?: number;
    /**
     * Delay, onmouseleave
     */
    delayLeave?: number;
    /**
     * Placement
     */
    placement?: 'bottom' | 'left' | 'right' | 'top';
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
declare const Tooltip: React__default.FC<TooltipProps>;

export { Tooltip as T, TooltipProps as a };