import React, { HTMLAttributes } from 'react';
import { Size } from '../utils/types';
export interface IconProps extends HTMLAttributes<HTMLElement> {
    /**
     * Name
     */
    name: string;
    /**
     * Size.
     */
    size?: Size;
}
/**
 * Icon wrapper.
 */
export declare const Icon: React.VFC<IconProps>;
//# sourceMappingURL=Icon.d.ts.map