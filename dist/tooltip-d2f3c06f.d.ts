import React__default, { ReactElement } from 'react';

declare const CLASSNAME: "t00lt1p";
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
     * Trigger
     */
    trigger?: string | string[];
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
     * State: Active
     */
    active?: boolean;
    /**
     * State: Disabled
     */
    disabled?: boolean;
    /**
     * State: Visible
     */
    visible?: boolean;
}
/**
 * Tooltip wrapper.
 * TODO: Replace `rc-tooltip` with some lightweight alternative, e.g. popper, tippy or tether.
 */
declare const Tooltip: React__default.FC<TooltipProps>;

export { CLASSNAME as C, Tooltip as T, TooltipProps as a };
