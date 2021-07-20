import React, { HTMLAttributes } from 'react';
import * as BOLD from '../icons/bold';
import * as MINI from '../icons/mini';
import { SizeType } from '../utils/types';
declare type BoldKey = keyof typeof BOLD;
declare type MiniKey = keyof typeof MINI;
export declare type IconNameType = BoldKey | MiniKey;
export interface IconProps extends HTMLAttributes<HTMLElement> {
    /**
     * Name
     */
    name: IconNameType;
    /**
     * Size.
     */
    size?: SizeType;
}
/**
 * Icon wrapper.
 */
export declare const Icon: React.VFC<IconProps>;
export {};
//# sourceMappingURL=Icon.d.ts.map