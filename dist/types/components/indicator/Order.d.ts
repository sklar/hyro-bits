import React, { HTMLAttributes } from 'react';
import { DirectionType, SizeType } from '../../utils/types';
export interface OrderProps extends HTMLAttributes<HTMLElement> {
    /**
     * Direction
     */
    direction?: DirectionType;
    /**
     * Size
     */
    size?: SizeType;
}
/**
 * Order indicator.
 */
export declare const Order: React.VFC<OrderProps>;
//# sourceMappingURL=Order.d.ts.map