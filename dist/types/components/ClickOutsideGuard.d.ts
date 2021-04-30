import React, { HTMLAttributes } from 'react';
export interface ClickOutsideGuardProps extends HTMLAttributes<HTMLDivElement> {
    ignore?: Element;
    listen?: boolean;
    onClickOutside: () => void;
}
/**
 * Click outside guard
 * @see https://css-tricks.com/click-outside-detector/
 */
export declare const ClickOutsideGuard: React.ForwardRefExoticComponent<ClickOutsideGuardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ClickOutsideGuard.d.ts.map