import React__default, { HTMLAttributes } from 'react';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Active
     */
    active?: boolean;
    /**
     * Z-index
     */
    index?: number;
    /**
     * Event: Close
     */
    onClick?: () => void;
}
/**
 * Overlay
 */
declare const Overlay: React__default.VFC<OverlayProps>;

export { Overlay as O, OverlayProps as a };
