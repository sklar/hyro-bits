import React__default, { HTMLAttributes } from 'react';

interface ClickOutsideGuardProps extends HTMLAttributes<HTMLDivElement> {
    ignore?: Element;
    listen?: boolean;
    onClickOutside: () => void;
}
/**
 * Click outside guard
 * @see https://css-tricks.com/click-outside-detector/
 */
declare const ClickOutsideGuard: React__default.ForwardRefExoticComponent<ClickOutsideGuardProps & React__default.RefAttributes<HTMLDivElement>>;

export { ClickOutsideGuard as C, ClickOutsideGuardProps as a };
